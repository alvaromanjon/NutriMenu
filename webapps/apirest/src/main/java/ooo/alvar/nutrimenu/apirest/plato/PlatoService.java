package ooo.alvar.nutrimenu.apirest.plato;

import ooo.alvar.nutrimenu.apirest.excepciones.EntityAlreadyExistsException;
import ooo.alvar.nutrimenu.apirest.excepciones.EntityDoesntExistsException;
import ooo.alvar.nutrimenu.apirest.plato.tipoPlato.tipoPlato;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PlatoService {

  @Autowired
  private PlatoRepository platoRepository;

  public Plato getPlato(String id) {
    Plato platoDevuelto = platoRepository.findById(id).orElse(null);
    if (platoDevuelto == null) {
      throw new EntityDoesntExistsException("No existe un plato con id " + id);
    }
    return platoDevuelto;
  }

  public List<Plato> getAllPlatosByEmpresa(String id) {
    List<Plato> platos = new ArrayList<>();
    platoRepository.findByEmpresaId(id)
      .forEach(platos::add);

    return platos;
  }

  public List<Plato> getAllPlatosByTipoPlato(String idEmpresa, tipoPlato plato) {
    return platoRepository.findByEmpresaIdAndTipoPlato(idEmpresa, plato);
  }

  public Plato addPlato(Plato plato) {
    plato.setId(plato.getEmpresa().getId() + "-" + plato.getNombre().toLowerCase().replace(' ', '_'));
    plato.setFechaCreacion(java.time.Instant.now());
    plato.setFechaModificacion(java.time.Instant.now());

    if (platoRepository.existsById(plato.getId())) {
      throw new EntityAlreadyExistsException("Ya existe un plato llamado " + plato.getNombre() + " en esta empresa");
    }

    return platoRepository.save(plato);
  }

  public Plato updatePlato(Plato plato, String id) {
    if (!platoRepository.existsById(id)) {
      throw new EntityDoesntExistsException("No existe un plato con id " + id);
    }

    plato.setId(id);
    Plato platoOriginal = platoRepository.findById(id).orElse(null);
    plato.setFechaCreacion(platoOriginal.getFechaCreacion());
    plato.setFechaModificacion(java.time.Instant.now());
    return platoRepository.save(plato);
  }

  public void deletePlato(String id) {
    if (!platoRepository.existsById(id)) {
      throw new EntityDoesntExistsException("No existe un plato con id " + id);
    }

    platoRepository.deleteById(id);
  }
}

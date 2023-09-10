package ooo.alvar.nutrimenu.apirest.plato;

import jakarta.persistence.EntityExistsException;
import ooo.alvar.nutrimenu.apirest.excepciones.EntityAlreadyExistsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PlatoService {

  @Autowired
  private PlatoRepository platoRepository;

  public Plato getPlato(String id) {
    return platoRepository.findById(id).orElse(null);
  }

  public List<Plato> getAllPlatosByEmpresa(String id) {
    List<Plato> platos = new ArrayList<>();
    platoRepository.findByEmpresaId(id)
      .forEach(platos::add);

    return platos;
  }

  public Plato addPlato(Plato plato) {
    plato.setId(plato.getEmpresa().getId() + "-" + plato.getNombre().toLowerCase().replace(' ', '_'));
    plato.setFechaCreacion(java.time.Instant.now());
    plato.setFechaModificacion(java.time.Instant.now());

    if (platoRepository.existsById(plato.getId())) {
      throw new EntityAlreadyExistsException("Ya existe un plato llamado " + plato.getNombre() + " en esta empresa.");
    }

    return platoRepository.save(plato);
  }

  public void updatePlato(Plato plato, String id) {
    plato.setId(id);
    Plato platoOriginal = platoRepository.findById(id).orElse(null);
    plato.setFechaCreacion(platoOriginal.getFechaCreacion());
    plato.setFechaModificacion(java.time.Instant.now());
    platoRepository.save(plato);
  }

  public void deletePlato(String id) {
    platoRepository.deleteById(id);
  }
}

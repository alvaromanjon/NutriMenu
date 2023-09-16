package ooo.alvar.nutrimenu.apirest.plato;

import ooo.alvar.nutrimenu.apirest.empresa.Empresa;
import ooo.alvar.nutrimenu.apirest.empresa.EmpresaRepository;
import ooo.alvar.nutrimenu.apirest.excepciones.EntityDoesntExistsException;
import ooo.alvar.nutrimenu.apirest.local.Local;
import ooo.alvar.nutrimenu.apirest.menu.Menu;
import ooo.alvar.nutrimenu.apirest.plato.tipoPlato.tipoPlato;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class PlatoService {

  @Autowired
  private PlatoRepository platoRepository;

  @Autowired
  private EmpresaRepository empresaRepository;

  public Plato getPlato(Long id) {
    Plato platoDevuelto = platoRepository.findById(id).orElse(null);
    if (platoDevuelto == null) {
      throw new EntityDoesntExistsException("No existe un plato con id " + id);
    }
    return platoDevuelto;
  }

  public List<Plato> getAllPlatosByEmpresa(Long id) {
    List<Plato> platos = new ArrayList<>();
    platos.addAll(platoRepository.findByEmpresaId(id));

    return platos;
  }

  public List<Plato> getAllPlatosByTipoPlato(Long idEmpresa, tipoPlato plato) {
    return platoRepository.findByEmpresaIdAndTipoPlato(idEmpresa, plato);
  }

  public Plato addPlato(Long idEmpresa, Plato plato) {
    Optional<Empresa> empresa = empresaRepository.findById(idEmpresa);

    if (!empresa.isPresent()) {
      throw new EntityDoesntExistsException("No existe una empresa con id " + idEmpresa);
    }

    plato.setEmpresa(empresa.get());
    plato.setFechaCreacion(java.time.Instant.now());
    plato.setFechaModificacion(java.time.Instant.now());

    return platoRepository.save(plato);
  }

  public Plato updatePlato(Plato plato, Long id) {
    Optional<Plato> platoAntiguo = platoRepository.findById(id);

    if (!platoAntiguo.isPresent()) {
      throw new EntityDoesntExistsException("No existe un plato con id " + id);
    }

    Plato nuevoPlato = platoAntiguo.get();
    nuevoPlato.setNombre(plato.getNombre());
    nuevoPlato.setDescripcion(plato.getDescripcion());
    nuevoPlato.setTipoPlato(plato.getTipoPlato());
    nuevoPlato.setFechaModificacion(java.time.Instant.now());

    return platoRepository.save(nuevoPlato);
  }

  public void deletePlato(Long id) {
    Plato platoActual = platoRepository.findById(id).orElse(null);
    if (platoActual == null) {
      throw new EntityDoesntExistsException("No existe un plato con id " + id);
    }

    for (Menu menu : platoActual.getMenus()) {
      menu.getPlatos().remove(platoActual);
    }

    platoActual.getMenus().clear();
    platoRepository.deleteById(id);
  }
}

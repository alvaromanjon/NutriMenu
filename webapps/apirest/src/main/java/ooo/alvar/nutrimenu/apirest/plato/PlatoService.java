package ooo.alvar.nutrimenu.apirest.plato;

import jakarta.transaction.Transactional;
import ooo.alvar.nutrimenu.apirest.alimento.Alimento;
import ooo.alvar.nutrimenu.apirest.alimento.AlimentoRepository;
import ooo.alvar.nutrimenu.apirest.empresa.Empresa;
import ooo.alvar.nutrimenu.apirest.empresa.EmpresaRepository;
import ooo.alvar.nutrimenu.apirest.excepciones.EntityDoesntExistsException;
import ooo.alvar.nutrimenu.apirest.menu.Menu;
import ooo.alvar.nutrimenu.apirest.plato.tipoPlato.tipoPlato;
import ooo.alvar.nutrimenu.apirest.relaciones.PlatoAlimento;
import ooo.alvar.nutrimenu.apirest.relaciones.PlatoAlimentoRepository;
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

  @Autowired
  private AlimentoRepository alimentoRepository;

  @Autowired
  private PlatoAlimentoRepository platoAlimentoRepository;

  public Plato getPlato(Long id) {
    Plato platoDevuelto = platoRepository.findById(id).orElse(null);
    if (platoDevuelto == null) {
      throw new EntityDoesntExistsException("No existe un plato con id " + id);
    }
    return platoDevuelto;
  }

  public List<Plato> getAllPlatosByEmpresa(Long id) {
    List<Plato> platos = new ArrayList<>();
    platos.addAll(platoRepository.findAllByEmpresaId(id));

    return platos;
  }

  public List<Plato> getAllPlatosByTipoPlato(Long idEmpresa, tipoPlato plato) {
    return platoRepository.findAllByEmpresaIdAndTipoPlato(idEmpresa, plato);
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

  @Transactional
  public PlatoAlimento addAlimentoToPlato(Long idPlato, Long idAlimento) {
    Optional<Plato> platoAntiguo = platoRepository.findById(idPlato);

    if (!platoAntiguo.isPresent()) {
      throw new EntityDoesntExistsException("No existe un plato con id " + idPlato);
    }

    Optional<Alimento> alimento = alimentoRepository.findById(idAlimento);

    if (!alimento.isPresent()) {
      throw new EntityDoesntExistsException("No existe un alimento con id " + idAlimento);
    }
    platoAntiguo.get().setFechaModificacion(java.time.Instant.now());

    PlatoAlimento platoAlimento = new PlatoAlimento();
    platoAlimento.setAlimento(alimento.get());
    platoAlimento.setPlato(platoAntiguo.get());

    return platoAlimentoRepository.save(platoAlimento);
  }

  public PlatoAlimento actualizaCantidad(Long idPlato, Long idAlimento, double cantidad) {
    PlatoAlimento relacion = platoAlimentoRepository.findByPlatoIdAndAlimentoId(idPlato, idAlimento);

    if (relacion == null) {
      throw new EntityDoesntExistsException("No existe una relación entre el plato " + idPlato + " y el alimento " + idAlimento);
    }

    relacion.setGramosEscogidos(cantidad);

    return platoAlimentoRepository.save(relacion);
  }

  public Plato updatePlato(Plato plato, Long id) {
    Optional<Plato> platoAntiguo = platoRepository.findById(id);

    if (!platoAntiguo.isPresent()) {
      throw new EntityDoesntExistsException("No existe un plato con id " + id);
    }

    Plato nuevoPlato = platoAntiguo.get();
    if (plato.getNombre() != null) {
      nuevoPlato.setNombre(plato.getNombre());
    }
    if (plato.getDescripcion() != null) {
      nuevoPlato.setDescripcion(plato.getDescripcion());
    }
    if (plato.getTipoPlato() != null) {
      nuevoPlato.setTipoPlato(plato.getTipoPlato());
    }
    nuevoPlato.setFechaModificacion(java.time.Instant.now());

    return platoRepository.save(nuevoPlato);
  }

  @Transactional
  public void deletePlato(Long id) {
    Plato platoActual = platoRepository.findById(id).orElse(null);
    if (platoActual == null) {
      throw new EntityDoesntExistsException("No existe un plato con id " + id);
    }

    for (Menu menu : platoActual.getMenus()) {
      menu.getPlatos().remove(platoActual);
    }

    platoActual.getMenus().clear();

    platoAlimentoRepository.deleteByPlatoId(id);
    platoRepository.deleteById(id);
  }
}

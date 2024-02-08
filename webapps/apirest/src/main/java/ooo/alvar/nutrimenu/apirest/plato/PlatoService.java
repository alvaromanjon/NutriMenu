package ooo.alvar.nutrimenu.apirest.plato;

import jakarta.transaction.Transactional;
import ooo.alvar.nutrimenu.apirest.alimento.Alimento;
import ooo.alvar.nutrimenu.apirest.alimento.AlimentoRepository;
import ooo.alvar.nutrimenu.apirest.alimento.componentesNutricionales.ComponentesNutricionales;
import ooo.alvar.nutrimenu.apirest.alimento.componentesNutricionales.minerales.Minerales;
import ooo.alvar.nutrimenu.apirest.alimento.componentesNutricionales.vitaminas.Vitaminas;
import ooo.alvar.nutrimenu.apirest.empresa.EmpresaRepository;
import ooo.alvar.nutrimenu.apirest.excepciones.EntityDoesntExistsException;
import ooo.alvar.nutrimenu.apirest.empresa.Empresa;
import ooo.alvar.nutrimenu.apirest.plato.tipoPlato.tipoPlato;
import ooo.alvar.nutrimenu.apirest.relaciones.PlatoAlimento.PlatoAlimento;
import ooo.alvar.nutrimenu.apirest.relaciones.PlatoAlimento.PlatoAlimentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
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

  public PlatoAlimento addAlimentoAndCantidadToPlato(Long idPlato, Long idAlimento, double cantidad) {
    addAlimentoToPlato(idPlato, idAlimento);
    return actualizaCantidad(idPlato, idAlimento, cantidad);
  }

  public PlatoAlimento actualizaCantidad(Long idPlato, Long idAlimento, double cantidad) {
    PlatoAlimento relacion = platoAlimentoRepository.findByPlatoIdAndAlimentoId(idPlato, idAlimento);

    if (relacion == null) {
      throw new EntityDoesntExistsException("No existe una relación entre el plato " + idPlato + " y el alimento " + idAlimento);
    }

    Optional<Alimento> alimento = alimentoRepository.findById(idAlimento);

    if (!alimento.isPresent()) {
      throw new EntityDoesntExistsException("No existe un alimento con id " + idAlimento);
    }

    ComponentesNutricionales componentesOriginales = alimento.get().getComponentesNutricionales();
    ComponentesNutricionales componentesAdaptados = new ComponentesNutricionales(componentesOriginales);
    componentesAdaptados.setVitaminas(new Vitaminas(componentesOriginales.getVitaminas()));
    componentesAdaptados.setMinerales(new Minerales(componentesOriginales.getMinerales()));

    double cantidadOriginal = alimento.get().getGramosPorRacion();
    BigDecimal multiplicador = BigDecimal.valueOf(cantidad / cantidadOriginal);

    componentesAdaptados.setCalorias(componentesOriginales.getCalorias().multiply(multiplicador));
    componentesAdaptados.setGrasas(componentesOriginales.getGrasas().multiply(multiplicador));
    componentesAdaptados.setGrasasSaturadas(componentesOriginales.getGrasasSaturadas().multiply(multiplicador));
    componentesAdaptados.setHidratosCarbono(componentesOriginales.getHidratosCarbono().multiply(multiplicador));
    componentesAdaptados.setAzucares(componentesOriginales.getAzucares().multiply(multiplicador));
    componentesAdaptados.setFibra(componentesOriginales.getFibra().multiply(multiplicador));
    componentesAdaptados.setProteinas(componentesOriginales.getProteinas().multiply(multiplicador));
    componentesAdaptados.setSal(componentesOriginales.getSal().multiply(multiplicador));

    Vitaminas vitaminasCambiadas = componentesAdaptados.getVitaminas();
    vitaminasCambiadas.setVitaminaA(vitaminasCambiadas.getVitaminaA().multiply(multiplicador));
    vitaminasCambiadas.setVitaminaD(vitaminasCambiadas.getVitaminaD().multiply(multiplicador));
    vitaminasCambiadas.setVitaminaE(vitaminasCambiadas.getVitaminaE().multiply(multiplicador));
    vitaminasCambiadas.setVitaminaB9(vitaminasCambiadas.getVitaminaB9().multiply(multiplicador));
    vitaminasCambiadas.setVitaminaB3(vitaminasCambiadas.getVitaminaB3().multiply(multiplicador));
    vitaminasCambiadas.setVitaminaB2(vitaminasCambiadas.getVitaminaB2().multiply(multiplicador));
    vitaminasCambiadas.setVitaminaB1(vitaminasCambiadas.getVitaminaB1().multiply(multiplicador));
    vitaminasCambiadas.setVitaminaB12(vitaminasCambiadas.getVitaminaB12().multiply(multiplicador));
    vitaminasCambiadas.setVitaminaB6(vitaminasCambiadas.getVitaminaB6().multiply(multiplicador));
    vitaminasCambiadas.setVitaminaC(vitaminasCambiadas.getVitaminaC().multiply(multiplicador));
    componentesAdaptados.setVitaminas(vitaminasCambiadas);

    Minerales mineralesCambiados = componentesAdaptados.getMinerales();
    mineralesCambiados.setCalcio(mineralesCambiados.getCalcio().multiply(multiplicador));
    mineralesCambiados.setHierro(mineralesCambiados.getHierro().multiply(multiplicador));
    mineralesCambiados.setMagnesio(mineralesCambiados.getMagnesio().multiply(multiplicador));
    mineralesCambiados.setMagnesio(mineralesCambiados.getMagnesio().multiply(multiplicador));
    mineralesCambiados.setSodio(mineralesCambiados.getSodio().multiply(multiplicador));
    mineralesCambiados.setFosforo(mineralesCambiados.getFosforo().multiply(multiplicador));
    mineralesCambiados.setSelenio(mineralesCambiados.getSelenio().multiply(multiplicador));
    mineralesCambiados.setZinc(mineralesCambiados.getZinc().multiply(multiplicador));
    componentesAdaptados.setMinerales(mineralesCambiados);

    relacion.setGramosEscogidos(cantidad);
    relacion.setComponentesNutricionales(componentesAdaptados);

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

    platoAlimentoRepository.deleteByPlatoId(id);
    platoRepository.deleteById(id);
  }
}

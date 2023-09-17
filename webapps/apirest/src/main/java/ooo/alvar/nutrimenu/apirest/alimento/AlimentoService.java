package ooo.alvar.nutrimenu.apirest.alimento;

import ooo.alvar.nutrimenu.apirest.alimento.componentesNutricionales.ComponentesNutricionalesRepository;
import ooo.alvar.nutrimenu.apirest.alimento.grupoAlimento.grupoAlimento;
import ooo.alvar.nutrimenu.apirest.empresa.Empresa;
import ooo.alvar.nutrimenu.apirest.empresa.EmpresaRepository;
import ooo.alvar.nutrimenu.apirest.alimento.componentesNutricionales.ComponentesNutricionales;
import ooo.alvar.nutrimenu.apirest.excepciones.EntityDoesntExistsException;
import ooo.alvar.nutrimenu.apirest.relaciones.PlatoAlimentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class AlimentoService {

  @Autowired
  private AlimentoRepository alimentoRepository;

  @Autowired
  private EmpresaRepository empresaRepository;

  @Autowired
  private ComponentesNutricionalesRepository componentesNutricionalesRepository;

  @Autowired
  private PlatoAlimentoRepository platoAlimentoRepository;

  public Alimento getAlimento(Long id) {
    Alimento alimentoDevuelto = alimentoRepository.findById(id).orElse(null);
    if (alimentoDevuelto == null) {
      throw new EntityDoesntExistsException("No existe un alimento con id " + id);
    }
    return alimentoDevuelto;
  }

  public List<Alimento> getAllAlimentosByEmpresa(Long id) {
    List<Alimento> alimentos = new ArrayList<>();
    alimentos.addAll(alimentoRepository.findAllByEmpresaId(id));

    return alimentos;
  }

  public List<Alimento> getAllAlimentosByNombre(String nombre) {
    List<Alimento> alimentos = new ArrayList<>();
    alimentos.addAll(alimentoRepository.findAllByNombreContainsIgnoreCase(nombre));

    return alimentos;
  }

  public List<Alimento> getAllAlimentosByGrupoAlimento(grupoAlimento grupoAlimento) {
    List<Alimento> alimentos = new ArrayList<>();
    alimentos.addAll(alimentoRepository.findAllByGrupoAlimento(grupoAlimento));

    return alimentos;
  }

  public Alimento addAlimento(Long idEmpresa, Alimento alimento) {
    Optional<Empresa> empresa = empresaRepository.findById(idEmpresa);

    if (!empresa.isPresent()) {
      throw new EntityDoesntExistsException("No existe una empresa con id " + idEmpresa);
    }

    alimento.setEmpresa(empresa.get());

    return alimentoRepository.save(alimento);
  }

  public Alimento addComponenteNutricionalToAlimento(Long idAlimento, Long idComponente) {
    Optional<Alimento> alimentoAntiguo = alimentoRepository.findById(idAlimento);

    if (!alimentoAntiguo.isPresent()) {
      throw new EntityDoesntExistsException("No existe un alimento con id " + idAlimento);
    }

    Optional<ComponentesNutricionales> componente = componentesNutricionalesRepository.findById(idComponente);

    if (!componente.isPresent()) {
      throw new EntityDoesntExistsException("No existe un componente nutricional con id " + idComponente);
    }

    //ComponentesNutricionales componenteModificable = new ComponentesNutricionales(componente.get());
    //componenteModificable.setVitaminas(new Vitaminas(componente.get().getVitaminas()));
    //componenteModificable.setMinerales(new Minerales(componente.get().getMinerales()));

    alimentoAntiguo.get().setComponentesNutricionales(componente.get());
    //alimentoAntiguo.get().setComponentesCambiados(componenteModificable);

    return alimentoRepository.save(alimentoAntiguo.get());
  }

/*  public Alimento updateCantidad(double cantidad, Long idAlimento) {
    Optional<Alimento> alimentoAntiguo = alimentoRepository.findById(idAlimento);

    if (!alimentoAntiguo.isPresent()) {
      throw new EntityDoesntExistsException("No existe un alimento con id " + idAlimento);
    }

    alimentoAntiguo.get().setGramosEscogidos(cantidad);

    ComponentesNutricionales componentesOriginales = alimentoAntiguo.get().getComponentesNutricionales();
    ComponentesNutricionales componentesCambiados = alimentoAntiguo.get().getComponentesCambiados();

    if (componentesOriginales == null) {
      throw new EntityDoesntExistsException("No existe un componente nutricional con id " + idAlimento);
    }

    if (componentesOriginales == null) {
      throw new EntityDoesntExistsException("No existe un componente nutricional con id " + idAlimento);
    }

    double cantidadOriginal = alimentoAntiguo.get().getGramosPorRacion();
    BigDecimal multiplicador = BigDecimal.valueOf(cantidad / cantidadOriginal);

    componentesCambiados.setCalorias(componentesOriginales.getCalorias().multiply(multiplicador));
    componentesCambiados.setGrasas(componentesOriginales.getGrasas().multiply(multiplicador));
    componentesCambiados.setGrasasSaturadas(componentesOriginales.getGrasasSaturadas().multiply(multiplicador));
    componentesCambiados.setHidratosCarbono(componentesOriginales.getHidratosCarbono().multiply(multiplicador));
    componentesCambiados.setAzucares(componentesOriginales.getAzucares().multiply(multiplicador));
    componentesCambiados.setFibra(componentesOriginales.getFibra().multiply(multiplicador));
    componentesCambiados.setProteinas(componentesOriginales.getProteinas().multiply(multiplicador));
    componentesCambiados.setSal(componentesOriginales.getSal().multiply(multiplicador));

    Vitaminas vitaminasCambiadas = componentesCambiados.getVitaminas();
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
    componentesCambiados.setVitaminas(vitaminasCambiadas);

    Minerales mineralesCambiados = componentesCambiados.getMinerales();
    mineralesCambiados.setCalcio(mineralesCambiados.getCalcio().multiply(multiplicador));
    mineralesCambiados.setHierro(mineralesCambiados.getHierro().multiply(multiplicador));
    mineralesCambiados.setMagnesio(mineralesCambiados.getMagnesio().multiply(multiplicador));
    mineralesCambiados.setMagnesio(mineralesCambiados.getMagnesio().multiply(multiplicador));
    mineralesCambiados.setSodio(mineralesCambiados.getSodio().multiply(multiplicador));
    mineralesCambiados.setFosforo(mineralesCambiados.getFosforo().multiply(multiplicador));
    mineralesCambiados.setSelenio(mineralesCambiados.getSelenio().multiply(multiplicador));
    mineralesCambiados.setZinc(mineralesCambiados.getZinc().multiply(multiplicador));
    componentesCambiados.setMinerales(mineralesCambiados);

    alimentoAntiguo.get().setComponentesCambiados(componentesCambiados);
    return alimentoRepository.save(alimentoAntiguo.get());
  }*/

  public Alimento updateAlimento(Alimento alimento, Long id) {
    Optional<Alimento> alimentoAntiguo = alimentoRepository.findById(id);

    if (!alimentoAntiguo.isPresent()) {
      throw new EntityDoesntExistsException("No existe un alimento con id " + id);
    }

    Alimento nuevoAlimento = alimentoAntiguo.get();

    if (alimento.getNombre() != null) {
      nuevoAlimento.setNombre(alimento.getNombre());
    }
    if (alimento.getGrupoAlimento() != null) {
      nuevoAlimento.setGrupoAlimento(alimento.getGrupoAlimento());
    }

    return alimentoRepository.save(nuevoAlimento);
  }

  public void deleteAlimento(Long id) {
    Alimento alimentoActual = alimentoRepository.findById(id).orElse(null);
    if (alimentoActual ==null) {
      throw new EntityDoesntExistsException("No existe un alimento con id " + id);
    }

    platoAlimentoRepository.deleteByAlimentoId(id);
    alimentoRepository.deleteById(id);
  }

}

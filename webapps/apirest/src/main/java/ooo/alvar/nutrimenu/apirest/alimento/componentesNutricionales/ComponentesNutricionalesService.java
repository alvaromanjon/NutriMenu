package ooo.alvar.nutrimenu.apirest.alimento.componentesNutricionales;

import ooo.alvar.nutrimenu.apirest.alimento.componentesNutricionales.minerales.Minerales;
import ooo.alvar.nutrimenu.apirest.alimento.componentesNutricionales.minerales.MineralesRepository;
import ooo.alvar.nutrimenu.apirest.alimento.componentesNutricionales.vitaminas.Vitaminas;
import ooo.alvar.nutrimenu.apirest.alimento.componentesNutricionales.vitaminas.VitaminasRepository;
import ooo.alvar.nutrimenu.apirest.excepciones.EntityDoesntExistsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.Optional;

@Service
public class ComponentesNutricionalesService {

  @Autowired
  private ComponentesNutricionalesRepository componentesNutricionalesRepository;

  @Autowired
  private VitaminasRepository vitaminasRepository;

  @Autowired
  private MineralesRepository mineralesRepository;

  public ComponentesNutricionales getComponentesNutricionales(Long id) {
    ComponentesNutricionales componentesDevueltos = componentesNutricionalesRepository.findById(id).orElse(null);
    if (componentesDevueltos == null) {
      throw new EntityDoesntExistsException("No existe un componente nutricional con id " + id);
    }

    return componentesDevueltos;
  }

  public ComponentesNutricionales addComponentesNutricionales(ComponentesNutricionales componentesNutricionales) {
    return componentesNutricionalesRepository.save(componentesNutricionales);
  }

  public ComponentesNutricionales addVitaminasToComponentesNutricionales(Long idComponentes, Vitaminas vitaminas) {
    Optional<ComponentesNutricionales> componentesNutricionalesAntiguos = componentesNutricionalesRepository.findById(idComponentes);

    if (!componentesNutricionalesAntiguos.isPresent()) {
      throw new EntityDoesntExistsException("No existe un componente nutricional con id " + idComponentes);
    }

    Vitaminas nuevasVitaminas = vitaminasRepository.save(vitaminas);
    componentesNutricionalesAntiguos.get().setVitaminas(nuevasVitaminas);

    return componentesNutricionalesRepository.save(componentesNutricionalesAntiguos.get());
  }

  public ComponentesNutricionales addMineralesToComponentesNutricionales(Long idComponentes, Minerales minerales) {
    Optional<ComponentesNutricionales> componentesNutricionalesAntiguos = componentesNutricionalesRepository.findById(idComponentes);

    if (!componentesNutricionalesAntiguos.isPresent()) {
      throw new EntityDoesntExistsException("No existe un componente nutricional con id " + idComponentes);
    }

    Minerales nuevosMinerales = mineralesRepository.save(minerales);
    componentesNutricionalesAntiguos.get().setMinerales(nuevosMinerales);

    return componentesNutricionalesRepository.save(componentesNutricionalesAntiguos.get());
  }

  public ComponentesNutricionales updateComponentesNutricionales(ComponentesNutricionales componentesNutricionales, Long id) {
    Optional<ComponentesNutricionales> componentesNutricionalesAntiguos = componentesNutricionalesRepository.findById(id);

    if (!componentesNutricionalesAntiguos.isPresent()) {
      throw new EntityDoesntExistsException("No existe un componente nutricional con id " + id);
    }

    ComponentesNutricionales nuevosComponentes = componentesNutricionalesAntiguos.get();

    if (componentesNutricionales.getCalorias() != BigDecimal.valueOf(0)) {
      nuevosComponentes.setCalorias(componentesNutricionales.getCalorias());
    }
    if (componentesNutricionales.getGrasas() != BigDecimal.valueOf(0)) {
      nuevosComponentes.setGrasas(componentesNutricionales.getGrasas());
    }
    if (componentesNutricionales.getGrasasSaturadas() != BigDecimal.valueOf(0)) {
      nuevosComponentes.setGrasasSaturadas(componentesNutricionales.getGrasasSaturadas());
    }
    if (componentesNutricionales.getHidratosCarbono() != BigDecimal.valueOf(0)) {
      nuevosComponentes.setHidratosCarbono(componentesNutricionales.getHidratosCarbono());
    }
    if (componentesNutricionales.getAzucares() != BigDecimal.valueOf(0)) {
      nuevosComponentes.setAzucares(componentesNutricionales.getAzucares());
    }
    if (componentesNutricionales.getFibra() != BigDecimal.valueOf(0)) {
      nuevosComponentes.setFibra(componentesNutricionales.getFibra());
    }
    if (componentesNutricionales.getProteinas() != BigDecimal.valueOf(0)) {
      nuevosComponentes.setProteinas(componentesNutricionales.getProteinas());
    }
    if (componentesNutricionales.getSal() != BigDecimal.valueOf(0)) {
      nuevosComponentes.setSal(componentesNutricionales.getSal());
    }

    return componentesNutricionalesRepository.save(nuevosComponentes);
  }

  public void deleteComponentesNutricionales(Long id) {
    componentesNutricionalesRepository.deleteById(id);
  }
}

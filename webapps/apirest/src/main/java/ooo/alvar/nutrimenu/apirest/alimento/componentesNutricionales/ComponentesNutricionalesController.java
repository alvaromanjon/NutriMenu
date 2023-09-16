package ooo.alvar.nutrimenu.apirest.alimento.componentesNutricionales;

import ooo.alvar.nutrimenu.apirest.alimento.componentesNutricionales.minerales.Minerales;
import ooo.alvar.nutrimenu.apirest.alimento.componentesNutricionales.vitaminas.Vitaminas;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class ComponentesNutricionalesController {

  @Autowired
  private ComponentesNutricionalesService componentesNutricionalesService;

  @RequestMapping("/componentesNutricionales")
  public ResponseEntity<ComponentesNutricionales> getComponentesNutricionales(@RequestParam Long id) {
    ComponentesNutricionales componentesNutricionales = componentesNutricionalesService.getComponentesNutricionales(id);
    return new ResponseEntity<ComponentesNutricionales>(componentesNutricionales, HttpStatus.OK);
  }

  @RequestMapping(method = RequestMethod.POST, value="/componentesNutricionales")
  public ResponseEntity<ComponentesNutricionales> addComponentesNutricionales(@RequestBody ComponentesNutricionales componentesNutricionales) {
    ComponentesNutricionales componentesCreados = componentesNutricionalesService.addComponentesNutricionales(componentesNutricionales);
    return new ResponseEntity<ComponentesNutricionales>(componentesCreados, HttpStatus.CREATED);
  }

  @RequestMapping(method = RequestMethod.PUT, value="/componentesNutricionales")
  public ResponseEntity<ComponentesNutricionales> updateComponentesNutricionales(@RequestBody ComponentesNutricionales componentesNutricionales, @RequestParam Long id) {
    ComponentesNutricionales componentesActualizados = componentesNutricionalesService.updateComponentesNutricionales(componentesNutricionales, id);
    return new ResponseEntity<ComponentesNutricionales>(componentesActualizados, HttpStatus.CREATED);
  }

  @RequestMapping(method = RequestMethod.PUT, value="/componentesNutricionales/vitaminas")
  public ResponseEntity<ComponentesNutricionales> addVitaminasToComponentesNutricionales(@RequestBody Vitaminas vitaminas, @RequestParam Long id) {
    ComponentesNutricionales componentesActualizados = componentesNutricionalesService.addVitaminasToComponentesNutricionales(id, vitaminas);
    return new ResponseEntity<ComponentesNutricionales>(componentesActualizados, HttpStatus.CREATED);
  }

  @RequestMapping(method = RequestMethod.PUT, value="/componentesNutricionales/minerales")
  public ResponseEntity<ComponentesNutricionales> addMineralesToComponentesNutricionales(@RequestBody Minerales minerales, @RequestParam Long id) {
    ComponentesNutricionales componentesActualizados = componentesNutricionalesService.addMineralesToComponentesNutricionales(id, minerales);
    return new ResponseEntity<ComponentesNutricionales>(componentesActualizados, HttpStatus.CREATED);
  }

  @RequestMapping(method = RequestMethod.DELETE, value="/componentesNutricionales")
  public ResponseEntity<String> deleteComponentesNutricionales(@RequestParam Long id) {
    componentesNutricionalesService.deleteComponentesNutricionales(id);
    return new ResponseEntity<String>("Componentes nutricionales con id " + id + " borrados correctamente", HttpStatus.OK);
  }
}

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

  @CrossOrigin(origins = "http://localhost:3000")
  @RequestMapping("/componentes")
  public ResponseEntity<ComponentesNutricionales> getComponentesNutricionales(@RequestParam(name="id_componente") Long id) {
    ComponentesNutricionales componentesNutricionales = componentesNutricionalesService.getComponentesNutricionales(id);
    return new ResponseEntity<>(componentesNutricionales, HttpStatus.OK);
  }

  @CrossOrigin(origins = "http://localhost:3000")
  @RequestMapping(method = RequestMethod.POST, value= "/componentes")
  public ResponseEntity<ComponentesNutricionales> addComponentesNutricionales(@RequestBody ComponentesNutricionales componentesNutricionales) {
    ComponentesNutricionales componentesCreados = componentesNutricionalesService.addComponentesNutricionales(componentesNutricionales);
    return new ResponseEntity<>(componentesCreados, HttpStatus.CREATED);
  }

  @CrossOrigin(origins = "http://localhost:3000")
  @RequestMapping(method = RequestMethod.PUT, value= "/componentes")
  public ResponseEntity<ComponentesNutricionales> updateComponentesNutricionales(@RequestBody ComponentesNutricionales componentesNutricionales, @RequestParam(name="id_componente") Long id) {
    ComponentesNutricionales componentesActualizados = componentesNutricionalesService.updateComponentesNutricionales(componentesNutricionales, id);
    return new ResponseEntity<>(componentesActualizados, HttpStatus.CREATED);
  }

  @CrossOrigin(origins = "http://localhost:3000")
  @RequestMapping(method = RequestMethod.PUT, value= "/add/componente/vitaminas")
  public ResponseEntity<ComponentesNutricionales> addVitaminasToComponentesNutricionales(@RequestBody Vitaminas vitaminas, @RequestParam(name="id_componente") Long id) {
    ComponentesNutricionales componentesActualizados = componentesNutricionalesService.addVitaminasToComponentesNutricionales(id, vitaminas);
    return new ResponseEntity<>(componentesActualizados, HttpStatus.CREATED);
  }

  @CrossOrigin(origins = "http://localhost:3000")
  @RequestMapping(method = RequestMethod.PUT, value= "/add/componente/minerales")
  public ResponseEntity<ComponentesNutricionales> addMineralesToComponentesNutricionales(@RequestBody Minerales minerales, @RequestParam(name="id_componente") Long id) {
    ComponentesNutricionales componentesActualizados = componentesNutricionalesService.addMineralesToComponentesNutricionales(id, minerales);
    return new ResponseEntity<>(componentesActualizados, HttpStatus.CREATED);
  }

  @CrossOrigin(origins = "http://localhost:3000")
  @RequestMapping(method = RequestMethod.DELETE, value= "/componentes")
  public ResponseEntity<String> deleteComponentesNutricionales(@RequestParam(name="id_componente") Long id) {
    componentesNutricionalesService.deleteComponentesNutricionales(id);
    return new ResponseEntity<>("Componentes nutricionales con id " + id + " borrados correctamente", HttpStatus.OK);
  }
}

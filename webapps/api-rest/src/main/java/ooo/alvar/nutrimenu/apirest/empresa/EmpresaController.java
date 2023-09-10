package ooo.alvar.nutrimenu.apirest.empresa;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class EmpresaController {

  @Autowired
  private EmpresaService empresaService;

  @RequestMapping("/empresas/{id}")
  public Empresa getEmpresa(@PathVariable String id) {
    return empresaService.getEmpresa(id);
  }

  @RequestMapping("/empresas")
  public List<Empresa> getAllEmpresas() {
    return empresaService.getAllEmpresas();
  }

  @RequestMapping(method = RequestMethod.POST, value="/empresas")
  public ResponseEntity<Empresa> addEmpresa(@RequestBody Empresa empresa) {
    Empresa empresaCreada = empresaService.addEmpresa(empresa);
    return new ResponseEntity<>(empresaCreada, HttpStatus.CREATED);
  }

  @RequestMapping(method = RequestMethod.PUT, value="/empresas/{id}")
  public ResponseEntity<Empresa> updateEmpresa(@RequestBody Empresa empresa, @PathVariable String id) {
    Empresa empresaActualizada = empresaService.updateEmpresa(empresa, id);
    return new ResponseEntity<>(empresaActualizada, HttpStatus.CREATED);
  }

  @RequestMapping(method = RequestMethod.DELETE, value="/empresas/{id}")
  public void deleteEmpresa(@PathVariable String id) {
    empresaService.deleteEmpresa(id);
  }
}

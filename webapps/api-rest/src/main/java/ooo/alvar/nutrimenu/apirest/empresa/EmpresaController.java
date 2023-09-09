package ooo.alvar.nutrimenu.apirest.empresa;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class EmpresaController {

  @Autowired
  private EmpresaService empresaService;

  @RequestMapping("/empresas")
  public List<Empresa> getAllEmpresas() {
    return empresaService.getAllEmpresas();
  }

  @RequestMapping("/empresas/{id}")
  public Empresa getEmpresa(@PathVariable String id) {
    return empresaService.getEmpresa(id);
  }

  @RequestMapping(method = RequestMethod.POST, value="/empresas")
  public void addEmpresa(@RequestBody Empresa empresa) {
    empresaService.addEmpresa(empresa);
  }

  @RequestMapping(method = RequestMethod.PUT, value="/empresas/{id}")
  public void updateEmpresa(@RequestBody Empresa empresa, @PathVariable String id) {
    empresaService.updateEmpresa(empresa, id);
  }

  @RequestMapping(method = RequestMethod.DELETE, value="/empresas/{id}")
  public void deleteEmpresa(@PathVariable String id) {
    empresaService.deleteEmpresa(id);
  }
}

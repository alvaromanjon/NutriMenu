package ooo.alvar.nutrimenu.apirest.empresa;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class EmpresaController {

  @Autowired
  private EmpresaService empresaService;

  @RequestMapping("/empresas")
  public List<Empresa> getAllEmpresas() {
    return empresaService.getAllEmpresas();
  }

  @RequestMapping(method = RequestMethod.POST, value="/empresas/add")
  public void addEmpresa(@RequestBody Empresa empresa) {
    empresaService.addEmpresa(empresa);
  }

}

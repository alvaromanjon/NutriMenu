package ooo.alvar.nutrimenu.apirest.empresa;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class EmpresaController {

  @Autowired
  private EmpresaService empresaService;

  @CrossOrigin(origins = "http://localhost:3000")
  @RequestMapping("/empresas")
  public ResponseEntity<List<Empresa>> getEmpresas(@RequestParam(required = false, name = "id_empresa") Long id,
                                                   @RequestParam(required = false) String nombre,
                                                   @RequestParam(required = false) String email,
                                                   @RequestParam(required = false) String telefono,
                                                   @RequestParam(required = false) String cif) {
  List<Empresa> listaEmpresas = new ArrayList<>();
  if (id != null) {
    listaEmpresas.add(empresaService.getEmpresa(id));
  } else if (nombre != null) {
    listaEmpresas = empresaService.getAllEmpresasByNombre(nombre);
  } else if  (email != null) {
    listaEmpresas.add(empresaService.getEmpresaByEmail(email));
  } else if (telefono != null) {
    listaEmpresas.add(empresaService.getEmpresaByTelefono(telefono));
  } else if (cif != null) {
    listaEmpresas.add(empresaService.getEmpresaByCif(cif));
  } else {
    listaEmpresas = empresaService.getAllEmpresas();
  }

  return new ResponseEntity<>(listaEmpresas, HttpStatus.OK);
  }

  @CrossOrigin(origins = "http://localhost:3000")
  @RequestMapping(method = RequestMethod.POST, value="/empresas")
  public ResponseEntity<Empresa> addEmpresa(@RequestBody Empresa empresa) {
    Empresa empresaCreada = empresaService.addEmpresa(empresa);
    return new ResponseEntity<>(empresaCreada, HttpStatus.CREATED);
  }

  @CrossOrigin(origins = "http://localhost:3000")
  @RequestMapping(method = RequestMethod.PUT, value="/empresas")
  public ResponseEntity<Empresa> updateEmpresa(@RequestBody Empresa empresa, @RequestParam(name = "id_empresa") Long id) {
    Empresa empresaActualizada = empresaService.updateEmpresa(empresa, id);
    return new ResponseEntity<>(empresaActualizada, HttpStatus.CREATED);
  }

  @CrossOrigin(origins = "http://localhost:3000")
  @RequestMapping(method = RequestMethod.DELETE, value="/empresas")
  public ResponseEntity<String> deleteEmpresa(@RequestParam(name="id_empresa") Long id) {
    empresaService.deleteEmpresa(id);
    return new ResponseEntity<>("Empresa con id " + id + " eliminada correctamente", HttpStatus.OK);
  }
}

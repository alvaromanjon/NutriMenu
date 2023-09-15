package ooo.alvar.nutrimenu.apirest.usuario;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ooo.alvar.nutrimenu.apirest.usuario.rol.Rol;

@RestController
public class UsuarioController {

  @Autowired
  private UsuarioService usuarioService;

  @RequestMapping("/usuarios")
  public ResponseEntity<List<Usuario>> getUsuarios(@RequestParam(required = false) Long id, 
                                @RequestParam(required = false) String email,
                                @RequestParam(required = false) Rol rol) {
    List<Usuario> listaUsuarios = new ArrayList<>();

    if (email != null) {
      listaUsuarios.add(usuarioService.getUsuarioByEmail(email));
    } else if (id != null) {
      listaUsuarios.add(usuarioService.getUsuarioById(id));
    } else if (rol != null) {
      listaUsuarios = usuarioService.getAllUsuariosByRol(rol);
    } else {
      listaUsuarios = usuarioService.getAllUsuarios();
    }

    return new ResponseEntity<List<Usuario>>(listaUsuarios, HttpStatus.OK);    
  }

  @RequestMapping(method = RequestMethod.POST, value="/usuarios")
  public ResponseEntity<Usuario> addUsuario(@RequestBody Usuario usuario) {
    Usuario usuarioCreado = usuarioService.addUsuario(usuario);
    return new ResponseEntity<Usuario>(usuarioCreado, HttpStatus.CREATED);
  }

  @RequestMapping(method = RequestMethod.PUT, value="/usuarios")
  public ResponseEntity<Usuario> updateUsuario(@RequestBody Usuario usuario, @RequestParam Long id) {
    Usuario usuarioActualizado = usuarioService.updateUsuario(usuario, id);
    return new ResponseEntity<Usuario>(usuarioActualizado, HttpStatus.CREATED);
  }

  @RequestMapping(method = RequestMethod.DELETE, value="/usuarios")
  public void deleteEmpresa(@RequestParam Long id) {
    usuarioService.deleteUsuario(id);
  }
}

package ooo.alvar.nutrimenu.apirest.usuario;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import ooo.alvar.nutrimenu.apirest.usuario.rol.Rol;

@RestController
public class UsuarioController {

  @Autowired
  private UsuarioService usuarioService;

  @CrossOrigin(origins = "http://localhost:3000")
  @RequestMapping("/usuarios")
  public ResponseEntity<List<Usuario>> getUsuarios(@RequestParam(required = false, name="id_usuario") Long id,
                                @RequestParam(required = false) String email,
                                @RequestParam(required = false) Rol rol,
                                @RequestParam(required = false, name="id_empresa") Long idEmpresa,
                                @RequestParam(required = false, name="id_local") Long idLocal) {
    List<Usuario> listaUsuarios = new ArrayList<>();

    if (email != null) {
      listaUsuarios.add(usuarioService.getUsuarioByEmail(email));
    } else if (id != null) {
      listaUsuarios.add(usuarioService.getUsuarioById(id));
    } else if (rol != null) {
      listaUsuarios = usuarioService.getAllUsuariosByRol(rol);
    } else if (idEmpresa != null) {
      listaUsuarios = usuarioService.getAllUsuariosByEmpresa(idEmpresa);
    } else if (idLocal != null) {
      listaUsuarios = usuarioService.getAllUsuariosByLocal(idLocal);
    } else {
      listaUsuarios = usuarioService.getAllUsuarios();
    }

    return new ResponseEntity<>(listaUsuarios, HttpStatus.OK);
  }

  @CrossOrigin(origins = "http://localhost:3000")
  @RequestMapping(method = RequestMethod.POST, value="/login")
  public ResponseEntity<Usuario> checkUsuario(@RequestBody Usuario usuario) {
    Usuario usuarioComprobado = usuarioService.checkUsuario(usuario);
    return new ResponseEntity<>(usuarioComprobado, HttpStatus.OK);
  }

  @CrossOrigin(origins = "http://localhost:3000")
  @RequestMapping(method = RequestMethod.POST, value="/usuarios")
  public ResponseEntity<Usuario> addUsuario(@RequestBody Usuario usuario,
                                            @RequestParam(required = false, defaultValue = "-1", name = "id_empresa") Long idEmpresa,
                                            @RequestParam(required = false, defaultValue = "-1", name = "id_local") Long idLocal) {
    Usuario usuarioCreado = usuarioService.addUsuario(idEmpresa, idLocal, usuario);
    return new ResponseEntity<>(usuarioCreado, HttpStatus.CREATED);
  }

  @CrossOrigin(origins = "http://localhost:3000")
  @RequestMapping(method = RequestMethod.PUT, value="/usuarios")
  public ResponseEntity<Usuario> updateUsuario(@RequestBody Usuario usuario, @RequestParam(name="id_usuario") Long id) {
    Usuario usuarioActualizado = usuarioService.updateUsuario(usuario, id);
    return new ResponseEntity<>(usuarioActualizado, HttpStatus.CREATED);
  }

  @CrossOrigin(origins = "http://localhost:3000")
  @RequestMapping(method = RequestMethod.DELETE, value="/usuarios")
  public ResponseEntity<String> deleteUsuario(@RequestParam(name="id_usuario") Long id) {
    usuarioService.deleteUsuario(id);
    return new ResponseEntity<>("Usuario con id " + id + " borrado correctamente", HttpStatus.OK);
  }
}

package ooo.alvar.nutrimenu.apirest.usuario;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ooo.alvar.nutrimenu.apirest.excepciones.EntityDoesntExistsException;
import ooo.alvar.nutrimenu.apirest.usuario.rol.Rol;

@Service
public class UsuarioService {

  @Autowired
  private UsuarioRepository usuarioRepository;

  public Usuario getUsuarioById(Long id) {
    Usuario usuarioDevuelto = usuarioRepository.findById(id).orElse(null);

    if (usuarioDevuelto == null) {
      throw new EntityDoesntExistsException("No existe un usuario con id " + id);
    }

    return usuarioDevuelto;
  }

  public Usuario getUsuarioByEmail(String email) {
    Usuario usuarioDevuelto = usuarioRepository.findByEmail(email);

    if (usuarioDevuelto == null) {
      throw new EntityDoesntExistsException("No existe un usuario con email " + email);
    }

    return usuarioDevuelto;
  }

  public List<Usuario> getAllUsuariosByRol(Rol rol) {
    List<Usuario> listaUsuarios = new ArrayList<>();

    listaUsuarios.addAll(usuarioRepository.findAllByRol(rol));

    return listaUsuarios;
  }

  public List<Usuario> getAllUsuarios() {
    List<Usuario> usuarios = new ArrayList<>();

    usuarioRepository.findAll()
      .forEach(usuarios::add);

    return usuarios;
  }

  public Usuario addUsuario(Usuario usuario) {
    return usuarioRepository.save(usuario);
  }

  public Usuario updateUsuario(Usuario usuario, Long id) {
    Optional<Usuario> usuarioAntiguo = usuarioRepository.findById(id);

    if (!usuarioAntiguo.isPresent()) {
      throw new EntityDoesntExistsException("No existe un usuario con id " + id);
    }

    Usuario nuevoUsuario = usuarioAntiguo.get();
    nuevoUsuario.setUsuario(usuario.getUsuario());
    nuevoUsuario.setPassword(usuario.getPassword());
    nuevoUsuario.setNombre(usuario.getNombre());
    nuevoUsuario.setEmail(usuario.getEmail());
    nuevoUsuario.setRol(usuario.getRol());

    return usuarioRepository.save(nuevoUsuario);
  }

  public void deleteUsuario(Long id) {
    if (!usuarioRepository.existsById(id)) {
      throw new EntityDoesntExistsException("No existe un usuario con id " + id);
    }

    usuarioRepository.deleteById(id);
  }
}

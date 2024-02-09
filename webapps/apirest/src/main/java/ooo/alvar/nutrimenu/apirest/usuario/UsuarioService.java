package ooo.alvar.nutrimenu.apirest.usuario;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import ooo.alvar.nutrimenu.apirest.empresa.Empresa;
import ooo.alvar.nutrimenu.apirest.empresa.EmpresaRepository;
import ooo.alvar.nutrimenu.apirest.excepciones.LackOfParametersException;
import ooo.alvar.nutrimenu.apirest.excepciones.PasswordNotCorrectException;
import ooo.alvar.nutrimenu.apirest.local.Local;
import ooo.alvar.nutrimenu.apirest.local.LocalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ooo.alvar.nutrimenu.apirest.excepciones.EntityDoesntExistsException;
import ooo.alvar.nutrimenu.apirest.usuario.rol.Rol;

@Service
public class UsuarioService {

  @Autowired
  private UsuarioRepository usuarioRepository;

  @Autowired
  private EmpresaRepository empresaRepository;

  @Autowired
  private LocalRepository localRepository;

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

  public List<Usuario> getAllUsuariosByEmpresa(Long id) {
    List<Usuario> listaUsuarios = new ArrayList<>();

    listaUsuarios.addAll(usuarioRepository.findAllByEmpresaId(id));

    return listaUsuarios;
  }

  public List<Usuario> getAllUsuariosByLocal(Long id) {
    List<Usuario> listaUsuarios = new ArrayList<>();

    listaUsuarios.addAll(usuarioRepository.findAllByLocalId(id));

    return listaUsuarios;
  }

  public List<Usuario> getAllUsuarios() {
    List<Usuario> usuarios = new ArrayList<>();

    usuarioRepository.findAll()
      .forEach(usuarios::add);

    return usuarios;
  }

  public Usuario checkUsuario(Usuario usuario) {
    Usuario usuarioDB = usuarioRepository.findByUsuario(usuario.getUsuario());

    if (usuarioDB == null) {
      throw new EntityDoesntExistsException("No existe ningún usuario llamado " + usuario);
    }

    if (!usuarioDB.getPassword().equals(usuario.getPassword())) {
      throw new PasswordNotCorrectException("La contraseña para el usuario " + usuario.getUsuario() + " es incorrecta");
    }

    return usuarioDB;
  }

  public Usuario addUsuario(Long idEmpresa, Long idLocal, Usuario usuario) {
    Optional<Empresa> empresa = empresaRepository.findById(idEmpresa);
    Optional<Local> local = localRepository.findById(idLocal);

    if (usuario.getRol() == Rol.EDITOR || usuario.getRol() == Rol.CAMARERO) {
      if (!empresa.isPresent()) {
        throw new LackOfParametersException("Por favor, añade el id de la empresa a la petición");
      }
      if (!local.isPresent()) {
        throw new LackOfParametersException("Por favor, añade el id del local a la petición");
      }

      usuario.setEmpresa(empresa.get());
      usuario.setLocal(local.get());
    }

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

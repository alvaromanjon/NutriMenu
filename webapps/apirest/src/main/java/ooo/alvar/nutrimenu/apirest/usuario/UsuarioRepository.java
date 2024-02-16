package ooo.alvar.nutrimenu.apirest.usuario;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import ooo.alvar.nutrimenu.apirest.usuario.rol.Rol;

public interface UsuarioRepository extends CrudRepository<Usuario, Long> {
  Usuario findByEmail(String email);
  Usuario findByUsuario(String usuario);
  List<Usuario> findAllByRol(Rol rol);
  List<Usuario> findAllByEmpresaId(Long id);
}

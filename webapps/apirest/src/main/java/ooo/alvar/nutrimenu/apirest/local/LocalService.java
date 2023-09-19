package ooo.alvar.nutrimenu.apirest.local;

import ooo.alvar.nutrimenu.apirest.empresa.Empresa;
import ooo.alvar.nutrimenu.apirest.empresa.EmpresaRepository;
import ooo.alvar.nutrimenu.apirest.excepciones.EntityDoesntExistsException;
import ooo.alvar.nutrimenu.apirest.menu.Menu;
import ooo.alvar.nutrimenu.apirest.menu.MenuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class LocalService {

  @Autowired
  private LocalRepository localRepository;

  @Autowired
  private EmpresaRepository empresaRepository;

  @Autowired
  private MenuRepository menuRepository;


  public Local getLocal(Long id) {
    Local localDevuelto = localRepository.findById(id).orElse(null);
    if (localDevuelto == null) {
      throw new EntityDoesntExistsException("No existe un local con id " + id);
    }
    return localDevuelto;
  }

  public List<Local> getAllLocales() {
    List<Local> locales = new ArrayList<>();
    localRepository.findAll()
      .forEach(locales::add);

    return locales;
  }

  public List<Local> getAllLocalesByEmpresa(Long id) {
    List<Local> locales = new ArrayList<>();
    locales.addAll(localRepository.findAllByEmpresaId(id));

    return locales;
  }

  public List<Local> getLocalByNombre(String nombre, Long idEmpresa) {
    List<Local> locales = new ArrayList<>();
    locales.addAll(localRepository.findAllByNombreContainsIgnoreCaseAndEmpresaId(nombre, idEmpresa));

    return locales;
  }

  public Local getLocalByEmail(String email) {
    return localRepository.findByEmail(email);
  }

  public Local getLocalByTelefono(String telefono) {
    return localRepository.findByTelefono(telefono);
  }

  public Local addLocal(Long idEmpresa, Local local) {
    Optional<Empresa> empresa = empresaRepository.findById(idEmpresa);

    if (!empresa.isPresent()) {
      throw new EntityDoesntExistsException("No existe una empresa con id " + idEmpresa);
    }

    local.setEmpresa(empresa.get());

    return localRepository.save(local);
  }

  public Local addMenuToLocal(Long idLocal, Long idMenu) {
    Optional<Local> localAntiguo = localRepository.findById(idLocal);

    if (!localAntiguo.isPresent()) {
      throw new EntityDoesntExistsException("No existe un local con id " + idLocal);
    }

    Optional<Menu> menu = menuRepository.findById(idMenu);

    if (!menu.isPresent()) {
      throw new EntityDoesntExistsException("No existe un menú con id " + idMenu);
    }

    localAntiguo.get().getMenus().add(menu.get());

    return localRepository.save(localAntiguo.get());
  }

  public Local updateLocal(Local local, Long id) {
    Optional<Local> localAntiguo = localRepository.findById(id);

    if (!localAntiguo.isPresent()) {
      throw new EntityDoesntExistsException("No existe un local con id " + id);
    }

    Local nuevoLocal = localAntiguo.get();
    if (local.getNombre() != null) {
      nuevoLocal.setNombre(local.getNombre());
    }
    if (local.getEmail() != null) {
      nuevoLocal.setEmail(local.getEmail());
    }
    if (local.getDireccion() != null) {
      nuevoLocal.setDireccion(local.getDireccion());
    }
    if (local.getTelefono() != null) {
      nuevoLocal.setTelefono(local.getTelefono());
    }

    return localRepository.save(nuevoLocal);
  }

  public void deleteLocal(Long id) {
    if (!localRepository.existsById(id)) {
      throw new EntityDoesntExistsException("No existe un local con id " + id);
    }

    localRepository.deleteById(id);
  }
}

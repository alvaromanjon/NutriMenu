package ooo.alvar.nutrimenu.apirest.local;

import ooo.alvar.nutrimenu.apirest.empresa.Empresa;
import ooo.alvar.nutrimenu.apirest.empresa.EmpresaRepository;
import ooo.alvar.nutrimenu.apirest.excepciones.EntityDoesntExistsException;
import ooo.alvar.nutrimenu.apirest.menu.Menu;
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
    locales.addAll(localRepository.findByEmpresaId(id));

    return locales;
  }

  public Local addLocal(Long idEmpresa, Local local) {
    Optional<Empresa> empresa = empresaRepository.findById(idEmpresa);

    if (!empresa.isPresent()) {
      throw new EntityDoesntExistsException("No existe una empresa con id " + idEmpresa);
    }

    local.setEmpresa(empresa.get());

    return localRepository.save(local);
  }

  public Local updateLocal(Local local, Long id) {
    Optional<Local> localAntiguo = localRepository.findById(id);

    if (!localAntiguo.isPresent()) {
      throw new EntityDoesntExistsException("No existe un local con id " + id);
    }

    Local nuevoLocal = localAntiguo.get();
    nuevoLocal.setNombre(local.getNombre());
    nuevoLocal.setEmail(local.getEmail());
    nuevoLocal.setDireccion(local.getDireccion());
    nuevoLocal.setTelefono(local.getTelefono());

    return localRepository.save(nuevoLocal);
  }

  public void deleteLocal(Long id) {
    Local localActual = localRepository.findById(id).orElse(null);
    if (localActual == null) {
      throw new EntityDoesntExistsException("No existe un local con id " + id);
    }

    for (Menu menu : localActual.getMenus()) {
      menu.getLocales().remove(localActual);
    }

    localActual.getMenus().clear();
    localRepository.deleteById(id);
  }
}

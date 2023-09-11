package ooo.alvar.nutrimenu.apirest.local;

import ooo.alvar.nutrimenu.apirest.excepciones.EntityAlreadyExistsException;
import ooo.alvar.nutrimenu.apirest.excepciones.EntityDoesntExistsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class LocalService {

  @Autowired
  private LocalRepository localRepository;

  public Local getLocal(String id) {
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

  public List<Local> getAllLocalesByEmpresa(String id) {
    List<Local> locales = new ArrayList<>();
    localRepository.findByEmpresaId(id)
      .forEach(locales::add);

    return locales;
  }

  public Local addLocal(Local local) {
    local.setId(local.getEmpresa().getId() + "-" + local.getNombre().toLowerCase().replace(' ', '_'));

    if (localRepository.existsById(local.getId())) {
      throw new EntityAlreadyExistsException("Ya existe un local llamado " + local.getNombre() + " en esta empresa");
    }

    return localRepository.save(local);
  }

  public Local updateLocal(Local local, String id) {
    if (!localRepository.existsById(id)) {
      throw new EntityDoesntExistsException("No existe un local con id " + id);
    }

    local.setId(id);
    return localRepository.save(local);
  }

  public void deleteLocal(String id) {
    if (!localRepository.existsById(id)) {
      throw new EntityDoesntExistsException("No existe un local con id " + id);
    }

    localRepository.deleteById(id);
  }
}

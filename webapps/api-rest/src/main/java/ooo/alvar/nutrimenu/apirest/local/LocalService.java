package ooo.alvar.nutrimenu.apirest.local;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class LocalService {

  @Autowired
  private LocalRepository localRepository;

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

  public Local getLocal(String id) {
    return localRepository.findById(id).orElse(null);
  }

  public void addLocal(Local local) {
    localRepository.save(local);
  }

  public void updateLocal(Local local, String id) {
    localRepository.deleteById(id);
    localRepository.save(local);
  }

  public void deleteLocal(String id) {
    localRepository.deleteById(id);
  }
}

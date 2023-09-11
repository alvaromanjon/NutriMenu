package ooo.alvar.nutrimenu.apirest.empresa;

import ooo.alvar.nutrimenu.apirest.excepciones.EntityAlreadyExistsException;
import ooo.alvar.nutrimenu.apirest.excepciones.EntityDoesntExistsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class EmpresaService {

  @Autowired
  private EmpresaRepository empresaRepository;

  public Empresa getEmpresa(String id) {
    Empresa empresaDevuelta = empresaRepository.findById(id).orElse(null);
    if (empresaDevuelta == null) {
      throw new EntityDoesntExistsException("No existe una empresa con id " + id);
    }
    return empresaDevuelta;
  }

  public List<Empresa> getAllEmpresas() {
    List<Empresa> empresas = new ArrayList<>();
    empresaRepository.findAll()
      .forEach(empresas::add);

    return empresas;
  }

  public Empresa addEmpresa(Empresa empresa) {
    empresa.setId(empresa.getNombre().toLowerCase().replace(' ', '_'));

    if (empresaRepository.existsById(empresa.getId())) {
      throw new EntityAlreadyExistsException("Ya existe una empresa llamada " + empresa.getNombre());
    }

    return empresaRepository.save(empresa);
  }

  public Empresa updateEmpresa(Empresa empresa, String id) {
    if (!empresaRepository.existsById(id)) {
      throw new EntityDoesntExistsException("No existe una empresa con id " + id);
    }

    empresa.setId(id);
    return empresaRepository.save(empresa);
  }

  public void deleteEmpresa(String id) {
    if (!empresaRepository.existsById(id)) {
      throw new EntityDoesntExistsException("No existe una empresa con id " + id);
    }

    empresaRepository.deleteById(id);
  }
}

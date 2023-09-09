package ooo.alvar.nutrimenu.apirest.empresa;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class EmpresaService {

  @Autowired
  private EmpresaRepository empresaRepository;

  public List<Empresa> getAllEmpresas() {
    List<Empresa> empresas = new ArrayList<>();
    empresaRepository.findAll()
      .forEach(empresas::add);

    return empresas;
  }

  public Empresa getEmpresa(String id) {
    return empresaRepository.findById(id).orElse(null);
  }

  public void addEmpresa(Empresa empresa) {
   empresaRepository.save(empresa);
  }

  public void updateEmpresa(Empresa empresa, String id) {
    empresaRepository.deleteById(id);
    empresaRepository.save(empresa);
  }

  public void deleteEmpresa(String id) {
    empresaRepository.deleteById(id);
  }
}

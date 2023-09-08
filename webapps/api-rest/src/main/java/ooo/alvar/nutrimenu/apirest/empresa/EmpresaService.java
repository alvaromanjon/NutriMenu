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

  public void addEmpresa(Empresa empresa) {
   empresaRepository.save(empresa);
  }
}

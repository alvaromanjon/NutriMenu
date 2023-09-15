package ooo.alvar.nutrimenu.apirest.empresa;

import ooo.alvar.nutrimenu.apirest.excepciones.EntityDoesntExistsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class EmpresaService {

  @Autowired
  private EmpresaRepository empresaRepository;

  public Empresa getEmpresa(Long id) {
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
    return empresaRepository.save(empresa);
  }

  public Empresa updateEmpresa(Empresa empresa, Long id) {
    Optional<Empresa> empresaAntigua = empresaRepository.findById(id);

    if (!empresaAntigua.isPresent()) {
      throw new EntityDoesntExistsException("No existe una empresa con id " + id);
    }

    Empresa nuevaEmpresa = empresaAntigua.get();
    nuevaEmpresa.setNombre(empresa.getNombre());
    nuevaEmpresa.setEmail(empresa.getEmail());
    nuevaEmpresa.setDireccion(empresa.getDireccion());
    nuevaEmpresa.setTelefono(empresa.getTelefono());
    nuevaEmpresa.setCif(empresa.getCif());

    return empresaRepository.save(nuevaEmpresa);
  }

  public void deleteEmpresa(Long id) {
    if (!empresaRepository.existsById(id)) {
      throw new EntityDoesntExistsException("No existe una empresa con id " + id);
    }

    empresaRepository.deleteById(id);
  }
}

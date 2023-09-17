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

  public List<Empresa> getAllEmpresasByNombre(String nombre) {
    List<Empresa> empresas = new ArrayList<>();
    empresaRepository.findAllByNombreContainsIgnoreCase(nombre)
      .forEach(empresas::add);

    return empresas;
  }

  public Empresa getEmpresaByEmail(String email) {
    return empresaRepository.findByEmail(email);
  }

  public Empresa getEmpresaByTelefono(String telefono) {
    return empresaRepository.findByTelefono(telefono);
  }

  public Empresa getEmpresaByCif(String cif) {
    return empresaRepository.findByCif(cif);
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
    if (empresa.getNombre() != null) {
      nuevaEmpresa.setNombre(empresa.getNombre());
    }
    if (empresa.getEmail() != null) {
      nuevaEmpresa.setEmail(empresa.getEmail());
    }
    if (empresa.getDireccion() != null) {
      nuevaEmpresa.setDireccion(empresa.getDireccion());
    }
    if (empresa.getTelefono() != null) {
      nuevaEmpresa.setTelefono(empresa.getTelefono());
    }
    if (empresa.getCif() != null) {
      nuevaEmpresa.setCif(empresa.getCif());
    }

    return empresaRepository.save(nuevaEmpresa);
  }

  public void deleteEmpresa(Long id) {
    if (!empresaRepository.existsById(id)) {
      throw new EntityDoesntExistsException("No existe una empresa con id " + id);
    }

    empresaRepository.deleteById(id);
  }
}

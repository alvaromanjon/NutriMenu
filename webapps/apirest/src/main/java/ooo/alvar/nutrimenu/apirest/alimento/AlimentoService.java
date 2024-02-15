package ooo.alvar.nutrimenu.apirest.alimento;

import jakarta.transaction.Transactional;
import ooo.alvar.nutrimenu.apirest.alimento.componentesNutricionales.ComponentesNutricionalesRepository;
import ooo.alvar.nutrimenu.apirest.alimento.grupoAlimento.grupoAlimento;
import ooo.alvar.nutrimenu.apirest.alimento.componentesNutricionales.ComponentesNutricionales;
import ooo.alvar.nutrimenu.apirest.excepciones.EntityDoesntExistsException;
import ooo.alvar.nutrimenu.apirest.relaciones.PlatoAlimento.PlatoAlimentoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class AlimentoService {

  @Autowired
  private AlimentoRepository alimentoRepository;

  @Autowired
  private ComponentesNutricionalesRepository componentesNutricionalesRepository;

  @Autowired
  private PlatoAlimentoRepository platoAlimentoRepository;

  public Alimento getAlimento(Long id) {
    Alimento alimentoDevuelto = alimentoRepository.findById(id).orElse(null);
    if (alimentoDevuelto == null) {
      throw new EntityDoesntExistsException("No existe un alimento con id " + id);
    }
    return alimentoDevuelto;
  }

  public List<Alimento> getAllAlimentos() {
    List<Alimento> alimentos = new ArrayList<>();
    alimentoRepository.findAll()
      .forEach(alimentos::add);

    return alimentos;
  }

  public Alimento getAlimentoByNombre(String nombre) {
    Alimento alimento = alimentoRepository.findByNombre(nombre).orElse(null);

    return alimento;
  }

  public List<Alimento> getAllAlimentosByGrupoAlimento(grupoAlimento grupoAlimento) {
    List<Alimento> alimentos = new ArrayList<>();
    alimentos.addAll(alimentoRepository.findAllByGrupoAlimento(grupoAlimento));

    return alimentos;
  }

  public Alimento addAlimento(Alimento alimento) {
    return alimentoRepository.save(alimento);
  }

  public Alimento addComponenteNutricionalToAlimento(Long idAlimento, Long idComponente) {
    Optional<Alimento> alimentoAntiguo = alimentoRepository.findById(idAlimento);

    if (!alimentoAntiguo.isPresent()) {
      throw new EntityDoesntExistsException("No existe un alimento con id " + idAlimento);
    }

    Optional<ComponentesNutricionales> componente = componentesNutricionalesRepository.findById(idComponente);

    if (!componente.isPresent()) {
      throw new EntityDoesntExistsException("No existe un componente nutricional con id " + idComponente);
    }

    alimentoAntiguo.get().setComponentesNutricionales(componente.get());

    return alimentoRepository.save(alimentoAntiguo.get());
  }

  public Alimento updateAlimento(Alimento alimento, Long id) {
    Optional<Alimento> alimentoAntiguo = alimentoRepository.findById(id);

    if (!alimentoAntiguo.isPresent()) {
      throw new EntityDoesntExistsException("No existe un alimento con id " + id);
    }

    Alimento nuevoAlimento = alimentoAntiguo.get();

    if (alimento.getNombre() != null) {
      nuevoAlimento.setNombre(alimento.getNombre());
    }

    if (alimento.getGramosPorRacion() != 0) {
      nuevoAlimento.setGramosPorRacion(alimento.getGramosPorRacion());
    }

    if (alimento.getGrupoAlimento() != null) {
      nuevoAlimento.setGrupoAlimento(alimento.getGrupoAlimento());
    }
    if (alimento.getComponentesNutricionales() != null) {
      nuevoAlimento.setComponentesNutricionales(alimento.getComponentesNutricionales());
    }

    return alimentoRepository.save(nuevoAlimento);
  }

  @Transactional
  public void deleteAlimento(Long id) {
    Alimento alimentoActual = alimentoRepository.findById(id).orElse(null);
    if (alimentoActual ==null) {
      throw new EntityDoesntExistsException("No existe un alimento con id " + id);
    }

    platoAlimentoRepository.deleteByAlimentoId(id);
    alimentoRepository.deleteById(id);
  }

}

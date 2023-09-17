package ooo.alvar.nutrimenu.apirest.excepciones;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class LackOfParametersException extends RuntimeException {
  public LackOfParametersException(String message) {
    super(message);
  }
}

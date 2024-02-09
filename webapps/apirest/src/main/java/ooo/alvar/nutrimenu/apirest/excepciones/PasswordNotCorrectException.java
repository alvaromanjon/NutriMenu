package ooo.alvar.nutrimenu.apirest.excepciones;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.UNAUTHORIZED)
public class PasswordNotCorrectException extends RuntimeException {
  public PasswordNotCorrectException(String message) {
    super(message);
  }
}
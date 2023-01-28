package app.infoSense.predicto.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;

import org.springframework.web.bind.annotation.RestControllerAdvice;

import javax.validation.ConstraintViolationException;
import java.util.ArrayList;
import java.util.List;

@RestControllerAdvice
public class GlobalExceptionhandler {

    @ExceptionHandler(ConstraintViolationException.class)
    protected ResponseEntity<List<String>> handleConstraintViolationException(
            ConstraintViolationException e) {
        List<String> errorList = new ArrayList<>();
            errorList.add(e.getMessage());
        return new ResponseEntity<>(errorList, HttpStatus.BAD_REQUEST);
    }
}

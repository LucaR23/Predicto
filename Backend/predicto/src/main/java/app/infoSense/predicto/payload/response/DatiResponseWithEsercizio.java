package app.infoSense.predicto.payload.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;

@Getter @Setter  @AllArgsConstructor @NoArgsConstructor
public class DatiResponseWithEsercizio {

    private int anno;
    private BigDecimal valore;
    private String arrivoPresenza;
    private String esercizio;
}

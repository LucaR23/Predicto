package app.infoSense.predicto.payload.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter @Setter  @AllArgsConstructor  @NoArgsConstructor
public class DatiResponse {

    private int anno;
    private int mese;
    private int valore;
    // arrivo - presenza
    private String arrivoPresenza;
}

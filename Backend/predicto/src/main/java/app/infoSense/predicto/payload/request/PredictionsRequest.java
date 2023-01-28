package app.infoSense.predicto.payload.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Getter @Setter @AllArgsConstructor @NoArgsConstructor
public class PredictionsRequest {

    @NotBlank
    private String Territorio;
    @NotBlank
    private String Indicatori;
    @NotBlank
    private String Esercizio;
    @NotBlank
    private String Paese;
    @NotNull @Min(2) @Max(62)
    private int steps;

    @Override
    public String toString() {
        return "PredictionsRequest{" +
                "Territorio='" + Territorio + '\'' +
                ", Indicatori='" + Indicatori + '\'' +
                ", Esercizio='" + Esercizio + '\'' +
                ", Paese='" + Paese + '\'' +
                ", steps=" + steps +
                '}';
    }


}

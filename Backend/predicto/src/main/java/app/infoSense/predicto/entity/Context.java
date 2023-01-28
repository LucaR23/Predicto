package app.infoSense.predicto.entity;

import lombok.*;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Getter @Setter @AllArgsConstructor @NoArgsConstructor
@Builder
public class Context {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idContext;

    @Column(length = 10)
    private String arriveStay;

    @Column(length = 15)
    private String nation;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Context context = (Context) o;
        return Objects.equals(idContext, context.idContext);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idContext);
    }

}

package app.infoSense.predicto.entity;

import lombok.*;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Getter @Setter @NoArgsConstructor @AllArgsConstructor
@Builder
public class StatisticsProvince {
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "id_province")
    private Province idProvince;

    @ManyToOne
    @JoinColumn(name= "id_context")
    private Context idContext;

    @ManyToOne
    @JoinColumn(name = "id_structure")
    private Structure idStructure;

    private int year;

    private int month;

    private int value;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        StatisticsProvince that = (StatisticsProvince) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}


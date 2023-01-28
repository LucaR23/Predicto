package app.infoSense.predicto.entity;

import lombok.*;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Getter @Setter @NoArgsConstructor @AllArgsConstructor
@Builder
public class Province {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idProvince;

    @Column(length = 25)
    private String name;

    @ManyToOne
    @JoinColumn(name = "id_region")
    private Region idRegion;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Province province = (Province) o;
        return idProvince.equals(province.idProvince);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idProvince);
    }
}

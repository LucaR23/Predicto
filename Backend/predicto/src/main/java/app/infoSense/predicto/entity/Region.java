package app.infoSense.predicto.entity;

import lombok.*;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Builder @NoArgsConstructor @AllArgsConstructor
@Getter @Setter
public class Region {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idRegion;

    @Column(length = 15)
    private String regionName;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Region region = (Region) o;
        return Objects.equals(idRegion, region.idRegion);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idRegion);
    }
}

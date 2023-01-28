package app.infoSense.predicto.entity;


import lombok.*;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Getter @Setter @AllArgsConstructor @NoArgsConstructor
@Builder
public class Structure {

    @Id  @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idStructure;

    @Column(length = 25)
    private String structureName;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Structure structure = (Structure) o;
        return idStructure.equals(structure.idStructure);
    }

    @Override
    public int hashCode() {
        return Objects.hash(idStructure);
    }
}

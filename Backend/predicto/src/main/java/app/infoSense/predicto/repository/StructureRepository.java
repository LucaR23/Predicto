package app.infoSense.predicto.repository;

import app.infoSense.predicto.entity.Structure;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StructureRepository extends JpaRepository<Structure,Long> {

    @Query(value = "SELECT e.id_structure FROM structure e WHERE e.structure_name  = :nomeEs" ,nativeQuery = true)
    Long findIdStructureByStructureName(String nomeEs);

    @Query(value = "SELECT e.structure_name FROM structure e",nativeQuery = true)
    List<String> findStructureName();

    boolean existsByStructureName(String nomeEs);
}

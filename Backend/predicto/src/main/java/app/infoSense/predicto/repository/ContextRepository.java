package app.infoSense.predicto.repository;

import app.infoSense.predicto.entity.Context;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ContextRepository extends JpaRepository<Context,Long> {

     @Query(value ="SELECT c.id_context FROM context c WHERE c.nation = :naz ", nativeQuery = true)
     Long[] findByNation(String naz);

     boolean existsByNation(String naz);
}

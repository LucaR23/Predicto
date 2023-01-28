package app.infoSense.predicto.repository;

import app.infoSense.predicto.entity.Province;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProvinceRepository  extends JpaRepository<Province, Long> {

  @Query(value = "SELECT p.name FROM province p", nativeQuery = true)
  List<String> findNameProvince();


  @Query(value = "SELECT p.id_province  FROM province p WHERE p.name = :nome",nativeQuery = true)
    Long findIdProvinceByName(String nome);

  boolean existsByName(String nome);

}

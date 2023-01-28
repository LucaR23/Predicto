package app.infoSense.predicto.repository;

import app.infoSense.predicto.entity.StatisticsProvince;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.persistence.Tuple;
import java.util.List;

@Repository
public interface StatisticsProvinceRepository extends JpaRepository<StatisticsProvince,Long> {

    // data by 1 province, 2 context , and a provenance
    @Query(value = "SELECT sp.year, sp.month , sp.value , c.arrive_stay FROM statistics_province sp " +
            ",context c WHERE (sp.id_context = :cont1 OR sp.id_context= :cont2)" +
            " AND sp.id_structure= :eser AND sp.id_province= :prov AND c.id_context= sp.id_context;",nativeQuery = true)
    List<Tuple> getData(@Param("cont1")long contst1 , @Param("cont2") long contst2, @Param("eser") Long esrc, @Param("prov") Long prov );


    // data by 2 province 1 structure e i context
    @Query(value = "SELECT sp.year, SUM(sp.value) as 'value', c.arrive_stay, p.name\n" +
            "FROM statistics_province sp, province p, context c \n" +
            "WHERE sp.id_context = c.id_context\n" +
            "AND p.id_province = sp.id_province\n" +
            "AND sp.id_context IN (:const1, :const2)\n" +
            "AND sp.id_province IN (:pr1, :pr2)\n" +
            "AND sp.id_structure = :eser\n" +
            "GROUP BY sp.year, p.name, c.id_context",nativeQuery = true)
    List<Tuple> getDataTwoProvince(@Param("const1")long contst1 , @Param("const2") long contst2, @Param("eser")  Long esrc, @Param("pr1") Long prov,@Param("pr2") Long prov2);


  //  send all data structure in a precise year for a province
    @Query(value = "SELECT sp.year,SUM(sp.value) as 'value', c.arrive_stay, e.structure_name  " +
            "FROM statistics_province sp, province p, context c, structure e " +
            "WHERE sp.id_context = c.id_context " +
            "AND p.id_province = sp.id_province " +
            "AND sp.id_structure = e.id_structure  " +
            "AND sp.year = :year " +
            "AND sp.id_context IN (:const1, :const2) " +
            "AND sp.id_province = :prov " +
            "GROUP BY e.id_structure, sp.id_context" ,nativeQuery = true)
    List<Tuple> getDataForAYear(@Param("year") int year,@Param("const1") long const1, @Param("const2") long const2,@Param("prov") Long prov);


}

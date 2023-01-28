package app.infoSense.predicto.service;

import app.infoSense.predicto.payload.response.*;
import app.infoSense.predicto.repository.StatisticsProvinceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.Tuple;
import java.math.BigDecimal;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class StatisticsProvinceService {

    @Autowired
    StatisticsProvinceRepository statisticsProvinceRepository;

    // data for a province, a structure and a provenance
    public List<DatiResponse> getData(long conts1, long conts2, Long eser, Long prov){
        List<Tuple> tuple=  statisticsProvinceRepository.getData(conts1,conts2,eser,prov);

        List<DatiResponse> response = tuple.stream().map(r-> new DatiResponse(
                r.get(0, Integer.class),
                r.get(1,Integer.class),
                r.get(2, Integer.class),
                r.get(3,String.class)
        )).collect(Collectors.toList());
        return response;
    }


    // same data but about two province
    public List<DatiResponseWithProvincia> getDataByTwoProvince(long conts1, long conts2, Long eser, Long prov1, Long prov2){
        List<Tuple> tpl = statisticsProvinceRepository.getDataTwoProvince(conts1,conts2,eser,prov1,prov2);

        List<DatiResponseWithProvincia> list = tpl.stream().map(r -> new DatiResponseWithProvincia(
                r.get(0,Integer.class),
                r.get(1,BigDecimal.class),
                r.get(2,String.class),
                r.get(3,String.class)
        )).collect(Collectors.toList());
        return list;
    }


// send all data structure in a precise year for a province
    public List<DatiResponseWithEsercizio> getDataForAYear(int anno,long const1, long const2, Long prov){
        List<Tuple> res = statisticsProvinceRepository.getDataForAYear(anno,const1,const2,prov);

        List<DatiResponseWithEsercizio> response = res.stream().map(r-> new DatiResponseWithEsercizio(
                r.get(0, Integer.class),
                r.get(1, BigDecimal.class),
                r.get(2, String.class),
                r.get(3,String.class)
        )).collect(Collectors.toList());
        return response;
    }


}

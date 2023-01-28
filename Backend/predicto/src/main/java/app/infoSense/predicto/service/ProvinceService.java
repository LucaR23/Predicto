package app.infoSense.predicto.service;


import app.infoSense.predicto.repository.ProvinceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class ProvinceService {
    @Autowired
    ProvinceRepository provinceRepository;

    public List<String> findNameProvince(){ return provinceRepository.findNameProvince();}

    public Long findIdByName(String nome){
        return provinceRepository.findIdProvinceByName(nome);
    }

    public boolean existsByName(String nome){
        return provinceRepository.existsByName(nome);
    }
}

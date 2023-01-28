package app.infoSense.predicto.service;

import app.infoSense.predicto.repository.StructureRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StructureService {
    @Autowired
    StructureRepository structureRepository;

    public Long findIdByStructureName(String name){
        return structureRepository.findIdStructureByStructureName(name);
    }

    public List<String> findStructureName(){
        return structureRepository.findStructureName();
    }

    public boolean existsByStructureName(String eser){ return structureRepository.existsByStructureName(eser);}
}

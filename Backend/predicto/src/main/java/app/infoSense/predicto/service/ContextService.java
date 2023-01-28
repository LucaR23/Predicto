package app.infoSense.predicto.service;

import app.infoSense.predicto.repository.ContextRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContextService {

    @Autowired
    ContextRepository contextRepository;

    public Long[] findByNation(String nation){
        return contextRepository.findByNation(nation);
    }
   public boolean existsByNation(String naz){
        return contextRepository.existsByNation(naz);
    }


}

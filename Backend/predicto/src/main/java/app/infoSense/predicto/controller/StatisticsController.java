package app.infoSense.predicto.controller;

import app.infoSense.predicto.payload.response.*;
import app.infoSense.predicto.service.ContextService;
import app.infoSense.predicto.service.StructureService;
import app.infoSense.predicto.service.ProvinceService;
import app.infoSense.predicto.service.StatisticsProvinceService;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.*;
import java.util.List;


@RestController
@RequestMapping("/statistics")
@Validated
public class StatisticsController {

    @Autowired
    ProvinceService provinceService;
    @Autowired
    StructureService structureService;
    @Autowired
    ContextService contextService;
    @Autowired
    StatisticsProvinceService statisticsProvinceService;

    @Operation(description = "API that return a list of province")
    @GetMapping("/province")
    public ResponseEntity<?> getProvince() {
        List<String> list = provinceService.findNameProvince();
        if (list.isEmpty()) {
            return new ResponseEntity<>("Empty List", HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<List<String>>(list, HttpStatus.OK);
    }

    @Operation(description = "API that return a list of structure")
    @GetMapping("/structures")
    public ResponseEntity<?> getStructure() {
        List<String> list = structureService.findStructureName();
        if (list.isEmpty()) {
            return new ResponseEntity<String>("Empty list", HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    @Operation(description = "send data that correspond at a given region, a structure and a provenance")
    @GetMapping("/{province}/{structure}/{provenance}")
    public ResponseEntity<?> getDataProvince(@PathVariable @NotBlank @Size(min = 3, max = 20) String province, @PathVariable @NotBlank @Size(min = 3, max = 25) String structure, @PathVariable("provenance") @NotBlank @Size(min = 4, max = 15) String from) {

        boolean c = provinceService.existsByName(province);
        boolean b = structureService.existsByStructureName(structure);
        boolean p = contextService.existsByNation(from);

        if (!c || !b || !p) {
            return new ResponseEntity<>("Incorrect data", HttpStatus.BAD_REQUEST);
        }
        Long idProv = provinceService.findIdByName(province);
        Long idEser = structureService.findIdByStructureName(structure);
        Long[] arr = contextService.findByNation(from);

        List<DatiResponse> list = statisticsProvinceService.getData(arr[0], arr[1], idEser, idProv);
        return new ResponseEntity<>(list, HttpStatus.OK);
    }


    @Operation(description = "API that send data by a given structure and a provenance about two province in order to compare it")
    @GetMapping("compare/{prov1}/{prov2}/{structure}/{provenance}")
    public ResponseEntity<?> getDataWithTwoProvince(@PathVariable @NotBlank @Size(min = 3, max = 20) String prov1, @PathVariable @NotBlank @Size(min = 3, max = 20) String prov2, @PathVariable @NotBlank @Size(min = 3, max = 25) String structure, @PathVariable("provenance") @NotBlank @Size(min = 4, max = 15) String from) {

        boolean c = provinceService.existsByName(prov1);
        boolean p2 = provinceService.existsByName(prov2);
        boolean b = structureService.existsByStructureName(structure);
        boolean p = contextService.existsByNation(from);

        if (!c || !b || !p || !p2) {
            return new ResponseEntity<>("Incorrect data", HttpStatus.BAD_REQUEST);
        }
        Long idProv = provinceService.findIdByName(prov1);
        Long idProv2 = provinceService.findIdByName(prov2);
        Long idEser = structureService.findIdByStructureName(structure);
        Long[] arr = contextService.findByNation(from);
        List<DatiResponseWithProvincia> list = statisticsProvinceService.getDataByTwoProvince(arr[0], arr[1], idEser, idProv, idProv2);
        return new ResponseEntity<>(list, HttpStatus.OK);
    }

    @Operation(description = "An api that send data about value in all structure in a specific year")
    @GetMapping("/year/{province}/{provenance}/{year}")
    public ResponseEntity<?> getDataByAYear(@PathVariable @NotBlank @Size(min = 3, max = 20) String province, @PathVariable("provenance") @NotBlank @Size(min = 4, max = 15) String from, @PathVariable @NotNull @Min(2000) @Max(2025) int year) {

        boolean c = provinceService.existsByName(province);
        boolean p = contextService.existsByNation(from);

        if (!c || !p) {
            return new ResponseEntity<>("Incorrect data", HttpStatus.BAD_REQUEST);
        }
        Long idProv = provinceService.findIdByName(province);
        Long[] arr = contextService.findByNation(from);

        List<DatiResponseWithEsercizio> list = statisticsProvinceService.getDataForAYear(year, arr[0], arr[1], idProv);
        return new ResponseEntity<>(list, HttpStatus.OK);

    }


}

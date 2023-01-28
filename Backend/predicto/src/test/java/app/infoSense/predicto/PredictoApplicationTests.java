package app.infoSense.predicto;

import app.infoSense.predicto.controller.StatisticsController;
import app.infoSense.predicto.entity.*;
import app.infoSense.predicto.payload.response.DatiResponse;
import app.infoSense.predicto.service.ContextService;
import app.infoSense.predicto.service.StructureService;
import app.infoSense.predicto.service.ProvinceService;
import app.infoSense.predicto.service.StatisticsProvinceService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(StatisticsController.class)
@RunWith(SpringRunner.class)
public class PredictoApplicationTests {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private StatisticsProvinceService statisticsProvinceService;

    @MockBean
    private ProvinceService provinceService;

    @MockBean
    private StructureService structureService;

    @MockBean
    private ContextService contextService;

    @Test
    public void testApiListProvince() throws Exception {

        Region r = new Region(1L,"Piemonte");
       ArrayList<Province> provinceTest = new ArrayList<>();
       provinceTest.add(Province.builder().idRegion(r).idProvince(1L).name("Torino").build());
       provinceTest.add(Province.builder().idRegion(r).idProvince(2L).name("Alessandria").build());
       provinceTest.add(Province.builder().idRegion(r).idProvince(3L).name("Genova").build());

       List<String>  expected = new ArrayList<>();
       expected.add("Torino");
       expected.add("Alessandria");
       expected.add("Genova");
       given(provinceService.findNameProvince()).willReturn(expected);

        ResultActions response = mockMvc.perform(get("/statistics/province")
                .contentType(MediaType.APPLICATION_JSON)).andExpect(status().isOk());
    }

    @Test
    public void testApiListStructures() throws Exception{

        List<Structure> eserciciTest = new ArrayList<>();
        eserciciTest.add(Structure.builder().idStructure(1L).structureName("albergo").build());
        eserciciTest.add(Structure.builder().idStructure(2L).structureName("campeggio").build());

        List<String> expected = new ArrayList<>();
        expected.add("albergo");
        expected.add("campeggio");

        given(structureService.findStructureName()).willReturn(expected);

        ResultActions resultActions = mockMvc.perform(get("/statistics/structures")
                .contentType(MediaType.APPLICATION_JSON)).andExpect(status().isOk());
    }

    @Test
    public void testApiGetDataProvince() throws Exception{

        List<StatisticsProvince> list = new ArrayList<>();

        Region r = new Region(1L,"Piemonte");
        Province p = new Province(1L,"torino",r);
        Context c  = new Context(1L,"arrivo","Italia");
        Context c1 = new Context(3L,"presenza","Italia");
        Structure e = new Structure(1L,"campsite");

        list.add(StatisticsProvince.builder().id(1L).value(1234).year(2021).month(1).idContext(c).idStructure(e).idProvince(p).build());
        list.add(StatisticsProvince.builder().id(2L).value(1234).year(2021).month(1).idContext(c).idStructure(e).idProvince(p).build());

        List<DatiResponse> response = new ArrayList<>() ;
        DatiResponse d = new DatiResponse(2021,1,1234,"arrivo");
        DatiResponse d1 = new DatiResponse(2021,1,1234,"presenza");
        response.add(d);
        response.add(d1);
        given(statisticsProvinceService.getData(1L,3L,1L,1L)).willReturn(response);

        String prov = "torino";
        String structure = "campsite";
        String provenance = "italia";
        ResultActions resultActions = mockMvc.perform(get("/statistics/{prov}/{structure}/{provenance}",prov,structure,provenance)
                .contentType(MediaType.APPLICATION_JSON)).andExpect(status().isOk());
    }

    @Test
    public void testGetDataByAYear() throws Exception{

    }

    public void testGetDataWithTwoProvince() throws Exception{

    }


}

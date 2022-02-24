package com.job.eObrazci;

import com.job.eObrazci.model.Izpit;
import com.job.eObrazci.model.Obrazec;
import com.job.eObrazci.service.IzpitiService;
import com.job.eObrazci.service.ObrazciService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;


@CrossOrigin
@RestController
@RequestMapping("/obrazec")
public class ObrazecResource {
    private final ObrazciService obrazciService;
    private final IzpitiService izpitiService;

    public ObrazecResource(ObrazciService obrazciService, IzpitiService izpitiService) {
        this.obrazciService = obrazciService;
        this.izpitiService = izpitiService;
    }


    @GetMapping("/all")
    public ResponseEntity<List<Obrazec>> getAllObrazec () {
        List<Obrazec> obrazci = obrazciService.findAllObrazci();
        return new ResponseEntity<>(obrazci, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Obrazec> getObrazecById (@PathVariable("id") Long id) {
        Obrazec obrazec = obrazciService.findObrazecById(id);
        return new ResponseEntity<>(obrazec, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Obrazec> addObrazec(@RequestBody Obrazec obrazec) {
        Obrazec novObrazec = obrazciService.addObrazec(obrazec);
        return new ResponseEntity<>(novObrazec, HttpStatus.CREATED);
    }

    @PutMapping("find/{id}/add")
    public ResponseEntity<Obrazec> addIzpit(@RequestBody Izpit izpit, @PathVariable("id") Long id) {
        if(obrazciService.obrazecExists(id)) {
            Izpit novIzpit = izpitiService.addIzpit(izpit);
            Obrazec novObrazec = obrazciService.updateObrazec(novIzpit, id);
            return new ResponseEntity<>(novObrazec, HttpStatus.CREATED);
        }

        return null;
    }

    @DeleteMapping("find/{id}/delete/{idd}")
    public ResponseEntity<?> deleteIzpit(@PathVariable("id") Long id, @PathVariable("idd") Long idd) {

        Obrazec obrazec = obrazciService.findObrazecById(id);
        Izpit izpit = izpitiService.findIzpitById(idd);


         if(obrazec.hasIzpit(idd)) {
            obrazciService.deleteIzpit(obrazec, izpit);
            izpitiService.deleteIzpit(idd);
            return new ResponseEntity<>(HttpStatus.OK);
         }



        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @PutMapping ("/update/{id}")
    public ResponseEntity<Obrazec> updateObrazec(@RequestBody Obrazec obrazec, @PathVariable("id") Long id) {
        Obrazec novObrazec = obrazciService.updateObrazec(obrazec, id);
        return new ResponseEntity<>(novObrazec, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteObrazec(@PathVariable("id") Long id) {
        obrazciService.deleteObrazec(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }


}

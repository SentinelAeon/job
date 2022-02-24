package com.job.eObrazci.service;

import com.job.eObrazci.exception.ObrazecNotFoundException;
import com.job.eObrazci.model.Izpit;
import com.job.eObrazci.model.Obrazec;
import com.job.eObrazci.repository.ObrazciRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class ObrazciService {
    private final ObrazciRepository obrazciRepository;

    @Autowired
    public ObrazciService(ObrazciRepository obrazciRepository) {
        this.obrazciRepository= obrazciRepository;
    }

    public Obrazec addObrazec(Obrazec obrazec) {
        return obrazciRepository.save(obrazec);
    }

    public List<Obrazec> findAllObrazci() {
        return obrazciRepository.findAll();
    }

    public Obrazec updateObrazec(Obrazec obrazec, Long id) {
        Obrazec tempObrazec = obrazciRepository.findById(id).orElse(null);

        if(tempObrazec == null) return null;

        tempObrazec.setIme(obrazec.getIme());
        tempObrazec.setPriimek(obrazec.getPriimek());
        tempObrazec.setImeUlice(obrazec.getImeUlice());
        tempObrazec.setStevilkaUlice(obrazec.getStevilkaUlice());
        tempObrazec.setPostnaStevilka(obrazec.getPostnaStevilka());
        tempObrazec.setKraj(obrazec.getKraj());
        tempObrazec.setDrzava(obrazec.getDrzava());
        tempObrazec.setSpol(obrazec.getSpol());

        return obrazciRepository.save(tempObrazec);

    }

    public boolean obrazecExists(Long id) {

        if(obrazciRepository.findById(id).orElse(null) == null) return false;

        return true;

    }



    public Obrazec updateObrazec(Izpit izpit, Long id) {

        Obrazec tempObrazec = obrazciRepository.findById(id).orElse(null);
        if(tempObrazec == null) return null;

        List<Izpit> tempIzpiti = tempObrazec.getIzpiti();
        tempIzpiti.add(izpit);
        tempObrazec.setIzpiti(tempIzpiti);

        return obrazciRepository.save(tempObrazec);

    }

    @Transactional
    public void deleteObrazec(Long id) {
        obrazciRepository.deleteObrazecById(id);

    }

    @Transactional
    public void deleteIzpit(Obrazec obrazec, Izpit izpit) {

        obrazec.getIzpiti().remove(izpit);


    }



    public Obrazec findObrazecById(Long id) {
        return obrazciRepository.findObrazecById(id).orElseThrow(() -> new ObrazecNotFoundException("Obrazec not found"));
    }


}

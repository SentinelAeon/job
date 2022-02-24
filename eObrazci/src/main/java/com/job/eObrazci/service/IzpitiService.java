package com.job.eObrazci.service;


import com.job.eObrazci.exception.IzpitNotFoundException;
import com.job.eObrazci.exception.ObrazecNotFoundException;
import com.job.eObrazci.model.Izpit;
import com.job.eObrazci.model.Obrazec;
import com.job.eObrazci.repository.IzpitiRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class IzpitiService {
    private final IzpitiRepository izpitiRepository;

    @Autowired
    public IzpitiService(IzpitiRepository izpitiRepository) {
        this.izpitiRepository= izpitiRepository;
    }

    public Izpit addIzpit(Izpit izpit) {
        return izpitiRepository.save(izpit);
    }

    public Izpit findIzpitById(Long id) {
        return izpitiRepository.findIzpitById(id).orElseThrow(() -> new IzpitNotFoundException("Izpit not found"));
    }

    @Transactional
    public void deleteIzpit(Long id) {

        izpitiRepository.deleteIzpitById(id);
    }



    public List<Izpit> findAllIzpiti() {
        return izpitiRepository.findAll();
    }

}




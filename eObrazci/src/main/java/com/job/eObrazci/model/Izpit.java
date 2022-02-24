package com.job.eObrazci.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
public class Izpit implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String naziv;
    private String datum;
    private int ocena;

    public Izpit() {}

    public Izpit(Long id, String naziv, String datum, int ocena) {
        this.naziv = naziv;
        this.datum = datum;
        this.ocena = ocena;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNaziv() {
        return naziv;
    }

    public void setNaziv(String naziv) {
        this.naziv = naziv;
    }

    public String getDatum() {
        return datum;
    }

    public void setDatum(String datum) {
        this.datum = datum;
    }

    public int getOcena() {
        return ocena;
    }

    public void setOcena(int ocena) {
        this.ocena = ocena;
    }

}

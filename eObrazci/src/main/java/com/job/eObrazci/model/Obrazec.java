package com.job.eObrazci.model;

import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
public class Obrazec implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String ime;
    private String priimek;
    private String imeUlice;
    private int stevilkaUlice;
    private int postnaStevilka;
    private String kraj;
    private String drzava;
    private String spol;

    @OneToMany(cascade = CascadeType.ALL)
    //@OneToMany
    private List<Izpit> izpiti;

    public Obrazec() {}

    public Obrazec(Long id, String ime, String priimek, String imeUlice, int stevilkaUlice, int postnaStevilka, String kraj, String drzava, String spol, List<Izpit> izpiti) {

       this.ime = ime;
       this.priimek = priimek;
       this.imeUlice = imeUlice;
       this.stevilkaUlice = stevilkaUlice;
       this.postnaStevilka = postnaStevilka;
       this.kraj = kraj;
       this.drzava = drzava;
       this.spol = spol;
       this.izpiti = izpiti;

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getIme() {
        return ime;
    }

    public void setIme(String ime) {
        this.ime = ime;
    }

    public String getPriimek() {
        return priimek;
    }

    public void setPriimek(String priimek) {
        this.priimek = priimek;
    }

    public String getImeUlice() {
        return imeUlice;
    }

    public void setImeUlice(String imeUlice) {
        this.imeUlice = imeUlice;
    }

    public int getStevilkaUlice() {
        return stevilkaUlice;
    }

    public void setStevilkaUlice(int stevilkaUlice) {
        this.stevilkaUlice = stevilkaUlice;
    }

    public int getPostnaStevilka() {
        return postnaStevilka;
    }

    public void setPostnaStevilka(int postnaStevilka) {
        this.postnaStevilka = postnaStevilka;
    }

    public String getKraj() {
        return kraj;
    }

    public void setKraj(String kraj) {
        this.kraj = kraj;
    }

    public String getDrzava() {
        return drzava;
    }

    public void setDrzava(String drzava) {
        this.drzava = drzava;
    }

    public String getSpol() {
        return spol;
    }

    public void setSpol(String spol) {
        this.spol = spol;
    }

    public List<Izpit> getIzpiti() {
        return izpiti;
    }

    public void setIzpiti(List<Izpit> izpiti) {
        this.izpiti = izpiti;
    }

    public void addIzpit(Izpit izpit) {
        this.izpiti.add(izpit);
    }

    public boolean hasIzpit(Long idd) {

        for(Izpit i : this.izpiti) {
           // if(idd == i.getId()) {
            if(idd.equals(i.getId())) {
                    System.out.println("test");
                    return true;
                }
            }
             return false;
        }





}

package com.job.eObrazci.repository;

import com.job.eObrazci.model.Izpit;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface IzpitiRepository extends JpaRepository<Izpit, Long> {


    void deleteIzpitById(Long id);

    Optional<Izpit> findIzpitById(Long id);
}

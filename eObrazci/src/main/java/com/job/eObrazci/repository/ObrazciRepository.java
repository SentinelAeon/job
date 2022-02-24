package com.job.eObrazci.repository;

import com.job.eObrazci.model.Obrazec;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ObrazciRepository extends JpaRepository<Obrazec, Long> {

    void deleteObrazecById(Long id);

    Optional<Obrazec> findObrazecById(Long id);
}

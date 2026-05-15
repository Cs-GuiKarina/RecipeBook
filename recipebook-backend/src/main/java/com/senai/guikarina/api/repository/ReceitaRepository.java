package com.senai.guikarina.api.repository;

import com.senai.guikarina.api.entity.Receita;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ReceitaRepository extends JpaRepository<Receita,Long> {
    public Optional<Receita> findByNome(String nome);
}

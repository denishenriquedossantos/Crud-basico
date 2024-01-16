package com.springangular.spring;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface Repositorio extends JpaRepository<Produto, Long> {
    @Query(value = "SELECT * FROM produto p WHERE p.nome = ?1 OR p.marca = ?1 OR p.categoria = ?1", nativeQuery = true)
    List<Produto> findByString(String word);

    @Query(value = "SELECT * FROM produto p WHERE p.id = ?1", nativeQuery = true)
    List<Produto> findByIdCustom(Long id);
}

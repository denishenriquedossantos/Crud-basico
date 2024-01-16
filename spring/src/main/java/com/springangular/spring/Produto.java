package com.springangular.spring;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
//Gera Getters, métodos ToString e construtores da classe
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class Produto {
    @Id
    @GeneratedValue
    private Long id;
    private String nome;
    private String marca;
    private String categoria;
    private Float preco;
}

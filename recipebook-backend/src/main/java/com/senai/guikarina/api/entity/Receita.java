package com.senai.guikarina.api.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Digits;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "TB_RECEITA")
public class Receita {
    //Colunas
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotNull
    @Size(min = 3)
    @Column(unique = true)
    private String nome;

    //RN04: Categoria deve ser um dos valores do enum
    @NotNull
    @Enumerated(EnumType.STRING)
    private Categoria categoria;

    //RN05: Tempo de preparo em minutos (mínimo 1)
    @NotNull
    @Min(1)
    private Integer tempoPreparo;

    //RN06: Porções mínimo 1
    @NotNull
    @Min(1)
    private Integer porcoes;

    //RN03: Ingredientes devem ser armazenados como lista
    @NotNull
    @Size(min = 1)
    private List<String>  ingredientes;

    @NotNull
    @Lob
    @Size(min = 10)
    private String modoPreparo;

    private LocalDateTime dataCadastro;
    //RN02: Data de cadastro deve ser preenchida automaticamente
    @PrePersist
    public void prePersist(){
        this.dataCadastro = LocalDateTime.now();
    }

    public Receita(){}

    public LocalDateTime getDataCadastro() {
        return dataCadastro;
    }
    public void setDataCadastro(LocalDateTime dataCadastro) {
        this.dataCadastro = dataCadastro;
    }

    public String getModoPreparo() {
        return modoPreparo;
    }
    public void setModoPreparo(String modoPreparo) {
        this.modoPreparo = modoPreparo;
    }

    public List<String> getIngredientes() {
        return ingredientes;
    }
    public void setIngredientes(List<String> ingredientes) {
        this.ingredientes = ingredientes;
    }

    public Integer getPorcoes() {
        return porcoes;
    }
    public void setPorcoes(Integer porcoes) {
        this.porcoes = porcoes;
    }

    public Integer getTempoPreparo() {
        return tempoPreparo;
    }
    public void setTempoPreparo(Integer tempoPreparo) {
        this.tempoPreparo = tempoPreparo;
    }

    public Categoria getCategoria() {
        return categoria;
    }
    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }

    public String getNome() {
        return nome;
    }
    public void setNome(String nome) {
        this.nome = nome;
    }

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
}

package com.senai.guikarina.api.controller;

import com.senai.guikarina.api.entity.Receita;
import com.senai.guikarina.api.service.ReceitaService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/receitas")
public class ReceitaController {
    private final ReceitaService receitaService;

    public ReceitaController(ReceitaService receitaService) {
        this.receitaService = receitaService;
    }

    //1- Endpoint 1: Listar Receitas retorna 204 caso lista vazia
    @GetMapping
    public ResponseEntity<List<Receita>> listar(){
        List<Receita> receitas = receitaService.listar();
        if (receitas.isEmpty()){
            return ResponseEntity.status(204).body(receitas);
        }
        return ResponseEntity.ok(receitas);
    }
    //2- Endpoint 2: Buscar por ID retorna 404 caso id inválido
    @GetMapping("/{id}")
    public ResponseEntity<Receita> buscarPorId(@PathVariable Long id){
        Receita receita = receitaService.buscarPorId(id);

        if (receita == null){
            return ResponseEntity.status(404).build();
        }
        return ResponseEntity.ok(receita);
    }
    //3- Endpoint 3: Criar Receita retorna 400 caso nome repetido
    @PostMapping
    public ResponseEntity<Receita> criar(@RequestBody @Valid Receita receita) {
        Receita receitaCriada = receitaService.criar(receita);
        if (receitaCriada == null){
            return ResponseEntity.status(400).build();
        }
        return ResponseEntity.status(201).body(receitaCriada);
    }
    //Endpoint 4: Excluir Receita retorna 404 caso id inválido
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluir(@PathVariable Long id){
        if (receitaService.deletar(id)){
            return ResponseEntity.status(204).build();
        }
        return ResponseEntity.status(404).build();
    }
    //Endpoint 5: Filtrar receita (case insensitive), pelo título da receita, retorna 204 caso lista vazia
    @GetMapping("/filtro")
    public ResponseEntity<List<Receita>> filtrar(@RequestParam(name = "filtro", defaultValue = "") String filtro){
        List<Receita> filtrados = receitaService.filtrar(filtro);

        if (filtrados.isEmpty()){
            return ResponseEntity.status(204).body(filtrados);
        }
        return  ResponseEntity.ok(filtrados);
    }

}

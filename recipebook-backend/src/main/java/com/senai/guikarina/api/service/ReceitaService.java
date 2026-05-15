package com.senai.guikarina.api.service;


import com.senai.guikarina.api.entity.Receita;
import com.senai.guikarina.api.repository.ReceitaRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReceitaService {

    private final ReceitaRepository receitaRepository;

    public ReceitaService(ReceitaRepository receitaRepository) {
        this.receitaRepository = receitaRepository;
    }


    //Cadastrar
    /*
     *  3- exibir mensagens de erro por campo - front
     *  5- após salvar redirecionar para listagem - front
     */
    public Receita criar(Receita receita){
        //RN01: Nome da receita deve ser único no sistema
        if(nomeRepetido(receita.getNome())){
            return null;
        }
        return receitaRepository.save(receita);
    }

    public boolean nomeRepetido(String nome){
        return receitaRepository.findByNome(nome).isPresent();
    }

    //Listar
    /*
     *  1- exibir nome categoria e tempo de preparo - enviar tudo pro front
     *  2- ordenar receitas por data de cadastro (recentes primeiro) - sort antes de enviar
     *  3- exibir mensagem de erro quando lista vazia - codigo de resposta 204
     */
    public List<Receita> listar(){
        return receitaRepository.findAll().stream().sorted((r1, r2) -> r2.getDataCadastro().compareTo(r1.getDataCadastro())).toList();
    }

    //Buscar
    /*
     *  1- Campo de busca no topo da listagem - front
     *  2- filtro case-insensitive - back end recebe e trata a busca transformando em lower e procurando por lower
     *  3- busca em tempo real - front
     *  4- exibir apenas receitas com o termo buscado no nome! - front
     */
    public List<Receita> filtrar(String filtro) {
        List<Receita> receitas = receitaRepository.findAll(); // recipeRepository.getAll()

        final String filtroFinal = filtro.toLowerCase();

        return receitas.stream().filter(recipe -> recipe.getNome().toLowerCase().contains(filtroFinal)).toList();
    }

    public Receita buscarPorId(Long id){
        return receitaRepository.findById(id).orElse(null);
    }


    //Excluir
    /*
     *  1- solicitar confirmação - front
     *  2- após excluir redirecionar para listagem - front
     *  3- exibir mensagem de sucesso - enviar 204 caso tudo certo 404 caso id null
     *  4- remover receita do banco - remover caso retorne 204
     */
    public boolean deletar(Long id){
        Receita receitaExistente = receitaRepository.findById(id).orElse(null);

        if (receitaExistente != null){
            receitaRepository.deleteById(id);
            return true;
        }
        return false;
    }
}

package com.springangular.spring;

import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/produtos")
public class ProdutoController {

    @Autowired
    private Repositorio repositorio;

    @GetMapping
    public List<Produto> listarTodos(){
        return repositorio.findAll();
    }

    @GetMapping("/id/{id}")
    public List<Produto> listaId(@PathVariable Long id) {
        return repositorio.findByIdCustom(id);
    }

    @GetMapping("/busca/{palavra}")
    public List<Produto> listarPalavra(@PathVariable String palavra) {
        return repositorio.findByString(palavra);
    }

    @Transactional
    @PostMapping
    public void adicionar(@RequestBody Produto produto) {
        repositorio.save(produto);
    }

    @Transactional
    @PutMapping
    public void atualizar(@RequestBody Produto produto) {
        repositorio.save(produto);
    }

    @Transactional
    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Long id) {
        repositorio.deleteById(id);
    }
}

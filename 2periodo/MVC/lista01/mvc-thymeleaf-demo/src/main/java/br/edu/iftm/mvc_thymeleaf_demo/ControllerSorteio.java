package br.edu.iftm.mvc_thymeleaf_demo;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@Controller
public class ControllerSorteio {

    @GetMapping("/")
    public String paginaInicial() {
        return "sorteio";
    }

    @GetMapping("/sortear")
    public String sortearNumeros(Model model) {
        // Lógica de sorteio
        List<Integer> lista = IntStream.rangeClosed(1, 60).boxed().collect(Collectors.toList());
        Collections.shuffle(lista);
        List<Integer> sorteados = lista.stream().limit(6).sorted().collect(Collectors.toList());

        // Criando o objeto da classe Sorteio
        Sorteio sorteio = new Sorteio(sorteados);

        model.addAttribute("resultado", sorteio);
        return "sorteio";
    }
}
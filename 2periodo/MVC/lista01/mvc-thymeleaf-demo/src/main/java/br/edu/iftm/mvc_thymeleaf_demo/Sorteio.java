package br.edu.iftm.mvc_thymeleaf_demo;

import java.util.List;

public class Sorteio {
    
    private List<Integer> numeros;

    public Sorteio(List<Integer> numeros) {
        this.numeros = numeros;
    }

    public List<Integer> getNumeros() {
        return numeros;
    }

    public void setNumeros(List<Integer> numeros) {
        this.numeros = numeros;
    }
}
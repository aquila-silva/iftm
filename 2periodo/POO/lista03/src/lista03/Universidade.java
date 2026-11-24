package src.lista03;

import java.util.ArrayList;

public class Universidade {
    private String nome;
    private ArrayList<Departamento> departamentos = new ArrayList<>();

    public Universidade(String nome) {
        this.nome = nome;
    }

    public String getNome() {
        return nome;
    }

    public void criaDepto(String nome, String localizacao) {
        departamentos.add(new Departamento(nome, localizacao));
    }

    public ArrayList<Departamento> getDepartamentos() {
        return new ArrayList<>(departamentos);
    }

    public String exibe() {
        StringBuilder resultado = new StringBuilder("\\n================================\nUniversidade: ").append(nome);

        if (departamentos.isEmpty()) {
            resultado.append("\nNenhum departamento cadastrado.");
        } else {
            resultado.append("\n================================");
            resultado.append("\nDepartamentos:");
            for (Departamento departamento : departamentos) {
                resultado.append("\n- ").append(departamento.getNome())
                        .append(" (Localização: ").append(departamento.getLocalizacao()).append(")");
            }
        }

        return resultado.toString();
    }
}

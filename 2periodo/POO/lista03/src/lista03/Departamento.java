package src.lista03;

public class Departamento {
    private String nome;
    private String localizacao;

    public Departamento(String nome, String localizacao) {
        this.nome = nome;
        this.localizacao = localizacao;
    }

    public String getNome() {
        return nome;
    }

    public String getLocalizacao() {
        return localizacao;
    }

    public String exibe() {
        return String.format("Departamento: %s\nLocalização: %s", nome, localizacao);
    }
}

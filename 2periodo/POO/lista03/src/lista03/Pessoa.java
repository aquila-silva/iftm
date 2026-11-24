package src.lista03;

public class Pessoa {
    private String nome;
    private Universidade universidade;
    private String local;

    public Pessoa(String nome) {
        this.nome = nome;
    }

    public Pessoa(String nome, Universidade universidade, String local) {
        this.nome = nome;
        this.universidade = universidade;
        this.local = local;
    }
    
    public String getLocal() {
        return local;
    }

    public String getNome() {
        return nome;
    }

    public Universidade getUniversidade() {
        return universidade;
    }

    public void setUniversidade(Universidade universidade) {
        this.universidade = universidade;
    }

    public String exibe() {
        if (universidade == null) {
            return String.format("Pessoa: %s", nome);
        }

        return String.format("Pessoa: %s\nUniversidade: %s\nDepartamento: %s", nome, universidade.getNome(), local);
    }
}

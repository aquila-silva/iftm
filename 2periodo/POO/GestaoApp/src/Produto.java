public class Produto {
    private String nome;
    private int quantidadeEstoque;
    private double precoUnitario;
    private boolean promocao;
    
    private static int totalProdutosCadastrados = 0;

    public Produto(String nome, int quantidadeInicial, double precoUnitario) {
        this.nome = nome;
        setQuantidadeEstoque(quantidadeInicial); 
        setPrecoUnitario(precoUnitario);         
        this.promocao = false;                   
        totalProdutosCadastrados++;
    }

    
    public void setQuantidadeEstoque(int quantidadeEstoque) {
        if (quantidadeEstoque < 0) {
            throw new IllegalArgumentException("A quantidade em estoque não pode ser negativa.");
        }
        this.quantidadeEstoque = quantidadeEstoque;
    }

    
    public void setPrecoUnitario(double precoUnitario) {
        if (precoUnitario <= 0) {
            throw new IllegalArgumentException("O preço unitário deve ser maior que zero.");
        }
        this.precoUnitario = precoUnitario;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getQuantidadeEstoque() {
        return quantidadeEstoque;
    }

    public double getPrecoUnitario() {
        return precoUnitario;
    }

    public boolean isPromocao() {
        return promocao;
    }

    public void setPromocao(boolean promocao) {
        this.promocao = promocao;
    }

    public static int getTotalProdutosCadastrados() {
        return totalProdutosCadastrados;
    }
}

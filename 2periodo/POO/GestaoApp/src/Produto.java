public class Produto {
    private String nome;
    private int quantidadeEstoque;
    private double precoUnitario;
    private boolean promocao;
    private static int totalProdutosCadastrados;

    public Produto(String nome, int quantidadeEstoqueInicial, double precoUnitario){
        this.nome = nome;
        this.quantidadeEstoque = quantidadeEstoqueInicial;
        this.precoUnitario = precoUnitario;
        totalProdutosCadastrados++;
    }

    public void setPrecoUnitario(double atualizaPreco ){

        if(atualizaPreco<=0)
            throw new IllegalArgumentException("Preço deve ser maior que zero");
        

        precoUnitario = atualizaPreco;
    }

    public void setQuantidadeEstoque(int atualizaQuantidade){

        if(atualizaQuantidade < 0)
            throw new IllegalArgumentException("Estoque deve ser maior ou igual a zero");

        quantidadeEstoque = atualizaQuantidade;
        
    }

    public int getQuantidadeEstoque(){
        return quantidadeEstoque;
    }
}

public class Vendas {
    private int quantidadeTotalVendida;
    private double valorTotalVenda;
    private static double totalVendasMes;

    public Vendas(int quantidadeTotalVendida){
        this.quantidadeTotalVendida = quantidadeTotalVendida;
        totalVendasMes++;
    }

    public boolean processarVenda(Produto produto){

        if(EstoqueUtil.temEstoqueDisponivel(produto.getQuantidadeEstoque(), )){

        }

        return true;
    }
}   

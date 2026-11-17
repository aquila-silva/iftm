public class Venda {
    private int quantidadeVendida;
    private double valorTotalVenda;
    
    private static double totalVendasMes = 0.0;

    public Venda(int quantidadeVendida) {
        this.quantidadeVendida = quantidadeVendida;
    }

    public boolean processarVenda(Produto produto) {
        if (produto == null) {
            return false;
        }

      
        if (!EstoqueUtil.temEstoqueDisponivel(produto.getQuantidadeEstoque(), this.quantidadeVendida)) {
            return false;
        }

        
        int novoEstoque = produto.getQuantidadeEstoque() - this.quantidadeVendida;
        produto.setQuantidadeEstoque(novoEstoque);

       
        double subtotal = this.quantidadeVendida * produto.getPrecoUnitario();

       
        if (produto.isPromocao() && this.quantidadeVendida >= 3) {
            this.valorTotalVenda = subtotal * 0.90;
        } else {
            this.valorTotalVenda = subtotal;
        }

        
        totalVendasMes += this.valorTotalVenda;

        return true;
    }

    public int getQuantidadeVendida() {
        return quantidadeVendida;
    }

    public double getValorTotalVenda() {
        return valorTotalVenda;
    }

    public static double getTotalVendasMes() {
        return totalVendasMes;
    }
}

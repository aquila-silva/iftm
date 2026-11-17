public class Venda {
    private int quantidadeVendida;
    private double valorTotalVenda;
    
    private static double totalVendasMes = 0.0;

    public Venda(int quantidadeVendida) {
        if (quantidadeVendida <= 0) {
            throw new IllegalArgumentException("A quantidade vendida deve ser maior que zero.");
        }
        this.quantidadeVendida = quantidadeVendida;
    }

    public boolean processarVenda(Produto produto) {
        // 1. Valida se o objeto recebido é nulo
        if (produto == null) {
            throw new IllegalArgumentException("Erro: Produto inválido (nulo).");
        }

        // 2. Verifica estoque; se não houver, lança exceção em vez de retornar false
        if (!EstoqueUtil.temEstoqueDisponivel(produto.getQuantidadeEstoque(), this.quantidadeVendida)) {
            throw new IllegalStateException("Erro: Estoque insuficiente para o produto " + produto.getNome());
        }

        // 3. Decrementa o estoque
        produto.setQuantidadeEstoque(produto.getQuantidadeEstoque() - this.quantidadeVendida);

        // 4. Calcula valor com regra de promoção (10% se promocao == true e qtd >= 3)
        double subtotal = this.quantidadeVendida * produto.getPrecoUnitario();
        if (produto.isPromocao() && this.quantidadeVendida >= 3) {
            this.valorTotalVenda = subtotal * 0.90;
        } else {
            this.valorTotalVenda = subtotal;
        }

        // 5. Atualiza faturamento mensal
        totalVendasMes += this.valorTotalVenda;

        return true;
    }

    public int getQuantidadeVendida() { return quantidadeVendida; }
    public double getValorTotalVenda() { return valorTotalVenda; }
    public static double getTotalVendasMes() { return totalVendasMes; }
}

public class App {
    public static void main(String[] args) {
        System.out.println("--- INICIALIZANDO SISTEMA DE ESTOQUE ---");
        System.out.println("Faturamento inicial do mês: " + EstoqueUtil.formatarMoeda(Venda.getTotalVendasMes()));
        System.out.println("----------------------------------------");

        Produto notebook = null;
        Produto teclado = null;
        Produto mouse = null;

       
        try {
            notebook = new Produto("Notebook Pro Ultra", 10, 42000.00);
            teclado = new Produto("Teclado Mecânico", 5, 546.00);
            mouse = new Produto("Mouse Sem Fio", 20, 189.00);
        } catch (IllegalArgumentException e) {
            System.out.println("Erro ao cadastrar produto: " + e.getMessage());
        }

      
        System.out.println("Tentando vender 2 Notebooks sem promoção...");
        executarVenda(new Venda(2), notebook);
        System.out.println("----------------------------------------");

        
        System.out.println("Tentando vender 6 Teclados (Estoque atual é " + teclado.getQuantidadeEstoque() + ")...");
        executarVenda(new Venda(6), teclado);
        System.out.println("----------------------------------------");

      
        System.out.println("Tentando vender 5 Mouses sem promoção...");
        mouse.setPromocao(false);
        executarVenda(new Venda(5), mouse);
        System.out.println("----------------------------------------");

      
        System.out.println("Tentando vender 5 Mouses com promoção...");
        mouse.setPromocao(true);
        executarVenda(new Venda(5), mouse);
        System.out.println("----------------------------------------");

       
        System.out.println("--- FECHAMENTO DO MÊS ---");
        System.out.println("Faturamento Total Acumulado: " + EstoqueUtil.formatarMoeda(Venda.getTotalVendasMes()));
    }
   
    private static void executarVenda(Venda venda, Produto produto) {
        try {
            if (venda.processarVenda(produto)) {
                System.out.println("Venda realizada com sucesso!");
                System.out.println("Item: " + produto.getNome());
                System.out.println("Qtd: " + venda.getQuantidadeVendida());
                System.out.println("Preço Unitário: " + EstoqueUtil.formatarMoeda(produto.getPrecoUnitario()));
                System.out.println("Promoção: " + (produto.isPromocao() ? "SIM" : "NÃO"));
                System.out.println("Total da Venda: " + EstoqueUtil.formatarMoeda(venda.getValorTotalVenda()));
            }
        } catch (IllegalStateException | IllegalArgumentException e) {
          
            System.out.println(e.getMessage());
        }
    }
}

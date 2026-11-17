public class App {
    public static void main(String[] args) {
        System.out.println("--- INICIALIZANDO SISTEMA DE ESTOQUE ---");
        System.out.println("Faturamento inicial do mês: " + EstoqueUtil.formatarMoeda(Venda.getTotalVendasMes()));
        System.out.println("----------------------------------------");

 
        Produto notebook = new Produto("Notebook", 10, 3500.00);
        Produto teclado = new Produto("Teclado Mecânico", 5, 250.00);
        Produto mouse = new Produto("Mouse Sem Fio", 20, 90.00);

        System.out.println("Tentando vender 2 Notebooks sem promoção...");
        Venda venda1 = new Venda(2);
        ExibirResultadoVenda(venda1, notebook);
        System.out.println("Estoque atual de " + notebook.getNome() + ": " + notebook.getQuantidadeEstoque());
        System.out.println("----------------------------------------");

       
        System.out.println("Tentando vender 6 Teclados (Estoque atual é " + teclado.getQuantidadeEstoque() + ")...");
        Venda venda2 = new Venda(6);
        ExibirResultadoVenda(venda2, teclado);
        System.out.println("----------------------------------------");

        System.out.println("Tentando vender 5 Mouses sem promoção...");
        mouse.setPromocao(false);
        Venda venda3 = new Venda(5);
        ExibirResultadoVenda(venda3, mouse);
        System.out.println("----------------------------------------");

     
        System.out.println("Tentando vender 5 Mouses com promoção...");
        mouse.setPromocao(true);
        Venda venda4 = new Venda(5);
        ExibirResultadoVenda(venda4, mouse);
        System.out.println("----------------------------------------");

       
        System.out.println("--- FECHAMENTO DO MÊS ---");
        System.out.println("Faturamento Total Acumulado: " + EstoqueUtil.formatarMoeda(Venda.getTotalVendasMes()));
    }

    private static void ExibirResultadoVenda(Venda venda, Produto produto) {
        if (venda.processarVenda(produto)) {
            System.out.println("Venda realizada com sucesso!");
            System.out.println("Item: " + produto.getNome());
            System.out.println("Qtd: " + venda.getQuantidadeVendida());
            System.out.println("Preço Unitário: " + EstoqueUtil.formatarMoeda(produto.getPrecoUnitario()));
            System.out.println("Promoção: " + (produto.isPromocao() ? "SIM" : "NÃO"));
            System.out.println("Total da Venda: " + EstoqueUtil.formatarMoeda(venda.getValorTotalVenda()));
        } else {
            System.out.println("Erro: Estoque insuficiente para o produto " + produto.getNome());
        }
    }
}

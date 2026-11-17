public class EstoqueUtil {

    private EstoqueUtil(){}

    public static boolean temEstoqueDisponivel(int estoqueAtual, int quantidadeDesejada){

        if(estoqueAtual<quantidadeDesejada)
            return false;
        
        return true;
    }

    public static String formatarMoeda(double valor){
        String base = String.format("%.2f", valor).replace(".", ",");

        String valorFormatado = "R$ " + base.replaceAll("(\\d)(?=(\\d{3})+(?!\\d))", "$1.");
        return valorFormatado;
    }
    

 
}

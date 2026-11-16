public class EstoqueUtil {

    private EstoqueUtil(){}

    public static boolean temEstoqueDisponivel(int estoqueAtual, int quantidadeDesejada){

        if(estoqueAtual<quantidadeDesejada)
            throw new IllegalArgumentException("Estoque do produto insuficiente");
        
        return true;
    }

    public static String formatarMoeda(double valor){
        
    }
    


}

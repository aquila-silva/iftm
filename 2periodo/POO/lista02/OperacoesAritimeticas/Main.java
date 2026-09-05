package OperacoesAritimeticas;

import java.util.Scanner;

public class Main {


    public static Scanner s = new Scanner(System.in);

    public static void menu() {
        int op = 0;
        while(op!= 5){

            System.out.println("----MENU----");
            System.out.println("1 - Adicao");
            System.out.println("2 - Subtracao");
            System.out.println("3 - Multiplicacao");
            System.out.println("4 - Divisao");
            System.out.println("5 - Sair");
            System.out.println("------------");

            op = s.nextInt();
        
            switch (op) {
                case 1:
                    adicao();
                    break;

                case 2:
                    subtracao();
                    break;

                case 3:
                    multiplicacao();
                    break;
                
                case 4:
                    divisao();
                    break;

                default:
                    break;
            }

        }

    }

    public static int leitura(int op) {
        if (op == 1) {
            System.out.println("Digite o primeiro numero");
            return op = s.nextInt();
        } else {
            System.out.println("Digite o segundo numero:");
            return op = s.nextInt();
        }
    }
    public static int loopOp() {
        System.out.println("------------");
        System.out.println("1 - Realizar novamente a operacao");
        System.out.println("0 - Retornar ao menu");
        int op = s.nextInt();
        System.out.println("------------");

        return op;
    }

    public static void adicao() {
        int op = 1;

        while (op != 0) {

            int n1 = leitura(1);
            int n2 = leitura(2);

            Adicao add = new Adicao(n1, n2);
            int resultado = add.soma();

            exibeAd(n1, n2, resultado);

            op = loopOp();

        }

    }
    public static void exibeAd(int n1, int n2, int resultado) {
        System.out.println("------------");
        System.out.printf("O resultado da soma de %d + %d é igual a: %d\n", n1, n2, resultado);
    }

    public static void subtracao(){
        int op = 1;
        while(op != 0){
            int n1 = leitura(1);
            int n2 = leitura(2);
            
            Subtracao sub = new Subtracao(n1, n2);
            int resultado = sub.menos();

            exibeSub(n1, n2, resultado);

            op = loopOp();
        }
    }
    public static void exibeSub(int n1, int n2, int resultado){
        System.out.println("------------");
        System.out.printf("O resultado da subtracao de %d - %d é igual a: %d\n", n1, n2, resultado);
    }
    
    public static void multiplicacao(){
        int op = 1;

        while(op != 0){
            int n1 = leitura(1);
            int n2 = leitura(2);

            Multiplica mult = new Multiplica(n1, n2);
            int resultado = mult.multiplica();

            exibemult(n1, n2, resultado);

            op = loopOp();
        }
    }
    public static void exibemult(int n1, int n2, int resultado){
        System.out.println("------------");
        System.out.printf("O resultado da multiplicacao de %d * %d é igual a: %d\n", n1, n2, resultado);
    }
    
    public static void divisao(){
        int op = 1;

        while(op != 0){

            int n1 = leitura(1);
            int n2 = leitura(2);

            Divisao div = new Divisao(n1, n2);
            double resultado = div.divisao();

            exibediv(n1, n2, resultado);
            op = loopOp();
        }
    }
    public static void exibediv(int n1, int n2, double resultado){
        System.out.println("------------");
        System.out.printf("O resultado da divisao de %d / %d é igual a: %.2f\n", n1, n2, resultado);
    }
    public static void main(String[] args) {
        menu();
    }

}


import java.util.Scanner;

public class Main {

    public static int op;
    public static Scanner s = new Scanner(System.in);

    public static void menu() {

        System.out.println("-------MENU-------");
        System.out.println("SELECIONE UMA OPÇÃO");
        System.out.println("1 - Comparar dois números inteiros");
        System.out.println("2 - Raiz de equação de segundo grau");
        System.out.println("3 - Media Aritmética entre dois inteiros");
        System.out.println("17 - Sair");
        System.out.println("------------------");

    }

    public static void selecionaMenu() {
        while (op != 17) {

            menu();

            op = s.nextInt();

            switch (op) {

                case 1:
                    primeiro();
                    break;

                case 2:
                    segundo();
                    break;

                case 3:
                    terceiro();
                    break;
            }

        }
    }


    public static int le1(int n) {
        if (n == 1) {
            System.out.println("Digite o primeiro número:");
            n = s.nextInt();
        } else if (n == 2) {
            System.out.println("Digite o segundo número:");
            n = s.nextInt();
        }
        return n;
    }

    public static void compara1(int a, int b) {
        if (a > b) {
            System.out.println("------------------\nO número " + a + " é MAIOR que " + b); 
        }else if (a < b) {
            System.out.println("------------------\nO número " + a + " é MENOR que " + b); 
        }else if (a == b) {
            System.out.println("------------------\nOs dois números possuem o mesmo valor");
        }
    }

    public static void primeiro() {
        int op1, n1, n2;

        op1 = 1;
        while (op1 == 1) {
            n1 = le1(1);
            n2 = le1(2);

            compara1(n1, n2);

            System.out.println("------------------");
            System.out.println("digite 1 para comparar novos números\nou\ndigite 0 para voltar ao menu");

            op1 = s.nextInt();

            while (op1 != 1 && op1 != 0) {
                System.out.print("opção inválida, digite novamente: ");
                op1 = s.nextInt();
                System.out.println();
            }

        }

    }


    public static double le2(double a) {
        if (a == 1) {
            System.out.println("digite o valor de A (deve ser diferente de zero): ");
            a = s.nextInt();

            while (a == 0) {
                System.out.print("valor invalido, digite novamente: ");
                a = s.nextDouble();
            }

        } else if (a == 2) {
            System.out.println("digite o valor de B: ");
            a = s.nextDouble();

        } else if (a == 3) {
            System.out.println("digite o valor de C: ");
            a = s.nextDouble();
        }
        return a;
    }

    public static double delta(double a, double b, double c) {
        double d = Math.pow(b, 2) - 4 * a * c;
        return d;

    }

    public static double raiz1(double b, double d, double a) {
        double x1 = ((b * -1.0) + Math.sqrt(d)) / (2 * a);
        return x1;
    }

    public static double raiz2(double b, double d, double a) {
        double x2 = ((b * -1) - Math.sqrt(d)) / (2 * a);
        return x2;
    }

    public static void segundo() {
        int op2 = 1;

        double a, b, c, d, x1, x2;
        while (op2 != 0) {

            d = -1;

            while (d < 0) {

                a = le2(1);
                b = le2(2);
                c = le2(3);

                d = delta(a, b, c);

                if (d < 0) {
                    System.out.println("Sem raízes reais (delta menor que zero)\ninsira os valores novamente:"); 
                }else {
                    x1 = raiz1(b, d, a);
                    x2 = raiz2(b, d, a);

                    System.out.println("------------------");
                    System.out.printf("o valor de X1 é: %.2f\n", x1);
                    System.out.printf("o valor de X2 é: %.2f\n", x2);
                    System.out.println("Digite 1 para fazer inserir uma nova equação\nou\nDigite 0 para voltar ao menu");

                    op2 = s.nextInt();
                }

            }

        }
    }


    public static int le3(int a) {

        if (a == 1) {
            System.out.println("Digite o Primeiro número");
            a = s.nextInt();
        } else if (a == 2) {
            System.out.println("Digite o Segundo número");
            a = s.nextInt();
        }
        return a;
    }

    public static double media3(int n1, int n2) {
        int media = (n1 + n2) / 2;
        return media;
    }

    public static void terceiro() {

        int n1, n2, op3;
        double media;
        op3 = 1;
        while (op3 == 1) {

            n1 = le3(1);
            n2 = le3(2);

            media = media3(n1, n2);

            System.out.println("------------------");
            System.out.printf("A média entre os dois inteiros é de: %.2f\n", media);
            System.out.println("Digite 1 para calcular uma nova média\nou\nDigite 0 para voltar ao menu");
            op3 = s.nextInt();
        }

    }

    
    public static void quarto() {

    }

    public static void main(String[] args) {
        selecionaMenu();

    }
}

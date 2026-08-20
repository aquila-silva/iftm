import java.util.Scanner;

public class Main
{


	public static Scanner s = new Scanner(System.in);

	public static void menu() {

		System.out.println("-------MENU-------");
		System.out.println("SELECIONE UMA OPÇÃO");
		System.out.println("1 - Comparar dois números inteiros");
		System.out.println("2 - Raiz de equação de segundo grau");
		System.out.println("3 - Media Aritmética entre dois inteiros");
		System.out.println("4 - Validador de triangulo");
		System.out.println("5 - Contagem de positivos e negativos");
		System.out.println("17 - Sair");
		System.out.println("------------------");

	}
	public static void selecionaMenu() {
	    int op = 0;
		while(op!=17) {

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
			case 4:
			    quarto();
			    break;
			case 5:
			    quinto();
			    break;
			//case 6:
			//    sexto();
			  //  break;
			}

		}
	}
	
    public static int retornoOp(){
        int op;
        System.out.println("------------------");
        System.out.println("Digite 1 para realizar uma nova operação\nDigite 0 para voltar ao menu");
        op = s.nextInt();
        return op; 
    }
    
	public static void primeiro() {
		int op1, n1, n2, comp ;
		op1 = 1;
		
		while (op1 !=0) {
	
            n1 = le1(1);
            n2 = le1(2);
            
		comp = compara1(n1,n2);
		
        exibe1(n1, n2, comp);
        
        op1 = retornoOp();

		}
	}
	public static int le1(int a){
		if(a == 1) {
			System.out.println("Digite o Primeiro número:");
			a = s.nextInt();
		} else if(a==2) {
			System.out.println("Digite o Segundo número:");
			a = s.nextInt();
		}
		return a;
	}
	public static int compara1(int n1, int n2) {
		if (n1>n2)
			return 1;
		else if (n1<n2)
			return 2;
		else if (n1==n2)
			return 3;
			
		return 0;
	}
	public static void exibe1 (int n1, int n2, int comp){
	    if(comp == 1)
	        System.out.println("------------------\nO número " + n1 +  " é MAIOR que " + n2);
	    else if(comp == 2)
	        System.out.println("------------------\nO número " + n1 +  " é MENOR que " + n2);
	    else if(comp == 3)
	        System.out.println("------------------\nOs dois números possuem o mesmo valor");
	        
	    
	}

    
	public static void segundo() {
		int op2 = 1;

		double a, b, c, d, x1, x2;
		while(op2!=0) {

			d = -1;

			while(d<0) {

				a = le2(1);
				b = le2(2);
				c = le2(3);

				d = delta(a, b, c);

				if(d<0)
					System.out.println("Sem raízes reais (delta menor que zero)\ninsira os valores novamente:");

				else {
					x1 = raiz1(b, d, a);
					x2 = raiz2(b, d, a);

					exibe2(x1, x2);
;					op2 = retornoOp();
				}

			}


		}
	}
	public static double le2(double a) {
		if(a == 1) {
			System.out.println("digite o valor de A (deve ser diferente de zero): ");
			a = s.nextInt();

			while(a==0) {
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
		double d = Math.pow(b, 2)  -4 * a * c;
		return d;

	}
	public static double raiz1(double b, double d, double a) {
		double x1 = ((b*-1.0) + Math.sqrt(d)) / (2*a);
		return x1;
	}
	public static double raiz2(double b, double d, double a) {
		double x2 = ((b*-1) - Math.sqrt(d)) / (2*a);
		return x2;
	}
	public static void exibe2(double x1, double x2){
	   
	        System.out.printf("o valor de X1 é: %.2f\n", x1);
	        System.out.printf("o valor de X2 é: %.2f\n", x2);
	    
	}

	public static void terceiro() {

		double n1, n2;
		double media, op3;

		op3 = 1;

		while (op3!=0) {

			n1 = le3(1);
			n2 = le3(2);

			media = media(n1, n2);
            
            exibe3(media);
			op3 = retornoOp();
		}



	}
	public static double le3(int a) {

		if(a == 1) {
			System.out.println("Digite o Primeiro número");
			a = s.nextInt();
		} else if(a==2) {
			System.out.println("Digite o Segundo número");
			a = s.nextInt();
		}
		return a;
	}
	public static double media(double n1, double n2) {
		double media = ((n1 + n2) / 2);
		return media;
	}
	public static void exibe3(double media){
	    System.out.printf("A média entre os dois inteiros é de: %.2f\n", media);
	}


	public static void quarto() {
        int l1, l2, l3, t, op4;
        op4 = 1;
        while (op4 != 0){
            
            l1 = le4(1);
            l2 = le4(2);
            l3 = le4(3);
            
            t = triangulo(l1, l2, l3);
            
            exibe4(t);
            
        	op4 = retornoOp();

        }
	}
    public static int le4(int l){
        
        if (l == 1){
            System.out.println("Digite o primeiro número:");
            l = s.nextInt();
        }else if (l == 2){
            System.out.println("Digite o segundo número:");
            l = s.nextInt();
        }else if (l == 3){
            System.out.println("Digite o terceiro número:");
            l = s.nextInt();
        }
        return l;
    }
    public static int triangulo(int l1, int l2, int l3){
        
        if((l1>(l2+l3) || l2>(l1+l3) || l3>(l1+l2)) || (l1 == 0 && l2 == 0 && l3 == 0))
            return 0;
        else{
            if(l1==l2 && l2 == l3)
                return 1;
            else if((l1==l2 && l3!=l2)||(l1==l3 && l2!=l1)||(l2==l3 && l1!=l2))
                return 2;
            else if(l1!=l2 && l2!=l3 && l1!=l3)
                return 3;
        }
        return 0;
    }
    public static void exibe4(int t){
        if (t==0)
            System.out.println("Triangulo não formado\n(Lados com tamanhos incompatíveis).");
        else if(t==1)
            System.out.println("Triangulo Equilátero formado\nTodos os lados são iguais.");
        else if(t==2)
            System.out.println("Triangulo Isóceles formado\nDois lados iguais e um diferente.");
        else if(t==3)
            System.out.println("Tragulo escaleno formado\nTodos os lados são diferentes.");
        
    }

    public static void quinto(){
        int n, positivo, negativo, op5;
        op5 = 1;
        n = 1;
        while(op5!=0){
            while (n!=0){
            n = le5();
            }
            op5 = retornoOp();
        }
        
        
    }
    public static int le5(){
        System.out.println("Digite um número:\n(Digite o número 0 para parar.)");
        int n = s.nextInt();
        return n;
    } 
    public static void exibe5(int positivo, int negativo){
        System.out.println("aaa" + positivo);
    }
    
    
	public static void main(String[] args) {
		selecionaMenu();

	}


}
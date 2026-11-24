package src.lista03;

import java.util.Scanner;

public class App {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("\n================================");
        System.out.println("Digite o nome da Universidade: ");
        Universidade universidade = new Universidade(scanner.nextLine());
        universidade.criaDepto("Sistemas para Internet", "Campus Uberlândia Centro");
        universidade.criaDepto("Logistica", "Bloco B");

        Pessoa pessoa = new Pessoa("Ana", universidade, "Campus Uberlândia Centro");
        Pessoa pessoa2 = new Pessoa("Carlos", universidade, "Bloco B");
        
        System.out.println("===== Cadastrar Departamento =====");
        System.out.println("Insira o nome do departamento:");
        String nomeDepto = scanner.nextLine();
        System.out.println("Insira a localização do departamento:");
        String localizacaoDepto = scanner.nextLine();

        universidade.criaDepto(nomeDepto, localizacaoDepto);

        System.out.println("Insira o nome da pessoa:");
        String nomePessoa = scanner.nextLine();
        System.out.println("Insira o nome do departamento da pessoa:");
        String localPessoa = scanner.nextLine(); 
        
        boolean departamentoEncontrado = false;
        
        for(Departamento depto : universidade.getDepartamentos()) {
            if (depto.getNome().equalsIgnoreCase(localPessoa)) {
                localPessoa = depto.getNome();
                departamentoEncontrado = true;
                break;
            }
        }

        if (!departamentoEncontrado) {
            System.out.println("Departamento não encontrado. A pessoa não será cadastrada.");
            System.out.println("\n================================");
            System.out.println("Pessoas cadastradas na " + universidade.getNome());
            System.out.println();
            System.out.println(pessoa.exibe());
            System.out.println();
            System.out.println(pessoa2.exibe());
            System.out.println();
            System.out.println(universidade.exibe());
        }else{
            System.out.println("Departamento encontrado. A pessoa será cadastrada com o departamento.");
            Pessoa pessoa3 = new Pessoa(nomePessoa, universidade, localPessoa);

            System.out.println("\n================================");
            System.out.println("Pessoas cadastradas na " + universidade.getNome());
            System.out.println(pessoa3.exibe());
            System.out.println();
            System.out.println(pessoa.exibe());
            System.out.println();
            System.out.println(pessoa2.exibe());
            System.out.println();
            System.out.println(universidade.exibe());
        }
      
        
        
    }
}

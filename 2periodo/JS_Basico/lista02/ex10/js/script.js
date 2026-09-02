let numero = prompt("Digite um valor inteiro positivo maior ou igual a 2:", "3");

if (numero !== null) {
    let num = parseInt(numero);

    
    while (isNaN(num) || num < 2) {
        numero = prompt("Valor inválido! Digite um número inteiro positivo maior ou igual a 2:");
        if (numero === null) break;
        num = parseInt(numero);
    }

    if (numero !== null) {
        
        let tabela = "<table border='1' style='border-collapse: collapse; text-align: center; width: 300px;'>";
        
        
        tabela += "<tr>";
        tabela += "<th>Base decimal</th>";
        tabela += "<th>Base binária</th>";
        tabela += "<th>Base hexadecimal</th>";
        tabela += "</tr>";

        
        for (let i = 0; i <= num; i++) {
            tabela += "<tr>";
            tabela += `<td>${i}</td>`;
            tabela += `<td>${i.toString(2)}</td>`;      
            tabela += `<td>${i.toString(16)}</td>`;    
            tabela += "</tr>";
        }

        tabela += "</table>";

        
        document.write(tabela);
    }
}
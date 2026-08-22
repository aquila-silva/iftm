let numero = prompt("Digite um valor inteiro positivo maior ou igual a 2:", "3");

if (numero !== null) {
    let num = parseInt(numero);

    // Validação simples para garantir que o número é válido
    while (isNaN(num) || num < 2) {
        numero = prompt("Valor inválido! Digite um número inteiro positivo maior ou igual a 2:");
        if (numero === null) break;
        num = parseInt(numero);
    }

    if (numero !== null) {
        // Cria a estrutura inicial da tabela com a borda para ficar igual ao exemplo
        let tabela = "<table border='1' style='border-collapse: collapse; text-align: center; width: 300px;'>";
        
        // Cabeçalho da tabela
        tabela += "<tr>";
        tabela += "<th>Base decimal</th>";
        tabela += "<th>Base binária</th>";
        tabela += "<th>Base hexadecimal</th>";
        tabela += "</tr>";

        // Loop de 0 até o número informado pelo usuário
        for (let i = 0; i <= num; i++) {
            tabela += "<tr>";
            tabela += `<td>${i}</td>`;
            tabela += `<td>${i.toString(2)}</td>`;      // Converte para binário
            tabela += `<td>${i.toString(16)}</td>`;    // Converte para hexadecimal
            tabela += "</tr>";
        }

        tabela += "</table>";

        // Exibe a tabela no corpo do documento
        document.write(tabela);
    }
}
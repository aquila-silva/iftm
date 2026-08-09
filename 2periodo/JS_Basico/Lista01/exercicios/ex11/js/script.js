let op, n1, n2, soma, sub, mult, div; 

alert("Bem-Vindo a calculadora de números inteiros")
op = prompt("selecione a operação matemática desejada: (+ - * /)");

while(op!="+"&&op!="-"&&op!="*"&&op!="/"){
    alert("Operação inálida selecione entre (+, -,* ,/ )");
    op = prompt("selecione a operação matemática desejada: (+ - * /)");
}
if(op == "+"){
    alert("Soma selecionada")
    n1 = parseInt(prompt("Digite o primeiro número:"));
    n2 = parseInt(prompt("Digite o segundo número"));
    soma = n1+n2;
    alert(`O resultado da soma é: ${soma} `);

}else if(op == "-"){
    alert("Subtração selecionada")
    n1 = parseInt(prompt("Digite o primeiro número:"));
    n2 = parseInt(prompt("Digite o segundo número"));
    sub = n1-n2;
    alert(`O resultado da subtração é: ${sub}`)
}else if(op == "*"){
    alert("Multiplicação selecionada")
    n1 = parseInt(prompt("Digite o primeiro número:"));
    n2 = parseInt(prompt("Digite o segundo número"));
    mult = n1*n2;
    alert(`O resultado da multiplicação é: ${mult}`)
}else if(op == "/"){
    alert("Divisão selecionada")
    n1 = parseFloat(prompt("Digite o primeiro número:"));
    n2 = parseFloat(prompt("Digite o segundo número"));
    while(n1 == 0 || n2 == 0){
        alert("Divisão inválida (divsão por 0)\nInsira os números novamente")
        n1 = parseFloat(prompt("Digite o primeiro número:"));
        n2 = parseFloat(prompt("Digite o segundo número"));
    }
    div = n1/n2;
    alert(`O resultado da divisão é de: ${div}`)
}
let nome, idade, min;
nome = prompt("Digite seu nome completo:")
idade = parseInt(prompt("Insira sua idade:"))

if(idade<18){
    alert(`Sr.(a) ${nome}, você ainda não possui idade o suficiente para tirar sua habilitação, ainda te faltam ${18-idade} anos.`)
}else if(idade>18){
    alert(`Sr.(a) ${nome}, você já possui hidade o suficiente para tirar sua habilitação.`)
}
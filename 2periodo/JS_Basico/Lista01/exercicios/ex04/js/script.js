let nota1, nota2;
nota1 = parseInt(prompt("Digite a sua nota do primeiro período"));
nota2 = parseInt(prompt("Digite a sua nota do segundo período"));

if (nota1 >= 60 && nota2 >= 60)
    alert("Você foi aprovado em nota nos dois períodos")
else if (nota1 >= 60 && nota2 < 60)
    alert(`Você foi reprovado por nota apenas no 2º período.\nTe faltaram ${60 - nota2} pontos.`);
else if (nota1 < 60 && nota2 >= 60)
    alert(`Você foi reprovado por nota apenas no 1º período.\nTe faltaram ${60 - nota1} pontos.`);
else if (nota1 < 60 && nota2 < 60)
    alert(`Você reprovou por nota nos dois períodos.\nNo 1º período te faltaram ${60 - nota1} pontos.\nNo 2º Períodos te faltaram ${60 - nota2} pontos.`);

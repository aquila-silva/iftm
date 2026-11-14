

function validar(elementoTexto){
    
    let texto = document.getElementById(elementoTexto).value;

    // padrão para verificar se há um digito (número) em qualquer lugar do texto
    // let padrao = /\d/;

    // padrão que verifica se o texto inicia com um dígito
    // let padrao = /^\d/;

    // padrão que verifica se o texto finaliza com um dígito
    // let padrao = /\d$/;

    // padrão para verificar se o texto compõe de apenas um dígito
    // let padrao = /^\d$/;

    // padrão que identifica se o texto compõe de 2 digitos
    // as chaves {} atuam como quantificadores e definem a quantidade que determinados caracteres devem aparecer em um texto
    // let padrao = /^\d{2}$/;

    // podemos definir o intervalo do quantitativo de caracteres nas chaves separando os intervalos por virgula, ex:
    // let padrao = /^\d{2,3}$/; para verificar se o texto é composto de 2 a 3 digitos

    // para verificar se há no minimo 2 podemos incluir apenas a virgula, e o primeiro digito definirá a quantidade minima de digitos
    // let padrao = /^\d{2,}$/;

    // para definir um digito como opicional podemos definir um intervalo de {0,1} sendo 0 para inexistente e 1 para existente
    //  let padrao = /^\d{0,1}$/;

    // padrão para validar um número de telefone sem DDD
    // let padrao = /^\d{4,5}-\d{4}$/;
    
    // padrão para validar um número com DD 
    // let padrao = /^\d{2,3}\s\d{4,5}-\d{4}$/;

    // caracteres como () $ \ {} e outros são reservados da sintaxe do RegExp e para verificar sua existência é necessário introduzir uma \ antes do caracter desejado
    // let padrao = /^\(\d{2,3}\)\s\d{4,5}-\d{4}$/;
    // let padrao = /^\d{2,3}\s{0,1}\d{4,5}-\d{4}$/;

    // padrão que valida cpf com . e -
    // let padrao = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/
    
    // o caractere reservado () serve para definir possibilidades utilizando o | como operador lógico
    // let padrao = /^(IFTM|IF)-\d{3}$/;

    // o caractere i introduzido no final da expressão serve para retira o case sensitive. i = ignore case
    // let padrao = /^(IFTM|IF)-\d{3}$/i;

    // os colchetes servem para definir intervalos específicos de caracteres [abc] aceita apenas a letra a, b ou c.
    // let padrao = /^[abcd]{2,8}$/;

    // o traço - pode ser utilizado para definir um intervalo de caracteres específico como [a-z] ou [0-9]
    // let padrao = /^[j-z]{2,8}$/;

    // let padrao = /^[^A-z]{2,8}$/

    // expressão de validação de expressão aritimética
    // let padrao = /^\({0,1}\d{1,},{0,1}\d{0,}\){0,1}[\+\-\*\/]\({0,1}\d{1,},{0,1}\d{0,}\){0,1}([\+\-\*\/]\({0,1}\d{1,},{0,1}\d{0,}\){0,1}){0,}$/;
     
    // \D com D maiúsculo define que o caractere não pode ser um número
    // let padrao = /^\D$/

    // \w com w minúsculo define que apenas serão aceitos caracteres alfanuméricos
    // let padrao = /^\w{5}$/; 

    // \W com W maiúsculo define que não será aceito nenhum caractere alfanumérico
    // let padrao = /^\W{5}$/; 
    

    // {0,1} pode ser melhor escrito apenas pelo sinal de interrogação ?
    // {0,} pode ser melhor escrito apenas pelo sinal de asterisco *
    // {1} pode ser melhor escrito apenas pelo sinal de adição +
    let padrao = /^\d?$/;
    if(padrao.test(texto))
        alert("Válido (OK)");
    else
        alert("Inválido (X)");       
}

export default{
    validar
}
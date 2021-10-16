// variaveis declaradas com var fazem do bloco '{}' erro de escobo
// é indicado para declaração de variaveis usar 'const' e 'let'

// diferença de const e let:

//const não vaza o escopo e impede a redeclação e
//modificação do valor da variavel, só consegue 
//mudar os valores de um objeto. Ex:

const data = {
    ano: 2021,
    mes: 'Agosto',
}

data.mes = 'Setembro'
data.dia = 20


//let não vaza o escopo e impede a 
//redeclaração, mas deixa modificar 
//o valor da variavel


// exercicio
// Por qual motivo o código abaixo retorna com erros?
{
    var cor = 'preto';
    const marca = 'Fiat';
    let portas = 4;
}
console.log(cor);

console.log('-----------------------------')

// Como corrigir o erro abaixo?
const dois = 2;
function somarDois(x) {    
    return x + dois;
}
function dividirDois(x) {
    return x / dois;
}
console.log(somarDois(4));
console.log(dividirDois(6));

console.log('---------------------------------')

// O que fazer para total retornar 500?
const numero = 50;

for(let numero = 0; numero < 10; numero++) {
    console.log(numero);
}


const total = 10 * numero;
console.log(total);
  
const fatorial = 345;
let i = 0;
let resultado = 0;

resultado = fatorial;
console.log(resultado + "!");
for (i = 1; i < fatorial; i++ ) {
    
    console.log(resultado + " = " +resultado+" * ("+
                fatorial+ " - " + i + ")");
    resultado =resultado * (fatorial - i);
}

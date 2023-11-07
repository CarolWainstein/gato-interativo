/* Para o ultimo estado ser permanente.

var gatoComVergonha = false;

function interacaoGato (estadoDoGato) {
    if (!gatoComVergonha) {
        document.getElementById("gato").src = "imagens/" + estadoDoGato + ".png";
        if (estadoDoGato == 'gato_vergonha') {
            gatoComVergonha = true;
        }
    }
}

*/

function interacaoGato (estadoDoGato) {
    document.getElementById("gato").src="imagens/" + estadoDoGato + ".png";
}
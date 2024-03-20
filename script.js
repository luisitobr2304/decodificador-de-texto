const areaInput = document.querySelector(".area-input");
const mensagem = document.querySelector(".mensagem")
const botaoCopy = document.querySelector(".btn-copiar");

areaInput.addEventListener("keypress", function(e) {

    if(!checkChar(e)) {
        e.preventDefault();
    }
});

function checkChar(e) {
    const char = String.fromCharCode(e.keyCode);
    const pattern = '[a-z 0-9]';

    if(char.match(pattern)) {
        return true;
    }
    alert('Siga o padrão! letras minúsculas,sem acento e nada de caracteres especiais.');
}

function btnEncriptar() {
    const textEncriptado = encriptar(areaInput.value);
    mensagem.value = textEncriptado;
    areaInput.value = "";
}

function removerCaracteresEspeciais(string) {
    return string.replaceAll(/[^a-z0-9]/g, "");
}


function encriptar(stringEncriptada) {

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    //stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function btnDesencriptar() {
    const textDescriptado = desencriptar(areaInput.value);
    mensagem.value = textDescriptado;
    areaInput.value = "";
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    //stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDesencriptada;
}

function copiarTexto() {
    navigator.clipboard.writeText(mensagem.value).then(() => {
        alert('Copiado para área de transferência!');
        mensagem.value = "";
    });
}


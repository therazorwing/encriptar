tconst inputText = document.getElementById('inputText');

  inputText.addEventListener('input', function() {
    const regex = /[^a-z\s]/g;
    this.value = this.value.replace(regex, '');
  });



const textArea= document.querySelector(".text-area");
const mensaje= document.querySelector(".mensaje");
const copiar= document.querySelector(".copiar");
const resultado= document.querySelector(".resultado");
const mensajebox= document.querySelector(".mensajebox");


function btnEncriptar(){
    if (textArea.value.trim() === "") {
        // Si el textArea está vacío o solo contiene espacios en blanco, muestra una alerta
        alert("Por favor, ingrese texto.");
    } else {    
    const textEncriptado = encriptar(textArea.value)
    mensaje.value = textEncriptado
    textArea.value = "";
    mensaje.style.display = 'block';
    copiar.style.display = 'block';
    resultado.style.display = 'none';
    mensaje.style.backgroundImage="none";
    mensajebox.style.placeContent = "space-between";
    }
}

function btnDesencriptar(){
    if (textArea.value.trim() === "") {
        // Si el textArea está vacío o solo contiene espacios en blanco, muestra una alerta
        alert("Por favor, ingrese texto.");
    } else {
    const textEncriptado = desencriptar(textArea.value)
    mensaje.value = textEncriptado
    textArea.value = "";
     mensaje.style.display = 'block';
    copiar.style.display = 'block';
    resultado.style.display = 'none';
    mensaje.style.backgroundImage="none";
    mensajebox.style.placeContent = "space-between";
    }
}

function btnLimpiar(){
    textArea.value = "";
    mensaje.style.display = 'none';
    copiar.style.display = 'none';
    resultado.style.display = 'block';
    mensaje.style.backgroundImage="block";
    mensajebox.style.placeContent = "center";
}


function encriptar(stringEncriptada) {
    let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for (let i=0; i<matrizCodigo.length;i++){
        if(stringEncriptada.includes(matrizCodigo[i][0]) ){
            stringEncriptada=stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for (let i=0; i<matrizCodigo.length;i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1]) ){
            stringDesencriptada=stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}

function copiarTexto() {

    const textArea = document.getElementById('mensajeTextArea');
    textArea.select();
    textArea.setSelectionRange(0, 99999); // Para móviles
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
  }

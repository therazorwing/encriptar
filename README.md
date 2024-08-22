
# Encriptador
<p>pagina que encripta y desencripta textos</p>

####Javascript　

```javascript
const inputText = document.getElementById('inputText');

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
```

####HTML code

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="initial-scale=1, width=device-width" />
    <title>Encriptador</title>
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@200;400;700&display=swap"
    />
  </head>
  <body>
      <main>
      <div class="logo">
        <img class="logo-icon" alt="Logo de Alura" src="./public/logo.svg" />
      </div>
        <section>
          <textarea class="text-area" id="inputText" cols="30" rows="10" placeholder="Ingrese el texto aqui"></textarea>
        <div class="aviso">
          <img class="biexclamation-circle-fill-icon"   alt="" src="./public/biexclamationcirclefill.svg" />

          <div class="solo-letras-minsculas">
            Solo letras minúsculas y sin acentos
          </div>
        </div>
        <div class="botones">
          <button class="btn encriptar" onclick="btnEncriptar()">Encriptar</button>
          <button class="btn desencriptar" onclick="btnDesencriptar()">Desencriptar</button>
          <button class="btn desencriptar" onclick="btnLimpiar()">Limpiar</button>
        </div>
         </section>
      
      <div class="mensajebox">
        <textarea  class="mensaje ocultar" id="mensajeTextArea" cols="20" rows="5"> </textarea>
        <div class="resultado">
        <img class="notxt" src="public/mueco.svg">
        <div class="text01"> Ningun mensaje fue encontrado</div>
        <div class="text02"> Ingresa el texto que desees encriptar o desencriptar.</div>
      </div>
        <button class="btn copiar ocultar"  onclick="copiarTexto()">Copiar</button>
      </section>
    </main>
<script src="script.js"></script>
  </body>
</html>
```


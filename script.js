const textoIngresado = document.querySelector(".texto-entrada");
const textoProcesado = document.querySelector(".texto-resultado");


function btnEncriptar(){
    const textoEncriptado = encriptar(textoIngresado.value);
    textoProcesado.value = textoEncriptado;
    textoIngresado.value = "";
    textoProcesado.style.backgroundImage = "none";
    document.getElementsByClassName("btn-copia")[0].style.visibility = 'visible';
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textoIngresado.value);
    textoProcesado.value = textoEncriptado;
    textoIngresado.value = "";
    textoProcesado.style.backgroundImage = "none";
    document.getElementsByClassName("btn-copia")[0].style.visibility = 'visible';
}



function encriptar(stringEncriptada){
    
    let llaveEncriptacion = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    
    stringEncriptada = stringEncriptada.normalize("NFD").replace(/[\u0300-\u0301]/g, "");
    
    alert("Ahora se van a quitar los acentos de las vocales");

    stringEncriptada = stringEncriptada.toString().toLowerCase();

    for (let i = 0; i < llaveEncriptacion.length; i++) {
        if(stringEncriptada.includes(llaveEncriptacion[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(llaveEncriptacion[i][0], llaveEncriptacion[i][1]);
        }        
    }
    return stringEncriptada;
}

function desencriptar(stringDesencriptada){
    let llaveEncriptacion = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toString().toLowerCase();

    for (let i = 0; i < llaveEncriptacion.length; i++) {
        if(stringDesencriptada.includes(llaveEncriptacion[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(llaveEncriptacion[i][1], llaveEncriptacion[i][0]);
        }        
    }
    return stringDesencriptada;
}

   
function btnCopiar() {
    
    let copiarTexto = document.getElementById("textoCopiar");
    copiarTexto.select();
    copiarTexto.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copiarTexto.value);
    alert("Texto copiado al portapapeles");
    textoProcesado.value = "";
    textoProcesado.style.backgroundImage = "url(img/notexto.png)";
    document.getElementsByClassName("btn-copia")[0].style.visibility = 'hidden';          
}
     


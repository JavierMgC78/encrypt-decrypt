var textIn = document.querySelector('#text-in');
var textOut = document.querySelector('#text-out');




/**
 * Encriptar mensaje
 */
function encrypted_btn(){
    //Mostrar boton de copiar
    document.querySelector('#btn_copy').classList.remove('ocultar');
    
    //=====PROCESO DE ENCRIPTADO
    if(!validate_textLength(textIn.value)){
        alert('Campo vacío');
    }

    if(validate_textLength(textIn.value)){
        alert('Chido');
    }

    

    //=====SALIDA

    //Ocultar texto default
    document.querySelector('#text-out-content__text-default').classList.add('ocultar');


    textOut.innerHTML = textIn.value;
}



/**
 * Desencriptar mensaje 
 */
function decrypted_btn(){
    document.querySelector('#text-out-content__text-default').classList.add('ocultar');




    
    textOut.innerText = "Menbsaje desencriptado";

}

/**
 * Copiar mensaje
 */
function copy_btn(){
    textIn.value = textOut.innerText



}


/**
 * 
 * @param {String} text 
 * @returns 
 */
function validate_textLength(text){
    if(text.length == 0){
        return false;

    }else{
        return true;
    }
}
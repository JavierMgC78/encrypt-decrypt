var textIn      = document.querySelector('#text-in');
var textOut     = document.querySelector('#text-out');




/**
 * Click en btn "Encriptar"
 */
function encrypted_btn(){
    if(!validate_textLength(textIn.value)){
        alert('No hay mensaje para encriptar');

    }else{
        //Mostrar boton de copiar
        document.querySelector('#btn_copy').classList.remove('ocultar');
        //Ocultar imagen
        document.querySelector('#text-out-content__img-default').style.display = "none";
        //Ocultar texto default
        document.querySelector('#text-out-content__text-default').classList.add('ocultar');

        //Mostrar texto encriptado
        textOut.innerHTML = encrypt(textIn.value);
    }
}



/**
 * Click btn "Desencriptar"
 */
function decrypted_btn(){

    
    if(textOut.innerText === ""){
        alert("No hay mensaje para desencriptar");
    
    }else{
        //Ocultar texto default
        document.querySelector('#text-out-content__text-default').classList.add('ocultar');
        
        textOut.innerText = decrypt(textIn.value);
    }
}



/**
 * Click btn "Copiar"
 */
function copy_btn(){
    textIn.value = textOut.innerText
}



/**
 * Valida la longitud de texto de entrada input textIn
 * @param {String} text 
 * @returns true: Hay almenos una letra en campo de entrada. 
 *          false: No hay texto en el campo de entrada.
 */
function validate_textLength(text){
    if(text.length == 0){
        return false;

    }else{
        return true;
    }
}



/**
 * Encripta el mensaje del input de entrada (textIn);
 * @param {*} text 
 * @returns {String} 
 */
function encrypt(text){
    let newText ="";

    for(let char of text){
        //console.log(char);

        switch (char){
            case "a":
                newText = newText + "ai";
                break;

            case "e":
                newText = newText + "enter";
                break;
            
            case "i":
                newText = newText + "imes";
                break;

            case "o":
                newText = newText + "ober";
                break;

            case "u":
                newText = newText + "ufat";
                break;
            
            default:
                newText = newText + char;
        }
    }

    return newText;
}


function decrypt(text){
    let newText      = text;
    let charsEncrypt = ['ai', 'enter', 'imes', 'ober', 'ufat'];
    let chars        = ['a', 'e', 'i', 'o', 'u'];

    for(let i=0; i<charsEncrypt.length; i++){
        if(newText.includes(charsEncrypt[i])){
            newText = newText.replace(charsEncrypt[i], chars[i]);
            i--;
        }
        
    }
    return newText;
}
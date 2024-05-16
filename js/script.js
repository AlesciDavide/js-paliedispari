function parolaPalindroma(parola){
    let parolaInserita = (parola);
    let i = 0;
    let j = parolaInserita.length -1;
    let uguaglianzaLettere = true;
    while(j > i){
            if(parola[i] === parola[j]){
                i++
                j--
            }else{
                uguaglianzaLettere = false;
                break;
            }
    }
return uguaglianzaLettere;
}


let parolaUtente = (prompt('inserisci una parola:'));
if(parolaUtente == null || parolaUtente[0] == ' ' || parolaUtente[parolaUtente.length -1] == ' '){
    parolaUtente = (prompt('inserisci una parola valida senza spazi!!'));
}

const uguaglianzaParola = parolaPalindroma(parolaUtente);

console.log(`Hai inserito la parola '${parolaUtente}'`)
if(uguaglianzaParola == true){
    console.log('la parola è palindroma!!');
}else{
    console.log('la parola non è palindroma!!');
}






let utenteSceltapd = prompt("Decidi tra \'pari\' o \'dispari\'!!");

if (utenteSceltapd != "pari" && utenteSceltapd != "dispari") {
    utenteSceltapd = "pari";
alert("Siccome non hai inserito ne pari ne dispari scelgo pari per te!!");
}

let sceltaNumero = Number.parseInt(prompt('Inserisci un numero tra 1 e 5!!'));
if(sceltaNumero < 1 || sceltaNumero > 5 || isNaN(sceltaNumero)){
    alert('Hai scelto un numero che non rientra nei parametri, sceglierò io per te!!');
    sceltaNumero = generateRandomNumber();
}


function generateRandomNumber(){
    const numeroRandom = Math.floor(Math.random() * 5) + 1;
    return numeroRandom;
}

let numeroRandom = generateRandomNumber();


function checkPariDispari(numeroUno, numeroDue){
    const sommaNumeri = numeroUno + numeroDue;
    let risultatoPariDispari;
    if(sommaNumeri % 2 == 0){
        risultatoPariDispari = true;
    }else{
        risultatoPariDispari = false;
    }
return risultatoPariDispari;
}

let risultato = checkPariDispari(sceltaNumero, numeroRandom);

console.log(`hai scelto: ${utenteSceltapd}
Il tuo numero è: ${sceltaNumero} 
Il numero del computer è: ${numeroRandom}
La somma dei numeri è: ${sceltaNumero + numeroRandom}`);

if(risultato == true && utenteSceltapd == 'pari'){
    console.log('Complimenti hai vinto te!!!')
}else{
    console.log('Mi dispiace! Ha vinto il computer :(');
}
function parolaPalindroma(parola){
    let parolaInserita = (parola);
    let i = 0;
    let j = parolaInserita.length -1;
    let uguaglianzaLettere = true;
    while(j!=0){
        if(uguaglianzaLettere == true){
            if(parola[i] === parola[j]){
                uguaglianzaLettere = true;
                i++
                j--
            }else{
                uguaglianzaLettere = false;
            }
        }else{
            j = 0;
        }
    }
return uguaglianzaLettere;
}


let parolaUtente = (prompt('inserisci una parola:'));
if(parolaUtente == null || parolaUtente[0] == ' ' || parolaUtente[parolaUtente.length -1] == ' '){
    let parolaUtente = (prompt('inserisci una parola valida senza spazi!!'));
}

const uguaglianzaParola = parolaPalindroma(parolaUtente);

if(uguaglianzaParola == true){
    console.log('la parola è palindroma!!');
}else{
    console.log('la parola non è palindroma!!');
}






let utenteSceltapd = prompt("Decidi tra \'pari\' o \'dispari\'!!");

if (utenteSceltapd != "pari" && utenteSceltapd != "dispari") {
    utenteSceltapd = "pari";
alert ("Siccome non hai inserito ne pari ne dispari scelgo pari per te!!")
}

let sceltaNumero = Number.parseInt(prompt('Inserisci un numero tra 1 e 5!!'));


function generateRandomNumber(){
    const numeroRandom = Math.floor(Math.random() * 5) + 1;
    return numeroRandom;
}

let numeroRandom = generateRandomNumber();


function checkPariDispari(numeroUno, numeroDue){
    const sommaNumeri = numeroUno + numeroDue;
    if(sommaNumeri % 2 == 0){
        const risultatoPariDispari = true;
    }else{
        const risultatoPariDispari = false;
    }
}

let risultato = checkPariDispari(sceltaNumero, numeroRandom);
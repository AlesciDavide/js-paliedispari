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
        }
    }

}
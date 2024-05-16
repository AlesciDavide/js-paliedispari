1. Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma


2. Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.



--------------------------
1. palindroma:
creo una funzione con un parametro
    -inizializzo una variabile con la parola inserita
    -inizializzo 2 indici per scorrere un ciclo while, uno che parte da 0 e uno che parte dalla lunghezza della parola inserita -1
    -inizializzo una variabile per il controllo di uguaglianza tra le lettere true/false
creo un ciclo while che termina quando il secondo indice è uguale a 0
    -creo un if di controllo dei true e false
        -annido un'if per il controllo della parola con i due indici
            -se la lettera agli estremi è uguale  imposto la variabile di controllo a true e inserisco i due indici per l'incremento e il decremento del secondo
            -se la lettera è diversa imposto òa cariabile di controllo a false 
            e dando cosi false al primo if 
    -aggiungo un else che imposta il seconodo indice a 0 per far uscire dal ciclo while
inserisco il return della variabile controllo
chiudo la funzione.

chiedo all'utente una parola
imposto una variabile per il return true e false = funzione(parol dell'utente)

creo un'if per determinare e stampare se la parola e palindroma o no grazie alla variabile di controllo true e false.



-------------
2. pari o dispari
chiedo all'utente se sceglie pari o dispari e un numero da 1 a 5(uso un if per essere sicuro che il numero sia compreso tra 1 e 5)
    -creo una funzione che generi un numero random da 1 a 5 con return del numero creato
richiamo la funzione per salvare il return in una variabile
    -creo una seconda funzione che ha come ingresso il numero dell'utente e il numero generato random
    -creo una variabile di controllo true/false
        sommo i due numeri e stabilisco con un if se è pari o dispari
    return la variabile di controllo
con un if dichiaro il vincitore!


 

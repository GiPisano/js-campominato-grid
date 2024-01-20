
# Esercizio: Griglia Campo Minato

## Traccia

```
Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:

- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;

- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;

- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

Step 1) Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.

Step 2) In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

Step 3) La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe). Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

Bonus 1
Quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle.

Bonus 2
Quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste.

```

## Svolgimento

1) Creo due bottoni
    - uno per **GENERARE UNA GRIGLIA** di gioco quadrata
    - uno per **GENERARE LA DIFFICOLTA'** in base alla scelta dell'utente;

2) creo un evento che ascolta il click per ogni casella
    - quando viene clickata deve colorarsi di azzurro
    - deve mandare un messaggio in console della cella clickata


- qunado l'utente clicka una difficolta 
    - con essa deve aggiungersi una classe in base alla sua value.
    - si modifica la quantità di box 

//Collego il pulsante
const DOMPulsante = document.getElementById('btn_generate'); 
console.log(DOMPulsante);
//dichiaro il prezzo finale

//Inizio funzione
DOMPulsante.addEventListener('click' , function(){
    //seleziono input name
    const fullName = document.getElementById('fullName').value
    //seleziono i km da percorrere
    const kmUtente = document.getElementById('km').value
    //seleziono gli anni
    const anniUtente = document.getElementById('age').value
    //Dichiaro variabile tipologia biglietto
    let typeticket
    //calcolo il prezzo per km
    let prezzoBiglietto = kmUtente * 0.21
    //condizioni con i vari sconti
    let prezzoFinale;
    if(anniUtente < 18) {
        prezzoFinale = prezzoBiglietto - ((prezzoBiglietto * 20) / 100 )
        typeticket = 'Biglietto Ridotto (under 18)'
    } else if(anniUtente >= 65) {
         prezzoFinale = prezzoBiglietto - ((prezzoBiglietto * 40) / 100 )
         typeticket = 'Biglietto Ridotto (over 65)'
    } else {
        prezzoFinale = prezzoBiglietto 
        typeticket = 'Biglietto Standard'
    }
    //Indico i centesimi nel prezzo con due decimali 
    prezzoFinale = prezzoFinale.toFixed(2).toString().replace('.' , ',');
    //stampo il prezzo finale in console
    console.log(prezzoFinale)

    //Stampo il prezzo finale in pagina
    document.getElementById('fullNameTicket').innerHTML = fullName
    document.getElementById('type').innerHTML = typeticket
    document.getElementById('price').innerHTML = prezzoFinale + '€'
});

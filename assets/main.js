//Collego il pulsante
const DOMPulsante = document.getElementById('btn_generate'); 
console.log(DOMPulsante);
//Inizio funzione
DOMPulsante.addEventListener('click' , function(){
    //seleziono input name
    const fullName = document.getElementById('fullName').value
    //seleziono i km da percorrere
    const kmUtente = document.getElementById('km').value
    //seleziono gli anni
    const anniUtente = document.getElementById('age').value
    //calcolo il prezzo per km
    let prezzoBiglietto = kmUtente * 0.21
    //condizioni con i vari sconti
    let prezzoFinale;
    if(anniUtente < 18) {
        prezzoFinale = prezzoBiglietto - ((prezzoBiglietto * 20) / 100 )
    } else if(anniUtente >= 65) {
         prezzoFinale = prezzoBiglietto - ((prezzoBiglietto * 40) / 100 )
    } else {
        prezzoFinale = prezzoBiglietto
    }
    //stampo in console
    console.log(prezzoFinale)
});

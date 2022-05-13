// 1) importo fs
const fs = require('fs')
// 2) leggo gli arrgomenti inseriti da console
const inputUtente = process.argv.splice(2)

// try {
//     fs.readFileSync('./libri.csv',  jsonArray);
//     console.log(data);
//   } catch (err) {
//     console.error(err);
//   }

 if(inputUtente.length < 2 ){
     console.error('non hai inserito nulla');
    process.exit()
 }  

// 3) prendo il primo elemento come inputUrl(obbligatorio) e il secondo come outputUrl( obbligatorio)  e il terzo (non e obbligatorio)
///
// 4) leggo il contenuto del file e loggo il numero di caratteri spazi esclusi spazzi compresi numero parole numero delle occorenze della  parola de cercare(se lo ho)
let testo 
try {
    testo = fs.readFileSync(inputUtente[0], 'utf8');
    console.log(testo);
  } catch (err) {
    console.log('file non trovato');
    process.exit();
  }
let testoModificato = testo.replaceAll("," , " ")
                              .replaceAll("'", " ")
                              .replaceAll("!", " ")
                              .replaceAll("?", " ")
                              .replaceAll(".", " ")
                              .replaceAll('"', " ").split(' ')
testoModificato = testoModificato.filter((e)=> e !== "")
console.log(testoModificato);


// 5) se l'utente ha inserito l'output url scrivo un nuovo file con il testo dell'originale piu dell'analisi
const lunghezzaTesto = testo.length
const lunghezzaSenzaSpazio = testo.replaceAll(' ', '').length
const arrayParole = testoModificato
const numeroDiParole = arrayParole.length
let stringaDaRiempire = '\nnumero di caratteri: ' + lunghezzaTesto + '\n' + 
                        'numero di caratteri spazi esclusi: ' + lunghezzaSenzaSpazio + '\n' +
                        'numero di parole: ' + numeroDiParole + '\n';


let  parolaDaCercare
let contatoreParole = 0

if (inputUtente.length === 3) {
    parolaDaCercare= inputUtente[2]
    for(let i = 0; i < arrayParole.length; i++){
        if(arrayParole[i].toLowerCase() === parolaDaCercare) contatoreParole++;
    }
    stringaDaRiempire += "la parola '" + parolaDaCercare + "' appare " + contatoreParole + " volte" 
}
testo += stringaDaRiempire 
console.log(testo);
fs.writeFileSync(inputUtente[1], testo, err => {
    if (err) throw err;
});

// se lutente non ha inserito l'outoput url sovrascrive il file originale


//es es originale => viva il css
// risultato =>
// viva il css!
// 
// numeri caratteri : 12
// numeri caratteri (spazzi esclusi) : 20




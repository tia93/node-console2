//console.log('ciao node!')

//const pippo = document.createElement('div') // cercare cosa fa su javascript
//console.log(pippo);

//document.createElement, h1 non funziona  il brooser non riesce ad accedere al nostro pc invece node si.





/* file csv exel = file di testo vine trasformata in stringa su javascript 
steep 1 cartella , 
steep */
 //fs.readFile() serve per scrivere, leggimi un file indirizzo './libri.csv'', 'utf8' , fallo in maniera sicrona , poi mettilo in data!


 

/*const fs = require('fs');


const data = fs.readFileSync('./libri.csv', 'utf8');
  
console.log(data);
*/

//tutto cio ti da la possibilita di non rompersi (try) esegue le rige 4 5 va aavnti e fa il console.log normalemnte, se invece si romper qualcosa va in (catch)si esegue se non va a buon fine  e da errore console.log(err)
/*const fs = require('fs'); 

try {
  const data = fs.readFileSync('./libri.csv', 'utf8');
  console.log(data);
} catch (err) {
  //console.error(err);
  console.error(err.message);
} finally {
 console.log('sono nel blocco finally')
  }
  

/// finally se entra in entrambi i casi 
/*

try {
  
} catch (error) {
  
} finally {

}
*/



// const fs = require('fs'); 
// function readCsv(){
// try {
//   const data = fs.readFileSync('./libro.csv', 'utf8');
//   console.log(data);
// } catch (err) {
//   throw err;
  
// }
// }

// try {
//   readCsv()
// } catch (error) {
//   console.log('la funzione non funziona')
// }
// faccendo cosi evitiamo che si rompa readCsv() e non solo la parte di sopra

// let data;


// try {
//      data = fs.readFileSync('./libri.csv', 'utf8');
//   } catch (err) {
//     console.log('file non trovato');
//   }

  /// aggoingo un nuovo oggetto una proprietà con il nome della properties e associando il valore corrispondente nella linea;
  // let pippo = {nome: "pippo" , dob: 2021};
  // console.log(pippo.nome)
  // console.log(pippo['nome']);
  // pippo['cognome'] = ' de pippis';
  // console.log(pippo.cognome);

//tsv i valori sono semparati da un tab// 

//1) spezzare la nostra stringa in array di linee
  //- const lines = ["title,author,price,copies" , "iliade,omero,15.00,5", "odissea,omero,12.00,3", "i promessi sposi,manzoni,20.00,10"];


//2)creo una variabile chiamata  properties che conterra un array con la di cui e composta da linee
 //- const properties = ["title" , "author" , "price ", "copies" ]
 //- let lines = ["iliade,omero,15.00,5", "odissea,omero,12.00,3", "i promessi sposi,manzoni,20.00,10"];
///3) creo un arry vuoto per oggetti 
//4) faccio un ciclo su tutte le linee dentro lines
    // - creo un nuovo oggetto vuoto
    // - trasformo la lineea in un array di parole es: const linearray = ["iliade" , "omero" , "15.00" , "5"]; title indice 0 di iliade  author indice 1 omero
    //- faccio un ciclo interno ciclo dentro un ciclo per ogni parola dentro proprietis**
    //-  aggoingo un nuovo oggetto una proprietà con il nome della properties e associando il valore corrispondente nella linea; 
    //- infilo il mio oggetto nel array vuoto 
//5) faccio console.log dell'array 
    //-  console.log(data);








const { log } = require('console');
//1 
const fs = require('fs')
let data;
/// lines = lines.filter(line => line !== ''); per levare l'ultima linea vuota 

try {  /// per vedere se ci possomo  essere  problemi
  data = fs.readFileSync('./libri.csv', 'utf8'); // sincrono dati: readFileSync
} catch (err) {
  console.log('file non trovato');
} 
let lines = data.split(/\r?\n/); // divide array in tante righe al posto di un uninica riga

//2 
const properties = lines[0].split(","); ///  shift leva la prima linea della array , split spezza  per dare la virgola ad ogni valore 
lines.shift()

//3
let objectArray = [];

//4                                         
for( let i = 0; i < lines.length; i++){ /// conta le righe 
  let bookObject = {}
  let book = lines[i].split(",")
  for( let j = 0; j < properties.length; j++){ // conta le parole sulla riga 
    bookObject[properties[j]] = book[j]
  } 
  objectArray.push(bookObject);
}


console.log(objectArray)
for(let i= 0; i < objectArray.length; i++){ /// fare console.log di tutti gli elementi 
  console.log(objectArray[i])
}



/* forof (const line of lines){
  
  connst obj = {};

  const lineArray = line.split(",");

  console.log('linearry, linearray);


for( let i = 0; i < properties.length; i++){
  let prorprety = properties[i]
  let value = linearray[i]

  prorprety = properties.trim()
  value = valute.trim()
  
  obj[prorprety] = value;



  const properties = properties[i];
  console.log('properties' , properties)
  obj[properties] = linearray[i];
 }

  console.log(obj);

  objectsarry.push(obj)
}

console.log(' array degli oggetti', objectsarray);

const json = JSON.stringify(objectsArray); ??? trasformare in un array
console.log('json array' , jsonarray)

*/



///////////////////////////////////////////////////
//c:\document\cvs
// const pippoJson = JSON.stringify(pippo);
// console.log(pippoJson)
//stringa in formato json ---- creation 
//{
//   "title": "ilade",
//   "author": "omero"
//   "price" : 15.7,
//   "softcopy" : true
// }
 




console.log(process.argv); //// processo aggiuntivo di scritte ne terminal
const myargs = process.argv.slice(2); // per levarli

if(myargs[0] === undefined){ /// se non trova nulla esce se no va sotto da myarge
console.err('mi serve il file di input')
process.exit();
}


const inputUrl = myargs[0];

let outputUrl

if(myargs[1] === undefined){
  outputUrl = './output.json'
} else {
  outputUrl = myargs[1];
}








try{
  fs.writeFileSync(outputUrl, jsonArray);
} catch (err) {
  console.err(err)
}



value = checkType(value) // lo trasforma in stringa 
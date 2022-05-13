const fs = require('fs');
const filesystem = ('fs');
const args = process.argv.slice(2) //elementi inseriti al termina node./ textAnalyzer.js ,con slice serve per levare le primr dur frasi dal terminal cioe node./text ecc (pippo paperino pluto) boh?

let inputUrl; //  <= bisogna metterlo fuori perche se si mette dentro finirebbe fra le due graffe e non funzionerebbe
if(args[0]){
    inputUrl = args[0]
}else {
    console.log("devi inserire l'imputi url");
    process.exit();
}
console.log(args)
let outputUrl;
if(args[1]){
    outputUrl = args[1]
}else {
    console.log("devi inserire l'imputi url");
    process.exit();
}

let searchWord = args[2];          // pippo pluto paerino questi sono gli input (node./ textAnalyzer.js)
// console.log('input', inputUrl);
// console.log('output', outputUrl);
// console.log('search', search);

console.log(inputUrl)
let fileData;
try {
    fileData = fs.readFileSync('./prova1.txt', 'utf8');
} catch (error) {
    console.log('errore nel lettura del file\n' , error);
    process.exit();
}

console.log(fileData);

const charNumber = fileData.length;
console.log('numero di carrateri: ' , charNumber);

const noSpaceData = fileData.replaceAll(' ', '');
const noSpaceCharNumber = 8

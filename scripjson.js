

try {
    fs.readFileSync('./libri.csv',  jsonArray);
    console.log(data);
  } catch (err) {
    console.error(err);
  }




  function checkType(value){

    if(!isNaN(value)){
        return parseFloat(value)
    } else if(value === ' true' || value === 'false'){
        return value === 'true' ? true : false;
    } else{
        return value;
    }
  }




  
// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]




// Add your functions below:
function validateCred(array){
    var backwards = [];
    let multiplyx2 = [];
    let storeSingles=[];
    //we start from end i 2 cherecters, and we minus 2 char since we multiply every second
  for(let i = array.length-2; i >=0; i-=2){
  backwards.push(array[i]);//
  }
  //console.log(backwards);//return [ 0, 6, 0, 0, 7, 6, 3, 4 ]
  for(let p = array.length-1; p >=0; p-=2){
  storeSingles.push(array[p]);
  }
  //console.log(storeSingles);//[ 8, 8, 1, 8, 9, 7, 9, 5 ]
  
  for(let j = 0; j<backwards.length; j++){
    if (backwards[j] !== undefined)
  multiplyx2.push(backwards[j]*2);
  }
  //console.log(multiplyx2);//[ 0, 12, 0, 0, 14, 12, 6, 8 ]
  
  
  for(let a = 0; a<multiplyx2.length; a++){
  if (multiplyx2[a] > 9){
   multiplyx2[a]= multiplyx2[a]-9;
  }
  }
  //console.log(multiplyx2);//[ 0, 3, 0, 0, 5, 3, 6, 8 ]
  
  const total = multiplyx2.concat(storeSingles);
  //console.log(total);//[ 0, 3, 0, 0, 5, 3, 6, 8, 8, 8, 1, 8, 9, 7, 9, 5 ]
  
  var sum=0;
  for(var i in total) { 
    sum += total[i]; 
    }
  //console.log(sum);//80
  
  if ((sum % 10) === 0){
          return true;
      }	
  
  return sum;
  }
  
  console.log(validateCred(valid1));// with valid1 tested return true
  
   let valid= [];
  let invalid = [];
  function findInvalidCards(checkInvalid){
  for(let i = 0; i<checkInvalid.length; i ++ ){
  if(validateCred(checkInvalid[i]) === true){
   valid.push(checkInvalid[i]);
  }else{
     invalid.push(checkInvalid[i]);
  }
  }
  }
  
  findInvalidCards(batch);
  console.log("invalid cards are :", invalid);
  /*invalid cards are : [ [ 4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5 ],
    [ 5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3 ],
    [ 3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4 ],
    [ 6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5 ],
    [ 5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4 ],
    [ 3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4 ],
    [ 6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3 ],
    [ 4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3 ] ]*/
  
    let invCompanies=[];
  function idInvalidCardCompanies(invComp){
    let masterCount = 0;
    let visaCount = 0;
    let amexCount = 0;
    let discoverCount = 0;
    for (let i = 0; i<invComp.length; i++){
      let firstChar = invComp[i];
  if(firstChar[0] === 4 && visaCount === 0){
    invCompanies.push("Visa");
    visaCount++;
  } else if (firstChar[0] === 3 && amexCount === 0){
   invCompanies.push("Amex");
   amexCount++;
  }else if (firstChar[0] === 5 && masterCount === 0){
   invCompanies.push("Mastercard");
   masterCount++;
    }else if (firstChar[0] === 6 && discoverCount === 0){
   invCompanies.push("Discover ");
  discoverCount ++;
  } 
  }
  }
  
  idInvalidCardCompanies(invalid);
  console.log(invCompanies);//[ 'Visa', 'Mastercard', 'Amex', 'Discover ' ]







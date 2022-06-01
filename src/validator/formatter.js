function triim ()
{

let text ="    !!  Hello !!      "

console.log( text.trim())

}


function changetoLowerCase()
{

    let text ="THIS IS VS CODE"
console.log( text.toLowerCase());

}

function changeToUpperCase()
{


    let text = "this is git  and nodejs"
    console.log(text.toUpperCase());
} 
  module.exports.trimm=triim ()
  module.exports.lower = changetoLowerCase()
 module.exports.upper=changeToUpperCase()

//default parameters value
// for number 
// n1 = 0 
// n2 = 0

// default value can be any number as per the uses but if parameter takes string then ti will be empty sting

function add(n1=0,n2=0){
    const result = n1+n2;
    console.log(n1, n2, result)
    return result;
}

console.log(add(1,2))



// default parameters value for string is empty string 
// fName =" "
// lName =" "
function name(fName=" ", lName=" "){
    const fullName = `${fName} ${lName}`;
    console.log(fName, lName, fullName);
    return fullName;
}

console.log(name('a','d'))
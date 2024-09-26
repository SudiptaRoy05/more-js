//default parameters value

function add(n1=0,n2=0){
    const result = n1+n2;
    console.log(n1, n2, result)
    return result;
}

console.log(add(1,2))
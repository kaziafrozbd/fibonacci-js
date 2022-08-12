
function fibonacchi(length){
    if ( typeof length != 'number' ){
        return 'please send number';
    }
    else if(length < 0){
        return 'please give a positive number';
    }
    const fibo = [0, 1];
    for(let i = 2; i < length; i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;
}

let fiboseries = fibonacchi(6);

console.log(fiboseries);
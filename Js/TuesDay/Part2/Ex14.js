function intersection(a , b) {
    var newArray = [];
    
    a.forEach(efroma => {
        if(b.includes(efroma)) {
            newArray.push(efroma);
        } 
    });
    return newArray.filter((a, i) => newArray.indexOf(a) == i );
}

// console.log(intersection([1,2,3, 4,4], [2, 4 ,4,6]) );


function difference(a , b) {
    var newarray = []; 
    a.forEach( e => {
        if(!b.includes(e)) newarray.push(e);
    })
    return newarray;
}
console.log(difference([1,2,3], [1,2,3,4]));

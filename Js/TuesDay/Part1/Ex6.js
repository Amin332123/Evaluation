const notes = [14, 8, 17, 11, 15, 9, 18, 12];

const NoteSum = notes.reduce((acc , cvalue) => acc + cvalue);

const avg = NoteSum / notes.length;


const maxNote =  notes.reduce((acc, n) => n > acc ? n : acc) ;

const moreThanAvg = notes.reduce((acc , n) => {
    if (n > avg) {
        acc.push(n); 
    }
    return acc;
}, []);



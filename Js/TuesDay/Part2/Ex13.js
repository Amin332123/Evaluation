

function flatten(table) {
    if(!Array.isArray(table)) return [table];
    return table.reduce((acc, v) => {
        return acc.concat(flatten(v));
    }, []);
}

console.log(flatten([1, [2, 3], [4, [5, 6]]]));
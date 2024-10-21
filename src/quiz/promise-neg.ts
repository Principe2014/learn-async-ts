const array2D_3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, -9]
];



function countNegativeRow(row: number[]): Promise<void> {
    return new Promise((resolve) => {
        if (row.some(num => num < 0)) {
            console.log(row);
        }
        resolve();
    });
}

Promise.all(array2D_3.map(countNegativeRow))
    .then(() => {
        console.log("All rows checked.");
    })
    .catch(error => {
        console.error("Error:", error);
    });

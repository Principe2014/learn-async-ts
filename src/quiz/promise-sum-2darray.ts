function suma2DArray(array: number[][]): Promise<number> {
    const promises = array.map((row) => {
        return Promise.resolve(row.reduce((sum, num) => sum + num, 0));
    });

    return Promise.all(promises).then((rowSums) => {
        return rowSums.reduce((sum, rowSum) => sum + rowSum, 0);
    });
}


const array2D_1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];


suma2DArray(array2D_1)
  .then((sum) => {
    console.log('Sum of the 2D array:', sum);
  })
  .catch((err) => {
    console.error('Error:', err);
  });
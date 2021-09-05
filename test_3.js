/*Нужно написать функцию, которая протестирует функцию getPairs из первого задания

Важно, что элементы внутри массива expectedArr и элементы внутри его подмассивов могут располагаться в любом порядке,
поэтому тестирующая функция должна учитывать этот момент и выдавать положительный результат
даже в случае несовпадения порядка элементов*/

function resultsMatched(arr, sum, expectedArr) {

    let res = getPairs(arr, sum);
    let isEqual = true;

    if ( expectedArr.length === res.length) {

        expectedArr.sort();
        res.sort();

        expectedArr.forEach((a, i) => {
            isEqual = isEqual && a === res[i]
        })
     }

     return isEqual;
}

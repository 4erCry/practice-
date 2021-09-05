/*Имеется массив целых чисел. Нужно создать функцию, которая найдет два числа с наибольшей разницей между ними и вернет
их индексы в виде массива из двух элементов - [ lowest, biggest ]

Важно, чтобы большее число находилось справа от меньшего
В случае, если подобной пары чисел в массиве нет(разница между ними <= 0), то вернуть пустой массив*/

function getProfit(arr) {

    const result = [];

    let diff = 0;
    let _result = null;
    let min = arr[0];
    let max = null;

    for (let i = 1; i < arr.length; i += 1) {
        max = arr[i];

        if (min < max) {
            _result = max-min;
            if (diff < _result) {
                diff = _result;
            }
        } else {
            min = max;
        }
    }

    for (let i = 1; i < arr.length; i += 1) {
        for (let j = 1; j < arr.length; j += 1) {
            if (arr[i] - arr[j] === diff && j < i) {
                result.push(j);
                result.push(i);
            }
        }
    }

    return result;
}
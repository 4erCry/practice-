/*Имеется массив целых чисел. Нужно создать функцию, которая сгруппирует числа по сумме их пар

Важно! Каждый элемент массива разрешается использовать не более одного раза!*/

function getPairs(arr, sum) {

    const result = [];

     arr.forEach(n => {
        const pair = result.find(m => {
            return m.length === 1 && m[0] + n === sum;
        });
        if (pair) {
            pair.push(n);
        } else {
            result.push([n]);
        }
    });

    return result.filter(n => {
        return n.length === 2;
    });
}

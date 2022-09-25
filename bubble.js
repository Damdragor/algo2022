const array = [19, -2, 9, 3, 7, 112, 102, -228, -56, -23, -598, -4, 56, 96, 62, 563, 
    541, 8, -1, 23, 25, -9, 4, 10, 632, -754, 62, 32, -41, 5]

BubbleSort (array)
function BubbleSort (array) {
    for (let n = 0; n < array.length; n++) {
        for (let i = 0; i < array.length - 1 -n; i++) {
            if (array[i] > array[i + 1]) {
                const buff = array[i]
                array[i] = array[i + 1]
                array[i + 1] = buff
            }
        }
    }
    console.log(array)
}
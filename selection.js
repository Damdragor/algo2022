let array = [3, 1, 4, 3, 2, -5, 5, -12, -3, 2];
selectionSort(array);
console.log(array);

function selectionSort(array) { 
    let n = array.length;
        
    for(let i = 0; i < n; i++) {
        let min = i;
        for(let j = i; j < n; j++) {
            if(array[j] < array[min]) {
                min=j; 
            }
         }
         if (min != i) {
             let tmp = array[i]; 
             array[i] = array[min];
             array[min] = tmp;      
        }
    }
    return array;
}

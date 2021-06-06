const arr = [2, 3, 5, 7, 8, 10, 12, 15, 18, 20];
const target = 7;

function binarySearch(array, target) {
    let low = 0, high = array.length - 1;
    while (low <= high) {
        let mid = Math.round((low + high) / 2);
        if (target == array[mid]) return mid;
        if (target < array[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return -1;
}

//recursive way
const recBinarySearch = (array, target) => {
    let low = 0, high = array.length-1;
    const search = (l, h) => {
            let mid = Math.round((l + h) / 2);
            if(array[mid] == target){
                return mid;
            }
            if(target < array[mid]){
                high = mid - 1;
            }else{
                low = mid + 1;
            }
            return (low <= high) ? search(low, high) : -1;
    }
    return search(low, high);
 }


console.log(recBinarySearch(arr, 72));
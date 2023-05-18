const selectionSort = (arr: number[]): number[] => {
    const res = arr.slice();
    let min: number;

    for (let i = 0; i < res.length; i++) {
        min = i;
        for (let j = i + 1; j < res.length; j++) {
            if (res[j] < res[min]) {
                min = j;
            }
        }
        if (min !== i) {
            [res[i], res[min]] = [res[min], res[i]];
        }
    }
    return res;

}


const insertionSort = (arr: number[]): number[] => {
    const res = arr.slice();

    for (let i = 0; i < res.length; i++) {
        let j = i;
        while (j > 0 && res[j] < res[j - 1]) {
            [res[j], res[j - 1]] = [res[j - 1], res[j]];
            j -= 1;
        }
    }
    return res;

}

const shellSort = (arr: number[]): number[] => {
    const res = arr.slice();
    let h = 1;

    while (h < res.length / 3) h = 3 * h + 1;

    while (h >= 1) {
        for (let i = h; i < res.length; i++) {
            let j = i;
            while (j >= h && res[j] < res[j - h]) {
                [res[j], res[j - h]] = [res[j - h], res[j]];
                j -= h;
            }
        }
        h = Math.floor(h / 3)
    }

    return res;

}

const shuffling = (arr: number[]): number[] => {
    const res = arr.slice();

    for (let i = 0; i < res.length; i++) {
        const r = Math.floor(Math.random() * i);
        [res[i], res[r]] = [res[r], res[i]];
    }
    return res;
}

const convexHull = (points: [number, number][]) => {

    // to be implemented :/

}

const arr = Array(10).fill(0).map((_, i) => i + 1)


console.log(selectionSort(shuffling(arr)))
console.log(insertionSort(shuffling(arr)))
console.log(shellSort(shuffling(arr)))
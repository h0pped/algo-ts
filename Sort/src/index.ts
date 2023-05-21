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
const mergeSort = (arr: number[]) => {
    const merge = (a: number[], lo: number, mid: number, hi: number) => {
        const aux = a.slice();

        let i = lo, j = mid + 1;

        for (let k = lo; k <= hi; k++) {
            if (i > mid) arr[k] = aux[j++]
            else if (j > hi) arr[k] = aux[i++]
            else if (aux[j] < aux[i]) arr[k] = aux[j++]
            else arr[k] = aux[i++]
        }
    }

    const sort = (a: number[], lo: number, hi: number) => {
        if (hi <= lo) return
        const mid = Math.floor(lo + (hi - lo) / 2);

        sort(a, lo, mid)
        sort(a, mid + 1, hi)
        merge(a, lo, mid, hi)
    }

    sort(arr, 0, arr.length - 1)
    return arr
}


const convexHull = (points: [number, number][]) => {

    // to be implemented :/

}

interface Point {
    x: number,
    y: number
}

const ccw = (a: Point, b: Point, c: Point): number => {
    const area2 = (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x)

    if (area2 < 0) return -1
    if (area2 > 0) return 1
    return 0
}

const hull = []

const arr = Array(10).fill(0).map((_, i) => i + 1)


console.log(selectionSort(shuffling(arr)))
console.log(insertionSort(shuffling(arr)))
console.log(shellSort(shuffling(arr)))
console.log(mergeSort(shuffling(arr)))
export default class Percolation {
    private grid: number[][];

    constructor(public N: number) {
        this.grid = Array(N).fill(Array(N).fill(0));
        for (let i = 0; i < N; i++) {
            this.grid[i] = this.grid[i].map(() => 0)
        }
    }

    public open(row: number, col: number) {
        if (row < 0 || row >= this.N || col < 0 || col >= this.N) throw new Error(`Index pair (${row}, ${col}) is out of bounds`);

        this.grid[row][col] = 1;
    }
    public isOpen(row: number, col: number) {
        if (row < 0 || row >= this.N || col < 0 || col >= this.N) throw new Error(`Index pair (${row}, ${col}) is out of bounds`);

        return this.grid[row][col];
    }
    public printGrid() {
        this.grid.forEach(row => console.log(row))
    }
}
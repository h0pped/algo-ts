"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Percolation {
    constructor(N) {
        this.N = N;
        this.grid = Array(N).fill(Array(N).fill(0));
        for (let i = 0; i < N; i++) {
            this.grid[i] = this.grid[i].map(() => 0);
        }
    }
    open(row, col) {
        if (row < 0 || row >= this.N || col < 0 || col >= this.N)
            throw new Error(`Index pair (${row}, ${col}) is out of bounds`);
        this.grid[row][col] = 1;
    }
    isOpen(row, col) {
        if (row < 0 || row >= this.N || col < 0 || col >= this.N)
            throw new Error(`Index pair (${row}, ${col}) is out of bounds`);
        return this.grid[row][col];
    }
    printGrid() {
        this.grid.forEach(row => console.log(row));
    }
}
exports.default = Percolation;

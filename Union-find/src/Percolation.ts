import QuickUnionFind from "./QuickUnionFind";
export default class Percolation {
    private site: number[];
    private uf: QuickUnionFind;
    private ufPerc: QuickUnionFind;

    private top: number;
    private bottom: number;

    constructor(public N: number) {
        this.uf = new QuickUnionFind(N * N + 2);
        this.ufPerc = new QuickUnionFind(N * N + 2);
        this.top = N * N;
        this.bottom = N * N + 1;
        this.site = Array(N * N).fill(0);
    }

    public open(row: number, col: number) {
        this.throwIfNotInBounds(row, col);

        if (this.isOpen(row, col)) return;

        const currentSite = this.convert2dTo1dCoord(row, col);

        this.site[currentSite] = 1;

        if (row === 1 && !this.uf.connected(currentSite, this.top)) {
            this.uf.union(currentSite, this.top);
            this.ufPerc.union(currentSite, this.top);
        }
        if (row === this.N) {
            this.ufPerc.union(currentSite, this.bottom);
        }
        if (row < this.N) {
            if (this.isOpen(row + 1, col)) {
                this.uf.union(currentSite, this.convert2dTo1dCoord(row + 1, col));
                this.ufPerc.union(currentSite, this.convert2dTo1dCoord(row + 1, col));
            }
        }
        if (row > 1) {
            if (this.isOpen(row - 1, col)) {
                this.uf.union(currentSite, this.convert2dTo1dCoord(row - 1, col));
                this.ufPerc.union(currentSite, this.convert2dTo1dCoord(row - 1, col));
            }
        }

        if (col > 1) {
            if (this.isOpen(row, col - 1)) {
                this.uf.union(currentSite, this.convert2dTo1dCoord(row, col - 1));
                this.ufPerc.union(currentSite, this.convert2dTo1dCoord(row, col - 1));
            }
        }
        if (col < this.N) {
            if (this.isOpen(row, col + 1)) {
                this.uf.union(currentSite, this.convert2dTo1dCoord(row, col + 1));
                this.ufPerc.union(currentSite, this.convert2dTo1dCoord(row, col + 1));
            }
        }



    }

    public isOpen(row: number, col: number) {
        this.throwIfNotInBounds(row, col);

        return this.site[this.convert2dTo1dCoord(row, col)] === 1
    }
    public isFull(row: number, col: number) {
        this.throwIfNotInBounds(row, col);

        if (!this.isOpen(row, col)) {
            return false;
        }

        const currentSite = this.convert2dTo1dCoord(row, col);
        if (this.uf.connected(this.top, currentSite)) {

            return true;
        }
        return false;
    }

    public numberOfOpenSites() {
        this.site.reduce((acc, curr) => acc + curr, 0)
    }
    public printGrid() {
        for (let i = 0; i < this.N; i++) {
            console.log(this.site.slice(i * this.N, (i + 1) * this.N));
        }
    }
    public percolates() {
        return this.ufPerc.connected(this.top, this.bottom);
    }

    private throwIfNotInBounds(i: number, j: number) {
        if (i < 1 || i > this.N || j < 1 || j > this.N) {
            throw new Error(`Index pair (${i}, ${j}) is out of bounds`);
        }
        return true;
    }
    private convert2dTo1dCoord(i: number, j: number) {
        const pos = this.N * (i - 1) + j - 1;
        return pos;
    }
}
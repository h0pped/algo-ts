"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class QuickUnionFind {
    constructor(N) {
        this.N = N;
        this.count = this.N;
        this.unions = Array(N).fill(0).map((_, i) => i);
        this.weights = Array(N).fill(1);
    }
    union(p, q) {
        try {
            this.throwIfIndexOutOfBounds(p, q);
            const i = this.root(p);
            const j = this.root(q);
            if (i === j) {
                return;
            }
            if (this.weights[i] < this.weights[j]) {
                this.unions[i] = j;
                this.weights[j] += this.weights[i];
            }
            else {
                this.unions[j] = i;
                this.weights[i] += this.weights[j];
            }
        }
        catch (err) {
            console.error(err.message);
        }
    }
    find(p, q) {
        try {
            this.throwIfIndexOutOfBounds(p, q);
            return this.root(p) === this.root(q);
        }
        catch (err) {
            console.error(err);
            return false;
        }
    }
    root(p) {
        let parent = this.unions[p];
        while (parent !== this.unions[parent]) {
            this.unions[parent] = this.unions[this.unions[parent]]; // path compression
            parent = this.unions[parent];
        }
        return parent;
    }
    printUnions() {
        console.log(this.unions);
    }
    throwIfIndexOutOfBounds(p, q) {
        if (p < 0 || p >= this.N || q < 0 || q >= this.N)
            throw new Error(`Index pair (${p}, ${q}) is out of bounds`);
    }
}
exports.default = QuickUnionFind;

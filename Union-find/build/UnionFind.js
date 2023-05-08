"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UnionFind {
    constructor(N) {
        this.N = N;
        this.count = this.N;
        this.unions = Array(N).fill(0).map((_, i) => [i]);
    }
    union(p, q) {
        try {
            this.throwIfIndexOutOfBounds(p, q);
            const i = this.find(p);
            const j = this.find(q);
            if (i === j)
                return;
            this.unions[i] = this.unions[i].concat(this.unions[j]);
            this.unions.splice(j, 1);
            this.count--;
        }
        catch (err) {
            console.error(err.message);
        }
    }
    connected(p, q) {
        try {
            this.throwIfIndexOutOfBounds(p, q);
            return this.find(p) === this.find(q);
        }
        catch (err) {
            console.error(err.message);
            return false;
        }
    }
    find(p) {
        return this.unions.findIndex((union) => union.includes(p));
    }
    printUnions() {
        console.log(this.unions);
    }
    throwIfIndexOutOfBounds(p, q) {
        if (p < 0 || p >= this.N || q < 0 || q >= this.N)
            throw new Error(`Index pair (${p}, ${q}) is out of bounds`);
    }
}
exports.default = UnionFind;

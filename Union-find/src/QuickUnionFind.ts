export default class QuickUnionFind {
    private unions: number[];
    private weights: number[];

    constructor(public N: number) {
        this.unions = Array(N).fill(0).map((_, i) => i);
        this.weights = Array(N).fill(1)
    }

    public union(p: number, q: number) {
        try {
            this.throwIfIndexOutOfBounds(p, q)

            const i = this.root(p)
            const j = this.root(q)

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
        } catch (err: any) {
            console.error(err.message)
        }
    }

    public find(p: number, q: number): boolean {
        try {
            this.throwIfIndexOutOfBounds(p, q)

            return this.root(p) === this.root(q);
        }
        catch (err) {
            console.error(err);
            return false;
        }
    }

    public root(p: number) {
        let parent = this.unions[p];
        while (parent !== this.unions[parent]) {
            this.unions[parent] = this.unions[this.unions[parent]] // path compression
            parent = this.unions[parent];
        }
        return parent;
    }

    public count = this.N;

    public printUnions() {
        console.log(this.unions);
    }

    private throwIfIndexOutOfBounds(p: number, q: number): void | never {
        if (p < 0 || p >= this.N || q < 0 || q >= this.N) throw new Error(`Index pair (${p}, ${q}) is out of bounds`);
    }

}
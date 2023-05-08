export default class UnionFind {
    private unions: number[][];
    constructor(public N: number) {
        this.unions = Array(N).fill(0).map((_, i) => [i]);
    }

    public count = this.N;

    public union(p: number, q: number) {
        try {

            this.throwIfIndexOutOfBounds(p, q)

            const i = this.find(p);
            const j = this.find(q);

            if (i === j) return;

            this.unions[i] = this.unions[i].concat(this.unions[j]);
            this.unions.splice(j, 1);
            this.count--;
        }
        catch (err: any) {
            console.error(err.message)
        }

    }

    public connected(p: number, q: number): boolean {
        try {
            this.throwIfIndexOutOfBounds(p, q)

            return this.find(p) === this.find(q);
        }
        catch (err: any) {
            console.error(err.message)
            return false;
        }

    }

    public find(p: number): number {
        return this.unions.findIndex((union) => union.includes(p));
    }

    public printUnions() {
        console.log(this.unions);
    }

    private throwIfIndexOutOfBounds(p: number, q: number): void | never {
        if (p < 0 || p >= this.N || q < 0 || q >= this.N) throw new Error(`Index pair (${p}, ${q}) is out of bounds`);
    }
}
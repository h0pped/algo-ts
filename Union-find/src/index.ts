import UnionFind from "./UnionFind";
import QuickUnionFind from "./QuickUnionFind";
import Percolation from "./Percolation";

// const uf = new UnionFind(10);

// uf.union(0, 1);
// uf.union(1, 2);
// uf.union(1, 3);

// uf.union(7, 8)
// uf.union(8, 9)

// uf.union(4, 5)
// uf.union(4, 6)

// uf.printUnions()

// console.log(uf.connected(0, 3));
// console.log(uf.connected(0, 4));
// console.log(uf.connected(0, 7));
// console.log(uf.connected(-1, -1));


// const ufQuick = new QuickUnionFind(10);


// ufQuick.union(0, 1);
// ufQuick.union(0, 2);
// ufQuick.printUnions()


const N = 5;
const mcsim = new Percolation(N);
let counter = 0;
while (!mcsim.percolates()) {
    const row = Math.floor(Math.random() * N) + 1;
    const col = Math.floor(Math.random() * N) + 1;
    if (!mcsim.isOpen(row, col)) {
        mcsim.open(row, col);
        counter++;
    }
}

mcsim.printGrid()
console.log(counter / mcsim.N ** 2)

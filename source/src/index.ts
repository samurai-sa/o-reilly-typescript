// ====
// 5 章
// ====
let set = new Set;
set.add(1).add(2).add(3);
set.has(2);
set.has(4);

type Color = 'Black' | 'White';
type File = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';
type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 8 ;

class Position {
  constructor (
    private file: File,
    private rank: Rank
  ){}
  distanceFrom(position: Position) {
    return {
      rank: Math.abs(position.rank - this.rank),
      file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0))
    }
  }
}

abstract class Piece {
  protected position: Position
  constructor (
    private readonly color: Color,
    file: File,
    rank: Rank
  ){
    this.position = new Position(file, rank)
  }
  moveTo(position: Position) {
    this.position = this.position;
  }
  abstract canMoveTo(position: Position): boolean
}


class Game {
  private pieces = Game.makePieces()
  private static makePieces() {
    return [
      new King('White', 'E', 1),
      new King('Black', 'E', 8),
    ]
  }
}

class King extends Piece {
  canMoveTo(position: Position): boolean {
    let distance = this.position.distanceFrom(position)
    return distance.rank < 2 && distance.file < 2
  }
}

// ====
// 4 章
// ====
type Reduce<T> = {
  (array: T[], initialValue: T): T
}

const genericStringReduce: Reduce<string> = (array, initialValue) => {
  let result = initialValue;
  for (let i=0; i < array.length; i++) {
    result += array[i];
  }
  return result;
};

console.log(genericStringReduce(["1", "2", "3"], "ジェネリック: "));

// ジェネリック
function map<T, U>(array: T[], f: (item: T) => U): U[] {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result[i] = f(array[i]);
  }
  return result;
}

const arr = [1, 2, 3];
console.log(map(arr, v => v === 2 ));
console.log(map <string, boolean>(['a', 'b', 'c'], v => v === 'b'));

// 関数の呼び出し
function add(a: number, b: number) {
  const sum = a + b;
  console.log(sum);
  return sum;
}

add.apply(null, [10, 20]); // => 30
add.call(null, 10, 30); // => 30
add.bind(null, 10, 40)(); // => 30

function * createFibonacciGenerator() {
  let a = 0;
  let b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

// ジェネレーター
let fibonacciGenerator = createFibonacciGenerator();
fibonacciGenerator.next();
fibonacciGenerator.next();
fibonacciGenerator.next();
fibonacciGenerator.next();
fibonacciGenerator.next();
fibonacciGenerator.next();

// シグネチャ
type Log = (message: string, userId?: string) => void

let log: Log = (message, userId = 'Not signed in') => {
  let time = new Date().toISOString();
  console.log(time, message, userId)
}

log("こんにちは");

// オーバーロード

// ====
// 3 章
// ====

let a: {
  b: number,
  c?: string,
  [key: number]: boolean
}

a = { b: 1, c: undefined }
a = { b: 1, c: 'd' }
a = { b: 1, 10: true }
a = { b: 1, 10: true, 20: false, 30: true }

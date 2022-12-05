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

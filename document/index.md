# Typescript - スケールする JavaScript アプリケーション開発

## 2章

### TypeScript のコンパイルプロセス

1. TypeScript ソース → TypeScript AST
2. AST が型チェッカーによってチェックされる
3. TypeScript AST → JavaScript ソース
4. JavaScript ソース → JavaScript AST
5. AST → バイトコード
6. バイトコードがランタイムによって評価される

## 3章

### 型（type）

値と、それを使ってできる事柄の集まり

たとえば、+ を使って2つの数値を足したり、`.toUpperCase` を使って文字列を大文字にしたりすることができる。

### リテラル型（Literal Type）

ただ、ひとつの値を表し、それ以外の値は受け入れない型

```ts
let e: true = true
e = false // 型 'false' を型 'true' に割り当てることはできません。
```

tips: リテラル型は、 TypeScript をユニークな存在にしているものであり、 Java を使っている友人に自慢できる。

## 構造型付（Structural Typing）

プログラミングのスタイルの一種で、あるオブジェクトが特定のプロパティが特定のプロパティを持つことだけを重視し、その名前が（名前的型付）は気にしない。
一部の言語では、ダックタイピングとも呼ばれる

`{}` を使って作成するようなシンプルなオブジェクトと new を使って作成するような複雑なオブジェクトの違いを区別することはできない。

## インデックスシグネチャ

以下のような構文をインデックスシグネチャと呼ぶ。

```ts
[key: T]: U


// example
let a: {
  b: number,
  c?: string,
  [key: number]: boolean
}

```

インデックスシグネチャのキー型（T）は `string` or `number` のどちらかでなければならない。
任意の数だけプロパティをもつことができる。

### TypeScript でオブジェクトを宣言する方法

1. オブジェクトリテラル表記（ex: {a: string}）。形状とも呼ばれる。
これは、オブジェクトがどのようなフィールドを持つかがわかっている場合やオブジェクトのすべての値が同じ型を持つ場合に使う。
1. 空のオブジェクトリテラル表記 `{}` はできるだけ避ける。
1. object 型。これは、単にオブジェクトが必要でそれがどのようなフィールドを持つかは重視しない場合に使う。
1. Object 型。これは、できるだけ避ける。 `{}` と同じ

### 型エイリアス

変数宣言を使って、値の別名（エイリアス）となる変数を宣言できるのと同様にある型を指し示す `型エイリアス` を宣言することができる。

```ts
type Person {
  name: string
  age: number
}
```

### 合併型と交差型

```ts
type Cat = {name: string, purrs: boolean}
type Dog = {name: string, purrs: boolean, wags: boolean}
type CatOrDogOrBoth = Cat | Dog // 合併型 union
type CatAndDog = Cat & Dog // 交差型 intersection
```

### 配列

宣言方法は以下の表記。

```ts
T[]
Array<T>
```

### タプル

配列のサブタイプ。

```ts
// 固定長
let a: [number] = [1];
let b: [string, string, number] = ['abc', 'def', 1];

// 可変長
let friends: [string, ...string[]] = ['sara', 'Tali', 'Chloe'];

// 読み取り専用
// イミュータブルな配列操作ができる
let as: readonly number[] = [1, 2, 3];
```

### null, undefined, void, never

- null
  - 値の欠如
- undefined
  - 値がまだ定義されていない変数
- void
  - 明示的に何も返さない関数の戻り値
- never
  - 決して戻ることのない関数の型

tips: 古いバージョンの TypeScript ではすべての方で null を許容していた。

すべての変数で null かどうかチェックしないといけなかった。

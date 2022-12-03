let a: {
  b: number,
  c?: string,
  [key: number]: boolean
}

a = {b: 1, c: undefined}
a = {b: 1, c: 'd'}
a = {b: 1, 10: true}
a = {b: 1, 10: true, 20: false, 30: true}


function Foo () {
  this.f1 = 'hello'
}

Foo.prototype.say = () => { return 'hi' } // `say` is enumerable

// goodbye is not enumerable
Object.defineProperty(Foo.prototype, 'goodbye', {
  value: 42,
  enumerable: false
})

const instance = new Foo()
console.log('-- of Object.keys -- ')
for (const v of Object.keys(instance)) {
  console.log(v)
}

console.log('-- in --')
for (const v in instance) {
  console.log(v)
}

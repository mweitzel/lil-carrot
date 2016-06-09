# lil-carrot ( ˆ )

Semantically LISP, syntactically JavaScript.

ES6 allows the [circumflex ˆ](https://en.wikipedia.org/wiki/Circumflex) (the little carrot) and [ordinal symbols ª and º](https://en.wikipedia.org/wiki/Ordinal_indicator#.C2.BA_and_.C2.AA) to be used as variables.

I've found ˆ and ª read and write well as call and apply, but you can use whatever you like.  
You can type ˆ and ª on a mac with [alt-i] and [alt-9], respectively.

## Installation

```
$ npm install little-carrot
```

## Examples

```js
var lc = require('lil-carrot')
  , ˆ = lc.call
  , ª = lc.apply
  , plus = (a, b) => a + b

ˆ(console.log
, ˆ(plus, 5, 10)
, ª(plus, [15, 20])
)
// 15 35
```

And to show lil-carrot in a non trivial task, here's one way to go about the first problem on projecteuler.

```js
var ˆ = require('lil-carrot').call
  , log = console.log
  , f = require('./your-functional-helpers')
  , range  = f.range
  , reduce = f.reduce
  , filter = f.filter
  , mod  = (a, b) => a % b
  , or   = (a, b) => a || b
  , eq   = (a, b) => a === b
  , plus = (a, b) => a + b
  , isDivisibleBy = (byNum, num) =>
      ˆ(eq, 0, ˆ(mod, num, byNum))
  , numberIsDivisibleBy3or5 = number =>
      ˆ(or
      , ˆ(isDivisibleBy, 3, number)
      , ˆ(isDivisibleBy, 5, number))
  , numbersBelow = max =>
      ˆ(range, max)
  , sum = numbers =>
      ˆ(reduce, plus, numbers)
  , sum35NumbersBelow = max =>
      ˆ(sum
      , ˆ(filter
        , numberIsDivisibleBy3or5
        , ˆ(numbersBelow, max)
        )
      )

ˆ(log
, 'euler 1'
, '\n sum numbers'
, '\n and below 1000'
, '\n divisible by 3 or 5'
)

ˆ(log, ˆ(sum35NumbersBelow, 1000))
```

Its just Lisp :)

# License

  MIT

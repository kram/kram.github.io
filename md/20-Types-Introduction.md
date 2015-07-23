# Types / Builtin

All values in kram are deriving from the default `Class`-object. These are the default *builtin* values in kram that all other types (aka Methods/Classes/Libraries) derive from.

## Bool

`Bool` can only have two states, `true` or `false`. 

```go
var success = true
var fail = false
```

## Number

*Read more: [Number](https://github.com/kram/kram/wiki/Types_Number)*

A `Number` is the only way to represent a number (eg, 10, 1337 or 123.456) in kram.

```go
var positive = 1337
var price = 999.95
```

## String

*Read more: [String](https://github.com/kram/kram/wiki/Types_String)*

`String`s are a piece of UTF-8 text ,and they are defined by the usage of double quotes (`"`)

```go
var hello = "World"
```

## TODO
* List
* Map
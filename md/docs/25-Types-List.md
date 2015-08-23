# Types / List

----

A `List` is a list/selection of 0 or more values.

The values can be of any type, even other Lists if you so wish.

```go
// Initialize a new List
counting := []

// Push a single item to the list
counting.Push("first")

// Or multiple at once
counting.Push("second", "third", "fourth", "fifth")
```

A list can also be initialized with a list of values

```go
counting := ["first", "second", "third"]
```

`List` is just a class as any other, and can be initialized with `new` keyword if you want to.

```go
counting := new List()
```

## Ranges

A range is syntatic sugar for initializing a list. This is done with the `..` (exclusive) and `...` (inclusive) operators.

```go
// Creates the list [1, 2, 3, 4, 5]
numbers := 1...5

// [1, 2, 3, 4]
fewer_numbers := 1..5
```

Ranges only works when both the start and end value are `Number`s.

## Methods

### `List.Push(Type ... )`

Add items to the end of the list

```go
list.Push("first")
list.Push("second", "third", "fourth", "fifth")
```

### `List.Pop() Type`

Remove items form the end of the list, and return that value.

```go
list.Pop() // "fifth"
```

Note: If the list is empty, an exception will be thrown.

### `Map.At(Number) Value`

```go
// Short syntax
list[2] // "third"

// Or the method
list.At(2) // "third"
```

Note: If there is no item at that position an exception will be thrown.

### `Map.Size() Value`

```go
list := new List()
list.Size() // 0

list.Push("one", "two", "three")

list.Size() // 3
	
// Remove one item for example purpouses
list.Pop()

list.Size() // 2
```

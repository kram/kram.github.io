# Types / List

----

A `List` is a list/selection of 0 or more values.

The values can be of any type, even other Lists if you so wish.

```go
// Initialize a new List
counting := new List()

// Push a single item to the list
counting.Push("first")

// Or multiple at once
counting.Push("second", "third", "fourth", "fifth")
```

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

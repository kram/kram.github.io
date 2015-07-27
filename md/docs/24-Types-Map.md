# Types / Map

----

A `Map` is what other languages might call a dict or hashmap/unordered map.

The key must be a `String`, but the value can be of any type (even other `Map`s if you wish).

```go
// Initialize new Map
friends := new Map()

// Creates "Rachel" and "Monica"
friends.Set("Rachel", "Green")
friends.Set("Monica", "Geller")

IO::Println(friends.Get("Monica")) // Prints "Geller"

if friends.Has("Ross") {
	// Do something with the fact that "Ross" does/doesn't exist	
}
```

## Methods

### `Map.Set(String, Type)`

```go
capitals := new Map()
capitals.Set("Denmark", "Copenhagen")
capitals.Set("Germany", "Berlin")
```

### `Map.Get(String) Type`

```go
capitals.Get("Denmark") // Copenhagen
```

### `Map.Has(String) Bool`

```go
capitals.Has("Germany") // true
capitals.Has("Norway") // false
```

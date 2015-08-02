# Types / Function

----

`Function`s are just another Type, and can be assigned to variables like any other.

```go
// Create new function
get_three := fn() {
	// The last statement of a function is returned (see "Return Values")
	3
}

// A function is executed with ()
three := get_three()

IO::Println(three) // 3
```

## Arguments and parameters

You can pass arguments to functions the same way as other C-like languages.

```go
myPrint := fn(input) {
	IO::Println(input)
}

myPrint("Hello World!")
```

Multiple arguments can be passed to a function by seperating them with commas

```go
multiPrint := fn(first, second, third) {
	IO::Println(first)
	IO::Println(second)
	IO::Println(third)
}

myPrint("One", "Two", "Three!")
```
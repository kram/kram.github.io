---
layout:     post
title:      "Control flow"
categories: getting-started
---

## If / Else

`if` and `else` are currently the only available control structures implemented in kram.

{% highlight go %}
if condition {
	// Was true
} else {
	// Not true
}
{% endhighlight %}
{% highlight go %}
if condition {
	// Was true
}
{% endhighlight %}
## While

kram only has a simple way of looping (for now), the `while`-loop.

### Example

{% highlight go %}
// Prints the numbers 1 to 10
i := 1

while i <= 10 {
	IO::Println(i)
	i := 1
}
{% endhighlight %}
---
layout:     post
title:      "Getting started"
categories: getting-started
---

Getting started is as easy as 1-2-3!

## Building

### Unix

The only requirement is that you have a compiler that supports C++11 (g++/gcc 4.8 and higher). Then the following two commands should do everything you need!

{% highlight bash %}
$ git clone git@github.com:kram/kram.git
$ make
{% endhighlight %}

## Executing

When you have your kram binary ready you're ready to rock, just execute `kram /path/to/script.kr and you're done! Congratulations on executing your first kram script!

## Hello World

One of the main goals of kram is to have an *extremely* low point of entry, a Hello World is as simple as

{% highlight go %}
IO::Println("Hello World!")
{% endhighlight %}

You're a kram programmer now! If you have any questions, have found any bugs or want to contribute to the project and of the following methods are great!

* [File a ticket](https://github.com/kram/kram/issues) in our repository at [GitHub](https://github.com/kram/kram)
* Write to me at Twitter, <a href="https://twitter.com/zegl">@zegl</a>

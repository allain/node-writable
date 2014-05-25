node-writable
=============

More easily construct writable streams.  `writable` is a small shortcut to help construct writable streams,
much the same way that [through2](https://github.com/rvagg/through2) is a shortcut for constructing through streams.

### install

```sh
$ npm i writable
```

### use

Very contrived examples follow:

```js
var writable = require('writable')

//standard
var out = writable(function(chunk, enc, cb) {
  console.log(chunk.toString())
  cb()
})
out.write('hello world') //output => hello world

//implicit callback
var implicit = writable(function(chunk) {
  console.log(chunk)
})
implicit.write('hello world') //output => hello world

//object mode with implicit callback
var objStream = writable({objectMode: true}, function(obj) {
  console.log(obj.name)
})
objStream.write({name: 'Brian'}) //output => Brian
```

### api

`require('writable')` returns a function `makeWritable` that builds a writable stream for you.  This function accepts a callback function 
that takes 1 or more arguments.  Normally you'd accept `item`, `encoding`, and `callback` in this method, just like
the method signature for [Writable._write](http://nodejs.org/api/stream.html#stream_writable_write_chunk_encoding_callback_1).

`makeWritable` will sniff the method arguments on the callback you pass into it.  If it sees only 1 argument, it will
implicitly call the callback for you.  That's a handy little shortcut for the common case of doing something on the writer
that is a sync action.

##### function writable(function callback(string/buffer/object item, <string encoding>, <function callback>))

That's really all there is to it.

### license

The MIT License (MIT)

Copyright (c) 2014 Brian M. Carlson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


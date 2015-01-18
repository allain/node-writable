var writable = require('../')
  
var aObject = {};
var doneObject = {};
 
describe('async writer', function() {
  it('works', function(done) {
    var writer = writable(function(item, enc, cb) {
      if(item == 'done') {
        done()
      }
      cb()
    })
    writer.write('sup!')
    writer.write('done')
  })

  it('supports objectMode through method', function(done) {
    var writer = writable.obj(function(item, enc, cb) {
      if(item == doneObject) {
        done()
      }
      cb()
    })

    writer.write(aObject);
    writer.write(doneObject);
  })
})

describe('sync writer', function() {
  it('works', function(done) {
    var writer = writable(function(item) {
      if(item == 'done') done();
    })
    writer.write('hit')
    writer.write('done')
  })
  
  it('supports objectMode through method', function(done) {
    var writer = writable.obj(function(item) {
      if(item == doneObject) {
        done()
      }
    })

    writer.write(aObject);
    writer.write(doneObject);
  })
})

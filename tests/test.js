var Dispatcher = require('../dispatcher');

function assert(bool) {
  if (!bool)
    throw Error('Assertion failed.');
}

describe("Dispatcher", function() {

  var d;

  beforeEach(function() {
    d = new Dispatcher();
  });

  it("subscribes to and dispatches an event.", function() {
    var counter = {count: 0};
    d.subscribe('click', function(counter) {
      counter.count++;
    });
    d.dispatch('click', counter);
    assert(counter.count == 1);
    d.dispatch('click', counter);
    assert(counter.count == 2);
  });

});

module.exports = function(input) {
  var helper = function(items) {
    var end = [];
    for (i = 0; i < items.length; ++i) {
      var itemparts = items[i].split(':');
      var value = itemparts.pop();
      var dobreak = false;
      while (itemparts.length) {
        var obj = {};
        if (value == "" && i+1 < items.length) {
          // Recursive call
          value = helper(items.slice(i+1,items.length));
          dobreak = true;
        }
        obj[itemparts.pop()] = value;
        value = obj;
      }
      end.push(value);
      
      if (dobreak) {
        break;
      }
    }
    return end;
  };
  return helper(input.split('\r\n'));
};
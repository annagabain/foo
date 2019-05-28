// Generated by CoffeeScript 2.3.2
var assert, print, range, substring;

assert = require('assert').deepEqual;

range = require('lodash').range;

print = console.log;

print('##### begin #####');

substring = function(left, right, start, stop) {
  var left_start, left_stop, left_sub, right_start, right_stop, right_sub;
  left_start = start;
  left_stop = Math.min(stop, left.length);
  left_sub = start > left.length ? "" : left.slice(left_start, left_stop);
  right_start = Math.max(0, start - left.length);
  right_stop = stop - left.length;
  right_sub = stop <= left.length ? "" : right.slice(right_start, right_stop);
  return left_sub + right_sub;
};

assert("", substring("abc", "def", 0, 0));

assert("", substring("abc", "def", 1, 1));

assert("", substring("abc", "def", 2, 2));

assert("", substring("abc", "def", 3, 3));

assert("", substring("abc", "def", 4, 4));

assert("", substring("abc", "def", 5, 5));

assert("a", substring("abc", "def", 0, 1));

assert("b", substring("abc", "def", 1, 2));

assert("c", substring("abc", "def", 2, 3));

assert("d", substring("abc", "def", 3, 4));

assert("e", substring("abc", "def", 4, 5));

assert("f", substring("abc", "def", 5, 6));

assert("cd", substring("abc", "def", 2, 4));

assert("abc", substring("abc", "def", 0, 3));

assert("cde", substring("abc", "def", 2, 5));

assert("abcdef", substring("abc", "def", 0, 6));

print('#####  end  #####');

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Vic3RyaW5nLmpzIiwic291cmNlUm9vdCI6Ii4uIiwic291cmNlcyI6WyJzdWJzdHJpbmcuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFBLE1BQUEsRUFBQSxLQUFBLEVBQUEsS0FBQSxFQUFBOztBQUFBLE1BQUEsR0FBUyxPQUFBLENBQVEsUUFBUixDQUFpQixDQUFDOztBQUMzQixLQUFBLEdBQVEsT0FBQSxDQUFRLFFBQVIsQ0FBaUIsQ0FBQzs7QUFDMUIsS0FBQSxHQUFRLE9BQU8sQ0FBQzs7QUFDaEIsS0FBQSxDQUFNLG1CQUFOOztBQUVBLFNBQUEsR0FBWSxRQUFBLENBQUMsSUFBRCxFQUFPLEtBQVAsRUFBYyxLQUFkLEVBQXFCLElBQXJCLENBQUE7QUFDWCxNQUFBLFVBQUEsRUFBQSxTQUFBLEVBQUEsUUFBQSxFQUFBLFdBQUEsRUFBQSxVQUFBLEVBQUE7RUFBQSxVQUFBLEdBQWE7RUFDYixTQUFBLEdBQVksSUFBSSxDQUFDLEdBQUwsQ0FBUyxJQUFULEVBQWMsSUFBSSxDQUFDLE1BQW5CO0VBQ1osUUFBQSxHQUFjLEtBQUEsR0FBUSxJQUFJLENBQUMsTUFBaEIsR0FBNEIsRUFBNUIsR0FBb0MsSUFBSSxDQUFDLEtBQUwsQ0FBVyxVQUFYLEVBQXNCLFNBQXRCO0VBQy9DLFdBQUEsR0FBYyxJQUFJLENBQUMsR0FBTCxDQUFTLENBQVQsRUFBVyxLQUFBLEdBQVEsSUFBSSxDQUFDLE1BQXhCO0VBQ2QsVUFBQSxHQUFhLElBQUEsR0FBTyxJQUFJLENBQUM7RUFDekIsU0FBQSxHQUFlLElBQUEsSUFBUSxJQUFJLENBQUMsTUFBaEIsR0FBNEIsRUFBNUIsR0FBb0MsS0FBSyxDQUFDLEtBQU4sQ0FBWSxXQUFaLEVBQXdCLFVBQXhCO1NBQ2hELFFBQUEsR0FBVztBQVBBOztBQVNaLE1BQUEsQ0FBTyxFQUFQLEVBQVcsU0FBQSxDQUFVLEtBQVYsRUFBZ0IsS0FBaEIsRUFBdUIsQ0FBdkIsRUFBMEIsQ0FBMUIsQ0FBWDs7QUFDQSxNQUFBLENBQU8sRUFBUCxFQUFXLFNBQUEsQ0FBVSxLQUFWLEVBQWdCLEtBQWhCLEVBQXVCLENBQXZCLEVBQTBCLENBQTFCLENBQVg7O0FBQ0EsTUFBQSxDQUFPLEVBQVAsRUFBVyxTQUFBLENBQVUsS0FBVixFQUFnQixLQUFoQixFQUF1QixDQUF2QixFQUEwQixDQUExQixDQUFYOztBQUNBLE1BQUEsQ0FBTyxFQUFQLEVBQVcsU0FBQSxDQUFVLEtBQVYsRUFBZ0IsS0FBaEIsRUFBdUIsQ0FBdkIsRUFBMEIsQ0FBMUIsQ0FBWDs7QUFDQSxNQUFBLENBQU8sRUFBUCxFQUFXLFNBQUEsQ0FBVSxLQUFWLEVBQWdCLEtBQWhCLEVBQXVCLENBQXZCLEVBQTBCLENBQTFCLENBQVg7O0FBQ0EsTUFBQSxDQUFPLEVBQVAsRUFBVyxTQUFBLENBQVUsS0FBVixFQUFnQixLQUFoQixFQUF1QixDQUF2QixFQUEwQixDQUExQixDQUFYOztBQUNBLE1BQUEsQ0FBTyxHQUFQLEVBQVksU0FBQSxDQUFVLEtBQVYsRUFBZ0IsS0FBaEIsRUFBdUIsQ0FBdkIsRUFBMEIsQ0FBMUIsQ0FBWjs7QUFDQSxNQUFBLENBQU8sR0FBUCxFQUFZLFNBQUEsQ0FBVSxLQUFWLEVBQWdCLEtBQWhCLEVBQXVCLENBQXZCLEVBQTBCLENBQTFCLENBQVo7O0FBQ0EsTUFBQSxDQUFPLEdBQVAsRUFBWSxTQUFBLENBQVUsS0FBVixFQUFnQixLQUFoQixFQUF1QixDQUF2QixFQUEwQixDQUExQixDQUFaOztBQUNBLE1BQUEsQ0FBTyxHQUFQLEVBQVksU0FBQSxDQUFVLEtBQVYsRUFBZ0IsS0FBaEIsRUFBdUIsQ0FBdkIsRUFBMEIsQ0FBMUIsQ0FBWjs7QUFDQSxNQUFBLENBQU8sR0FBUCxFQUFZLFNBQUEsQ0FBVSxLQUFWLEVBQWdCLEtBQWhCLEVBQXVCLENBQXZCLEVBQTBCLENBQTFCLENBQVo7O0FBQ0EsTUFBQSxDQUFPLEdBQVAsRUFBWSxTQUFBLENBQVUsS0FBVixFQUFnQixLQUFoQixFQUF1QixDQUF2QixFQUEwQixDQUExQixDQUFaOztBQUNBLE1BQUEsQ0FBTyxJQUFQLEVBQWEsU0FBQSxDQUFVLEtBQVYsRUFBZ0IsS0FBaEIsRUFBdUIsQ0FBdkIsRUFBMEIsQ0FBMUIsQ0FBYjs7QUFDQSxNQUFBLENBQU8sS0FBUCxFQUFjLFNBQUEsQ0FBVSxLQUFWLEVBQWdCLEtBQWhCLEVBQXVCLENBQXZCLEVBQTBCLENBQTFCLENBQWQ7O0FBQ0EsTUFBQSxDQUFPLEtBQVAsRUFBYyxTQUFBLENBQVUsS0FBVixFQUFnQixLQUFoQixFQUF1QixDQUF2QixFQUEwQixDQUExQixDQUFkOztBQUNBLE1BQUEsQ0FBTyxRQUFQLEVBQWlCLFNBQUEsQ0FBVSxLQUFWLEVBQWdCLEtBQWhCLEVBQXVCLENBQXZCLEVBQTBCLENBQTFCLENBQWpCOztBQUVBLEtBQUEsQ0FBTSxtQkFBTiIsInNvdXJjZXNDb250ZW50IjpbImFzc2VydCA9IHJlcXVpcmUoJ2Fzc2VydCcpLmRlZXBFcXVhbFxyXG5yYW5nZSA9IHJlcXVpcmUoJ2xvZGFzaCcpLnJhbmdlXHJcbnByaW50ID0gY29uc29sZS5sb2dcclxucHJpbnQgJyMjIyMjIGJlZ2luICMjIyMjJ1xyXG4gXHJcbnN1YnN0cmluZyA9IChsZWZ0LCByaWdodCwgc3RhcnQsIHN0b3ApIC0+IFxyXG5cdGxlZnRfc3RhcnQgPSBzdGFydFxyXG5cdGxlZnRfc3RvcCA9IE1hdGgubWluIHN0b3AsbGVmdC5sZW5ndGhcclxuXHRsZWZ0X3N1YiA9IGlmIHN0YXJ0ID4gbGVmdC5sZW5ndGggdGhlbiBcIlwiIGVsc2UgbGVmdC5zbGljZSBsZWZ0X3N0YXJ0LGxlZnRfc3RvcFxyXG5cdHJpZ2h0X3N0YXJ0ID0gTWF0aC5tYXggMCxzdGFydCAtIGxlZnQubGVuZ3RoXHJcblx0cmlnaHRfc3RvcCA9IHN0b3AgLSBsZWZ0Lmxlbmd0aFxyXG5cdHJpZ2h0X3N1YiA9IGlmIHN0b3AgPD0gbGVmdC5sZW5ndGggdGhlbiBcIlwiIGVsc2UgcmlnaHQuc2xpY2UgcmlnaHRfc3RhcnQscmlnaHRfc3RvcFxyXG5cdGxlZnRfc3ViICsgcmlnaHRfc3ViXHJcblxyXG5hc3NlcnQgXCJcIiwgc3Vic3RyaW5nIFwiYWJjXCIsXCJkZWZcIiwgMCwgMFxyXG5hc3NlcnQgXCJcIiwgc3Vic3RyaW5nIFwiYWJjXCIsXCJkZWZcIiwgMSwgMVxyXG5hc3NlcnQgXCJcIiwgc3Vic3RyaW5nIFwiYWJjXCIsXCJkZWZcIiwgMiwgMlxyXG5hc3NlcnQgXCJcIiwgc3Vic3RyaW5nIFwiYWJjXCIsXCJkZWZcIiwgMywgM1xyXG5hc3NlcnQgXCJcIiwgc3Vic3RyaW5nIFwiYWJjXCIsXCJkZWZcIiwgNCwgNFxyXG5hc3NlcnQgXCJcIiwgc3Vic3RyaW5nIFwiYWJjXCIsXCJkZWZcIiwgNSwgNVxyXG5hc3NlcnQgXCJhXCIsIHN1YnN0cmluZyBcImFiY1wiLFwiZGVmXCIsIDAsIDFcclxuYXNzZXJ0IFwiYlwiLCBzdWJzdHJpbmcgXCJhYmNcIixcImRlZlwiLCAxLCAyXHJcbmFzc2VydCBcImNcIiwgc3Vic3RyaW5nIFwiYWJjXCIsXCJkZWZcIiwgMiwgM1xyXG5hc3NlcnQgXCJkXCIsIHN1YnN0cmluZyBcImFiY1wiLFwiZGVmXCIsIDMsIDRcclxuYXNzZXJ0IFwiZVwiLCBzdWJzdHJpbmcgXCJhYmNcIixcImRlZlwiLCA0LCA1XHJcbmFzc2VydCBcImZcIiwgc3Vic3RyaW5nIFwiYWJjXCIsXCJkZWZcIiwgNSwgNlxyXG5hc3NlcnQgXCJjZFwiLCBzdWJzdHJpbmcgXCJhYmNcIixcImRlZlwiLCAyLCA0XHJcbmFzc2VydCBcImFiY1wiLCBzdWJzdHJpbmcgXCJhYmNcIixcImRlZlwiLCAwLCAzXHJcbmFzc2VydCBcImNkZVwiLCBzdWJzdHJpbmcgXCJhYmNcIixcImRlZlwiLCAyLCA1XHJcbmFzc2VydCBcImFiY2RlZlwiLCBzdWJzdHJpbmcgXCJhYmNcIixcImRlZlwiLCAwLCA2XHJcblxyXG5wcmludCAnIyMjIyMgIGVuZCAgIyMjIyMnXHJcbiJdfQ==
//# sourceURL=c:\github\foo\003-substring\substring.coffee
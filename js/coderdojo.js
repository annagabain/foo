// Generated by CoffeeScript 2.3.2
var ass, assert, f, print;

ass = require('assert');

assert = function(a, b) {
  if (a === b) {
    return;
  }
  print(`\nassert failure: (gives javascript file line numbers)\n${a}\n${b}\n`);
  throw new ass.AssertionError({
    actual: b,
    expected: a,
    operator: 'strictEqual'
  });
};

print = console.log;

f = function(hhxmm) {};


// assert '12:00 am', f '00:00'  
// assert '12:01 am', f '00:01'
// assert '12:59 am', f '00:59'
// assert '01:00 am', f '01:00' 
// assert '11:59 am', f '11:59' 
// assert '12:00 pm', f '12:00'     
// assert '12:01 pm', f '12:01'
// assert '12:59 pm', f '12:59'
// assert '01:00 pm', f '13:00'
// assert '11:59 pm', f '23:59'
print('\nok\n');

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZXJkb2pvLmpzIiwic291cmNlUm9vdCI6Ii4uIiwic291cmNlcyI6WyJjb2RlcmRvam8uY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFBLEdBQUEsRUFBQSxNQUFBLEVBQUEsQ0FBQSxFQUFBOztBQUFBLEdBQUEsR0FBTSxPQUFBLENBQVEsUUFBUjs7QUFFTixNQUFBLEdBQVMsUUFBQSxDQUFDLENBQUQsRUFBRyxDQUFILENBQUE7RUFDUixJQUFHLENBQUEsS0FBSyxDQUFSO0FBQWUsV0FBZjs7RUFDQSxLQUFBLENBQU0sQ0FBQSx3REFBQSxDQUFBLENBQTJELENBQTNELENBQTZELEVBQTdELENBQUEsQ0FBaUUsQ0FBakUsQ0FBbUUsRUFBbkUsQ0FBTjtFQUNBLE1BQU0sSUFBSSxHQUFHLENBQUMsY0FBUixDQUF1QjtJQUFDLE1BQUEsRUFBUSxDQUFUO0lBQVcsUUFBQSxFQUFVLENBQXJCO0lBQXVCLFFBQUEsRUFBVTtFQUFqQyxDQUF2QjtBQUhFOztBQUtULEtBQUEsR0FBUSxPQUFPLENBQUM7O0FBR2hCLENBQUEsR0FBSSxRQUFBLENBQUMsS0FBRCxDQUFBLEVBQUEsRUFWSjs7Ozs7Ozs7Ozs7OztBQXVCQSxLQUFBLENBQU0sUUFBTiIsInNvdXJjZXNDb250ZW50IjpbImFzcyA9IHJlcXVpcmUgJ2Fzc2VydCdcclxuXHJcbmFzc2VydCA9IChhLGIpIC0+IFxyXG5cdGlmIGEgPT0gYiB0aGVuIHJldHVyblxyXG5cdHByaW50IFwiXFxuYXNzZXJ0IGZhaWx1cmU6IChnaXZlcyBqYXZhc2NyaXB0IGZpbGUgbGluZSBudW1iZXJzKVxcbiN7YX1cXG4je2J9XFxuXCJcclxuXHR0aHJvd1x0bmV3IGFzcy5Bc3NlcnRpb25FcnJvciB7YWN0dWFsOiBiLGV4cGVjdGVkOiBhLG9wZXJhdG9yOiAnc3RyaWN0RXF1YWwnfVxyXG5cclxucHJpbnQgPSBjb25zb2xlLmxvZyBcclxuXHJcblxyXG5mID0gKGhoeG1tKSAtPlxyXG4gXHJcbiMgYXNzZXJ0ICcxMjowMCBhbScsIGYgJzAwOjAwJyAgXHJcbiMgYXNzZXJ0ICcxMjowMSBhbScsIGYgJzAwOjAxJ1xyXG4jIGFzc2VydCAnMTI6NTkgYW0nLCBmICcwMDo1OSdcclxuIyBhc3NlcnQgJzAxOjAwIGFtJywgZiAnMDE6MDAnIFxyXG4jIGFzc2VydCAnMTE6NTkgYW0nLCBmICcxMTo1OScgXHJcbiMgYXNzZXJ0ICcxMjowMCBwbScsIGYgJzEyOjAwJyAgICAgXHJcbiMgYXNzZXJ0ICcxMjowMSBwbScsIGYgJzEyOjAxJ1xyXG4jIGFzc2VydCAnMTI6NTkgcG0nLCBmICcxMjo1OSdcclxuIyBhc3NlcnQgJzAxOjAwIHBtJywgZiAnMTM6MDAnXHJcbiMgYXNzZXJ0ICcxMTo1OSBwbScsIGYgJzIzOjU5J1xyXG5cclxucHJpbnQgJ1xcbm9rXFxuJyJdfQ==
//# sourceURL=c:\github\vscode\coderdojo.coffee
// Generated by CoffeeScript 2.3.2
var _, assert, bsort, calc, compare, poker, print, range, reverse, sign;

_ = require('underscore');

assert = require('assert').deepEqual;

print = console.log;

print('###################');

range = _.range;

reverse = function(a) {
  return a.reverse();
};

sign = function(a, b) {
  if (a < b) {
    return 1;
  } else {
    if (a > b) {
      return -1;
    } else {
      return 0;
    }
  }
};

assert(-1, sign(2, 1));

assert(0, sign(3, 3));

assert(1, sign(1, 2));

compare = function(a, b) {
  var c, i, k, len, ref;
  if (typeof a === "object" && typeof b === "object") {
    ref = range(Math.min(a.length, b.length));
    for (k = 0, len = ref.length; k < len; k++) {
      i = ref[k];
      c = compare(a[i], b[i]);
      if (c !== 0) {
        return c;
      }
    }
  } else {
    return sign(a, b); //(if a > b then -1 else (if a < b then 1 else 0))
  }
  return 0;
};

assert(1, compare(12, 13));

assert(0, compare(12, 12));

assert(-1, compare(13, 12));

assert(-1, compare([1, 11], [1, 2]));

assert(0, compare([1, 11], [1, 11]));

assert(1, compare([1, 2], [1, 11]));

assert(1, compare([1, '11'], [1, '2']));

assert(0, compare([1, '11'], [1, '11']));

assert(-1, compare([1, '2'], [1, '11']));

bsort = function(list, cmp = compare) {
  var i, j, k, l, len, len1, ref, ref1;
  ref = range(list.length);
  for (k = 0, len = ref.length; k < len; k++) {
    i = ref[k];
    ref1 = range(list.length - 1);
    for (l = 0, len1 = ref1.length; l < len1; l++) {
      j = ref1[l];
      if (cmp(list[j], list[j + 1]) < 0) {
        [list[j], list[j + 1]] = [list[j + 1], list[j]];
      }
    }
  }
  return list;
};

assert([1, 2, 8], bsort([1, 8, 2], compare));

assert([1, 2, 8], bsort([1, 8, 2], compare));

assert([[1], [2], [8]], bsort([[1], [8], [2]], compare));

assert([[2, 1], [2, 2], [2, 8]], bsort([[2, 1], [2, 8], [2, 2]], compare));

assert([[1, 7], [1, 8], [1, 9]], bsort([[1, 8], [1, 7], [1, 9]], compare));

assert([1, 2, 3, 4], bsort([3, 2, 4, 1], compare));

poker = function(a, b) {
  return compare(calc(a.split(" ")), calc(b.split(" ")));
};

calc = function(hand) {
  var card, cnt, flush, groups, rank, ranks, score, straight, suit;
  groups = _.groupBy((function() {
    var k, len, results;
    results = [];
    for (k = 0, len = hand.length; k < len; k++) {
      card = hand[k];
      results.push('  23456789TJQKA'.indexOf(card[2]));
    }
    return results;
  })());
  [score, ranks] = _.unzip(reverse(bsort((function() {
    var results;
    results = [];
    for (rank in groups) {
      cnt = groups[rank];
      results.push([cnt.length, parseInt(rank)]);
    }
    return results;
  })())));
  if (score.length === 5) {
    if (compare(ranks, [14, 5, 4, 3, 2]) === 0) {
      ranks = [5, 4, 3, 2, 1];
    }
    straight = ranks[0] - ranks[4] === 4 ? 1 : 0;
    flush = _.size(_.uniq((function() {
      var k, len, results;
      results = [];
      for (k = 0, len = hand.length; k < len; k++) {
        suit = hand[k];
        results.push(suit.substring(0, 2));
      }
      return results;
    })())) === 1 ? 1 : 0;
    score = [[[1], [3, 1, 1, 1]], [[3, 1, 1, 2], [5]]][flush][straight];
  }
  return [score, ranks];
};

assert(-1, poker('kl8 ruA ru8 klA kl9', 'ru7 sp2 ru5 sp3 klA'));

assert(1, poker('kl8 spT klK hj9 sp4', 'ru7 sp2 ru5 sp3 klA'));

assert(1, poker('kl8 ruA ru8 klA kl9', 'kl8 ruA ru8 klA klT'));

assert(-1, poker('kl8 ruA ru8 klA kl9', 'kl8 ruA ru8 klA kl7'));

assert(1, poker('kl8 ruA ru8 klA kl9', 'klT ruA ruT klA kl9'));

assert(0, poker('spA sp2 sp3 sp4 sp5', 'ruA ru2 ru3 ru4 ru5'));

assert(1, poker('spA hjA ruA klA sp5', 'ruA ru2 ru3 ru4 ru5'));

assert(-1, poker('ru7 sp7 hj7 kl7 spJ', 'ru6 sp5 hj6 kl6 spQ'));

assert(-1, poker('ru8 sp8 hj8 kl9 sp9', 'ru6 sp6 hj6 ru9 hj9'));

assert(0, poker('ru7 ru3 ru5 ru9 ruK', 'hj7 hj3 hj5 hj9 hjK'));

assert(0, poker('ru7 ru3 ru5 ru9 ruK', 'hj7 hj3 hj5 hj9 hjK'));

assert(0, poker('ru7 ru3 ru5 ru9 ruK', 'hj7 hj3 hj5 hj9 hjK'));

assert(1, poker('ru7 hj8 ru9 hj5 ru6', 'hj7 ru8 kl9 hjT sp6'));

assert(1, poker('ru7 hj8 ru8 kl8 ruJ', 'kl7 hj9 ru9 kl9 ruQ'));

assert(-1, poker('ru7 hj7 ru8 kl8 ruJ', 'sp7 kl7 sp8 hj8 ruT'));

assert(1, poker('hj7 kl3 sp3 kl4 hjA', 'sp7 hj3 ru3 klK spA'));

assert(1, poker('sp7 hj3 ru2 kl4 spA', 'hj7 ru3 ru5 sp4 hjA'));

print('ok');

print('###################');

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9rZXJoYW5kLmpzIiwic291cmNlUm9vdCI6Ii4uIiwic291cmNlcyI6WyJwb2tlcmhhbmQuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFBLENBQUEsRUFBQSxNQUFBLEVBQUEsS0FBQSxFQUFBLElBQUEsRUFBQSxPQUFBLEVBQUEsS0FBQSxFQUFBLEtBQUEsRUFBQSxLQUFBLEVBQUEsT0FBQSxFQUFBOztBQUFBLENBQUEsR0FBSSxPQUFBLENBQVEsWUFBUjs7QUFDSixNQUFBLEdBQVMsT0FBQSxDQUFRLFFBQVIsQ0FBaUIsQ0FBQzs7QUFDM0IsS0FBQSxHQUFRLE9BQU8sQ0FBQzs7QUFDaEIsS0FBQSxDQUFNLHFCQUFOOztBQUVBLEtBQUEsR0FBUSxDQUFDLENBQUM7O0FBQ1YsT0FBQSxHQUFVLFFBQUEsQ0FBQyxDQUFELENBQUE7U0FBTyxDQUFDLENBQUMsT0FBRixDQUFBO0FBQVA7O0FBQ1YsSUFBQSxHQUFPLFFBQUEsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUFBO0VBQVUsSUFBRyxDQUFBLEdBQUksQ0FBUDtXQUFjLEVBQWQ7R0FBQSxNQUFBO0lBQXNCLElBQUcsQ0FBQSxHQUFJLENBQVA7YUFBYyxDQUFDLEVBQWY7S0FBQSxNQUFBO2FBQXNCLEVBQXRCO0tBQXRCOztBQUFWOztBQUNQLE1BQUEsQ0FBTyxDQUFDLENBQVIsRUFBVyxJQUFBLENBQUssQ0FBTCxFQUFPLENBQVAsQ0FBWDs7QUFDQSxNQUFBLENBQVEsQ0FBUixFQUFXLElBQUEsQ0FBSyxDQUFMLEVBQU8sQ0FBUCxDQUFYOztBQUNBLE1BQUEsQ0FBUSxDQUFSLEVBQVcsSUFBQSxDQUFLLENBQUwsRUFBTyxDQUFQLENBQVg7O0FBRUEsT0FBQSxHQUFVLFFBQUEsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUFBO0FBQ1QsTUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxHQUFBLEVBQUE7RUFBQSxJQUFHLE9BQU8sQ0FBUCxLQUFZLFFBQVosSUFBeUIsT0FBTyxD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N0IsQ0FBWDs7QUFDQSxNQUFBLENBQVEsQ0FBUixFQUFXLEtBQUEsQ0FBTSxxQkFBTixFQUE2QixxQkFBN0IsQ0FBWDs7QUFDQSxNQUFBLENBQVEsQ0FBUixFQUFXLEtBQUEsQ0FBTSxxQkFBTixFQUE2QixxQkFBN0IsQ0FBWDs7QUFDQSxNQUFBLENBQU8sQ0FBQyxDQUFSLEVBQVcsS0FBQSxDQUFNLHFCQUFOLEVBQTZCLHFCQUE3QixDQUFYOztBQUNBLE1BQUEsQ0FBUSxDQUFSLEVBQVcsS0FBQSxDQUFNLHFCQUFOLEVBQTZCLHFCQUE3QixDQUFYOztBQUNBLE1BQUEsQ0FBUSxDQUFSLEVBQVcsS0FBQSxDQUFNLHFCQUFOLEVBQTZCLHFCQUE3QixDQUFYOztBQUVBLEtBQUEsQ0FBTSxJQUFOOztBQUNBLEtBQUEsQ0FBTSxxQkFBTiIsInNvdXJjZXNDb250ZW50IjpbIl8gPSByZXF1aXJlICd1bmRlcnNjb3JlJ1xyXG5hc3NlcnQgPSByZXF1aXJlKCdhc3NlcnQnKS5kZWVwRXF1YWxcclxucHJpbnQgPSBjb25zb2xlLmxvZ1xyXG5wcmludCAnIyMjIyMjIyMjIyMjIyMjIyMjIycgIFxyXG5cclxucmFuZ2UgPSBfLnJhbmdlICBcclxucmV2ZXJzZSA9IChhKSAtPiBhLnJldmVyc2UoKSBcclxuc2lnbiA9IChhLGIpIC0+IChpZiBhIDwgYiB0aGVuIDEgZWxzZSAoaWYgYSA+IGIgdGhlbiAtMSBlbHNlIDApKVxyXG5hc3NlcnQgLTEsIHNpZ24gMiwxXHJcbmFzc2VydCAgMCwgc2lnbiAzLDNcclxuYXNzZXJ0ICAxLCBzaWduIDEsMlxyXG5cclxuY29tcGFyZSA9IChhLGIpIC0+XHJcblx0aWYgdHlwZW9mIGEgPT0gXCJvYmplY3RcIiBhbmQgdHlwZW9mIGIgPT0gXCJvYmplY3RcIlxyXG5cdFx0Zm9yIGkgaW4gcmFuZ2UgTWF0aC5taW4gYS5sZW5ndGgsYi5sZW5ndGhcclxuXHRcdFx0YyA9IGNvbXBhcmUgYVtpXSxiW2ldXHJcblx0XHRcdGlmIGMgIT0gMCB0aGVuIHJldHVybiBjXHJcblx0ZWxzZVxyXG5cdFx0cmV0dXJuIHNpZ24gYSxiICMoaWYgYSA+IGIgdGhlbiAtMSBlbHNlIChpZiBhIDwgYiB0aGVuIDEgZWxzZSAwKSlcclxuXHQwXHJcblxyXG5hc3NlcnQgIDEsY29tcGFyZSAxMiwxMyBcclxuYXNzZXJ0ICAwLGNvbXBhcmUgMTIsMTJcclxuYXNzZXJ0IC0xLGNvbXBhcmUgMTMsMTJcclxuYXNzZXJ0IC0xLGNvbXBhcmUgWzEsMTFdLFsxLDJdXHJcbmFzc2VydCAgMCxjb21wYXJlIFsxLDExXSxbMSwxMV1cclxuYXNzZXJ0ICAxLGNvbXBhcmUgWzEsMl0sWzEsMTFdXHJcbmFzc2VydCAgMSxjb21wYXJlIFsxLCcxMSddLFsxLCcyJ11cclxuYXNzZXJ0ICAwLGNvbXBhcmUgWzEsJzExJ10sWzEsJzExJ11cclxuYXNzZXJ0IC0xLGNvbXBhcmUgWzEsJzInXSxbMSwnMTEnXVxyXG5cclxuYnNvcnQgPSAobGlzdCxjbXA9Y29tcGFyZSkgLT5cclxuXHRmb3IgaSBpbiByYW5nZSBsaXN0Lmxlbmd0aFxyXG5cdFx0Zm9yIGogaW4gcmFuZ2UgbGlzdC5sZW5ndGgtMVxyXG5cdFx0XHRbbGlzdFtqXSwgbGlzdFtqKzFdXSA9IFtsaXN0W2orMV0sIGxpc3Rbal1dIGlmIGNtcChsaXN0W2pdLCBsaXN0W2orMV0pIDwgMFxyXG5cdGxpc3RcclxuXHJcbmFzc2VydCBbMSwyLDhdLCBic29ydCBbMSw4LDJdLGNvbXBhcmUgXHJcbmFzc2VydCBbMSwyLDhdLCBic29ydCBbMSw4LDJdLGNvbXBhcmVcclxuYXNzZXJ0IFtbMV0sWzJdLFs4XV0sIGJzb3J0IFtbMV0sWzhdLFsyXV0sY29tcGFyZVxyXG5hc3NlcnQgW1syLDFdLFsyLDJdLFsyLDhdXSwgYnNvcnQgW1syLDFdLFsyLDhdLFsyLDJdXSxjb21wYXJlXHJcbmFzc2VydCBbWzEsN10sIFsxLDhdLCBbMSw5XV0sIGJzb3J0IFtbMSw4XSwgWzEsN10sIFsxLDldXSxjb21wYXJlXHJcbmFzc2VydCBbMSwyLDMsNF0sIGJzb3J0IFszLDIsNCwxXSwgY29tcGFyZVxyXG5cclxucG9rZXIgPSAoYSxiKSAtPiBjb21wYXJlIGNhbGMoYS5zcGxpdChcIiBcIikpLCBjYWxjKGIuc3BsaXQoXCIgXCIpKVxyXG5jYWxjID0gKGhhbmQpIC0+XHJcblx0Z3JvdXBzID0gXy5ncm91cEJ5KCcgIDIzNDU2Nzg5VEpRS0EnLmluZGV4T2YoY2FyZFsyXSkgZm9yIGNhcmQgaW4gaGFuZClcclxuXHRbc2NvcmUsIHJhbmtzXSA9IF8udW56aXAgcmV2ZXJzZSBic29ydCAoW2NudC5sZW5ndGgsIHBhcnNlSW50KHJhbmspXSBmb3IgcmFuaywgY250IG9mIGdyb3VwcylcclxuXHRpZiBzY29yZS5sZW5ndGggPT0gNVxyXG5cdFx0aWYgY29tcGFyZShyYW5rcywgWzE0LDUsNCwzLDJdKT09MCB0aGVuIHJhbmtzID0gWzUsNCwzLDIsMV1cclxuXHRcdHN0cmFpZ2h0ID0gaWYgcmFua3NbMF0gLSByYW5rc1s0XSA9PSA0IHRoZW4gMSBlbHNlIDBcclxuXHRcdGZsdXNoID0gaWYgXy5zaXplKF8udW5pcShzdWl0LnN1YnN0cmluZygwLDIpIGZvciBzdWl0IGluIGhhbmQpKSA9PSAxIHRoZW4gMSBlbHNlIDBcclxuXHRcdHNjb3JlID0gW1tbMV0sIFszLDEsMSwxXV0sIFtbMywxLDEsMl0sIFs1XV1dW2ZsdXNoXVtzdHJhaWdodF1cclxuXHRbc2NvcmUsIHJhbmtzXSBcclxuXHJcbmFzc2VydCAtMSwgcG9rZXIgJ2tsOCBydUEgcnU4IGtsQSBrbDknLCAncnU3IHNwMiBydTUgc3AzIGtsQSdcclxuYXNzZXJ0ICAxLCBwb2tlciAna2w4IHNwVCBrbEsgaGo5IHNwNCcsICdydTcgc3AyIHJ1NSBzcDMga2xBJ1xyXG5hc3NlcnQgIDEsIHBva2VyICdrbDggcnVBIHJ1OCBrbEEga2w5JywgJ2tsOCBydUEgcnU4IGtsQSBrbFQnXHJcbmFzc2VydCAtMSwgcG9rZXIgJ2tsOCBydUEgcnU4IGtsQSBrbDknLCAna2w4IHJ1QSBydTgga2xBIGtsNydcclxuYXNzZXJ0ICAxLCBwb2tlciAna2w4IHJ1QSBydTgga2xBIGtsOScsICdrbFQgcnVBIHJ1VCBrbEEga2w5J1xyXG5hc3NlcnQgIDAsIHBva2VyICdzcEEgc3AyIHNwMyBzcDQgc3A1JywgJ3J1QSBydTIgcnUzIHJ1NCBydTUnXHJcbmFzc2VydCAgMSwgcG9rZXIgJ3NwQSBoakEgcnVBIGtsQSBzcDUnLCAncnVBIHJ1MiBydTMgcnU0IHJ1NSdcclxuYXNzZXJ0IC0xLCBwb2tlciAncnU3IHNwNyBoajcga2w3IHNwSicsICdydTYgc3A1IGhqNiBrbDYgc3BRJ1xyXG5hc3NlcnQgLTEsIHBva2VyICdydTggc3A4IGhqOCBrbDkgc3A5JywgJ3J1NiBzcDYgaGo2IHJ1OSBoajknXHJcbmFzc2VydCAgMCwgcG9rZXIgJ3J1NyBydTMgcnU1IHJ1OSBydUsnLCAnaGo3IGhqMyBoajUgaGo5IGhqSydcclxuYXNzZXJ0ICAwLCBwb2tlciAncnU3IHJ1MyBydTUgcnU5IHJ1SycsICdoajcgaGozIGhqNSBoajkgaGpLJ1xyXG5hc3NlcnQgIDAsIHBva2VyICdydTcgcnUzIHJ1NSBydTkgcnVLJywgJ2hqNyBoajMgaGo1IGhqOSBoaksnXHJcbmFzc2VydCAgMSwgcG9rZXIgJ3J1NyBoajggcnU5IGhqNSBydTYnLCAnaGo3IHJ1OCBrbDkgaGpUIHNwNidcclxuYXNzZXJ0ICAxLCBwb2tlciAncnU3IGhqOCBydTgga2w4IHJ1SicsICdrbDcgaGo5IHJ1OSBrbDkgcnVRJ1xyXG5hc3NlcnQgLTEsIHBva2VyICdydTcgaGo3IHJ1OCBrbDggcnVKJywgJ3NwNyBrbDcgc3A4IGhqOCBydVQnXHJcbmFzc2VydCAgMSwgcG9rZXIgJ2hqNyBrbDMgc3AzIGtsNCBoakEnLCAnc3A3IGhqMyBydTMga2xLIHNwQSdcclxuYXNzZXJ0ICAxLCBwb2tlciAnc3A3IGhqMyBydTIga2w0IHNwQScsICdoajcgcnUzIHJ1NSBzcDQgaGpBJ1xyXG5cclxucHJpbnQgJ29rJ1xyXG5wcmludCAnIyMjIyMjIyMjIyMjIyMjIyMjIydcclxuIl19
//# sourceURL=c:\github\vscode\pokerhand.coffee
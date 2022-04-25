//Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

function longest(s1, s2) {
    return (s1+s2)
      .split('')
      .filter(function(item, pos, self) {
        return self.indexOf(item) == pos;
      })
      .sort()
      .join('');
  }
/**
 * @param {string} s
 * @return {boolean}
 */

var map = {
    "(": ")",
    "[": "]",
    "{": "}"
};

var isValid = function(s) {
    var stack = [];

    for (var i = 0; i < s.length; i++) {
        var el = s[i];

        if (map[el]) {
            stack.push(map[el]);
        } else {
            if (el !== stack.pop()) {
                return false;
            }
        }
    }

    return stack.length === 0;
};

console.log(isValid("()")); // true
console.log(isValid("[()]")); // true
console.log(isValid("[()]()")); // true
console.log(isValid("[()")); // false
console.log(isValid("[()](})")); // false

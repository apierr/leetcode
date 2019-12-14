/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let result = "1";
    for (let i = 2; i <= n; i++) {
        result = printFCO(result);
    }
    return result;
};

// Print frequency consecutive occurrences
var printFCO = function(str) {
    let [i, result] = [0, ""];
    while (i <= str.length - 1) {
        // Counting occurrences of s[i]
        let count = 1;
        while (str[i] == str[i + 1] && i !== str.length) {
            i += 1;
            count += 1;
        }
        result += count + str[i];
        i += 1;
    }
    return result;
};

console.log(printFCO("1112")); // -> "3112";
console.log(countAndSay(4)); // -> "1211"
console.log(countAndSay(-2)); // -> "1"

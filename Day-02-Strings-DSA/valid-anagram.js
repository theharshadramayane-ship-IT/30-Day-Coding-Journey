/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    const count = new Array(26).fill(0);
    const base = 'a'.charCodeAt(0);  

    for (let i = 0; i < s.length; i++) {
        count[s.charCodeAt(i) - base]++;  
        count[t.charCodeAt(i) - base]--;   
    }

    for (const c of count) {
        if (c !== 0) return false;
    }
    return true;
};

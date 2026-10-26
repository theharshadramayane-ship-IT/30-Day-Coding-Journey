/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
   
    let isPallindrome = true;

    let i=0 , j=s.length-1;

    while(i<j){
       while (i < j && !/[a-z0-9]/i.test(s[i])) i++;
        while (i < j && !/[a-z0-9]/i.test(s[j])) j--;
        
        if (s.charAt(i).toLowerCase() != s.charAt(j).toLowerCase()) {
            isPallindrome = false;
            break;
        }
        i++;
        j--;
    }

    return isPallindrome;
};

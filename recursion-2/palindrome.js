function palindrome(s, start, end){
    if(s.length == 1 || start >= end){
        return true
    }

    if(s[start] == s[end]){
        return palindrome(s, start+1, end-1)
    }else{
        return false
    }
}

console.log(palindrome('akda', 0, 2))
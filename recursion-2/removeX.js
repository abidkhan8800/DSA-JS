function removeX(s){
    if(s.length == 0){
        return s
    }
    if(s[0] === 'x'){
        return removeX(s.slice(1,s.length))
    }else{
        return s[0] + removeX(s.slice(1,s.length))
    }
}


console.log(removeX("xaxbxcxdx"))
function addStar(string){
    if(string.length == 1){
        return string;
    }
    let smallOuput = addStar(string.slice(1,string.length))
    if(string[0] == string[1]){
        return string[0] + "*"+ smallOuput
    }
    else{
        return string[0] + smallOuput
    }
}


console.log(addStar("hello"))
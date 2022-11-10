function stringToInt(string){
    if(string.length == 1){
        return string;
    }

    let smallAns = stringToInt(string.slice(1,string.length));
    return (Number.parseInt(string[0]) * (Math.pow(10, string.length - 1))) + Number.parseInt(smallAns)
}


console.log(stringToInt("1011403400"))
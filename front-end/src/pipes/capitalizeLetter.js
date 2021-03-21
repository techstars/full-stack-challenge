function capitalizeFirstLetterOfEveryWord(str){
    let newStr = str && str.trim() ? str.trim().split(" ") : []; 
    let formattedString = "";
    for(let i = 0; i < newStr.length; i++){
        formattedString += `${newStr[i].charAt(0).toUpperCase() + newStr[i].slice(1)}`;
        formattedString += newStr.length === 1 ? '' : ' ';
    }
    return formattedString;
}

export default capitalizeFirstLetterOfEveryWord;
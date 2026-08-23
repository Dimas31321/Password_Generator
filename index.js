const characters = [
    "A", "B", "C", "D", "E", "F",
    "G", "H", "I", "J", "K", "L",
    "M", "N", "O", "P", "Q", "R",
    "S", "T", "U", "V", "W", "X",
    "Y", "Z",
    "a", "b", "c", "d", "e", "f",
    "g", "h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r",
    "s", "t", "u", "v", "w", "x",
    "y", "z",
    "0", "1", "2", "3", "4", "5",
    "6", "7", "8", "9",
    "~", "`", "!", "@", "#", "$", "%",
    "^", "&", "*", "(", ")", "_",
    "-", "+", "=", "{", "[", "}", "]",
    ",", "|", ":", ";", "<", ">",
    ".", "?", "/"
]
let firstOption = document.getElementById("first-password-el")
let secondOption = document.getElementById("second-password-el")
let thirdOption = document.getElementById("third-password-el")
let fourthOption = document.getElementById("fourth-password-el")
function _generatePassword(){ //returns generated password with a length of 16
    let password = ""
    for (let i = 0; i<16; i+=1){
        password += _getRandomElem()
    }
    return password
}
function _getRandomElem(){// return random element from array
    return characters[Math.floor(Math.random()*characters.length)]
}
function generateOptions(amount=4){
    console.log("generateOptions работает")
    let options = []
    for (let i=0; i<amount; i+=1){
        options.push(_generatePassword())
    }
    firstOption.textContent = options[0]
    secondOption.textContent = options[1]
    thirdOption.textContent = options[2]
    fourthOption.textContent = options[3]
}
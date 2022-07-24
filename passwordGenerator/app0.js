const chractersAmountRange=document.getElementById('characterAmountRange')
const chractersAmountNumber=document.getElementById('characterAmountNumber')
const includeUppercaseElement=document.getElementById('includeUppercase')
const includeNumbersElement=document.getElementById('includeNumbers')
const includeSymbolsElement=document.getElementById('includeSymbols')
const form=document.getElementById('passwordGeneratorForm')
const passwordDisplay=document.getElementById('passwordDisplay')
//THIS IS AS PER ASCII CODES    
const UPPERCASE_CHAR_CODES=arrayFromLowToHigh(65,90)
const LOWERCASE_CHAR_CODES=arrayFromLowToHigh(97,122)
const NUMBER_CHAR_CODES=arrayFromLowToHigh(48,57)
const SYMBOL_CHAR_CODES=arrayFromLowToHigh(33,47).concat(
    arrayFromLowToHigh(58,64)
).concat(
    arrayFromLowToHigh(91,96)
).concat(
    arrayFromLowToHigh(123,126)
)

//how many characters u want 
characterAmountNumber.addEventListener('input',syncCharacterAmount)//number
characterAmountRange.addEventListener('input',syncCharacterAmount)//slider

//when submitted
form.addEventListener('submit', e =>{
    e.preventDefault()//no empty submitting
    const characterAmount=characterAmountNumber.value
    const includeUppercase = includeUppercaseElement.checked
    const includeNumbers = includeNumbersElement.checked
    const includeSymbols = includeSymbolsElement.checked
    const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)  
    passwordDisplay.innerText = password
})
//generate password if all parameters are checked the do as logic says
function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
    let charCodes = LOWERCASE_CHAR_CODES
    //if any of if conditions is true then...
    if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)
    if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES)
    if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES)

    const passwordCharacters=[]//empty array
    for(let i=0;i<characterAmount;i++){
        //charactercode=random  random char which are of size as inputted
        const characterCode=charCodes[Math.floor(Math.random()*charCodes.length)]
        //pussh string
        passwordCharacters.push(String.fromCharCode(
            characterCode
        ))
    }
    // join all chars symbols n all
    return passwordCharacters.join('')
}

function arrayFromLowToHigh(low,high){
    const array=[]
    for(let i=low;i<=high;i++){
        array.push(i)

    }
    return array 
}

function syncCharacterAmount(e){
    //whatever value is there that value
    const value=e.target.value
    characterAmountNumber.value=value
    characterAmountRange.value=value
}
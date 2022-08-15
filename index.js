let encryptionRule = {
    'A': 'N', 'B': 'O', 'C': 'P', 'D': 'Q',
    'E': 'R', 'F': 'S', 'G': 'T', 'H': 'U',
    'I': 'V', 'J': 'W', 'K': 'X', 'L': 'Y',
    'M': 'Z', 'N': 'A', 'O': 'B', 'P': 'C',
    'Q': 'D', 'R': 'E', 'S': 'F', 'T': 'G',
    'U': 'H', 'V': 'I', 'W': 'J', 'X': 'K',
    'Y': 'L', 'Z': 'M',
    'a': 'n', 'b': 'o', 'c': 'p', 'd': 'q',
    'e': 'r', 'f': 's', 'g': 't', 'h': 'u',
    'i': 'v', 'j': 'w', 'k': 'x', 'l': 'y',
    'm': 'z', 'n': 'a', 'o': 'b', 'p': 'c',
    'q': 'd', 'r': 'e', 's': 'f', 't': 'g',
    'u': 'h', 'v': 'i', 'w': 'j', 'x': 'k',
    'y': 'l', 'z': 'm',
    '0': '5', '1': '6', '2': '7', '3': '8',
    '4': '9', '5': '0', '6': '1', '7': '2',
    '8': '3', '9': '4',
    '!': '#', '$': '%', '&': '+', '-': '@',
    '': '~', '#': '!', '%': '$', '+': '&',
    '@': '-', '~': ''
}
const encrypt = (inputString)=>{
    let encryptedString = ''
    for(char of inputString){
        encryptedString = encryptedString + encryptionRule[char]
    }
    return encryptedString;
}
const decrypt = (encryptedpassword)=>{
    let actualpassword = ''
    for(char of encryptedpassword){
        actualpassword = actualpassword + encryptionRule[char]
    }
    return actualpassword;
}
const DB_USERS =[]
function validate() {
    let firstNameInput = document.getElementById('first-name').value
    let lastNameInput = document.getElementById('last-name').value
    let emailInput = document.getElementById('email').value
    let phoneNumberInput = document.getElementById('phonenumber').value
    let passwordInput = document.getElementById('password').value
    let confirmPasswordInput = document.getElementById('confirm-password').value
    let tncInput = document.getElementById('tnC').checked

    let error = false
    if(firstNameInput.length){
        document.getElementById('firstname-invalid').style.display = 'none'  
    }
      else{
        document.getElementById('firstname-invalid').style.display = 'block' 
        error = true
    }

    if(lastNameInput.length){
       
        document.getElementById('lastname-invalid').style.display = 'none'  
    }
      else{
        document.getElementById('lastname-invalid').style.display = 'block'
        error = true
    }
    
    if(emailInput.length && emailInput.includes('@')&&emailInput.includes('.')&& emailInput.lastIndexOf('.')<=emailInput.length-3){
        document.getElementById('email-invalid').style.display = 'none'  
    }
      else{
        document.getElementById('email-invalid').style.display = 'block'
        error = true    
    }
    if(phoneNumberInput.length==10){
       
        document.getElementById('phonenumber-invalid').style.display = 'none'  
    }
      else{
        document.getElementById('phonenumber-invalid').style.display = 'block'
        error = true
    }
    if(passwordInput.length>=6){
       
        document.getElementById('password-invalid').style.display = 'none'  
    }
      else{
        document.getElementById('password-invalid').style.display = 'block'
        error = true
    }
    if(passwordInput.length==confirmPasswordInput.length){
       
        document.getElementById('confirmpassword-invalid').style.display = 'none'  
    }
      else{
        document.getElementById('confirmpassword-invalid').style.display = 'block'
        error = true
    }
    if(tncInput){
        document.getElementById('tnc-invalid').style.display = 'none'
    }
    else{
        document.getElementById('tnc-invalid').style.display = 'block'
        error = true
    }

    if(!error){
        document.getElementById('signup-success').style.display = 'block'
        document.getElementById('signup-error').style.display = 'none'
        let userdetails = {
            firstNameInput,
            lastNameInput,
            emailInput,
            phoneNumberInput,
            passwordInput:encrypt(passwordInput)
        }
        
         DB_USERS.push(userdetails)
        console.log(DB_USERS)

        document.getElementById('first-name').value=''
        document.getElementById('last-name').value=''
        document.getElementById('email').value=''
        document.getElementById('phonenumber').value=''
        document.getElementById('password').value=''
        document.getElementById('confirm-password').value=''
        document.getElementById('tnC').checked= false
    }
    else{
        document.getElementById('signup-error').style.display = 'block'
        document.getElementById('signup-success').style.display = 'none'
    }
    
}
function login(){
    let enteredemail = document.getElementById('login-email').value
    let enteredpassword = document.getElementById('login-password').value
    //find method -> it checks and return element weather it exist or not
   let currentuser= DB_USERS.find(element => element.emailInput===enteredemail && decrypt(element.passwordInput) === enteredpassword)
    if(currentuser){
        document.getElementById('login-success').style.display = 'block'
        document.getElementById('login-error').style.display = 'none'
    }
    else {
        document.getElementById('login-error').style.display = 'block'
        document.getElementById('login-success').style.display = 'none'
    }
    document.getElementById('login-email').value=''
    document.getElementById('login-password').value=''
}
//console.log(decrypt('cevgnz'))

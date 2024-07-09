function validateForm(){
    var name=document.getElementById('name').value   
    var email=document.getElementById('email').value  
    
    document.getElementById('nameError').innerHTML='';
    document.getElementById('emailError').innerHTML='';

    if(name===''){
        document.getElementById('nameError').innerHTML='Name is required'
        return false
    }

    var emailRegex=  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if(!emailRegex.test(email)){
        document.getElementById('emailError').innerHTML='Invalide email'
        return false
    }
    alert('Form submitted successfully')
    return true
}

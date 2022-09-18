var nameExp =  /^[a-zA-Z]+$/;
var mailExp =  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
var phoneExp = /^[0-9]*$/;
var passwordExp =  /^[a-zA-Z]\w{3,14}$/;



function validation() {
    
    var x = document.getElementById('name').value;

    if(x==""){
        alert("please select full name.");
        document.getElementById('name').focus();
        return false;

    }

    if (!x.match(nameExp)) {
        alert("Name should be Alphabetical only.");
        return false;
    }


    // ------mail validation-----

    var x = document.getElementById('mailus').value;

    if (x==""){
        alert("Mail ID is necessery.");
        document.getElementById('mailus').focus();
        return false;
    }
    if(!x.match(mailExp)){
        alert("Please enter valid Email Id.");
        return false;
    }

    // ------------ gender validation---------
    var x = document.getElementsByClassName('gender')[0];
    if(x.value ==""){
        alert("Select gender.");
        x.focus();
        return false;

    }
    
        // ------- phone validation--------


    var x = document.getElementById('phone').value;
    if (x==""){
        alert("Phone number is necessery.");
        document.getElementById('phone').focus();
        return false;
    }

    if(!x.match(phoneExp)){
            alert("Please provide valid Phone number");
            document.getElementById('phone').focus();                
            return false;
        }
        if(x.length <10){
            alert("Please provide valid Phone number");
            document.getElementById('phone').focus();                
            return false;
        }
        // ------- password validation--------

        var x = document.getElementsByClassName('passwrd')[0].value;
        var y = document.getElementsByClassName('passwrd')[1].value;

        if (x==""){
            alert("Enter password, this is necessery.");
            var x = document.getElementsByClassName('passwrd')[0].focus();
            return false;
        }
    if(!x.match(passwordExp)){
            alert("Password should be alpha-numeric");
            var x = document.getElementsByClassName('passwrd')[0].focus(); 
            return false;

    }
    if(x!=y){
            alert("Password should be match in both fields");
            var x = document.getElementsByClassName('passwrd')[1].focus(); 
            return false;

    }


}
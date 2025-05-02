function validate(){
    let x = document.forms["Mform"]["Name"].value;
    if(x==""){
        document.getElementById("NameAlert").innerHTML= "Name must not be blank";
        // alert("Name must not be blank");
        return false;
    }
    let y = document.forms["Mform"]["Tel"].value;
    y = Number(y);
    if(Number.isInteger(y) != true){
        document.getElementById("TelAlert").innerHTML= "Enter a valid Number";
        // alert("Enter a valid Number")
        return false;
    }

    let email = document.forms["Mform"]["Email"].value;
    let emailvalidate = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailvalidate.test(email)){
        document.getElementById("EmailAlert").innerHTML= "Enter a valid Email";
        // alert("Enter a valid Email");
        return false;
    }

    let message = document.forms["Mform"]["message"].value;
    if(message==""){
        document.getElementById("msgAlert").innerHTML= "Message must not be blank";
        // alert("Message must not be blank");
        return false;
    }

    window.location.href = "index.html"
    return false;
    alert("submitted")
    
}
document.getElementById("but2").addEventListener("click", function(){
    alert("submitted")
})
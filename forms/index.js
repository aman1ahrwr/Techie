const sendMail = () =>{
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };
    
    const serviceID = "service_5o1ojve";
    const templateID = "template_lfmorgf";
    
    emailjs.send(serviceID, templateID, params).then(
        (res) =>{
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("subject").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("message sent Succesfully!");
        }
    ).catch((err)=> console.log(err));
}

document.getElementById("infoForm").addEventListener("submit", function(event){
    event.preventDefault();

    const name = document.getElementById("name").value;

    const email = document.getElementById("email").value;

    const phone = document.getElementById("phone").value;

    const resultDiv=document.getElementById("result");
    resultDiv.textContent=`Update infromation;
                          Name: ${name},
                          Email: ${email},
                          phone: ${phone}`;

});

const logbutton=document.getElementById("login-button")
logbutton.addEventListener("click",()=>{
    const emailInput = document.getElementById("email").value;
    const passwordInput = document.getElementById("password").value;
    const emailLocal=localStorage.getItem("email");
    const passLocal=localStorage.getItem("password");
    console.log(emailInput,passwordInput,emailLocal,passLocal);
    if(emailInput==emailLocal && passwordInput==passLocal){
      window.location.href = "Home.html";
      alert("Muvaffaqqiyatli kirdingiz.")
    }else{
      alert("Login yoki parol xato")
    }
    
})



const signintbtn=document.getElementById("Nsign-id")
signintbtn.addEventListener("click",()=>{
  console.log(1)
  const firstName = document.getElementById("NFname").value;
  const lastName = document.getElementById("NLname").value;
  const age = document.getElementById("Nage").value;
  const mobileNumber = document.getElementById("Nmobnumber").value;
  const username = document.getElementById("Nusername").value;
  const email = document.getElementById("Nemail").value;
  const password = document.getElementById("Npassword").value;
  localStorage.setItem("email",email);
  localStorage.setItem("password",password)
  alert("Muvaffaqqiyatli ro'yxatdan o'tdingiz.")
  window.location.href = "login.html";
})

let form=document.querySelector("form");

form.addEventListener("submit", (event)=>{checkdata(event)});


async function checkdata(event) {
    event.preventDefault()
    let email = event.target[0].value;
    let password = event.target[1].value;
    let usercredentials = {
      email,
      password
    }
    try {
      let alldata= await fetch("http://localhost:3000/user")
       let token=await alldata.json()
      //  console.log(token)
        let narr=token.filter((ele)=>{
          return (ele.email===usercredentials.email && ele.password===usercredentials.password)
        })
        showdata(narr)
    }
    catch (error) {
      alert("error")
    }
  }
  
  function showdata(arr){
    if(arr.length!=0){
      alert("login Successful")
      sessionStorage.setItem('redirected', 'true');
      localStorage.setItem('loggedIn', 'true');
      window.location.href="../index.html";
    }
    else{
      alert("Wrong Credentials")
    }
  }


  let password = document.querySelector("#password");

let togglePassword=document.querySelector("#togglePassword")

togglePassword.addEventListener("change", function() {
  if (togglePassword.checked) {
      password.setAttribute("type", "text");
  } else {
      password.setAttribute("type", "password");
  }
});
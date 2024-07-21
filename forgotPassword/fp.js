let form = document.querySelector(".form")

async function handleform(event) {
    event.preventDefault()
    let email = event.target[0].value;
    let usercredentials= {
        email
    }

    try {
        let alldata= await fetch("http://localhost:3000/user")
        let token=await alldata.json()
         let narr=token.filter((ele)=>{
           return (ele.email===usercredentials.email)
         })
         localStorage.setItem("resetuser",JSON.stringify(narr))
         if(narr.length!=0){
           window.location.href="./rp.html" ;
         }
         else{
            alert("Wrong Credentials")
         }
    }
    catch (error) {
        alert("Please enter valid email id");
    }
}


form.addEventListener("submit", (event) => {
    handleform(event)
})
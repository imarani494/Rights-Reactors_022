
    document.getElementById("loginBtn").addEventListener("click", function () {
      window.location.href = "login.html";
    });

    document.getElementById("searchBtn").addEventListener("click", function () {
      const query = document.getElementById("searchInput").value;
      alert("Searching for: " + query);
    });
 
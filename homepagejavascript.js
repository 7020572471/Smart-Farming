    function loadUserData() {
      const loggedIn = localStorage.getItem('loggedIn');
      const detail = JSON.parse(localStorage.getItem('detail'));

      if (loggedIn !== 'true' || !detail) {
        alert("No user session found. Redirecting to login.");
        window.location.href = "LoginRR.html";
        return;
      }

      const fullName = "Hi " + detail.fname + " " + detail.lname;
      const welcomeName = "Welcome, " + fullName;

      document.getElementById('sidebarName').textContent = fullName;
      document.getElementById('welcome').textContent = welcomeName;
      document.getElementById('sidebarDetail').textContent = "Name: " + detail.fname + " " + detail.lname;
      document.getElementById('sidebarDetail2').textContent = "Mobile Number : " + detail.mobile;
      document.getElementById('dateOfBirth').textContent = "Date Of Birth : " + detail.dob;
      document.getElementById('sidebarMail').textContent = "Email ID : " + detail.email;
      document.getElementById('sidebarMobile').textContent = "Mobile Number : " + detail.mobile || "Not Provided";
      document.getElementById('sidebarProfileImg').src = detail.profileImage || "https://via.placeholder.com/90";
    }

    // Sidebar toggle logic
    document.getElementById("toggle-sidebar").addEventListener("click", () => {
      document.getElementById("sidebar").classList.add("active");
    });

    document.getElementById("exit-sidebar").addEventListener("click", () => {
      document.getElementById("sidebar").classList.remove("active");
    });

    // Toggle nav info
    function toggleInfo(listItem) {
      const allInfo = document.querySelectorAll(".nav-info");
      allInfo.forEach(info => {
        if (info !== listItem.querySelector(".nav-info")) {
          info.classList.remove("show");
        }
      });

      const info = listItem.querySelector(".nav-info");
      info.classList.toggle("show");
    }

    function loadScores() {
      for (let i = 1; i <= 4; i++) {
        const score = localStorage.getItem('testScore' + i);
        const scoreElement = document.getElementById('scoreDisplay' + i);
        if (score !== null && scoreElement) {
          scoreElement.textContent = `Last Test Score: ${score} out of 24`;
        }
      }
    }

    function logout() {
      if (confirm("Do You Want to log out?")) {
        localStorage.removeItem('loggedIn');
        localStorage.removeItem('detail');
        window.location.href = 'LoginRR.html';
      } else {
        alert("Continue your work.");
      }
    }

    // On page load
    loadUserData();
    loadScores();
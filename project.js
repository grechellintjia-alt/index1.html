window.onload = function () {
    alert("Welcome to Chell Food Store");
};

const menuButtons = document.querySelectorAll(".mainmenubtn");

menuButtons.forEach(button => {
    button.addEventListener("click", function () {

        const dropdownContent = this.nextElementSibling;

      
        document.querySelectorAll(".dropdown-child").forEach(menu => {
            if (menu !== dropdownContent) {
                menu.style.display = "none";
            }
        });

       
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
});

window.addEventListener("click", function (e) {
    if (!e.target.matches(".mainmenubtn")) {
        document.querySelectorAll(".dropdown-child").forEach(menu => {
            menu.style.display = "none";
        });
    }
});

const welcomeText = document.querySelector(".welcome-text h1");

let colors = ["#ff6b00", "#ff914d", "#ffb347", "#ff4500"];
let index = 0;

setInterval(() => {
    welcomeText.style.color = colors[index];
    index = (index + 1) % colors.length;
}, 1000);


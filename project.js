const buttons = document.querySelectorAll(".product-card button");

buttons.forEach(function(button){

    button.addEventListener("click", function(){

        const product =
        this.parentElement.querySelector("h3").innerText;

        alert(product + " berhasil ditambahkan!");

    });

});
const menuLinks = document.querySelectorAll(".dropdown a");

menuLinks.forEach(function(link){

    link.addEventListener("click", function(event){

        event.preventDefault();

        alert("Kamu memilih menu " + this.innerText);

    });

});

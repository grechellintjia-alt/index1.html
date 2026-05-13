const buttons = document.querySelectorAll(".product-card button");

buttons.forEach(function(button){

    button.addEventListener("click", function(){

        const product =
        this.parentElement.querySelector("h3").innerText;

        alert(product + " berhasil ditambahkan!");

    });

});
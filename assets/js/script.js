
var myspan = document.getElementById('panier');
var nbr = localStorage.getItem("nbr");
if (!nbr) {
    myspan.classList.add('badge-secondary');
    myspan.textContent = 0;
}
else {
    myspan.classList.remove('badge-secondary');
    myspan.classList.add('badge-primary');
    myspan.textContent = nbr;
}


function addtocart(pan) {



    myspan.textContent++;
    myspan.classList.remove('badge-secondary');
    myspan.classList.add('badge-primary');
    localStorage.setItem("nbr", myspan.textContent)
    localStorage.setItem(pan,localStorage.getItem(pan)? Number(localStorage.getItem(pan))+1:1);


}
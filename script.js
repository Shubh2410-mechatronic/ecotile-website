
document.getElementById("form").addEventListener("submit", function(e){

e.preventDefault();

alert("We will contact you soon");

});



function openForm(){

document.getElementById("popup").style.display="block";

}


function closeForm(){

document.getElementById("popup").style.display="none";

}

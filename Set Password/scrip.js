function go() {
    let container = document.getElementById('container');
    container.style.display = "none";
}

function save() {
    let save = document.getElementById('input').value;
    localStorage.setItem("pass", save);
}



function comform() {
    
    let save4 = localStorage.getItem("pass");
    if (save4 === document.getElementById('comform_pass').value) {
        window.location.href = "hellow.html";
    } else {
        alert("Wrong confirmation password");
    }
    if(document.getElementById('comform_pass').value === "show password"){
        text.textContent="Your Password is " + localStorage.getItem("pass")
    }
}
if(localStorage.getItem("pass")){
    let container = document.getElementById('container');
    container.style.display = "none";
}

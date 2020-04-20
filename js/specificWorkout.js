/* Gallery Modal */
function openModal(id) {
    var modal = document.getElementById("myModal");   
    var img = document.getElementById(id);
    var modalImg = document.getElementById("img");
    modal.style.display = "block";
    modalImg.src = img.src;
}

function closeModal() {
    var modal = document.getElementById("myModal");  
    modal.style.display = "none";
}
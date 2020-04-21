/* Image Modal */
function openModal(id) {
    var modal = document.getElementById("image-modal");   
    var img = document.getElementById(id);
    var modalImg = document.getElementById("img");
    modal.style.display = "block";
    modalImg.src = img.src;
}

function closeModal() {
    var modal = document.getElementById("image-modal");  
    modal.style.display = "none";
}

/* Video Modal */
$(document).ready(function() {
    var $videoSrc;  
    $('.video-btn').click(function() {
        $videoSrc = $(this).data( "src" );
    });
    $('#myModal').on('shown.bs.modal', function (e) {      
        $("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
    })
    $('#myModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src',$videoSrc); 
    }) 
});

/* Rating stars */
function setRating(workout, rating) {
    sessionStorage.setItem(workout, rating);
}
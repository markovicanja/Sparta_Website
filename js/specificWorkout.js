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
    ratings=JSON.parse(sessionStorage.getItem("ratings"));
    workoutRating=ratings[workout];
    // workoutRating.parseFloat(workoutRating);

    if (rating>workoutRating) workoutRating+=0.1;
    else if (rating<workoutRating) workoutRating-=0.1;
    workoutRating=Math.round(workoutRating*10)/10;

    $('#currRating').text(workoutRating+'/5');

    ratings[workout]=workoutRating;
    sessionStorage.setItem("ratings", JSON.stringify(ratings));
}

/* Check if user can rate this exercise */
function canRate(workout) {
    ratings=JSON.parse(sessionStorage.getItem("ratings"));
    workoutRating=ratings[workout];
    $('#currRating').text(workoutRating+'/5');

    userExercises=JSON.parse(sessionStorage.getItem("userExercises"));
    didExercise=false;
    for (i=0; i<userExercises.length; i++) if (userExercises[i]==workout) didExercise=true;
    if (didExercise==false) document.getElementById(workout+'Rating').style.pointerEvents="none";
} 
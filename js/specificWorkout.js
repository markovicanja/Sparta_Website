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
    workoutRating=parseFloat(workoutRating);

    if (rating>workoutRating) workoutRating+=0.1;
    else if (rating<workoutRating) workoutRating-=0.1;
    workoutRating=Math.round(workoutRating*10)/10;
    $('#currRating').text(workoutRating+'/5');

    ratings[workout]=workoutRating;
    sessionStorage.setItem("ratings", JSON.stringify(ratings));

    alreadyRated=JSON.parse(sessionStorage.getItem("alreadyRated"));
    alreadyRated.push(workout);
    sessionStorage.setItem("alreadyRated", JSON.stringify(alreadyRated));
    document.getElementById(workout+'Rating').style.pointerEvents="none";
}

ifRatedHTML='<div class="heading-sm mt-3 mb-3">Ocene</div><div id="">Prosečna ocena: <b id="currRating"></b></div></br>Već ste ocenili ovaj trening!'
cantRateHTML='<div class="heading-sm mt-3 mb-3">Ocene</div><div id="">Prosečna ocena: <b id="currRating"></b></div></br>Niste radili ovaj trening!'

/* Check if user can rate this exercise */
function canRate(workout) {
    ratings=JSON.parse(sessionStorage.getItem("ratings"));
    workoutRating=ratings[workout];
    $('#currRating').text(workoutRating+'/5');

    userExercises=JSON.parse(sessionStorage.getItem("userExercises"));
    didExercise=false;
    for (i=0; i<userExercises.length; i++) if (userExercises[i]==workout) didExercise=true;
    if (didExercise==false) {
        document.getElementById(workout+'Rating').style.pointerEvents="none";
        document.getElementById('canChange').innerHTML=cantRateHTML;
        $('#currRating').text(workoutRating+'/5');
    }
    else {
        alreadyRated=JSON.parse(sessionStorage.getItem("alreadyRated"));
        for (i=0; i<alreadyRated.length; i++) if (workout==alreadyRated[i]) {
            document.getElementById(workout+'Rating').style.pointerEvents="none";
            document.getElementById('canChange').innerHTML=ifRatedHTML;
            $('#currRating').text(workoutRating+'/5');
        }
    }

    addedComments=JSON.parse(sessionStorage.getItem(workout+"AddedComments"));
    addedHTML='';
    for (i=0; i<addedComments.length; i++) {
        addedHTML+=addedComments[i];
    }
    commentHolderHTML=$('#commentHolder').html();
    commentHolderHTML+=addedHTML;
    $('#commentHolder').html(commentHolderHTML);
}

function postComment(workout) {
    name=''; image='';
    if (sessionStorage.getItem("user")=="Adrian") {
        name="Adrian Milaković"; 
        image="./images/male.jpg";
    }
    else {
        name="Jelica Cincović"; 
        image="./images/female.jpg";
    }
    
    commentText=$('#newComment').val();
    date=new Date();
    zero='';
    if (date.getMonth()<9) zero='0';
    dateFormatted=date.toString().slice(8,10)+'.'+zero+(date.getMonth()+1)+'.'+(date.getYear()+1900)+'.';
    newComment='<div class="comment"><img src="'+image+'" class="avatar"><span class="name">'+name+'</span><span class="date">'+dateFormatted+'</span><div class="comment-content">'+commentText+'</div></div>';
    commentHolderHTML+=newComment;

    addedComments=JSON.parse(sessionStorage.getItem(workout+"AddedComments"));
    addedComments.push(newComment);
    sessionStorage.setItem(workout+"AddedComments", JSON.stringify(addedComments));
}
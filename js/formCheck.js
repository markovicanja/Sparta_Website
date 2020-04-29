function formCheck(num) {
    var name = $("#name").val();            
    var surname = $("#surname").val();
    var mail = $("#mail").val();
    var phone = $("#phone").val();
    var date = $("#date").val();

    var nameReg = /^[A-Z][a-z]{2,15}$/;
    if (!name.match(nameReg)) {
        if (num==0) 
            $("#formErrors").html("Ime nije validno!");
        else  $("#formErrors").html("Name is not valid!");
        return false;
    }

    var surnameReg = /^[A-Z][a-z]{1,20}$/;
    if (!surname.match(surnameReg)) {
        if (num==0) 
            $("#formErrors").html("Prezime nije validno!");
        else  $("#formErrors").html("Surname is not valid!");
        return false;
    }

    var mailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!mail.match(mailReg)) {
        if (num==0) 
            $("#formErrors").html("Mejl nije validan!");
        else  $("#formErrors").html("Mail is not valid!");
        return false;
    }

    var phoneReg = /^[\+][0-9]+$/;
    if (!phone.match(phoneReg)) {
        if (num==0) 
            $("#formErrors").html("Kontak telefon nije u odgovarajućem formatu (primer: +381111234567)");
        else  $("#formErrors").html("Phone number is not valid!");
        return false;
    }

    if (date == '') {
        if (num==0) 
            $("#formErrors").html("Morate uneti datum!");
        else  $("#formErrors").html("You must set a date!");
        return false;
    }

    var now = new Date();
    var formDate = new Date(date);

    if (formDate < now) {
        if (num==0) 
            $("#formErrors").html("Ne možete staviti datum koji je prošao!");
        else  $("#formErrors").html("You can't put past date!");
        return false;
    }

    $("#formErrors").html("");
    return true;
}
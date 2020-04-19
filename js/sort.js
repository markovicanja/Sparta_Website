function sortDivs(sortArr, first, second, third, fourth) {
    for (i = 0; i < sortArr.length; i++) {
        if (sortArr[i]==first) $('.type1').attr("id","id"+ i);
        else if (sortArr[i]==second)  $('.type2').attr("id","id"+ i);
        else if (sortArr[i]==third) $('.type3').attr("id","id"+ i);
        else $('.type4').attr("id","id"+ i);
    }

    $('#id1').each(function() {
        $(this).insertAfter($(this).parent().find('#id0'));
    });
    $('#id2').each(function() {
        $(this).insertAfter($(this).parent().find('#id1'));
    });
    if (fourth!='zzz' && fourth!=999) {
        $('#id3').each(function() {
            $(this).insertAfter($(this).parent().find('#id2'));
        });
    }
}

function sortInt(a, b) {
    return a-b;
}

function nameSort(first, second, third, fourth='zzz') {
    var array = [first, second, third, fourth];
    var sortArr = array.sort();
    sortDivs(sortArr, first, second, third, fourth);
}

function numSort(first, second, third, fourth=999) {
    var array = [first, second, third, fourth];
    var sortArr = array.sort(sortInt);
    sortDivs(sortArr, first, second, third, fourth);
}
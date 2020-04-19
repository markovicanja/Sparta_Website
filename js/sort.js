function sortDivs(sortArr, first, second, third) {
    for (i = 0; i < sortArr.length; i++) {
        if (sortArr[i]==first) $('.type1').attr("id","id"+ i);
        else if (sortArr[i]==second)  $('.type2').attr("id","id"+ i);
        else  $('.type3').attr("id","id"+ i);
    }

    $('#id1').each(function() {
        $(this).insertAfter($(this).parent().find('#id0'));
    });
    $('#id2').each(function() {
        $(this).insertAfter($(this).parent().find('#id1'));
    });
}

function sortInt(a, b) {
    return a-b;
}

function nameSort(first, second, third) {
    var array = [first, second, third];
    var sortArr = array.sort();
    sortDivs(sortArr, first, second, third);
}

function numSort(first, second, third) {
    var array = [first, second, third];
    var sortArr = array.sort(sortInt);
    sortDivs(sortArr, first, second, third);
}
/**
 * Created by h205p2 o fuck youyn 5/24/17.
 */
$(document).ready(function(){
    $.ajax({
        url: 'http://api.dronestre.am',
        type: 'GET',
        crossDomain: true,
        dataType: 'jsonp',
        success: function (result) {
            console.log(result);
        },
        error: function () {
            alert('Failed!');
        }
    });
});
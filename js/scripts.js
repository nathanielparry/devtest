$(document).ready(function () {
    // Problem: mainDisplay needs to show images clicked



    $('#thumbnails img').click(function (event) {
        var $photobomb = $(this).attr('src');
        var $title = $(this).prop('title');
        var $caption = $(this).attr('caption');

        $('#mainDisplay img').attr('src', $photobomb);

        $('.imgTitle').text($title);
        $('.imgCaption').text($caption);
    });

});
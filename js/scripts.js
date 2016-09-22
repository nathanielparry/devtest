$(document).ready(function () {

    // Display clicked image in #mainDisplay
    $('#thumbnails img').click(function (event) {
        var $photobomb = $(this).prop('src');
        var $title = $(this).prop('title');
        var $caption = $(this).attr('caption');

        $('#mainDisplay img').prop('src', $photobomb);
        $('.imgTitle').text($title);
        $('.imgCaption').text($caption);
    });

    // Populate background image for tiles to avoid having to manually resize images for each tile
    $('.tileImg').each(function () {
        var $background = $(this).attr('image');
        $(this).css({
            'background': 'url(' + $background + ')'
            , 'background-size': 'cover'
            , 'background-position': 'center center'
        });
    });

    // Move Tile video thumb to main display area

    var $mainWidth = $('main').width();

    $('#vidTeaser img').click(function (event) {
        $(this).hide();
        $('#vidTeaser iframe').show().css('height', $mainWidth * 0.562);
        $('.vidInfo').addClass('full');
    });
});
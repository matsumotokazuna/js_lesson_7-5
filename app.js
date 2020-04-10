$(function(){
    $.when(
    $('.box1').slideDown(),
    $('.box1').css({
        'background-color': '#0000FF',
        'weight': '200px',
        'height': '100px'
    })
    ).done(function(){
    $('.box1').slideUp();
    });
});
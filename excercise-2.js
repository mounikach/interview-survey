
// Make the slider's autoplay feature stops;
var sliderPause = document.getElementsByClassName("flexslider");
sliderPause.pause();

document.querySelectorAll('[data-testid="rotating_banner_tile_1"]').onclick = function changeContent() {
document.getElementsByClassName('slides article').remove('green')
document.getElementsByClassName('half-hero half-image-module').remove('green')
document.getElementsByClassName('slides article').addClass('purple')
document.getElementsByClassName('half-hero half-image-module').add('purple')
}

var camera = querySelectorAll('.half-modules-outer-container[data-testid="featured_module_section"]')[6].find('img');
var network = querySelectorAll('.half-modules-outer-container[data-testid="featured_module_section"]')[10].find('img');
network.each(function(i) {
    $(this).setAttribute('src', $(camera[i]).setAttribute('src'));
});

// self invoking function 
(function() {
    var totalPrice = querySelectorAll('.half-modules-outer-container[data-testid="featured_module_section"]')[11].find('.half-hero-pricing');
    var sum = 0;
    totalPrice.each(function(i) {
        sum += parseFloat($(this).html().trim().split('$')[1])
    })
    alert(sum.toFixed(2));
})();

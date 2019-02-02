M.AutoInit();

$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });

  $(document).ready(function() {
    $('input#input_text, textarea#textarea2').characterCounter();
  });
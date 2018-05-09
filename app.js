import {breedResults} from './js/dogs.js';

$(document).ready(() => {

  //Select2 instantiation
  $('#select-breed').select2({
    width: '350px',
    placeholder: 'Select a Dog Breed...'
  });

  //Scroll to top of page
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 300) { 
      $('#back-to-top').fadeIn(200);
    } else {
      $('#back-to-top').fadeOut(200);
    }
  });

  $('#back-to-top').click(() => {
    $('body,html').animate({
      scrollTop : 0 
    }, 500);
  });

  const displayBreedName = () => {
    let selectedBreed = $( "#select-breed option:selected" ).text();
    $('#breed-name').text(selectedBreed);
    let breedNameFetch = selectedBreed.toLowerCase();
    breedResults(breedNameFetch);
  };

  $('#select-breed').on('change', displayBreedName);

});

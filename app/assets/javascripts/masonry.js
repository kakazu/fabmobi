$(document).on('ready page:change', function(){
  $('.js-masonry').masonry({
    itemSelector : 'a',
    isAnimated: true,
    isFitWidth: true,
  });
});

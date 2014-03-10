var NoCMS = {};


$(document).ready(function() {

  $('#log-bar').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('expanded');
  });

  $('#js-collapse-to-minimun').on('click', function(e) {
    e.preventDefault();
    $('body').removeClass('col-2-only');
    $('body').toggleClass('col-1-only');
    /* Act on the event */
  });

  $('#js-expand-col-2').on('click', function(e) {
    e.preventDefault();
    $('body').removeClass('col-1-only');
    $('body').toggleClass('col-2-only');
    /* Act on the event */
  });

  // Mark current
  $('aside#col-1, aside#col-2').on('click', 'a', function(e) {
    e.preventDefault();
    $(this).closest('.content').find('li').removeClass('current');
    $(this).parent().addClass('current');
  });

  // Add Class parent
  $('aside#col-1 li > ul, aside#col-2 li > ul').each(function(){
    $(this).parent().addClass('parent');
  });

  // Show mini-options
/*  $('aside#col-2 .content').on('mouseenter', 'a', function(e) {
    e.preventDefault();
    var
      el = $(this),
      h = el.height(),
      t =
    $('#mini-options').show();
  });*/


});
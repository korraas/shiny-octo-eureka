
$(document).ready(function() {
    $('.clickable').click(function() {
      var clickedImage = $(this);
  
      if (clickedImage.hasClass('first-image')) {
        var secondImage = clickedImage.next();
  
        clickedImage.addClass('first-image-up');
        secondImage.addClass('second-image-down');
      } else if (clickedImage.hasClass('second-image')) {
        var firstImage = clickedImage.prev();
  
        clickedImage.removeClass('second-image-down');
        firstImage.removeClass('first-image-up');
      }
    });
  });
  
  
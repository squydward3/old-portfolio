var thumbnailSpacing = 15;

$(document).ready(function() {



  //load fotorama img with Javascript
  // TMBMIL
  for (var i = 1; i<6; i++) {
    var photo = document.createElement('img');
    photo.src = "img/gallery/photography/alex" + i + ".png";
    document.querySelector('.fotorama.tmbmil').appendChild(photo)
  }
  // Blue
  for (var i = 1; i<11; i++) {
    var photo = document.createElement('img');
    photo.src = "img/gallery/photography/carly" + i + ".png";
    document.querySelector('.fotorama.blue').appendChild(photo)
  }
  //Harajuku
  for (var i = 1; i<5; i++) {
    var photo = document.createElement('img');
    photo.src = "img/gallery/photography/jm" + i + ".png";
    document.querySelector('.fotorama.harajuku').appendChild(photo)
  }


  //animate gallery thumbnail
  $(window).scroll(function() {
    var windowScrollPosTop = $(window).scrollTop();
    // console.log(windowScrollPosTop);

    if (windowScrollPosTop > 830) {
      $('.bottle').addClass('animated wobble');
      $('.arrow').addClass('animated bounceInLeft');
    }

    if (windowScrollPosTop > 1600) {
      $('.decor').css('opacity', '1');
      $('.decor').hierarchicalDisplay({
        speed: 5,
      });
    }

    if (windowScrollPosTop > 2300) {
      $('.grid .item-container .item').addClass('showMe');
      positionThumbnails();
    }

  })
  setInterval('checkViewport()', 200);



}); //close document ready



//reposition gal thumbs
function checkViewport() {
  var photosWidth = $('.grid').width();
  var thumbnailContainerWidth = $('.grid .item-container').width();
  var thumbnailWidth = $('.grid .item-container .item:first-child').outerWidth();

  if (photosWidth < thumbnailContainerWidth) {
    positionThumbnails();
  }
  if (photosWidth - thumbnailWidth > thumbnailContainerWidth) {
    positionThumbnails();
  }
}

//position gal thumbs
function positionThumbnails() {
  var containerWidth = $('.grid').width();
  var thumbnail_R = 0;
  var thumbnail_C = 0;
  var thumbnailWidth = $('.grid .item-container .item').outerWidth() + window.thumbnailSpacing;
  var thumbnailHeight = $('.grid .item-container .item').outerHeight() + window.thumbnailSpacing;
  var max_C = Math.floor(containerWidth / thumbnailWidth);

  $('.grid .item-container .item.showMe').each(function(index) {
    var remainder = (index%max_C)/100;
    var maxIndex = 0;
    var galleryHeight = 0;

    if(remainder == 0) {
      if(index != 0) {
        thumbnail_R += thumbnailHeight;
        galleryHeight+= thumbnailHeight
      }
      thumbnail_C = 0;
    }else {
      thumbnail_C += thumbnailWidth;
    }

    $(this).css('display', 'block').animate({
      'opacity': 1,
      'top': thumbnail_R + 'px',
      'left': thumbnail_C +'px'
    }, 500);

    var newWidth = max_C * thumbnailWidth;
    var newHeight = thumbnail_R + thumbnailHeight;
    $('.grid .item-container').css({'width': newWidth+'px', 'height': newHeight + 'px'});
  });
}

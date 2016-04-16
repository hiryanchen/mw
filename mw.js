(function() {
  var photos = [
    9508, 9525, 9533, 9614, 9636, 9639, 9640, 9641, 9642, 9643, 9645,
    9646, 9648, 9669, 9683, 9687, 9705, 9711, 9721, 9726, 9751, 9764,
    9795, 9797, 9798, 9799, 9804, 9805, 9806, 9810, 9811, 9815, 9816,
    9817, 9818, 9819, 9855, 9856, 9931
  ];
  var galleriaDiv = document.getElementById('idGalleria');
  var data = [];
  for (var i=0; i<2; i++) {
    //var imgElem = document.createElement('img');
    //imgElem.src = 'photos/IMG_' + photos[i] + '.JPG';
    //galleriaDiv.appendChild(imgElem);
    data.push({
      image: 'http://www.michellewang.net/photos/IMG_' + photos[i] + '.JPG',
      title: 'Alaska',
      description: 'Alaska'
    })
  }
  Galleria.loadTheme('http://cdnjs.cloudflare.com/ajax/libs/galleria/1.4.2/themes/classic/galleria.classic.min.js');

  var viewedPhotos = [];
  Galleria.ready(function(options) {
    //this.openLightbox();
    this.bind('image', function (e) {
      var index = viewedPhotos.indexOf(e.imageTarget.src);
      if (index === -1) {
        viewedPhotos.push(e.imageTarget.src);
      }
      if (viewedPhotos.length === photos.length) {
        console.log('You viewed all the photos');
      }
    });
  });

  Galleria.run('.galleria', {
    width: $(window).width(),
    height: $(window).height(),
    dataSource: data
  });
})();

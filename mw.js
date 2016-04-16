var photos = [
  9508, 9525, 9533, 9614, 9636, 9639, 9640, 9641, 9642, 9643, 9645,
  9646, 9648, 9669, 9683, 9687, 9705, 9711, 9721, 9726, 9751, 9764,
  9795, 9797, 9798, 9799, 9804, 9805, 9806, 9810, 9811, 9815, 9816,
  9817, 9818, 9819, 9855, 9856, 9931
];

var allPhotos = [
  9482, 9483, 9487, 9489, 9492, 9496, 9497, 9500, 9501, 9502, 9504,
  9507, 9508, 9510, 9511, 9512, 9513, 9514, 9516, 9517, 9519, 9523,
  9524, 9525, 9526, 9527, 9528, 9529, 9530, 9531, 9532, 9533, 9534,
  9535, 9536, 9537, 9538, 9543, 9544, 9551, 9552, 9553, 9557, 9558,
  9559, 9560, 9561, 9563, 9565, 9571, 9574, 9575, 9576, 9577, 9578,
  9582, 9583, 9584, 9585, 9586, 9589, 9590, 9593, 9596, 9597, 9598,
  9599, 9600, 9602, 9607, 9608, 9610, 9611, 9612, 9613, 9614, 9616,
  9617, 9618, 9619, 9620, 9621, 9622, 9623, 9624, 9625, 9626, 9628,
  9629, 9632, 9633, 9634, 9636, 9638, 9639, 9640, 9641, 9642, 9643,
  9645, 9646, 9647, 9648, 9650, 9651, 9653, 9657, 9658, 9659, 9661,
  9662, 9663, 9664, 9665, 9667, 9669, 9671, 9672, 9673, 9674, 9676,
  9677, 9679, 9683, 9684, 9685, 9687, 9688, 9689, 9690, 9691, 9692,
  9693, 9699, 9701, 9702, 9703, 9704, 9705, 9706, 9707, 9708, 9709, 
  9710, 9711, 9721, 9722, 9723, 9724, 9726, 9731, 9733, 9738, 9739, 
  9740, 9745, 9746, 9747, 9748, 9749, 9750, 9751, 9759, 9760, 9761,
  9762, 9763, 9764, 9765, 9766, 9769, 9771, 9772, 9773, 9774, 9775,
  9776, 9779, 9780, 9781, 9782, 9787, 9788, 9789, 9790, 9792, 9793,
  9794, 9795, 9796, 9797, 9798, 9799, 9804, 9805, 9806, 9807, 9808,
  9810, 9811, 9812, 9813, 9814, 9815, 9816, 9817, 9818, 9819, 9820,
  9821, 9822, 9825, 9826, 9827, 9828, 9829, 9830, 9843, 9847, 9849,
  9850, 9851, 9855, 9856, 9857, 9858, 9859, 9860, 9861, 9862, 9863,
  9864, 9865, 9866, 9871, 9873, 9874, 9875, 9876, 9880, 9881, 9883,
  9886, 9887, 9888, 9889, 9891, 9895, 9896, 9898, 9899, 9909, 9910,
  9911, 9919, 9931, 9935, 9936, 9937, 9940, 9944, 9945, 9946, 9950,
  9952, 9953, 9954, 9955, 9957, 9959, 9964                                              
];

function updateDirectLinks() {
  $('#showAllPhotos').on('click', function() {
    showGalleria(allPhotos, 'http://www.michellewang.net/all/IMG_');
  });
  $('#finalLinks').show();
}

function showGalleria(photos, prefix) {
  var galleriaDiv = document.getElementById('idGalleria');
  var data = [];
  for (var i=0; i<photos.length; i++) {
    //var imgElem = document.createElement('img');
    //imgElem.src = 'photos/IMG_' + photos[i] + '.JPG';
    //galleriaDiv.appendChild(imgElem);
    data.push({
      image: prefix + photos[i] + '.jpg',
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
        updateDirectLinks();
      }
    });
  });

  Galleria.run('.galleria', {
    width: $(window).width(),
    height: $(window).height(),
    dataSource: data
  });
}

showGalleria(photos, 'http://www.michellewang.net/s/IMG_');


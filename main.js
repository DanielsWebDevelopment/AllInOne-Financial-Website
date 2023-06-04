function onScroll() {
    var fadeInElements = document.getElementsByClassName('bnk');
  
    for (var i = 0; i < fadeInElements.length; i++) {
      var element = fadeInElements[i];
      var position = element.getBoundingClientRect().top;
      var windowHeight = window.innerHeight;
  
      if (position < windowHeight) {
        element.classList.add('show');
      } else {
        element.classList.remove('show');
      }
    }
  }
  
  window.addEventListener('scroll', onScroll);
  
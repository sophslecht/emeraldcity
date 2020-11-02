$(function() {

  // first page

  var audioElement = document.getElementById('em-audio');
  var played = false;

  audioElement.addEventListener('loadeddata', () => {
    // When shoe container is clicked
    $('.em-shoe-container').on('click', function () {
      if (!played) {
        // FIRST CLICK
        // Play the laugh and set that the laugh has played already
        audioElement.play();
        played = true;

        // @todo show 'enter' text
        $('.em-enter-text').addClass('em-enter-text--showing');

      } else {
        // SECOND CLICK
        // When laugh has played already, go to the witch page
        window.location = '/wicked-witch-of-the-west';
      }
    });
  });
});

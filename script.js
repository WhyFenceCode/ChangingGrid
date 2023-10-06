window.onload = function() {
  var gridContainer = document.querySelector('.container');
  var logo = document.querySelector('.logo');
  var topleft = document.querySelector('.topleft');
  var topright = document.querySelector('.topright');
  var bottomleft = document.querySelector('.bottomleft');
  var bottomright = document.querySelector('.bottomright');

    logo.addEventListener('mouseover', function() {
        gridContainer.style.gridTemplateColumns = '1fr 2fr 1fr';
        gridContainer.style.gridTemplateRows = '1fr 2fr 1fr';
    });

    logo.addEventListener('mouseout', function() {
      gridContainer.style.gridTemplateColumns = '2fr 1fr 2fr';
      gridContainer.style.gridTemplateRows = '1.5fr 1fr 1.5fr';
    });
  
    topleft.addEventListener('mouseover', function() {
        gridContainer.style.gridTemplateColumns = '5fr 1fr 2fr';
        gridContainer.style.gridTemplateRows = '2fr 1fr 1.5fr';
    });

    topleft.addEventListener('mouseout', function() {
      gridContainer.style.gridTemplateColumns = '2fr 1fr 2fr';
      gridContainer.style.gridTemplateRows = '1.5fr 1fr 1.5fr';
    });
  
    topright.addEventListener('mouseover', function() {
        gridContainer.style.gridTemplateColumns = '2fr 1fr 5fr';
        gridContainer.style.gridTemplateRows = '2fr 1fr 1.5fr';
    });

    topright.addEventListener('mouseout', function() {
      gridContainer.style.gridTemplateColumns = '2fr 1fr 2fr';
      gridContainer.style.gridTemplateRows = '1.5fr 1fr 1.5fr';
    });
  
    bottomleft.addEventListener('mouseover', function() {
        gridContainer.style.gridTemplateColumns = '5fr 1fr 2fr';
        gridContainer.style.gridTemplateRows = '1.5fr 1fr 2fr';
    });

    bottomleft.addEventListener('mouseout', function() {
      gridContainer.style.gridTemplateColumns = '2fr 1fr 2fr';
      gridContainer.style.gridTemplateRows = '1.5fr 1fr 1.5fr';
    });
  
    bottomright.addEventListener('mouseover', function() {
        gridContainer.style.gridTemplateColumns = '2fr 1fr 5fr';
        gridContainer.style.gridTemplateRows = '1.5fr 1fr 2fr';
    });

    bottomright.addEventListener('mouseout', function() {
      gridContainer.style.gridTemplateColumns = '2fr 1fr 2fr';
      gridContainer.style.gridTemplateRows = '1.5fr 1fr 1.5fr';
    });
};

(function() {
    var startTime = window.performance.now();
  
    window.onload = function() {
      var loadTime = window.performance.now() - startTime;
  
      var loadTimeElement = document.getElementById('loadTime');
      loadTimeElement.innerHTML = 'Page loaded in ' + loadTime.toFixed(2) + 'ms';
    };
  })();

$host = $('[mag-thumb="inner-inline"]');
$host.mag();
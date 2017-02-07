(function() {
  var el = document.getElementById('quote');

  var colorIndex = 0;
  var quotesIndex = 0;
  var quoteIndex = 0;

  function updateFontSize(word) {
    var width = window.innerWidth;
    var fontSize = Math.min(width, width / (word.length * 0.7));
    el.style.fontSize = fontSize + 'px';
  }

  function updateColor() {
    var color = COLORS[colorIndex];
    document.body.style.backgroundColor = color;
    colorIndex++;
    if (colorIndex >= COLORS.length) {
      colorIndex = 0;
    }
  }

  function updateQuote() {
    var quote = QUOTES[quotesIndex].split(' ');
    var word = quote[quoteIndex];
    el.innerText = quote[quoteIndex];
    updateFontSize(word);
    updateColor();
    quoteIndex++;
    if (quoteIndex >= quote.length) {
      quoteIndex = 0;
      quotesIndex++;
      if (quotesIndex >= QUOTES.length) {
        quotesIndex = 0;
      }
    }
  }

  updateQuote();
  setInterval(updateQuote, 5000);
})();

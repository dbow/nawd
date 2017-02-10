(function() {
  var el = document.getElementById('quote');
  var bg = document.getElementById('bg');

  var colorIndex = 0;
  var quotesIndex = 0;
  var quoteIndex = 0;
  var saturation = 1;
  var start = new Date().getTime();
  var TWO_HOURS = 2 * 60 * 60 * 1000;
  var happyBirthday = false;

  function updateFontSize(word) {
    var width = window.innerWidth;
    var fontSize = Math.min(width, width / word.length);
    el.style.fontSize = fontSize + 'px';
  }

  function updateColor() {
    var color = COLORS[colorIndex];
    var rand = Math.random();
    bg.style.backgroundColor = rand > 0.5 ? color.bg : color.text;
    bg.style.color = rand > 0.5 ? color.text : color.bg;
    bg.style.filter = 'saturate(' + saturation + ')';
    colorIndex++;
    if (colorIndex >= COLORS.length) {
      colorIndex = 0;
      var now = new Date().getTime();
      var howFarInRWe = Math.min(now - start, TWO_HOURS) / TWO_HOURS;
      saturation = 1 + howFarInRWe * 3;
    }
  }

  function updateQuote() {
    var quote = QUOTES[quotesIndex].split(' ');
    var word;
    if (happyBirthday) {
      word = '[HAPPY BIRTHDAY]';
      happyBirthday = false;
    } else {
      word = quote[quoteIndex] + ' ' + (quote[quoteIndex + 1] || '');
      quoteIndex += 2;
    }
    el.innerText = word;
    updateFontSize(word);
    updateColor();
    if (quoteIndex >= quote.length) {
      quoteIndex = 0;
      quotesIndex++;
      happyBirthday = true;
      if (quotesIndex >= QUOTES.length) {
        quotesIndex = 0;
      }
    }
  }

  updateQuote();
  setInterval(updateQuote, 4000);
})();

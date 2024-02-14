
(function() {
    function $(id) {
      return document.getElementById(id);
    }
  
    var card = $('card'),
        openB = $('open'),
        closeB = $('close'),
        next = $('next_page'),
        text = $('text'),
        timer = null;
    console.log('wat', card);
    openB.addEventListener('click', function () {
      card.setAttribute('class', 'open-half');
      if (timer) clearTimeout(timer);
      timer = setTimeout(function () {
        card.setAttribute('class', 'open-fully');
        timer = null;
      }, 1000);
    });
  
    closeB.addEventListener('click', function () {
      card.setAttribute('class', 'close-half');
      if (timer) clearTimerout(timer);
      timer = setTimeout(function () {
        card.setAttribute('class', '');
        timer = null;
      }, 1000);
    });

    next.addEventListener('click', function() {
    if (text.getAttribute("data-page") == 0) {
        text.innerHTML = "<p>Dear mom,</p><p>Happy birthday!</p><p>“It's not who you are underneath, it's what you do that defines you.” — Batman Begins</p><p>Recently I came across this quote in my philosophy class and at the moment of inception, I was like, “wow, there’s some truth to that.” And it led me to think about a bunch of things. One of the things that came across my mind was how I distinctly remember you telling me almost the same sentence years ago. </p>";
        next.textContent = "next page"
        text.setAttribute("data-page", 1);
      } else if (text.getAttribute("data-page") == 1) {
        text.innerHTML = "<p>And now I’m thinking about it, you really take this idea to heart. Over the past year you have clearly improved in areas you’ve been putting the work in, and you don’t stop putting the work in! One of these areas is English, as I could tell from the philosophical discussions we have (mostly in english) in person and over text.</p><p>The other area that you’ve been obviously putting thoughts in, which I don’t mention nearly enough, is our relationship. Maybe it’s because I have eyes better attuned to it these days, but over the past year I’ve observed growth in many aspects of our relationship. Particularly, I’ve noticed how quickly you incorporate feedback and the accuracy with which you come up with original ways to improve this aspect of our lives. Especially this semester, we’ve had a number of discussions that deepened our understanding of ourselves and each other. And I’m pretty sure you’ve been acting on the information that you received ;)</p>";
        text.setAttribute("data-page", 2);
      } else if (text.getAttribute("data-page") == 2) {
        text.innerHTML = "<p>On this note, I’ve realized that most of the confusion and disagreements in our relationship have been at their core lack of understanding of each other. (I beg your pardon if this seems like a bit of a tangent, but I think you’ll agree with my insights). I’ve realized that our logical foundations share enough common ground that as long as we exchange the information available to us and our thought processes, even in the rare cases where we don’t reach the same conclusions, we agree with each other’s logical steps. And this is why I advocated so strongly for Grace to communicate as much as she can with you, because I trust that as long as you are given tools (data) to work with, you will inch your way towards what’s optimal, as you’ve demonstrated with me, with English, and with many other endeavors.</p>";
        text.setAttribute("data-page", 3);
      } else if (text.getAttribute("data-page") == 3) {
        text.innerHTML = "<p>Indeed, every person embodies their understanding of the world, of themselves, and of the interactions between themselves and the world, through even their simplest actions. At every instant, we have the ability to rewrite who we are, for better or worse. This scale of better or worse is aligned with our purpose, which is also a responsibility, to always aim for what’s good. And I am grateful for such a perceptive, adaptive, intelligent mom! I am grateful for the fact that I can always count on you, no matter the time or occasion. Your actions speak louder than words, and you speak pretty loudly already :P. If you were a stock, you’d be the S&P500—consistently on the rise. Have a lovely birthday!</p><p class=\"signed-no-center\">Love,</p><p class=\"signed-no-center\">Buwei</p>";
        next.textContent = "return to page 1"
        text.setAttribute("data-page", 0);
      }
    });
  
  }());
  
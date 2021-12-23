$(document).ready(function () {

  $("tweet-text").on("input", function () {
    const $counter = $(this).next().children(".counter");
    const charsRemaining = 140 - this.value.length;

    //adjust html of $counter when encountering input of characters
    $counter.html(charsRemaining);

    //adjust the color to red, when numbers of character exceed the limit
    if (charsRemaining < 0) {

      //.addClass() adds the specified class to each element in the set of matched elements
      $counter.addClass("red");
    } else {
      $counter.removeClass("red");
    }
  });
});
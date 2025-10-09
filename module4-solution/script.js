// STEP 1: Wrap in an IIFE
(function() {

  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  // STEP 2: Loop over names
  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();

    // STEP 3: Compare first letter and call correct speaker
    if (firstLetter === 'j') {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }

})();

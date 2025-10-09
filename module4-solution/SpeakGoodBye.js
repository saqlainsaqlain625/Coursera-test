// STEP 2: Wrap the entire contents in an IIFE
(function(window) {
  var byeSpeaker = {};
  var speakWord = "Good Bye";

  // STEP 3: Attach speak method to byeSpeaker
  byeSpeaker.speak = function(name) {
    console.log(speakWord + " " + name);
  };

  // STEP 4: Expose byeSpeaker to the global scope
  window.byeSpeaker = byeSpeaker;

})(window);

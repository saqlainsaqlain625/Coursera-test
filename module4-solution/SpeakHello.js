// STEP 2: Wrap the entire contents in an IIFE
(function(window) {
  var helloSpeaker = {};
  var speakWord = "Hello";

  // STEP 3: Attach speak method to helloSpeaker
  helloSpeaker.speak = function(name) {
    console.log(speakWord + " " + name);
  };

  // STEP 4: Expose helloSpeaker to the global scope
  window.helloSpeaker = helloSpeaker;

})(window);

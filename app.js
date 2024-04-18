

 /*  *******************************************************
     Scenario 1
     ******************************************************* */
$("#morning").click( function() {//the name of the HTML button is in double quotes "#morning". Make this match your HTML button ID in index.html

    speak("Good Morning, Sarah!"); //what should be spoken by app

});



$("#ready").click( function() {

    speak("Are you ready to get dressed?"); 
});

$("#weathercold").click( function() {
    
    speak("Ok, based on a weather forecast of 45 degrees and light rain, I picked this outfit. What do you think?"); //what to speak to the user
});

$("#similar").click( function() {
    
    speak("Here is a similar one you might like."); //what to speak to the user
});

$("#showing").click( function() {
    
    speak("Showing you the item now!"); //what to speak to the user
});

/*  *******************************************************************
    Scenario 2: Conference
    ********************************************************************  */

$("#morning2").click( function() {//the name of the HTML button is in double quotes "#morning". Make this match your HTML button ID in index.html

    speak("Good Morning, Sarah!"); //what should be spoken by app

});

$("#conference").click( function() {
    
    speak("You have a conference at 3 PM today marked on your calendar. Would you like to start preparing your outfit for that?"); //what to speak to the user
});

$("#conferenceoutfit").click( function() {
    
    speak("Based on the nature of your conference and your preferences, I've selected this polished yet comfortable outfit. How does this look?"); //what to speak to the user
});

$("#blazer").click( function() {
    
    speak("Of course. Here's an outfit featuring a blazer that matches your style and the event's professionalism."); //what to speak to the user
});

$("#showingblazer").click( function() {
    
    speak("You've got it right here. I’ll show you."); //what to speak to the user
});


$("#great").click( function() {
    
    speak("You're going to do great today, Sarah. Have a wonderful conference!"); //what to speak to the user
});



/*  *******************************************************
    Scenario 3: Planning ahead
    ******************************************************* */

$("#morning3").click( function() {//the name of the HTML button is in double quotes "#morning". Make this match your HTML button ID in index.html

    speak("Good Morning, Sarah!"); //what should be spoken by app

});

$("#help").click( function() {//the name of the HTML button is in double quotes "#morning". Make this match your HTML button ID in index.html

    speak("Anything I can help you with?"); //what should be spoken by app

});

$("#satweather").click( function() {//the name of the HTML button is in double quotes "#morning". Make this match your HTML button ID in index.html

    speak("Here is the weather for Saturday, it will be 70 degrees outside and sunny."); //what should be spoken by app

});

$("#matches").click( function() {//the name of the HTML button is in double quotes "#morning". Make this match your HTML button ID in index.html

    speak("It does. Do you want to add a jacket?"); //what should be spoken by app

});

$("#showingjacket").click( function() {//the name of the HTML button is in double quotes "#morning". Make this match your HTML button ID in index.html

    speak("Here!"); //what should be spoken by app

});


/*************************************************************
   LEAVE THIS CODE AS IS - Advanced Speech Synthesis
 ************************************************************* */

//automatically click speak and write button on press of Enter key
var input = document.getElementById("speech");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("speakAndWrite").click();
    }
});

//speak button
$("#speak").click(function() {
    var text = $("#speech").val();
    speak(text);
});

//speak and write to screen button
$("#speakAndWrite").click(function() {
    var text = $("#speech").val();
    speak(text);
    particle.callFunction({
        deviceId: deviceId,
        name: 'writeMessage', //specify we want to write text to TFT
        argument: text, //text to write to the TFT
        auth: token
    });
});

function speak(text) {
    // Create an utterance to be spoken by the Web Speech API
    var msgConfig = new SpeechSynthesisUtterance();

    // Get all the possible voices
    var voices = window.speechSynthesis.getVoices();

    // Set the voice to be Victoria
    msgConfig.voice = voices.filter(function(voice) {return voice.name === "Victoria"})[0]; //Kyoko or Victoria

    // Reduce the pitch so the voice sounds more robotic. Values are between 0 and 2
    msgConfig.pitch = "1.0";

    // Speed up the voice so it sounds more robotic. Values can be between 0.1 and 10
    msgConfig.rate = "1.0";

    // Set the text we are going to say.
    msgConfig.text = text;

    // Ask Web Speech API to say our utterance, in the voice we configured.
    window.speechSynthesis.speak(msgConfig);
}

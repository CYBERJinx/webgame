var startScreen = new StartScreen();

function launchApplication() {
    let gameParameters = startScreen.getGameParametersFromUserSelect();
    let selectedModeName = gameParameters.modeName;
    let selectedMode;

    if (selectedModeName == "EXTREME") {
        selectedMode = new ExtremeGame(gameParameters);
    }
    else if(selectedModeName == "MODERN"){
        selectedMode = new ModernGame(gameParameters);
    }
    else{
        selectedMode = new ClassicGame(gameParameters);
    }

    startScreen.hideStartScreen();
    selectedMode.startGame();
}
document.addEventListener("DOMContentLoaded", () => {
    const introSound = document.getElementById("introSound");

    // Play the intro sound when the page loads
    introSound.play();

    // Optionally, you can pause the sound when hiding the start screen
    const startScreen = new StartScreen(); // Assuming your StartScreen class is initialized here
    const originalHideStartScreen = startScreen.hideStartScreen.bind(startScreen);

    startScreen.hideStartScreen = () => {
        introSound.pause(); // Pause the intro sound
        originalHideStartScreen(); // Call the original hideStartScreen method
    };
});

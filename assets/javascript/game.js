// Create global variables for
    // Randomly generated target number
    var targetNumber = Math.floor(Math.random() * (120 - 19)) + 19;
    console.log(targetNumber);
    $("#target-number").text(targetNumber);
    // Win counter
    var winCounter = 0;
    // Loss counter
    var lossCounter = 0;
    // Random number for crystal 1
    var crystal1Value = Math.floor(Math.random() * (12 - 1)) + 1;
    console.log(crystal1Value);
    // // Random number for crystal 2
    var crystal2Value = Math.floor(Math.random() * (12 - 1)) + 1;
    console.log(crystal2Value);
    // // Random number for crystal 3
    var crystal3Value = Math.floor(Math.random() * (12 - 1)) + 1;
    console.log(crystal3Value);
    // // Random number for crystal 4
    var crystal4Value = Math.floor(Math.random() * (12 - 1)) + 1;
    console.log(crystal4Value);
    // User's tally
    var userTally = 0;

// Start the game
    // Print the assigned number to user's tally upon each click
    $("#crystal1").on("click", function(){
        userTally += crystal1Value;
        console.log(userTally);
        $("#user-tally").text(userTally);

        if (userTally === targetNumber) {
            winCounter++;
            $("#win-counter").html(winCounter);
            alert("You win! Click on New Game to start again.");
            userTally = 0;
            $("#user-tally").text(userTally);
        }
        else if (userTally >= targetNumber) {
            lossCounter++;
            $("#loss-counter").html(lossCounter);
            alert("You lose! Click on New Game to start again.");
            userTally = 0;
            $("#user-tally").text(userTally);
        }
    });

    $("#crystal2").on("click", function(){
        userTally += crystal2Value;
        console.log(userTally);
        $("#user-tally").text(userTally);

        if (userTally === targetNumber) {
            winCounter++;
            $("#win-counter").html(winCounter);
            alert("You win! Click on New Game to start again.");
            userTally = 0;
            $("#user-tally").text(userTally);
        }
        else if (userTally >= targetNumber) {
            lossCounter++;
            $("#loss-counter").html(lossCounter);
            alert("You lose! Click on New Game to start again.");
            userTally = 0;
            $("#user-tally").text(userTally);
        }
    });

    $("#crystal3").on("click", function(){
        userTally += crystal3Value;
        console.log(userTally);
        $("#user-tally").text(userTally);

        if (userTally === targetNumber) {
            winCounter++;
            $("#win-counter").html(winCounter);
            alert("You win! Click on New Game to start again.");
            userTally = 0;
            $("#user-tally").text(userTally);
        }
        else if (userTally >= targetNumber) {
            lossCounter++;
            $("#loss-counter").html(lossCounter);
            alert("You lose! Click on New Game to start again.");
            userTally = 0;
            $("#user-tally").text(userTally);
        }
    });

    $("#crystal4").on("click", function(){
        userTally += crystal4Value;
        console.log(userTally);
        $("#user-tally").text(userTally);

        if (userTally === targetNumber) {
            winCounter++;
            $("#win-counter").html(winCounter);
            alert("You win! Click on New Game to start again.");
            userTally = 0;
            $("#user-tally").text(userTally);
        }
        else if (userTally >= targetNumber) {
            lossCounter++;
            $("#loss-counter").html(lossCounter);
            alert("You lose! Click on New Game to start again.");
            userTally = 0;
            $("#user-tally").text(userTally);
        }
    });

    $('.reset').on("click", function(){
        targetNumber = Math.floor(Math.random() * (120 - 19)) + 19;
        $("#target-number").text(targetNumber);
        crystal1Value = Math.floor(Math.random() * (12 - 1)) + 1;
        crystal2Value = Math.floor(Math.random() * (12 - 1)) + 1;
        crystal3Value = Math.floor(Math.random() * (12 - 1)) + 1;
        crystal4Value = Math.floor(Math.random() * (12 - 1)) + 1;
        userTally = 0;
        $("#target-number").text(targetNumber);
    });
    // Allow user's tally to update the numbers according to the crystals clicked

// Check to see if the user's tally matches the generated target number
    // If it matches
        // Win counter increases
        // Game resets
        // Computer randomly generates another target number
        // Computer randomly generates another set of numbers for the crystals
    // If it exceeds the target number
        // Loss counter increases
        // Game resets
        // Computer randomly generates another target number
        // Computer randomly generates another set of numbers for the crystals
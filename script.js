$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();

    // .prepend() inserts new content at the beginning of the selected element.
    $('.dashboard').prepend('<div class="game-title">Pet Status</div>');
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.sleep-button').click(clickedSleepButton);
  

  
    
  })
  
    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    var pet_info = {name:"Theo", weight: 30, happiness: 50, energy: 20};
    var min_weight = 10;
  
    function clickedTreatButton() {
      pet_info.happiness += 1;
      pet_info.weight += 3;
      pet_info.energy += 5;
      // .html() changes the content inside the selected element.
      $('.pet-message').html("Yummy! That was a good treat!");
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedPlayButton() {
      if (pet_info.energy < 5) {
        $('.pet-message').html("I'm too tired to play right now!");
        checkAndUpdatePetInfoInHtml();
        return;
      }
      pet_info.happiness += 2;
      pet_info.weight -= 1;
      pet_info.energy -= 5;
      $('.pet-message').html("Yay! That was fun!");
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedExerciseButton() {
      if (pet_info.energy < 10) {
        $('.pet-message').html("I'm too tired to exercise right now!");
        checkAndUpdatePetInfoInHtml();
        return;
      }
      pet_info.happiness -= 2;
      pet_info.weight -= 2;
      pet_info.energy -= 10;
      $('.pet-message').html("Whew! That was a good workout!");
      checkAndUpdatePetInfoInHtml();
    }

    function clickedSleepButton() {
      pet_info.happiness -= 1;
      pet_info.energy += 10;
      $('.pet-message').html("Zzz... That was a good nap!");
      checkAndUpdatePetInfoInHtml();
    }
  
    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
    }
    
    function checkWeightAndHappinessBeforeUpdating() {
      if (pet_info.weight < min_weight) {
        pet_info.weight = min_weight;
      }

      if (pet_info.happiness < 0) {
        pet_info.happiness = 0;
      }

      if (pet_info.energy < 0) {
        pet_info.energy = 0;
      }

      if (pet_info.energy > 40) {
        pet_info.energy = 40;
      }
    }
    
    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
      $('.energy').text(pet_info['energy']);
    }
  
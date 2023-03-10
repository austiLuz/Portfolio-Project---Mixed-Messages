//Exercises to be generated
const weights = ['Push-Up', 'Deadlift', 'Squat', 'Chest Press', 'Bent-over Row', 'Lunges']
const cardio = ['Run', 'Walk', 'Row', 'Bike', 'Cross Trainer', 'Swim']

const button = document.getElementById('button');

//Sets & Distance to be generated
const setsG = () => {
    return Math.floor(Math.random() *3) + 3;
};

const repsG = () => {
    return Math.floor(Math.random() * 8) + 5;
};

const distG = () => {
    return Math.floor(Math.random () * 15) + 3;
};

//Random exercise picker 
const randomEx = (arr) => {
    let randomExer = Math.floor(Math.random() * arr.length)
    return arr[randomExer];
};

//Delivering the result
const exer = () => {
    const pick = Math.floor(Math.random() * 2);
    if(pick <= 0){
        console.log(`Do ${randomEx(weights)} for ${setsG()} sets, ${repsG()} each time`);
    } else {
        console.log(`${randomEx(cardio)} for ${distG()}km`);
    };
};

// Get the output element
const output = document.getElementById('output');

// Function to display the generated exercise
const displayExercise = () => {
  const pick = Math.floor(Math.random() * 2);
  let exercise;
  if(pick <= 0){
    exercise = `Do ${randomEx(weights)} for ${setsG()} sets, ${repsG()} each time`;
  } else {
    exercise = `${randomEx(cardio)} for ${distG()}km`;
  };
  
  // Update the output element with the exercise
  output.textContent = exercise;
};

//Clicking the button
button.addEventListener('click', exer);
// Click event listener for the button
button.addEventListener('click', displayExercise);
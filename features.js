// ----------------------------
// Random Workout Generator
// ----------------------------

const workouts = [
    "Pushups", "Jump Rope", "Yoga", "Squats", "Plank", "Lunges", "Burpees", "Cycling", "Swimming", "Deadlifts",
    "Bench Press", "Shoulder Press", "Dumbbell Curls", "Tricep Extensions", "Mountain Climbers", "Jumping Jacks",
    "Russian Twists", "High Knees", "Side Plank", "Bicycle Crunches", "Leg Raises", "Box Jumps", "Wall Sit",
    "Calf Raises", "Lat Pulldown", "Chest Fly", "Reverse Lunges", "Step-Ups", "Battle Ropes", "Sled Push",
    "Medicine Ball Slams", "Rowing Machine", "Treadmill Run", "Elliptical Trainer", "Stair Climber", "Bodyweight Squats",
    "Front Squat", "Goblet Squat", "Sumo Deadlift", "Romanian Deadlift", "Overhead Squat", "Zercher Squat",
    "Incline Bench Press", "Decline Bench Press", "Cable Rows", "Seated Row Machine", "Pull-Ups", "Chin-Ups",
    "Assisted Pull-Ups", "Dumbbell Rows", "Kettlebell Swings", "Turkish Get-Up", "Farmers Walk", "Single-Leg Deadlift",
    "Pistol Squats", "Hip Thrusts", "Glute Bridges", "Donkey Kicks", "Fire Hydrants", "Bird-Dogs",
    "Arnold Press", "Lateral Raises", "Front Raises", "Upright Row", "Barbell Shrugs", "Dumbbell Shrugs",
    "Cable Lateral Raises", "Face Pulls", "Skull Crushers", "Overhead Tricep Extension", "Dips", "Diamond Pushups",
    "Incline Pushups", "Handstand Pushups", "Assault Bike", "Spin Class", "Row Sprints", "Boxing Drills",
    "Kickboxing", "Shadowboxing", "Stretching Routine", "Foam Rolling", "Plyometric Pushups", "Clap Pushups",
    "Depth Jumps", "Jump Squats", "Broad Jumps", "Sprint Intervals", "Long-Distance Run", "Trail Running",
    "Zumba", "Pilates", "Barre Workout", "Tabata Workout", "HIIT Workout", "Core Blaster", 
    "Power Yoga", "Sun Salutations", "Resistance Band Workout", "TRX Training", "Weighted Vest Training",
    "Strongman Training", "Obstacle Course Practice", "Parkour Basics", "Balance Board Drills", "Agility Ladder Drills"
  ];
  
  
  document.getElementById("suggestWorkoutBtn").addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * workouts.length);
    const suggestionDiv = document.getElementById("workoutSuggestion");
    suggestionDiv.innerText = "Try: " + workouts[randomIndex];
  });
  
  // ----------------------------
  // Animated Progress Bar
  // ----------------------------
  
  document.getElementById("startProgressBtn").addEventListener("click", function () {
    const progressBar = document.getElementById("progressBar");
    let width = 0;
    progressBar.style.width = "0%";
    progressBar.style.backgroundColor = "green";
  
    const interval = setInterval(function () {
      if (width >= 100) {
        clearInterval(interval);
      } else {
        width++;
        progressBar.style.width = width + "%";
      }
    }, 20); // 20ms between updates (smooth animation)
  });

  document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // prevent form from actually submitting
    const workoutNameInput = document.getElementById('workout-name');
    const workoutName = workoutNameInput.value.trim();
    if (workoutName) {
      localStorage.setItem('lastWorkout', workoutName);
  
      // Success Popup
      const successMsg = document.createElement('div');
      successMsg.innerText = "✅ Workout Saved!";
      successMsg.style.backgroundColor = "#d4edda";
      successMsg.style.color = "#155724";
      successMsg.style.padding = "10px";
      successMsg.style.marginTop = "10px";
      successMsg.style.border = "1px solid #c3e6cb";
      successMsg.style.borderRadius = "5px";
      document.querySelector('.add-workout-content').prepend(successMsg);
  
      setTimeout(() => {
        successMsg.remove();
        location.reload(); // reload after 2 seconds
      }, 2000);
    }
  });
  
  // Show "Welcome Back" message if a workout was saved before
const lastWorkout = localStorage.getItem('lastWorkout');
if (lastWorkout) {
  const welcomeBackMessage = document.createElement('div');
  welcomeBackMessage.innerText = `👋 Welcome back! Last workout: ${lastWorkout}`;
  welcomeBackMessage.style.marginTop = '20px';
  welcomeBackMessage.style.fontWeight = 'bold';
  document.querySelector('.add-workout-content').prepend(welcomeBackMessage);
}
// Auto-suggest Workout Names
const workoutNameInput = document.getElementById('workout-name');
const suggestionBox = document.createElement('div');
suggestionBox.style.border = '1px solid #ccc';
suggestionBox.style.padding = '10px';
suggestionBox.style.marginTop = '5px';
suggestionBox.style.display = 'none';
suggestionBox.style.backgroundColor = '#fff';

workoutNameInput.parentNode.appendChild(suggestionBox);

workoutNameInput.addEventListener('input', function () {
  const query = workoutNameInput.value.toLowerCase();
  suggestionBox.innerHTML = '';
  
  if (query.length === 0) {
    suggestionBox.style.display = 'none';
    return;
  }

  const matches = workouts.filter(name => name.toLowerCase().includes(query));
  
  if (matches.length === 0) {
    suggestionBox.style.display = 'none';
    return;
  }

  matches.slice(0, 5).forEach(match => {
    const div = document.createElement('div');
    div.textContent = match;
    div.style.cursor = 'pointer';
    div.style.padding = '5px 0';

    div.addEventListener('click', function () {
      workoutNameInput.value = match;
      suggestionBox.style.display = 'none';
    });

    suggestionBox.appendChild(div);
  });

  suggestionBox.style.display = 'block';
});

// Clear Last Saved Workout
const clearBtn = document.createElement('button');
clearBtn.textContent = "Clear Last Workout";
clearBtn.style.marginTop = '10px';
clearBtn.style.backgroundColor = '#ff6666';
clearBtn.style.color = '#fff';
clearBtn.style.border = 'none';
clearBtn.style.padding = '10px';
clearBtn.style.cursor = 'pointer';

document.querySelector('.add-workout-content').prepend(clearBtn);

clearBtn.addEventListener('click', function () {
  localStorage.removeItem('lastWorkout');
  location.reload();
});

// Character Counter for Notes Field
const notesInput = document.getElementById('notes');
const notesCounter = document.createElement('div');
notesCounter.style.marginTop = '5px';
notesCounter.style.fontSize = '0.9em';
notesCounter.style.color = '#666';
notesInput.parentNode.appendChild(notesCounter);

notesInput.addEventListener('input', function () {
  notesCounter.textContent = `${notesInput.value.length}/300 characters`;
});

  
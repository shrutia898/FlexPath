document.addEventListener("DOMContentLoaded", function () {
    // FEATURE 1) Completed toggle action
    const toggle = document.getElementById("status-toggle");
    const label = document.getElementById("status-label");
    let editBtn = document.getElementById("edit-btn");

    if (toggle && label && editBtn) { // runs when all needed elements exist
      toggle.addEventListener("change", () => {
        if (toggle.checked) {
          const today = new Date();
          const formatted = `Completed on: ${today.toLocaleDateString()}`;
          label.innerHTML = "<strong>Completed</strong>";
          editBtn.outerHTML = `<span class="control-btn">${formatted}</span>`;
        } else {
          label.textContent = "Incomplete";
          const newBtn = document.createElement("button");
          newBtn.className = "control-btn";
          newBtn.id = "edit-btn";
          newBtn.innerText = "Edit Workout";
          const buttons = document.querySelector(".buttons");
          const oldSpan = buttons?.querySelector("span.control-btn");
          if (oldSpan) {
            buttons.insertBefore(newBtn, oldSpan);
            oldSpan.remove();
            editBtn = newBtn;
          }
        }
      });
    }

    // FEATURE 2) form validation for workout type 
    const form = document.querySelector("form");
    const workoutTypeSelect = document.getElementById("workout-type");

    form?.addEventListener("submit", function (e) {
      const selectedType = workoutTypeSelect?.value;

      if (selectedType === "") {
        e.preventDefault();
        alert("Please select a valid workout type.");
      }
    });
});
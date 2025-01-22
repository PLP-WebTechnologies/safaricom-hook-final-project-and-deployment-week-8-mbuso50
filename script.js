// Function to validate the contact form
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous error messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';

    let valid = true;

    // Name validation
    const nameInput = document.getElementById('name');
    
   if (nameInput.value.length === 0) {
       document.getElementById('nameError').textContent = 'Name is required.';
       valid = false;
   }

   // Email validation
   const emailInput = document.getElementById('email');
   if (!emailInput.validity.valid) {
       document.getElementById('emailError').textContent = 'Please enter a valid email.';
       valid = false;
   }

   if (valid) {
       alert('Message sent successfully!');
       document.getElementById('contactForm').reset();
   }
});

// Example function to demonstrate parameters and return values
function calculateArea(length, width) {
   return length * width;
}

// Example usage of the function
console.log(calculateArea(5, 10)); // Outputs: 50

// Example of a global variable and local variable demonstration
let globalVar = "I am global";

function checkScope() {
   let localVar = "I am local";
   console.log(globalVar); // Accessible here
   console.log(localVar); // Accessible here
}

// Call the function to demonstrate scope
checkScope();

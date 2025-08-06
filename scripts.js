/**
 * CONTACT FORM VALIDATION
 * Handles form submission and validates all fields
 */
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form elements
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    
    // Reset previous error messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('messageError').textContent = '';
    
    let isValid = true;
    
    // Validate name
    if (nameInput.value.trim() === '') {
        document.getElementById('nameError').textContent = 'Name is required';
        isValid = false;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailInput.value.trim() === '') {
        document.getElementById('emailError').textContent = 'Email is required';
        isValid = false;
    } else if (!emailRegex.test(emailInput.value)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email';
        isValid = false;
    }
    
    // Validate message
    if (messageInput.value.trim() === '') {
        document.getElementById('messageError').textContent = 'Message is required';
        isValid = false;
    } else if (messageInput.value.trim().length < 10) {
        document.getElementById('messageError').textContent = 'Message must be at least 10 characters';
        isValid = false;
    }
    
    // If form is valid, show success message
    if (isValid) {
        alert('Form submitted successfully!');
        this.reset();
    }
});

/**
 * FEATURE 1: BACKGROUND COLOR PICKER
 * Allows user to change the background color of the page
 */
document.getElementById('applyColor').addEventListener('click', function() {
    const colorPicker = document.getElementById('colorPicker');
    document.body.style.backgroundColor = colorPicker.value;
    
    // Change text color for better contrast
    const rgb = hexToRgb(colorPicker.value);
    const brightness = (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    document.body.style.color = brightness > 125 ? '#333' : '#fff';
});

// Helper function to convert hex color to RGB
function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : {r: 0, g: 0, b: 0};
}

/**
 * FEATURE 2: CLICK COUNTER
 * Tracks and displays the number of button clicks
 */
let counter = 0;
const counterDisplay = document.getElementById('counter');

document.getElementById('incrementBtn').addEventListener('click', function() {
    counter++;
    counterDisplay.textContent = counter;
    
    // Visual feedback
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 100);
});

document.getElementById('resetBtn').addEventListener('click', function() {
    counter = 0;
    counterDisplay.textContent = counter;
    
    // Visual feedback
    this.style.backgroundColor = '#f44336';
    setTimeout(() => {
        this.style.backgroundColor = '#4CAF50';
    }, 300);
});

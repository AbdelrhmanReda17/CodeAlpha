// Get references to the color input and the button
const colorInput = document.getElementById('color');
const colorValueSpan = document.getElementById('color-value');

// Add an event listener to the color input to detect changes
colorInput.addEventListener('input', function() {
    const colorValue = colorInput.value; 
    colorValueSpan.textContent = colorValue;
    document.body.style.backgroundColor = colorValue;
});

// Function to copy the color when the "Copy Color" button is clicked
const copyButton = document.getElementById('copy');
copyButton.addEventListener('click', function() {
    colorInput.select();
    document.execCommand('copy');
    alert('Color copied to clipboard: ' + colorInput.value);
});


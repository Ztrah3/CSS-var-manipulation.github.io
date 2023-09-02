// Function to update the background color
const updateBackgroundColor = (event) => {
    document.body.style.backgroundColor = event.target.value;
};


// Function to update the blur
const updateBlur = (event) => {
    document.documentElement.style.setProperty('--blur', event.target.value + 'px');
};


// Function to update the spacing
const updateSpacing = (event) => {
    document.documentElement.style.setProperty('--spacing', event.target.value + 'px');
};


// Add event listener for color picker
const addColorPickerEventListener = () => {
    const colorPicker = document.getElementById('bgColorPicker');
    if (colorPicker) {
        colorPicker.addEventListener("input", updateBackgroundColor);
    }
};


// Add event listener for blur input
const addBlurInputEventListener = () => {
    const blurInput = document.querySelector('#blur');
    if (blurInput) {
        blurInput.addEventListener('input', updateBlur);
    }
};


// Add event listener for spacing input
const addSpacingInputEventListener = () => {
    const spacingInput = document.querySelector('#spacing');
    if (spacingInput) {
        spacingInput.addEventListener('input', updateSpacing);
    }
};


// Call functions to add event listeners
addColorPickerEventListener();
addBlurInputEventListener();
addSpacingInputEventListener();

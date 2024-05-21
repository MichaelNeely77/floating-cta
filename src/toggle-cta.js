function toggleCTA() {
	document.querySelector('.wp-block-create-block-floating-cta').classList.toggle('closed');
}

// Attach the function to the window object to make it globally accessible
window.toggleCTA = toggleCTA;

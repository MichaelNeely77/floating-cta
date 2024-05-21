document.addEventListener('DOMContentLoaded', () => {
	const closeButton = document.querySelector('.cta-close-button');

	if (closeButton) {
		closeButton.addEventListener('click', () => {
			const ctaBlock = document.querySelector('.wp-block-create-block-floating-cta');
			if (ctaBlock) {
				ctaBlock.classList.toggle('closed');
			}
		});
	}
});

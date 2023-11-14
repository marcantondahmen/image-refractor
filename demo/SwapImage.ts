export class SwapImageComponent extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback(): void {
		this.addEventListener('click', (event: Event) => {
			const button = event.target;

			Array.from(document.querySelectorAll('swap-image')).forEach(
				(item) => {
					item.classList.toggle('active', item === button);
				},
			);

			const src = this.getAttribute('src');
			const current = document.querySelector('image-refractor');
			const updated = document.createElement('image-refractor');

			updated.setAttribute('src', src);
			updated.setAttribute('width', current.getAttribute('width'));
			updated.setAttribute('height', current.getAttribute('height'));
			updated.setAttribute('speed', current.getAttribute('speed'));
			updated.setAttribute(
				'intensity',
				current.getAttribute('intensity'),
			);
			updated.setAttribute('refract', current.getAttribute('refract'));

			current.replaceWith(updated);
		});
	}
}

customElements.define('swap-image', SwapImageComponent);

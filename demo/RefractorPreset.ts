export class RefractorPresetComponent extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback(): void {
		const speed = this.getAttribute('speed') || '0.05';
		const intensity = this.getAttribute('intensity') || '1.0';

		this.textContent = `${intensity}/${speed}`;

		this.addEventListener('click', (event: Event) => {
			const button = event.target;

			Array.from(document.querySelectorAll('refractor-preset')).forEach(
				(item) => {
					item.classList.toggle('active', item === button);
				},
			);

			const current = document.querySelector('image-refractor');
			const updated = document.createElement('image-refractor');

			updated.setAttribute('width', current.getAttribute('width'));
			updated.setAttribute('height', current.getAttribute('height'));
			updated.setAttribute('refract', current.getAttribute('refract'));
			updated.setAttribute('src', current.getAttribute('src'));
			updated.setAttribute('speed', speed);
			updated.setAttribute('intensity', intensity);

			current.replaceWith(updated);
		});
	}
}

customElements.define('refractor-preset', RefractorPresetComponent);

export class RefractorPresetComponent extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback(): void {
		const speed = this.getAttribute('speed') || '0.05';
		const intensity = this.getAttribute('intensity') || '1.0';
		const refract = this.getAttribute('refract') || '1.333';

		this.textContent = `${intensity} / ${speed} / ${refract}`;

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
			updated.setAttribute('src', current.getAttribute('src'));
			updated.setAttribute('speed', speed);
			updated.setAttribute('intensity', intensity);
			updated.setAttribute('refract', refract);

			current.replaceWith(updated);
		});
	}
}

customElements.define('refractor-preset', RefractorPresetComponent);

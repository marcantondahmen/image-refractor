// @ts-ignore
import GlslCanvas from 'glslCanvas/src/GlslCanvas.js';
import { fbm } from '../fbm';

/**
 * A wrapper web-component for a modified version
 * of a shader described in this great video:
 * https://www.youtube.com/watch?v=GALjY57ntsk
 */
export class ImageRefractorComponent extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback(): void {
		const canvas = document.createElement('canvas');
		const width = this.getAttribute('width') || '1000';
		const height = this.getAttribute('height') || '1000';
		const refract = this.getAttribute('refract') || '1.333';
		const speed = this.getAttribute('speed') || '0.05';
		const intensity = this.getAttribute('intensity') || '1.0';

		this.style.display = 'block';

		canvas.setAttribute('width', width);
		canvas.setAttribute('height', height);

		canvas.style.width = '100%';
		canvas.style.height = '100%';

		this.appendChild(canvas);

		const sandbox = new GlslCanvas(canvas);

		const frag = `
			precision mediump float;

			uniform float u_time;
			varying vec2 v_texcoord;
			uniform vec3 spectrum;
			uniform sampler2D u_image;	

			${fbm}

			void main (void) {
				vec2 uv = v_texcoord;

				vec2 surface = vec2(
					mix(-0.3, 0.3, fbm(${intensity} * uv + ${speed} * u_time)),
					mix(-0.3, 0.3, fbm(${intensity} * uv + ${speed} * u_time))
				);
			
				uv += refract(vec2(0.0, 0.0), surface, 1.0 / ${refract});

				vec4 color = texture2D(u_image, uv);

				gl_FragColor = color;
			}
		
		`;

		sandbox.load(frag);
		sandbox.setUniform('u_image', this.getAttribute('src'));
	}
}

customElements.define('image-refractor', ImageRefractorComponent);

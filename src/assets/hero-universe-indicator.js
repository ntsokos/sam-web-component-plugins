class HeroUniverseIndicator extends HTMLElement {

	static get observedAttributes() {
		return ['data-hero-name'];
	}

	constructor() {
		super();
		this.createAndAttachToDom();
	}

	connectedCallback() {
		if (!this.isConnected) { return; }
		this.createAndAttachToDom();
	}

	attributeChangedCallback(name, oldValue, newValue) {
		this.createAndAttachToDom();
	}

	//#region dom element manipulation

	createAndAttachToDom() {
		if (!this.shadowRoot) {
			this.attachShadow({ mode: 'open' });
		}

		// remove any existing children
		this.removeShadowRootChildren();

		// Create some CSS to apply to the shadow dom
		const style = document.createElement('style');
		style.textContent = this.getStyleContent();
		this.shadowRoot.appendChild(style);

		// Attach the created elements to the shadow dom
		const childElement = this.getChildElement();
		this.shadowRoot.appendChild(childElement);
	}

	removeShadowRootChildren() {
		var child = this.shadowRoot.lastElementChild;
		while (child) {
			this.shadowRoot.removeChild(child);
			child = this.shadowRoot.lastElementChild;
		}
	}

	getChildElement() {
		const heroName = this.getAttribute('data-hero-name');
		const universe = this.getHeroUniverse(heroName);

		const spanElement = document.createElement('span');

		if (!!universe) {
			spanElement.innerText = universe;
			spanElement.classList.add(universe.toLowerCase());
		}

		return spanElement;
	}

	getStyleContent() {
		return `

		span {
			font-weight: bold;
		}

		span.marvel {
			background: red;
			color: white;
		}

		span.dc {
			background: white;
			color: blue;
		}

		span.got {
			background: black;
			color: yellow;
		}

		`;
	}

	getHeroUniverse(heroName) {
		const MARVEL_UNIVERSE = ['Wolverine', 'Spider Man', 'Thor', 'Iron Man', 'Hulk', 'Captain America', 'Daredevil', 'Punisher'];
		const DC_UNIVERSE = ['Superman', 'Batman', 'Flash', 'Green Lantern', 'Wonder Woman', 'Aquaman'];
		const GOT = ['Jaime Lannister', 'Cersei Lannister', 'Daenerys Targaryen', 'Jon Snow', 'Robb Stark', 'Sansa Stark', 'Arya Stark',
			'Theon Greyjoy', 'Joffrey Baratheon', 'Melisandre'];

		if (MARVEL_UNIVERSE.includes(heroName)) return 'Marvel';
		if (DC_UNIVERSE.includes(heroName)) return 'DC';
		if (GOT.includes(heroName)) return 'GOT';
		return '';
	}

	//#endregion

}

// Define the new element
customElements.define('hero-universe-indicator', HeroUniverseIndicator);

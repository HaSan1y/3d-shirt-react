import { proxy } from "valtio";

class AppState {
	constructor() {
		this.state = proxy({
			intro: true,
			color: "#EFBD48",
			isLogoTexture: true,
			isFullTexture: false,
			logoDecal: "./threejs.png",
			fullDecal: "./threejs.png",
		});
	}
}

const state = new AppState();

export default state;

// import { proxy } from "valtio";

// const state = proxy({ intro: true, color: "#EFBD48", isLogoTexture: true, isFullTexture: false, logoDecal: "./threejs.png", fullDecal: "./threejs.png", });

// export default state;

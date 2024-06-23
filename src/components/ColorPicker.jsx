import { SketchPicker } from "react-color";
import { useSnapshot } from "valtio";

import state from "../store/store";

const ColorPicker = () => {
	const snap = useSnapshot(state.state);

	return (
		<div className="absolute left-full ml-3">
			<SketchPicker color={snap.color} disableAlpha onChange={(color) => (state.state.color = color.hex)} />
		</div>
	);
};

export default ColorPicker;

import React from "react";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";
import { Decal, useGLTF, useTexture } from "@react-three/drei";

import state from "../store/store";
import { Mesh } from "three";

const Shirt = () => {
	const snap = useSnapshot(state.state);
	const { nodes, materials } = useGLTF("/shirt_baked.glb");

	const logoTexture = useTexture(snap.logoDecal);
	const fullTexture = useTexture(snap.fullDecal);
	console.log(nodes, materials);

	useFrame((state, delta) => easing.dampC(materials.lambert1.color, snap.color, 0.25, delta));

	return (
		// <group ref={nodes.shirt}>
		<mesh castShadow geometry={nodes.T_Shirt_male.geometry} material={materials.lambert1} material-roughness={1} dispose={null}>
			{snap.isFullTexture && <Decal position={[0, 0, 0]} rotation={[0, 0, 0]} scale={1} map={fullTexture} />}
			{snap.isLogoTexture && <Decal position={[0, 0.04, 0.15]} rotation={[0, 0, 0]} scale={0.15} map={logoTexture} anisotropy={16} depthTest={false} depthWrite={true} />}
		</mesh>
		// </group>
	);
};

export default Shirt;
{
	//*idk what it is mesh or Mesh gives err acc not found*/
	// finally after whole day on ffox found out what the problem was, by using iexplorer or chrome you actually see the erorr cause! it was map-anisotropy which needs to be just anisotropy in mesh, resulting in acc not found in ff wtf.
}

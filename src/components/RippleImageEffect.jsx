import * as THREE from 'three';
import { useTexture } from '@react-three/drei';

export default function RippleImageEffect(viewport) {
	const scene = new THREE.Scene();
	const camera = new THREE.OrthographicCamera(
		viewport.width / -2,
		viewport.width / 2,
		viewport.height / 2,
		viewport.height / -2,
		-1000,
		1000
	);
	camera.position.z = 2;
	scene.add(camera);
	const geometry = new THREE.PlaneGeometry(1, 1);
	const group = new THREE.Group();
	const texture1 = useTexture('/logo.png');
	const material1 = new THREE.MeshBasicMaterial({ map: texture1 });
	const image1 = new THREE.Mesh(geometry, material1);
	image1.position.x = -0.25 * viewport.width;
	image1.position.y = 0;
	image1.position.z = 1;
	image1.scale.x = viewport.width / 5;
	image1.scale.y = viewport.width / 4;
	group.add(image1);
	const texture2 = useTexture('/images/picture2.jpeg');
	const material2 = new THREE.MeshBasicMaterial({ map: texture2 });
	const image2 = new THREE.Mesh(geometry, material2);
	image2.position.x = 0;
	image2.position.y = 0;
	image2.position.z = 1;
	image2.scale.x = viewport.width / 5;
	image2.scale.y = viewport.width / 4;
	group.add(image2);
	const texture3 = useTexture('/images/picture3.jpeg');
	const material3 = new THREE.MeshBasicMaterial({ map: texture3 });
	const image3 = new THREE.Mesh(geometry, material3);
	image3.position.x = 0.25 * viewport.width;
	image3.position.y = 0;
	image3.position.z = 1;
	image3.scale.x = viewport.width / 5;
	image3.scale.y = viewport.width / 4;
	group.add(image3);

	scene.add(group);
	return { scene, camera };
}

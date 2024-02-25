import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const geometry = new THREE.BoxGeometry(1, 0.5, 0.1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const dvd = new THREE.Mesh(geometry, material);
scene.add(dvd);

dvd.position.x = 0;
dvd.position.y = 0;
let dx = 0.05;
let dy = 0.05;

function animate() {
    requestAnimationFrame(animate);

    dvd.position.x += dx;
    dvd.position.y += dy;

    if (dvd.position.x >= 4 || dvd.position.x <= -4) {
        dx = -dx;
        dvd.material.color.setHex(Math.random() * 0xffffff);
    }
    if (dvd.position.y >= 2 || dvd.position.y <= -2) {
        dy = -dy;
        dvd.material.color.setHex(Math.random() * 0xffffff);
    }

    renderer.render(scene, camera);
}
camera.position.z = 5;

// Start animation
animate();

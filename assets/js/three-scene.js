// Three.js Scene Setup

import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// Configuration
const containerId = 'three-container';
const container = document.getElementById(containerId);

if (container) {
    // Scene setup
    const scene = new THREE.Scene();

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 7;
    camera.position.y = 3.0;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    let model; // Define model in outer scope

    const loader = new GLTFLoader();
    loader.load('assets/models/retro-computer.glb', function (gltf) {
        model = gltf.scene;

        model.scale.set(1, 1, 1);
        model.position.set(6, -5, 0);
        scene.add(model);

        // Camera Position
        camera.position.set(0, 0, 7.5)
        camera.lookAt(0, -3, 0);

    }, undefined, function (error) {
        console.error(error);
    });

    // Animation Loop
    function animate() {
        requestAnimationFrame(animate);

        // Rotate model if loaded
        if (model) {
            model.rotation.y += 0.0010;
        }

        renderer.render(scene, camera);
    }
    animate();

    // Handle Window Resize
    window.addEventListener('resize', () => {
        const width = container.clientWidth;
        const height = container.clientHeight;

        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    });
}

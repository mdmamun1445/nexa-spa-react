import { useEffect, useRef } from "react";
import * as THREE from "three";

function ThreeBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.IcosahedronGeometry(1.5, 1);

    const material = new THREE.MeshStandardMaterial({
      color: 0x647fff,
      wireframe: true,
    });

    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    const light = new THREE.PointLight(0xffffff, 2);
    light.position.set(3, 3, 5);
    scene.add(light);

    camera.position.z = 5;

    let animationId;

    function animate() {
      animationId = requestAnimationFrame(animate);
      sphere.rotation.x += 0.003;
      sphere.rotation.y += 0.005;
      renderer.render(scene, camera);
    }

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      geometry.dispose();
      material.dispose();
      renderer.dispose();

      if (mountRef.current?.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="three-background" />;
}

export default ThreeBackground;
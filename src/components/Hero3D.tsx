'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const Hero3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [webglSupported, setWebglSupported] = useState(true);
  const [isInteracting, setIsInteracting] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL availability
    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
      if (!gl) {
        setWebglSupported(false);
        return;
      }
    } catch {
      setWebglSupported(false);
      return;
    }

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const width = container.clientWidth || 600;
    const height = container.clientHeight || 550;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 24;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group to hold all 3D components for interactive rotation
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Core Wireframe Geometry (Icosahedron)
    const icosaGeometry = new THREE.IcosahedronGeometry(5.2, 1);
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x06b6d4, // Cyan
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const icosaMesh = new THREE.Mesh(icosaGeometry, wireframeMaterial);
    mainGroup.add(icosaMesh);

    // 2. Inner Concentric Geometric Core (Octahedron)
    const innerGeometry = new THREE.OctahedronGeometry(3.2, 0);
    const innerMaterial = new THREE.MeshBasicMaterial({
      color: 0x10b981, // Emerald
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });
    const innerMesh = new THREE.Mesh(innerGeometry, innerMaterial);
    mainGroup.add(innerMesh);

    // 3. Glowing Node Vertices (Points on outer geometry)
    const pointsMaterial = new THREE.PointsMaterial({
      color: 0x38bdf8,
      size: 0.22,
      transparent: true,
      opacity: 0.9,
    });
    const corePoints = new THREE.Points(icosaGeometry, pointsMaterial);
    mainGroup.add(corePoints);

    // 4. Floating Particle Cloud (Cosmic Node Network)
    const particleCount = 750;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const cyanColor = new THREE.Color(0x06b6d4);
    const emeraldColor = new THREE.Color(0x10b981);
    const amberColor = new THREE.Color(0xf59e0b);

    for (let i = 0; i < particleCount; i++) {
      // Spherical distribution
      const radius = 6.5 + Math.random() * 9.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      // Gradient color mix
      const rand = Math.random();
      const chosenColor = rand > 0.6 ? cyanColor : rand > 0.15 ? emeraldColor : amberColor;
      colors[i * 3] = chosenColor.r;
      colors[i * 3 + 1] = chosenColor.g;
      colors[i * 3 + 2] = chosenColor.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleCloudMaterial = new THREE.PointsMaterial({
      size: 0.12,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });

    const particleCloud = new THREE.Points(particleGeometry, particleCloudMaterial);
    mainGroup.add(particleCloud);

    // 5. Subtle Orbital Rings
    const ringGeometry = new THREE.RingGeometry(8.2, 8.28, 64);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.2,
    });
    const ringMesh1 = new THREE.Mesh(ringGeometry, ringMaterial);
    ringMesh1.rotation.x = Math.PI / 3;
    mainGroup.add(ringMesh1);

    const ringMesh2 = new THREE.Mesh(ringGeometry, ringMaterial);
    ringMesh2.rotation.y = Math.PI / 4;
    ringMesh2.rotation.x = -Math.PI / 6;
    mainGroup.add(ringMesh2);

    // Mouse Interaction Tracking
    let targetRotationX = 0;
    let targetRotationY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;

      mouseX = (x / rect.width) * 2;
      mouseY = -(y / rect.height) * 2;

      targetRotationY = mouseX * 0.9;
      targetRotationX = mouseY * 0.9;
      setIsInteracting(true);
    };

    const handleMouseLeave = () => {
      targetRotationX = 0;
      targetRotationY = 0;
      setIsInteracting(false);
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Continuous autonomous rotation
      icosaMesh.rotation.y += 0.0035;
      icosaMesh.rotation.x += 0.002;

      innerMesh.rotation.y -= 0.005;
      innerMesh.rotation.z += 0.003;

      particleCloud.rotation.y += 0.0015;
      particleCloud.rotation.x -= 0.001;

      ringMesh1.rotation.z += 0.002;
      ringMesh2.rotation.z -= 0.002;

      // Mouse interactive smooth lerping
      mainGroup.rotation.y += (targetRotationY - mainGroup.rotation.y) * 0.05;
      mainGroup.rotation.x += (targetRotationX - mainGroup.rotation.x) * 0.05;

      // Subtle breathing float
      mainGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.35;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      icosaGeometry.dispose();
      wireframeMaterial.dispose();
      innerGeometry.dispose();
      innerMaterial.dispose();
      particleGeometry.dispose();
      particleCloudMaterial.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  if (!webglSupported) {
    return (
      <div className="w-full h-full flex items-center justify-center p-8 text-center text-slate-400">
        <div className="p-6 rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-md">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 font-mono text-xl">
            &lt;/&gt;
          </div>
          <p className="text-sm font-medium text-slate-300">Scalable Systems &amp; 3D Architecture</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[450px] sm:h-[500px] lg:h-[560px] flex items-center justify-center select-none overflow-hidden">
      {/* 3D Canvas Container */}
      <div
        ref={containerRef}
        className="w-full h-full cursor-grab active:cursor-grabbing flex items-center justify-center"
      />

      {/* Floating Interactive Badge */}
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 pointer-events-none">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-cyan-500/20 text-[11px] font-mono text-slate-400 shadow-xl">
          <span
            className={`w-2 h-2 rounded-full ${
              isInteracting ? 'bg-cyan-400 animate-ping' : 'bg-emerald-400'
            }`}
          />
          <span>{isInteracting ? 'Cursor Interactive' : 'Three.js / WebGL Node Field'}</span>
        </div>
      </div>
    </div>
  );
};

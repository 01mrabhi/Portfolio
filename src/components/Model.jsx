import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Sphere, Stars } from '@react-three/drei'
import * as THREE from 'three'

// Section colour palette
const SECTION_COLORS = [
    { main: '#3b82f6', emissive: '#1d4ed8', light1: '#60a5fa', light2: '#8b5cf6' }, // Who I Am   – blue
    { main: '#8b5cf6', emissive: '#6d28d9', light1: '#a78bfa', light2: '#ec4899' }, // What I Do  – purple
    { main: '#06b6d4', emissive: '#0891b2', light1: '#22d3ee', light2: '#3b82f6' }, // Projects   – cyan
    { main: '#ec4899', emissive: '#be185d', light1: '#f472b6', light2: '#8b5cf6' }, // Contact    – pink
]

function lerp(a, b, t) { return a + (b - a) * t }

function lerpColor(colA, colB, t) {
    const ca = new THREE.Color(colA)
    const cb = new THREE.Color(colB)
    return ca.lerp(cb, t)
}

const OrbitingLight = ({ scrollProgress }) => {
    const lightRef = useRef()
    useFrame(({ clock }) => {
        const t = clock.getElapsedTime()
        const radius = 4
        lightRef.current.position.x = Math.sin(t * 0.6) * radius
        lightRef.current.position.z = Math.cos(t * 0.6) * radius
        lightRef.current.position.y = Math.sin(t * 0.4) * 2
    })
    const sec = Math.floor(scrollProgress * 4)
    const frac = (scrollProgress * 4) % 1
    const palette = SECTION_COLORS[Math.min(sec, 3)]
    const nextPalette = SECTION_COLORS[Math.min(sec + 1, 3)]
    return (
        <pointLight
            ref={lightRef}
            color={lerpColor(palette.light1, nextPalette.light1, frac)}
            intensity={2.5}
            distance={12}
        />
    )
}

const AnimatedCore = ({ scrollProgress }) => {
    const meshRef = useRef()
    const mat = useRef()

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime()
        if (!meshRef.current || !mat.current) return

        // Base idle spin
        meshRef.current.rotation.x = t * 0.12
        meshRef.current.rotation.y = t * 0.18

        // Scroll-driven extra spin on Y
        meshRef.current.rotation.y += scrollProgress * Math.PI * 4

        // Scroll-driven tilt on X
        meshRef.current.rotation.x += scrollProgress * Math.PI * 1.5

        // Scroll-driven scale pulse
        const baseScale = lerp(1.8, 2.4, Math.sin(t * 0.5) * 0.5 + 0.5)
        const scrollScale = lerp(1.0, 1.25, scrollProgress)
        meshRef.current.scale.setScalar(baseScale * scrollScale)

        // Colour interpolation across sections
        const sec = Math.min(Math.floor(scrollProgress * 4), 3)
        const frac = Math.min((scrollProgress * 4) % 1, 1)
        const palette = SECTION_COLORS[sec]
        const nextPalette = SECTION_COLORS[Math.min(sec + 1, 3)]

        const mainColor = lerpColor(palette.main, nextPalette.main, frac)
        const emissiveColor = lerpColor(palette.emissive, nextPalette.emissive, frac)

        mat.current.color.set(mainColor)
        mat.current.emissive.set(emissiveColor)
        mat.current.emissiveIntensity = lerp(0.15, 0.4, scrollProgress)
        mat.current.distort = lerp(0.35, 0.65, scrollProgress)
    })

    return (
        <Sphere ref={meshRef} args={[1, 128, 128]} scale={2}>
            <MeshDistortMaterial
                ref={mat}
                color="#3b82f6"
                emissive="#1d4ed8"
                emissiveIntensity={0.2}
                distort={0.4}
                speed={2.5}
                roughness={0.15}
                metalness={0.85}
            />
        </Sphere>
    )
}

export default function Model({ scrollProgress = 0 }) {
    return (
        <Canvas
            camera={{ position: [0, 0, 6], fov: 42 }}
            gl={{ antialias: true, alpha: true }}
            style={{ background: 'transparent' }}
        >
            {/* Ambient */}
            <ambientLight intensity={0.2} />

            {/* Static key lights */}
            <directionalLight position={[8, 10, 5]} intensity={0.8} color="#ffffff" />
            <directionalLight position={[-8, -6, -5]} intensity={0.4} color="#8b5cf6" />

            {/* Dynamic orbiting accent light */}
            <OrbitingLight scrollProgress={scrollProgress} />

            {/* Main geometry */}
            <AnimatedCore scrollProgress={scrollProgress} />

            {/* Space stars */}
            <Stars radius={60} depth={40} count={3000} factor={3} saturation={0} fade speed={1.5} />
        </Canvas>
    )
}

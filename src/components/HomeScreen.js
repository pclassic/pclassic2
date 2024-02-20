import * as THREE from 'three'
import { useRef, Suspense} from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MarchingCube, Bounds, Text } from '@react-three/drei'
import { RigidBody, BallCollider } from '@react-three/rapier'
const vec = new THREE.Vector3()

function MetaBall({ color, ...props }) {
  const api = useRef()

  useFrame((state, delta) => {
    api.current.applyImpulse(
      vec
        .copy(api.current.translation())
        .normalize()
        .multiplyScalar(delta * -0.05),
    )
  })
  

  return (
    <RigidBody ref={api} colliders={false} linearDamping={4} angularDamping={0.95} {...props}>
      <MarchingCube strength={0.35} subtract={6} color={color} />
      <BallCollider args={[0.1]} type="dynamic" />
    </RigidBody>
  )
}

function Pointer() {
  const ref = useRef()
  

  useFrame(({ mouse, viewport}) => {
    const { width, height } = viewport.getCurrentViewport()
    vec.set(mouse.x * (width / 2), mouse.y * (height / 2), 0)
    ref.current.setNextKinematicTranslation(vec)
  })
  return (
    <RigidBody type="kinematicPosition" colliders={false} ref={ref}>
      <MarchingCube strength={0.5} subtract={10} color="black" />
      <BallCollider args={[0.1]} type="dynamic" />
    </RigidBody>
  )
}

export default function App({show}) {


  return (
    <>
    {/* <div style={{position: "absolute", zIndex: "1", left: "20%", bottom: show ? "10%" : "30%"}}>
        <h1 style={{fontWeight: "bolder", fontSize: "250px"}}>PClassic</h1>
      </div> */}
    <Canvas style={{
        backgroundColor: '#111a21',
        width: '100vw',
        height: '100vh',
     }} camera={{ position: [0, 0, 5], fov: 25 }}>
      <Suspense>
      <Text
            position={[0, -2.5, -50]}
            letterSpacing={-0.05}
            font="/Ki-Medium.ttf"
            fontSize={10}
            color="white"
            material-toneMapped={false}
            material-fog={false}
            anchorX="center"
            anchorY="middle">
            {`PClassic`}
          </Text>
      </Suspense>
      {/* Zoom to fit a 1/1/1 box to match the marching cubes */}
      <Bounds fit clip observe margin={1}>
        <mesh visible={false}>
          <boxGeometry />
        </mesh>
      </Bounds>
      
    </Canvas>
    
    </>
  )
}

import { ContactShadows, Environment, OrbitControls, useCursor } from '@react-three/drei'

import * as THREE from 'three'
import { Environment3D } from "./environment/Environment3D"


const Experience = () => {
  return (
    <>
      <Environment preset="sunset" />
      <ambientLight intensity={0.3} />
      <ContactShadows blur={2} />
      <Environment3D rotation={[0, 45* Math.PI / 180, 0]}  position={[0, 0,-1]} />
    </>
  )
}

export default Experience
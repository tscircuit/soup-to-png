import { Resvg } from '@resvg/resvg-js'
import { pcbSoupToSvg, soupToSvg } from 'circuit-to-svg'
import type { AnySoupElement } from '@tscircuit/soup'

function circuitToPng(circuit: AnySoupElement[], circuitType: 'pcb' | 'schematic') {
  const svg = circuitType === 'pcb' ? pcbSoupToSvg(circuit) : soupToSvg(circuit)
  const opts = {
    background: 'rgba(238, 235, 230, .9)',
    fitTo: {
      mode: 'width' as const,
      value: 1200,
    },
  }
  const resvg = new Resvg(svg, opts)
  const pngData = resvg.render()
  const pngBuffer = pngData.asPng()

  return pngBuffer
}

export { circuitToPng }
import { promises } from 'node:fs'
import { join } from 'node:path'
import { Resvg } from '@resvg/resvg-js'
import { pcbSoupToSvg, soupToSvg } from '@tscircuit/soup-to-svg'
import type { AnySoupElement } from '@tscircuit/soup'

async function soupToPng(soup: AnySoupElement[]) {
  const svg = pcbSoupToSvg(soup)
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

  console.info('Original SVG Size:', `${resvg.width} x ${resvg.height}`)
  console.info('Output PNG Size  :', `${pngData.width} x ${pngData.height}`)

  await promises.writeFile(join(__dirname, './output.png'), pngBuffer)
}

export { soupToPng }
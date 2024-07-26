import { expect, test } from "bun:test";
import { circuitToPng } from "../lib/svg-to-png";
import { writeFile } from "fs/promises";
import { join } from "path";
import soup from "./soup.js";

test("circuitToPng generates a PNG file for a PCB circuit", async () => {
  // Sample PCB circuit
  const pcbCircuit = soup;
  const pngBuffer = circuitToPng(pcbCircuit, "pcb");

  // Check if the buffer is not empty
  expect(pngBuffer.length).toBeGreaterThan(0);

  // Save the PNG file for inspection
  const outputPath = join(import.meta.dir, "./output/output_pcb.png");
  await writeFile(outputPath, pngBuffer);

  console.log(`PCB PNG file saved to: ${outputPath}`);
});

test("circuitToPng generates a PNG file for a schematic circuit", async () => {
  // Sample schematic circuit
  const schematicCircuit = soup;
  const pngBuffer = circuitToPng(schematicCircuit, "schematic");

  // Check if the buffer is not empty
  expect(pngBuffer.length).toBeGreaterThan(0);

  // Save the PNG file for inspection
  const outputPath = join(import.meta.dir, "./output/output_schematic.png");
  await writeFile(outputPath, pngBuffer);

  console.log(`Schematic PNG file saved to: ${outputPath}`);
});
# @tscircuit/circuit-to-png

## Overview

@tscircuit/circuit-to-png is a TypeScript library that converts circuit "soup" (a JSON representation of circuit components) into PNG images. This library is part of the tscircuit ecosystem, which aims to provide tools for working with electronic circuits in a programmatic way.

## Features

- Convert circuit "soup" to PNG images
- Support for both schematic and PCB layouts
- TypeScript support for type safety and better developer experience

## Installation

To install @tscircuit/circuit-to-png, use npm:

```bash
npm install @tscircuit/circuit-to-png
```

## Usage

Here's a basic example of how to use @tscircuit/circuit-to-png:

```typescript
import { soupToPng } from "@tscircuit/circuit-to-png";

const circuitSoup = {
  // Your circuit soup JSON here
};

const pngBuffer = await soupToPng(circuitSoup);
```

For more detailed usage instructions and API documentation, please refer to the source code and tests in the `src` directory.

## Development

To set up the project for development:

1. Clone the repository
2. Install dependencies: `npm install`
3. Run tests: `npm test`

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Related Projects

- [tscircuit](https://github.com/tscircuit/tscircuit) - The main tscircuit project

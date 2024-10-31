# React Pure Loading

**React Pure Loading ** is a lightweight library of loading animations made with pure CSS. These loaders are perfect for performance-focused applications and can be customized with different sizes and colors to fit your design needs.

## Current Version

- Version: 1.0.3

## Installation

Install the package with npm:

```bash
npm install react-pure-loading
```

## Peer Dependencies

Make sure you have the following dependencies installed in your project:

- `react` ^18.0.0
- `react-dom` ^18.0.0

## Usage

Import the loaders into your React application:

```javascript
import {
  Dots,
  Bounce,
  Wave,
  Ring,
  Square,
  Pulse,
  Spinner,
  Progress,
  Bars,
} from "react-pure-loading";

function App() {
  return (
    <>
      <Dots size="medium" color="#474bff" />
      <Bounce size="large" color="#00ff00" />
      <Wave size="medium" color="#474bff" />
      <Ring size="large" color="black" />
      <Square size="small" color="#ff6347" />
      <Pulse size="large" color="#bada55" />
      <Spinner size="medium" color="black" />
      <Progress size="large" color="#00ff00" />
      <Bars size="medium" color="#474bff" />
    </>
  );
}

export default App;
```

## Loaders

Each loader has a unique style to fit different loading animations. Here’s a list of the available loaders:

- **Dots:** Small dots pulsing in sequence.
- **Bounce:** Circles bouncing in a line.
- **Wave:** Bars creating a wave animation.
- **Ring:** Spinning ring.
- **Square:** Square that jumps up and down.
- **Pulse:** Single dot that expands and fades.
- **Spinner:** Classic spinner animation.
- **Progress:** Bar filling up over time.
- **Bars:** Bars moving up and down.

## Props

Each loader accepts these props:

- `size` (optional): Choose `small`, `medium`, or `large` to change the loader size. Default is medium.
- `color` (optional): Set any color in HEX or RGB format. Default is `#474bff`.

## Examples

Here’s how to use different loaders with custom colors and sizes:

```javascript
<Wave size="small" color="#ff6347" />
<Ring size="large" color="#000" />
<Pulse size="medium" color="#bada55" />
```

## License

This project is licensed under the MIT License.

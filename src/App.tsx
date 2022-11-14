import { DxfViewer } from 'dxf-viewer';
import {useEffect, useRef} from 'react';
import * as three from 'three';

import font from './Roboto-LightItalic.ttf';

import './App.css';

export default function App() {
  const ref = useRef(null);

  useEffect(() => {
    (async () => {
      const viewer = new DxfViewer(ref.current!, {
        clearColor: new three.Color("#fff"),
        autoResize: true,
        colorCorrection: true,
        clientWidth: 800,
        clientHeight: 600,
      } as any);

      await viewer.Load({
        url: 'https://raw.githubusercontent.com/oznakn/dxf-demos/main/a.dxf',
        fonts: [font],
      } as any);
    })();
  }, [ref]);

  return (
    <div id="canvas-container" ref={ref}></div>
  )
}

import styles from './Selector.module.css';

function Selector({ color, opacity, onChange }) {
  const [ r, g, b ] = hex2rgb(color);
  const [ h, s, l ] =rgb2hsl(r, g, b);

  function hex2rgb(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    
    return [ r, g, b ]
}

  function rgb2hsl(r, g, b) {
    // Make r, g, and b fractions of 1
    r /= 255;
    g /= 255;
    b /= 255;

    // Find greatest and smallest channel values
    let cmin = Math.min(r,g,b),
        cmax = Math.max(r,g,b),
        delta = cmax - cmin,
        h = 0,
        s = 0,
        l = 0;

    // Calculate hue
    // No difference
    if (delta === 0)
      h = 0;
    // Red is max
    else if (cmax === r)
      h = ((g - b) / delta) % 6;
    // Green is max
    else if (cmax === g)
      h = (b - r) / delta + 2;
    // Blue is max
    else
      h = (r - g) / delta + 4;

    h = Math.round(h * 60);
      
    // Make negative hues positive behind 360°
    if (h < 0)
        h += 360;

    // Calculate lightness
    l = (cmax + cmin) / 2;

    // Calculate saturation
    s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
      
    // Multiply l and s by 100
    s = +(s * 100).toFixed(0);
    l = +(l * 100).toFixed(0);

    return [h, s, l];
  }


  return <div className={styles.wrapper}>
    <div className={styles.row}>
      <label for='color'>Color</label>
      <label for='opacity'>Opacity</label>
    </div>
    <div className={styles.row}>
      <input className={styles.selector} id='color' type='color' name='color' value={color} onChange={onChange} />
      <div className={styles.opacity}>
      <label for='opacity'>{opacity}%</label>
      <input id='opacity' type='range' name='opacity' value={opacity} onChange={onChange} />
      </div>
    </div>
    <div className={styles.row}>
      <label for='colorTxt'>Color:</label>
      <input id='colorTxt' type='text' value={color} readOnly />
    </div>
    <div className={styles.row}>
      <label for='rgbaTxt'>RGBA:</label>
      <div className={styles.rgba}>
        <label for='r'>R:</label>
        <input type='text' value={r} readOnly />
        <label for='g'>G:</label>
        <input type='text' value={g} readOnly />
        <label for='g'>B:</label>
        <input type='text' value={b} readOnly />
      </div>
    </div>
    <div className={styles.row}>
      <label for='hslTxt'>HSL:</label>
      <div className={styles.rgba}>
        <label for='h'>H:</label>
        <input type='text' value={h} readOnly />
        <label for='s'>S:</label>
        <input type='text' value={`${s}%`} readOnly />
        <label for='l'>L:</label>
        <input type='text' value={`${l}%`} readOnly />
      </div>
    </div>
  </div>
}

export default Selector;
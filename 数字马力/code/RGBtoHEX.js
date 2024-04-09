const rgbToHex = (rgb) => {
    // 提取RGB数值
    const [r, g, b] = rgb.match(/\d+/g).map(Number);
    // 十进制转十六进制，并确保两位数表示
    const toHex = (n) => n.toString(16).padStart(2, '0');
    // 拼接成十六进制颜色代码
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  };
  
  console.log(rgbToHex('rgb(255,255,255)')); // 输出: #ffffff
  
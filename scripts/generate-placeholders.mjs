import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { deflateSync } from "node:zlib";

const outDir = join(process.cwd(), "public", "images");
mkdirSync(outDir, { recursive: true });

const crcTable = new Uint32Array(256).map((_, n) => {
  let c = n;
  for (let k = 0; k < 8; k += 1) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  return c >>> 0;
});

function crc32(bytes) {
  let c = 0xffffffff;
  for (const byte of bytes) c = crcTable[(c ^ byte) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const typeBytes = Buffer.from(type);
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(Buffer.concat([typeBytes, data])));
  return Buffer.concat([length, typeBytes, data, crc]);
}

function writePng(file, width, height, draw) {
  const rgba = Buffer.alloc(width * height * 4);
  const api = makeCanvas(width, height, rgba);
  draw(api);

  const scanlines = Buffer.alloc((width * 4 + 1) * height);
  for (let y = 0; y < height; y += 1) {
    scanlines[y * (width * 4 + 1)] = 0;
    rgba.copy(scanlines, y * (width * 4 + 1) + 1, y * width * 4, (y + 1) * width * 4);
  }

  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;
  ihdr[9] = 6;

  const png = Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
    chunk("IHDR", ihdr),
    chunk("IDAT", deflateSync(scanlines, { level: 9 })),
    chunk("IEND", Buffer.alloc(0))
  ]);

  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, png);
}

function makeCanvas(width, height, rgba) {
  const set = (x, y, color, alpha = 1) => {
    if (x < 0 || y < 0 || x >= width || y >= height) return;
    const i = (Math.floor(y) * width + Math.floor(x)) * 4;
    const a = clamp(alpha * color[3], 0, 1);
    const inv = 1 - a;
    rgba[i] = color[0] * a + rgba[i] * inv;
    rgba[i + 1] = color[1] * a + rgba[i + 1] * inv;
    rgba[i + 2] = color[2] * a + rgba[i + 2] * inv;
    rgba[i + 3] = 255;
  };

  const bg = (top, bottom) => {
    for (let y = 0; y < height; y += 1) {
      const t = y / (height - 1);
      const color = mix(top, bottom, t);
      for (let x = 0; x < width; x += 1) set(x, y, color, 1);
    }
  };

  const ellipse = (cx, cy, rx, ry, color, alpha = 1) => {
    for (let y = Math.floor(cy - ry); y <= cy + ry; y += 1) {
      for (let x = Math.floor(cx - rx); x <= cx + rx; x += 1) {
        const d = ((x - cx) ** 2) / (rx ** 2) + ((y - cy) ** 2) / (ry ** 2);
        if (d <= 1) set(x, y, color, alpha * smooth(1 - d));
      }
    }
  };

  const rect = (x0, y0, w, h, color, alpha = 1) => {
    for (let y = y0; y < y0 + h; y += 1) {
      for (let x = x0; x < x0 + w; x += 1) set(x, y, color, alpha);
    }
  };

  const softRect = (x0, y0, w, h, r, color, alpha = 1) => {
    for (let y = y0; y < y0 + h; y += 1) {
      for (let x = x0; x < x0 + w; x += 1) {
        const dx = Math.max(x0 - x, 0, x - (x0 + w - 1));
        const dy = Math.max(y0 - y, 0, y - (y0 + h - 1));
        const inCorner = Math.hypot(Math.max(Math.abs(x - (x < x0 + w / 2 ? x0 + r : x0 + w - r)), 0), Math.max(Math.abs(y - (y < y0 + h / 2 ? y0 + r : y0 + h - r)), 0));
        if (dx === 0 && dy === 0 && inCorner <= r + 2) set(x, y, color, alpha);
      }
    }
  };

  return { width, height, set, bg, ellipse, rect, softRect };
}

function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v));
}

function smooth(v) {
  return clamp(v, 0, 1) ** 0.35;
}

function mix(a, b, t) {
  return [
    a[0] + (b[0] - a[0]) * t,
    a[1] + (b[1] - a[1]) * t,
    a[2] + (b[2] - a[2]) * t,
    1
  ];
}

const white = [252, 253, 252, 1];
const pearl = [229, 235, 233, 1];
const mint = [39, 199, 165, 1];
const ink = [17, 20, 19, 1];
const blush = [238, 188, 177, 1];
const gum = [219, 134, 128, 1];

writePng(join(outDir, "hero-tooth.png"), 1400, 1600, (c) => {
  c.bg([249, 251, 250, 1], [229, 238, 235, 1]);
  c.ellipse(690, 1420, 610, 120, [160, 176, 170, 1], 0.18);
  c.ellipse(555, 470, 300, 350, pearl, 0.94);
  c.ellipse(820, 470, 300, 350, [238, 242, 241, 1], 0.96);
  c.ellipse(690, 705, 430, 500, [246, 249, 248, 1], 0.96);
  c.ellipse(560, 1110, 145, 410, [241, 245, 244, 1], 0.95);
  c.ellipse(830, 1110, 145, 410, [238, 243, 242, 1], 0.95);
  c.ellipse(598, 1090, 58, 320, [204, 213, 211, 1], 0.28);
  c.ellipse(790, 1090, 58, 320, [204, 213, 211, 1], 0.24);
  c.ellipse(515, 345, 110, 85, white, 0.74);
  c.ellipse(835, 330, 160, 92, white, 0.72);
  c.ellipse(850, 610, 145, 220, [39, 199, 165, 1], 0.07);
  c.ellipse(450, 650, 95, 280, [160, 176, 170, 1], 0.18);
});

writePng(join(outDir, "smile-design.png"), 1300, 900, (c) => {
  c.bg([252, 249, 247, 1], [237, 244, 242, 1]);
  c.ellipse(650, 510, 520, 250, blush, 0.95);
  c.ellipse(650, 500, 430, 155, [112, 45, 42, 1], 0.9);
  c.ellipse(650, 455, 455, 95, [236, 153, 145, 1], 0.85);
  c.ellipse(650, 600, 430, 100, [232, 145, 137, 1], 0.82);
  for (let i = 0; i < 10; i += 1) {
    c.softRect(318 + i * 66, 410 + Math.abs(i - 4) * 4, 56, 110, 16, [255, 252, 244, 1], 0.98);
  }
  for (let i = 0; i < 8; i += 1) {
    c.softRect(395 + i * 64, 535 - Math.abs(i - 3) * 2, 54, 92, 14, [250, 247, 239, 1], 0.96);
  }
  c.rect(650, 190, 4, 660, white, 0.92);
  c.ellipse(650, 525, 28, 28, white, 0.95);
  c.ellipse(650, 525, 11, 11, mint, 0.9);
});

writePng(join(outDir, "doctors-team.png"), 1300, 1000, (c) => {
  c.bg([248, 251, 250, 1], [229, 238, 235, 1]);
  [310, 650, 990].forEach((x, i) => {
    c.ellipse(x, 280, 82, 100, [[222, 172, 145, 1], [207, 146, 120, 1], [232, 190, 165, 1]][i], 1);
    c.ellipse(x, 250, 86, 62, [[97, 68, 55, 1], [72, 58, 52, 1], [186, 190, 184, 1]][i], 0.9);
    c.softRect(x - 150, 385, 300, 470, 44, white, 0.96);
    c.softRect(x - 72, 365, 144, 180, 26, [194, 221, 232, 1], 0.72);
    c.ellipse(x - 60, 475, 55, 230, white, 0.95);
    c.ellipse(x + 60, 475, 55, 230, white, 0.95);
    c.softRect(x - 125, 590, 250, 250, 28, [245, 247, 247, 1], 0.95);
    c.ellipse(x, 470, 38, 70, [92, 128, 146, 1], 0.18);
  });
  c.ellipse(650, 920, 520, 70, [130, 146, 141, 1], 0.11);
  c.ellipse(650, 620, 480, 85, mint, 0.08);
});

writePng(join(outDir, "service-collage.png"), 1300, 900, (c) => {
  c.bg([250, 252, 251, 1], [235, 241, 239, 1]);
  c.softRect(145, 135, 430, 300, 36, white, 0.95);
  c.ellipse(300, 285, 150, 85, [243, 219, 214, 1], 0.9);
  for (let i = 0; i < 6; i += 1) c.softRect(205 + i * 36, 240, 29, 70, 9, white, 1);
  c.softRect(745, 145, 330, 190, 34, [236, 248, 244, 1], 1);
  c.ellipse(910, 235, 150, 42, [216, 236, 231, 1], 1);
  c.ellipse(910, 235, 116, 27, white, 0.95);
  c.softRect(720, 520, 390, 165, 32, white, 0.95);
  for (let i = 0; i < 8; i += 1) c.softRect(770 + i * 38, 570, 24, 70, 8, [246, 242, 231, 1], 0.98);
  c.softRect(230, 565, 360, 110, 28, [227, 248, 241, 1], 1);
  c.softRect(260, 595, 270, 28, 14, [138, 174, 166, 1], 0.55);
  c.ellipse(640, 450, 90, 90, mint, 0.9);
  c.ellipse(640, 450, 48, 48, white, 0.82);
});

writePng(join(outDir, "clinic-room.png"), 1300, 900, (c) => {
  c.bg([251, 253, 252, 1], [232, 240, 238, 1]);
  c.rect(0, 620, 1300, 280, [229, 235, 233, 1], 1);
  c.softRect(80, 90, 530, 385, 34, white, 0.86);
  c.softRect(690, 110, 455, 330, 34, [232, 248, 243, 1], 0.8);
  c.ellipse(660, 640, 330, 115, [178, 199, 194, 1], 0.22);
  c.softRect(420, 545, 520, 115, 55, white, 0.95);
  c.softRect(805, 475, 270, 88, 44, [203, 222, 218, 1], 0.9);
  c.softRect(280, 600, 420, 96, 45, [240, 244, 243, 1], 0.95);
  c.ellipse(480, 510, 80, 110, [224, 232, 230, 1], 0.9);
  c.rect(540, 665, 22, 150, [145, 160, 156, 1], 0.35);
  c.rect(810, 635, 18, 165, [145, 160, 156, 1], 0.35);
  c.ellipse(1040, 225, 78, 78, mint, 0.35);
});

writePng(join(outDir, "og-aurea-dental.png"), 1200, 630, (c) => {
  c.bg([251, 253, 252, 1], [226, 238, 235, 1]);
  c.ellipse(805, 315, 230, 270, pearl, 0.95);
  c.ellipse(735, 250, 125, 145, white, 0.86);
  c.ellipse(890, 250, 125, 145, white, 0.86);
  c.softRect(80, 120, 470, 72, 24, ink, 0.96);
  c.softRect(80, 225, 620, 42, 18, mint, 0.9);
  c.softRect(80, 300, 450, 30, 15, [128, 144, 139, 1], 0.45);
  c.softRect(80, 350, 380, 30, 15, [128, 144, 139, 1], 0.35);
});

console.log(`Generated placeholder images in ${outDir}`);

// * Helper to parse rgb/rgba/hex color to [r, g, b]
export function parseColor(color: string): [number, number, number] {
  if (color.startsWith('rgb')) {
    const nums = color.match(/\d+/g)?.map(Number) || [0, 0, 0]
    return [nums[0], nums[1], nums[2]]
  } else if (color.startsWith('#')) {
    let hex = color.replace('#', '')
    if (hex.length === 3)
      hex = hex
        .split('')
        .map((x) => x + x)
        .join('')
    const num = parseInt(hex, 16)
    return [(num >> 16) & 255, (num >> 8) & 255, num & 255]
  }
  throw new Error('Unsupported color format: ' + color)
}

// WCAG relative luminance (used in contrast ratio calculation ↓)
function luminance([r, g, b]: [number, number, number]): number {
  const a = [r, g, b].map((v) => {
    v /= 255
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
  })
  return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2]
}

// * WCAG contrast ratio
export function contrast(
  rgb1: [number, number, number],
  rgb2: [number, number, number],
): number {
  const l1 = luminance(rgb1)
  const l2 = luminance(rgb2)
  return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05)
}

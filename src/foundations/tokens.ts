export const colorPrimitives = {
  neutral: {
    0: '#FFFFFF', 25: '#FCFBF7', 50: '#F7F6F1', 100: '#F1F0EA', 200: '#E5E4DD',
    300: '#D5D5CC', 400: '#ACAEA4', 500: '#7A7D73', 700: '#454840', 900: '#23261F', 950: '#171914',
  },
  sage: {
    50: '#F1F5EF', 100: '#E6EDE2', 200: '#D2DFC9', 300: '#B5C8AA', 400: '#91AA85',
    500: '#788F6E', 600: '#667B5E', 700: '#53654D', 800: '#414F3D', 900: '#303C2D',
  },
  sky: { 100: '#E6EFF4', 300: '#B6CEDB', 500: '#779BAE', 700: '#506F80' },
  clay: { 100: '#F3E6DF', 300: '#DDB7A4', 500: '#B98269', 700: '#875B49' },
  gold: { 100: '#FAF0D8', 300: '#E8CA83', 500: '#BF9A4C', 700: '#8D6D31' },
  rose: { 100: '#F7E5E3', 300: '#DEB0AC', 500: '#BC7773', 700: '#8E5552' },
  lavender: { 100: '#EFEAF4', 300: '#CFC0DC', 500: '#9682AA', 700: '#6E5B82' },
} as const;

export const semanticColors = {
  background: {
    page: colorPrimitives.neutral[50],
    surface: colorPrimitives.neutral[0],
    soft: colorPrimitives.neutral[100],
    selected: colorPrimitives.sage[100],
  },
  text: {
    primary: colorPrimitives.neutral[900],
    secondary: colorPrimitives.neutral[500],
    inverse: colorPrimitives.neutral[0],
  },
  border: {
    default: colorPrimitives.neutral[300],
    subtle: colorPrimitives.neutral[200],
    selected: colorPrimitives.sage[500],
  },
  action: {
    primary: colorPrimitives.sage[700],
    primaryHover: colorPrimitives.sage[800],
    selected: colorPrimitives.sage[100],
  },
  state: {
    successBackground: colorPrimitives.sage[100],
    successForeground: colorPrimitives.sage[700],
    warningBackground: colorPrimitives.gold[100],
    warningForeground: colorPrimitives.gold[700],
    dangerBackground: colorPrimitives.rose[100],
    dangerForeground: colorPrimitives.rose[700],
  },
  money: {
    give: colorPrimitives.rose[500],
    save: colorPrimitives.sage[500],
    spend: colorPrimitives.sky[500],
  },
  progress: {
    learning: colorPrimitives.sky[500],
    goal: colorPrimitives.lavender[500],
    family: colorPrimitives.clay[500],
    milestone: colorPrimitives.gold[500],
  },
} as const;

export const typography = {
  family: {
    latin: "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    arabic: "'Noto Sans Arabic', 'Noto Kufi Arabic', Tahoma, Arial, sans-serif",
  },
  weight: { regular: 400, medium: 500, semibold: 600 },
  size: {
    en: { displayLg: 32, displayMd: 28, h1: 24, h2: 20, h3: 17, bodyLg: 16, bodyMd: 14, bodySm: 13, labelMd: 12, labelSm: 11 },
    ar: { displayLg: 34, displayMd: 30, h1: 26, h2: 22, h3: 18, bodyLg: 17, bodyMd: 15, bodySm: 14, labelMd: 13, labelSm: 12 },
  },
  lineHeight: { display: 1.2, heading: 1.25, body: 1.45, arabicBody: 1.6, label: 1.3 },
} as const;

export const spacing = { 0: 0, 1: 4, 2: 8, 3: 12, 4: 16, 5: 20, 6: 24, 8: 32, 10: 40, 12: 48, 16: 64, 20: 80 } as const;
export const radius = { xs: 6, sm: 8, md: 12, lg: 16, xl: 20, '2xl': 24, full: 999 } as const;
export const border = { none: 0, hair: 1, strong: 2 } as const;
export const elevation = {
  0: 'none',
  1: '0 1px 2px rgba(28, 32, 24, 0.05)',
  2: '0 4px 12px rgba(28, 32, 24, 0.08)',
  3: '0 10px 30px rgba(28, 32, 24, 0.12)',
} as const;
export const motion = {
  duration: { instant: 100, fast: 180, normal: 280, slow: 450, milestoneMin: 1200, milestoneMax: 3000 },
  easing: {
    standard: 'cubic-bezier(0.2, 0, 0, 1)',
    enter: 'cubic-bezier(0, 0, 0, 1)',
    exit: 'cubic-bezier(0.4, 0, 1, 1)',
  },
} as const;
export const breakpoints = { mobile: 390, tablet: 768, tabletWide: 1024, desktop: 1440 } as const;
export const controlSize = {
  minimum: 44,
  explorer: { standard: 52, primary: 56 },
  builder: { standard: 48, primary: 52 },
  parent: { standard: 44, primary: 48 },
} as const;
export const iconSize = { xs: 16, sm: 20, md: 24, lg: 28, xl: 32 } as const;
export const worldPalette = {
  sky: ['#BFDCE7', '#E8F1F1'], water: ['#6FA7AF', '#8FBFC0'], grass: '#90A979', forest: '#5F7657',
  sand: '#E2CE9E', stone: '#B9AF9A', wood: '#9B7154', roofClay: '#BB765D',
} as const;

export type ExperienceDensity = 'explorer' | 'builder' | 'parent' | 'navigator';
export type MoneyKind = 'give' | 'save' | 'spend';

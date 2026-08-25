export const COLORES = {
  primary:   '#FF6C37',
  secondary: '#5B6670',
  text:      '#24292D',
  border:    '#DEE0E2',
  success:   '#82b536',
  info:      '#3b82f6',
  surface:   '#DEE0E2',
  white:     '#FFFFFF',
} as const;

export const SHARED_TOOLTIP = {
  enabled: true,
  backgroundColor: COLORES.white,
  titleColor: COLORES.secondary,
  titleFont: { size: 12, weight: 'regular' as const },
  bodyColor: COLORES.text,
  bodyFont: { size: 12, weight: 'bold' as const },
  borderColor: COLORES.border,
  borderWidth: 1,
  padding: 12,
  cornerRadius: 8,
  usePointStyle: true,
  PointStyle: 'circle' as const,
  pointStyleWidth: 8,
  xAlign: 'center'
};

export const MESES_LABELS = {
  short: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Set', 'Oct', 'Nov', 'Dic'],
  long: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Setiembre', 'Octubre', 'Noviembre', 'Diciembre'],
} as const;

export const SHARED_SCALES = {
  x: { ticks: { color: COLORES.text }, grid: { color: COLORES.border } },
  y: { ticks: { color: COLORES.text }, grid: { color: COLORES.border } },
} as const;

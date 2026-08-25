import { Chart } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(ChartDataLabels);

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

export function centerText(
  getCenter: () => string,
  getSub?: () => string,
  fontSize = '24px',
  subFontSize = '12px',
) {
  return {
    id: 'centerText',
    afterDraw: (chart: any) => {
      const { ctx, width, height } = chart;
      ctx.save();
      const text = getCenter();
      if (!text) return;
      ctx.font = `bold ${fontSize} sans-serif`;
      ctx.fillStyle = COLORES.text;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(text, width / 2, height / 2 - 8);
      if (getSub) {
        const sub = getSub();
        if (sub) {
          ctx.font = `${subFontSize} sans-serif`;
          ctx.fillStyle = COLORES.secondary;
          ctx.fillText(sub, width / 2, height / 2 + 14);
        }
      }
    },
  };
}

export const DONUT_PRESETS = {
  completo: {
    cutout: '65%',
    layout: { padding: 60 },
  },
  medio: {
    cutout: '80%',
    rotation: -90,
    circumference: 180,
    aspectRatio: 2,
  },
  completoConCentro: {
    cutout: '70%',
  },
} as const;

export const MESES_LABELS = {
  short: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Set', 'Oct', 'Nov', 'Dic'],
  long: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Setiembre', 'Octubre', 'Noviembre', 'Diciembre'],
} as const;

export const SHARED_SCALES = {
  x: { ticks: { color: COLORES.text }, grid: { color: COLORES.border } },
  y: { ticks: { color: COLORES.text }, grid: { color: COLORES.border } },
} as const;

export const BAR_DATALABELS = {
  anchor: 'end' as const,
  align: 'end' as const,
  color: COLORES.text,
  font: { size: 12, weight: 'bold' as const },
  offset: 4,
  formatter: (value: number) => value.toLocaleString(),
};

export const BAR_PRESETS = {
  vertical: {
    maintainAspectRatio: false,
    aspectRatio: 1,
    plugins: {
      datalabels: { display: false },
      legend: { display: false },
      tooltip: { ...SHARED_TOOLTIP },
    },
    scales: { ...SHARED_SCALES },
  },
  horizontal: {
    indexAxis: 'y' as const,
    maintainAspectRatio: false,
    aspectRatio: 1,
    plugins: {
      datalabels: { display: false },
      legend: { display: false },
      tooltip: { ...SHARED_TOOLTIP },
    },
    scales: { ...SHARED_SCALES },
  },
} as const;

export const LINE_PRESETS = {
  default: {
    maintainAspectRatio: false,
    aspectRatio: 1,
    plugins: {
      datalabels: { display: false },
      legend: { display: false },
      tooltip: { ...SHARED_TOOLTIP },
    },
    scales: { ...SHARED_SCALES },
  },
} as const;

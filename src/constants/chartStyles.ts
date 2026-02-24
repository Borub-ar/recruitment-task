export const CHART_MARGIN_BAR = {
  top: 10,
  right: 30,
  left: 10,
} as const;

export const CHART_MARGIN_PIE = {
  top: 20,
  right: 100,
  bottom: 20,
  left: 0,
} as const;

export const TOOLTIP_STYLE = {
  backgroundColor: 'var(--color-surface)',
  border: '1px solid var(--color-border)',
  borderRadius: '8px',
  padding: '8px 12px',
  boxShadow: '0 4px 12px #000000',
} as const;

export const TOOLTIP_CURSOR = { fill: '#1e3a5f' } as const;

export const BAR_COLOR_PRIMARY = '#7c3aed';

export const ACTIVE_BAR_STYLE = {
  fill: '#8b5cf6',
  stroke: '#a78bfa',
  strokeWidth: 1,
} as const;

export const AXIS_TICK_STYLE = { fill: 'var(--color-text-muted)' } as const;

export const CARTESIAN_GRID_PROPS = {
  strokeDasharray: '5 5',
  stroke: 'var(--color-border)',
} as const;

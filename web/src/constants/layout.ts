// Layout constants and helpers for consistent sizing/spacing math

// Base canvas dimensions (derived from Figma exports)
export const BASE_CANVAS_WIDTH = 1521;
export const BLEED = 16;

// Header heights
export const TOPBAR_HEIGHT = 91;
export const LOWER_TOPBAR_HEIGHT = 34;
export const TOTAL_TOPBAR_HEIGHT = TOPBAR_HEIGHT + LOWER_TOPBAR_HEIGHT;

// Editor insets
export const EDITOR_INSET = 6; // left/right/top offset from container edges

// Uniform scale used for editor widgets to match Figma visual parity
export const WIDGET_SCALE = 0.85;

// Right rail spacing and common element sizes
export const RIGHT_RAIL_MARGIN = 20; // distance from right edge for right-anchored widgets
export const INFO_BUTTON_WIDTH = 28; // Info button visual width

// Common component dimensions (keep here if referenced by siblings)
export const ZOOM_BAR_WIDTH = 315; // visual width of ZoomBar
export const VIEW_BAR_WIDTH = 151; // visual width of ViewBar

// Visual gap compensation for right-anchored transforms under scale
export function compensateRightAnchoredGap(visualGapPx: number, scale: number = WIDGET_SCALE): number {
  return visualGapPx / scale;
}

// Specific tuned adjustments observed in Figma parity tests
export const GAP_INFO_TO_ZOOM_COMP = compensateRightAnchoredGap(10); // ≈ 11.765
export const VIEW_BAR_OVERLAP_ADJUST = 31.285; // fine-tuned overlap to align with ZoomBar end

// Convenience helpers
export function computeLowerShiftX(): number {
  // Lower topbar is shifted right by BLEED plus an additional 16px
  return BLEED + 16;
}



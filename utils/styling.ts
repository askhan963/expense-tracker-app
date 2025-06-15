import { Dimensions, PixelRatio } from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const [shortDimension, longDimension] =
  SCREEN_WIDTH < SCREEN_HEIGHT
    ? [SCREEN_WIDTH, SCREEN_HEIGHT]
    : [SCREEN_HEIGHT, SCREEN_WIDTH];

// Updated baseline for better modern device support
const guidelineBaseWidth = 390; // iPhone 12/13/14 Pro width
const guidelineBaseHeight = 844; // iPhone 12/13/14 Pro height

// Device type detection
export const isTablet = shortDimension >= 768;
export const isSmallDevice = shortDimension < 350;
export const isLargeDevice = shortDimension > 430;

// Enhanced scaling functions with better responsiveness
export const scale = (size: number) => {
  const scaleFactor = shortDimension / guidelineBaseWidth;

  // Apply non-linear scaling for better tablet support
  let adjustedScale = scaleFactor;

  if (isTablet) {
    // Reduce scaling on tablets to prevent oversized elements
    adjustedScale = scaleFactor * 0.85;
  } else if (isSmallDevice) {
    // Slightly increase scaling on very small devices
    adjustedScale = scaleFactor * 1.1;
  }

  return Math.round(PixelRatio.roundToNearestPixel(adjustedScale * size));
};

export const verticalScale = (size: number) => {
  const scaleFactor = longDimension / guidelineBaseHeight;

  // Apply non-linear scaling for better tablet support
  let adjustedScale = scaleFactor;

  if (isTablet) {
    // Reduce vertical scaling on tablets
    adjustedScale = scaleFactor * 0.8;
  } else if (isSmallDevice) {
    // Maintain better proportions on small devices
    adjustedScale = scaleFactor * 1.05;
  }

  return Math.round(PixelRatio.roundToNearestPixel(adjustedScale * size));
};

// Moderate scaling - blend of horizontal and vertical scaling
export const moderateScale = (size: number, factor: number = 0.5) => {
  return size + (scale(size) - size) * factor;
};

// Responsive font sizes with better scaling curve
export const responsiveFontSize = (size: number) => {
  const scaleFactor = shortDimension / guidelineBaseWidth;

  let adjustedSize = size * scaleFactor;

  // Apply scaling limits for better readability
  if (isTablet) {
    // Cap font scaling on tablets
    adjustedSize = Math.min(adjustedSize, size * 1.3);
  } else if (isSmallDevice) {
    // Ensure minimum readable size on small devices
    adjustedSize = Math.max(adjustedSize, size * 0.9);
  }

  return Math.round(PixelRatio.roundToNearestPixel(adjustedSize));
};

// Responsive spacing with device-specific adjustments
export const responsiveSpacing = (size: number) => {
  if (isTablet) {
    return Math.round(size * 1.2); // Increase spacing on tablets
  } else if (isSmallDevice) {
    return Math.round(size * 0.85); // Reduce spacing on small devices
  }
  return scale(size);
};

// Responsive border radius
export const responsiveBorderRadius = (radius: number) => {
  return Math.min(scale(radius), radius * 1.5); // Cap maximum border radius
};

// Screen dimension utilities
export const screenWidth = SCREEN_WIDTH;
export const screenHeight = SCREEN_HEIGHT;
export const screenRatio = screenHeight / screenWidth;

// Responsive breakpoints
export const breakpoints = {
  xs: 320, // Small phones
  sm: 375, // Regular phones
  md: 414, // Large phones
  lg: 768, // Small tablets
  xl: 1024, // Large tablets
};

// Helper function to get responsive value based on screen size
export const getResponsiveValue = (values: {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}) => {
  const width = shortDimension;

  if (width >= breakpoints.xl && values.xl !== undefined) return values.xl;
  if (width >= breakpoints.lg && values.lg !== undefined) return values.lg;
  if (width >= breakpoints.md && values.md !== undefined) return values.md;
  if (width >= breakpoints.sm && values.sm !== undefined) return values.sm;
  if (values.xs !== undefined) return values.xs;

  // Fallback to smallest defined value
  return values.xs || values.sm || values.md || values.lg || values.xl || 0;
};

// Quick responsive helpers
export const wp = (percentage: number) => {
  return (percentage * screenWidth) / 100;
};

export const hp = (percentage: number) => {
  return (percentage * screenHeight) / 100;
};

export default {
  scale,
  verticalScale,
  moderateScale,
  responsiveFontSize,
  responsiveSpacing,
  responsiveBorderRadius,
  getResponsiveValue,
  wp,
  hp,
  screenWidth,
  screenHeight,
  isTablet,
  isSmallDevice,
  isLargeDevice,
  breakpoints,
};

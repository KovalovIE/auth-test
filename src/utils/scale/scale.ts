import { Dimensions, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window');
const fontScale = PixelRatio.getFontScale();

const IDEAL = {
    phone: { w: 375, h: 812 },
};

function scaleHoriz(n: number, base: number): number {
    return (n / base) * width;
}
function scaleVert(n: number, base: number): number {
    return (n / base) * height;
}

export const scaleHorizontal = (n: number) => scaleHoriz(n, IDEAL.phone.w);
export const scaleVertical = (n: number) => scaleVert(n, IDEAL.phone.h);
export const scaleFont = (n: number) => ((n / IDEAL.phone.w) * width) / fontScale;

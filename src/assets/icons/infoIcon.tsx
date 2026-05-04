import Svg, { Path } from 'react-native-svg';

type Props = {
    width?: number;
    height?: number;
    color?: string;
};

export const InfoIcon = ({ width, height, color }: Props) => (
    <Svg width={width || 20} height={height || 20} fill="none" viewBox="0 0 20 20">
        <Path
            stroke={color || '#fff'}
            strokeLinejoin="round"
            strokeWidth="1.96"
            d="M9.8 18.62c2.435 0 4.64-.987 6.237-2.583A8.8 8.8 0 0 0 18.62 9.8c0-2.436-.987-4.64-2.583-6.237A8.8 8.8 0 0 0 9.8.98c-2.436 0-4.64.987-6.237 2.583A8.8 8.8 0 0 0 .98 9.8c0 2.436.987 4.64 2.583 6.237A8.8 8.8 0 0 0 9.8 18.62Z"
        />
        <Path
            fill={color || '#fff'}
            stroke={color || '#fff'}
            strokeWidth="0.45"
            d="M9.8 13.025a.776.776 0 1 1 0 1.551.776.776 0 0 1 0-1.551Z"
        />
        <Path
            stroke={color || '#fff'}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9.8 5.8v5"
        />
    </Svg>
);

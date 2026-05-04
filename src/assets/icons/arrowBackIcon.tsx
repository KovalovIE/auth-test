import Svg, { Path } from 'react-native-svg';

type Props = {
    width?: number;
    height?: number;
    color?: string;
};

export const ArrowBackIcon = ({ width, height, color }: Props) => (
    <Svg width={width || '24'} height={height || '24'} fill="none" viewBox="0 0 24 24">
        <Path
            stroke={color || '#16191A'}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.4"
            d="M16.356 20.712 7.644 12l8.712-8.712"
        />
    </Svg>
);

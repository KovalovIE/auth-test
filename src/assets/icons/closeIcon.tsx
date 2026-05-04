import Svg, { Path } from 'react-native-svg';

type Props = {
    width?: number;
    height?: number;
    color?: string;
};

export const CloseIcon = ({ width, height, color }: Props) => (
    <Svg width={width || 9} height={height || 9} fill="none" viewBox="0 0 9 9">
        <Path
            fill={color || '#fff'}
            fillRule="evenodd"
            d="M.232.232c.309-.31.81-.31 1.12 0l6.566 6.566a.792.792 0 1 1-1.12 1.12L.232 1.35a.79.79 0 0 1 0-1.12"
            clipRule="evenodd"
        />
        <Path
            fill={color || '#fff'}
            fillRule="evenodd"
            d="M7.918.232c.309.309.309.81 0 1.12L1.35 7.917a.792.792 0 1 1-1.12-1.12L6.799.232c.31-.31.81-.31 1.12 0"
            clipRule="evenodd"
        />
    </Svg>
);

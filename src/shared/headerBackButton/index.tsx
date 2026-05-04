import { memo } from 'react';
import { Pressable } from 'react-native';
import { ArrowBackIcon } from '../../assets/icons/arrowBackIcon';
import { scaleHorizontal } from '../../utils/scale';

type Props = {
    onPress: () => void;
};

export const BackButton = memo(({ onPress }: Props) => {
    return (
        <Pressable onPress={onPress}>
            <ArrowBackIcon width={scaleHorizontal(24)} height={scaleHorizontal(24)} />
        </Pressable>
    );
});

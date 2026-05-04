import { StyleSheet } from 'react-native';
import { scaleFont, scaleVertical } from '../../utils/scale';
import { colors } from '../theme';

export const styles = StyleSheet.create({
    buttonContainer: {
        width: '100%',
    },
    shadowEffects: {
        shadowColor: colors.primary,
        shadowOffset: {
            width: 0,
            height: scaleVertical(2),
        },
        shadowOpacity: 0.4,
        shadowRadius: scaleVertical(4),
        elevation: 4,
    },
    gradientContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: scaleVertical(80),
        height: scaleVertical(40),
    },
    text: {
        fontSize: scaleFont(16),
        lineHeight: scaleFont(22),
        color: colors.white,
        fontWeight: '500',
        fontFamily: 'NotoSans-Medium',
    },
});

import { StyleSheet } from 'react-native';
import { scaleFont, scaleHorizontal, scaleVertical } from '../../utils/scale';
import { colors } from '../theme';

export const getStyles = (isError: boolean) => {
    return StyleSheet.create({
        container: {
            width: '100%',
        },
        inputContainer: {
            width: '100%',
            height: scaleVertical(53),
            borderWidth: 1,
            borderRadius: scaleVertical(8),
            borderColor: isError ? colors.error : colors.border,
            backgroundColor: colors.white,
            marginBottom: scaleVertical(16),
            overflow: 'hidden',
        },
        containerFocused: {
            borderColor: colors.primary,
        },
        containerError: {
            borderColor: colors.error,
        },
        input: {
            flex: 1,
            height: '100%',
            paddingHorizontal: scaleHorizontal(16),
            paddingVertical: 0,
            color: colors.textDark,
            fontFamily: 'NotoSans-Regular',
            fontSize: scaleFont(16),
            fontWeight: '400',
        },
        inputWithLabel: {
            paddingTop: scaleVertical(17),
            paddingRight: scaleHorizontal(44),
            fontSize: scaleFont(12),
            fontWeight: '500',
            fontFamily: 'NotoSans-Medium',
        },
        label: {
            position: 'absolute',
            top: scaleVertical(6),
            left: scaleHorizontal(16),
            zIndex: 1,
            fontFamily: 'NotoSans-Regular',
            fontSize: scaleFont(12),
            lineHeight: scaleFont(17),
            fontWeight: '400',
        },
        closeButton: {
            position: 'absolute',
            right: scaleHorizontal(14),
            top: scaleVertical(16),
            width: scaleHorizontal(16.67),
            height: scaleHorizontal(16.67),
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.iconMuted,
            borderRadius: scaleHorizontal(10),
        },
        errorText: {
            fontFamily: 'NotoSans-Regular',
            fontSize: scaleFont(12),
            lineHeight: scaleFont(17),
            fontWeight: '400',
            color: colors.error,
            marginTop: scaleVertical(-12),
            marginBottom: scaleVertical(8),
        },
        hitSlop: {
            bottom: scaleHorizontal(10),
            left: scaleHorizontal(10),
            right: scaleHorizontal(10),
            top: scaleHorizontal(10),
        },
    });
};

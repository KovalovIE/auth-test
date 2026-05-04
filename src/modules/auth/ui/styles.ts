import { StyleSheet } from 'react-native';
import { scaleFont, scaleHorizontal, scaleVertical } from '../../../utils/scale';
import { colors } from '../../../shared/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.screenBackground,
    },
    keyboardAvoidingView: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
        paddingHorizontal: scaleHorizontal(12),
    },
    content: {
        flexGrow: 1,
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
    },
    errorContainer: {
        width: '100%',
        height: scaleVertical(53),
        flexDirection: 'row',
        backgroundColor: colors.error,
        padding: scaleVertical(12),
        marginBottom: scaleVertical(16),
        borderRadius: scaleVertical(8),
        alignItems: 'center',
    },
    errorText: {
        color: colors.white,
        fontSize: scaleFont(12),
        fontFamily: 'NotoSans-Regular',
        lineHeight: scaleFont(16),
        marginLeft: scaleHorizontal(6),
    },
});

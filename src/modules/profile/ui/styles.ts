import { StyleSheet } from 'react-native';
import { scaleFont, scaleHorizontal, scaleVertical } from '../../../utils/scale';
import { colors } from '../../../shared/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.screenBackground,
        marginHorizontal: scaleHorizontal(16),
    },
    header: {
        width: '100%',
        marginBottom: scaleVertical(20),
        alignItems: 'center',
        justifyContent: 'center',
        height: scaleVertical(64),
    },
    backButton: {
        position: 'absolute',
        left: 0,
        width: scaleHorizontal(24),
        height: scaleHorizontal(24),
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: scaleFont(18),
        lineHeight: scaleVertical(25),
        fontWeight: '600',
        fontFamily: 'NotoSans-SemiBold',
        color: colors.black,
        marginLeft: scaleHorizontal(12),
    },
});

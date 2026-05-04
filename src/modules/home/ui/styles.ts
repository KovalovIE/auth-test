import { StyleSheet } from 'react-native';
import { scaleHorizontal } from '../../../utils/scale';
import { colors } from '../../../shared/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: scaleHorizontal(12),
        backgroundColor: colors.screenBackground,
    },
});

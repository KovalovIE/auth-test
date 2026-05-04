import { StyleSheet } from 'react-native';
import { scaleFont } from '../../../utils/scale';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: scaleFont(24),
    },
});

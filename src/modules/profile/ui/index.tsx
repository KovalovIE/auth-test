import { Text, View } from 'react-native';
import { styles } from './styles';
import { CustomButton } from '../../../shared/customButton';
import { useProfile } from '../hooks/useProfile';
import { colors } from '../../../shared/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackButton } from '../../../shared/headerBackButton';

export const ProfileScreen = () => {
    const { onPressLogout, title } = useProfile();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.backButton}>
                    <BackButton onPress={onPressLogout} />
                </View>
                <Text style={styles.title}>{title}</Text>
            </View>
            <CustomButton
                title="Logout"
                onPress={onPressLogout}
                gradientColors={[colors.white, colors.white]}
                textColor={colors.textDark}
                isShadowEffects={false}
            />
        </SafeAreaView>
    );
};

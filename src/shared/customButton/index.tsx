import { memo } from 'react';
import { ActivityIndicator, Pressable, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './styles';
import { colors } from '../theme';

type Props = {
    title: string;
    onPress: () => void;
    disabled?: boolean;
    inProgress?: boolean;
    gradientColors?: string[];
    textColor?: string;
    isShadowEffects?: boolean;
};

export const CustomButton = memo(
    ({
        title,
        onPress,
        disabled,
        inProgress,
        gradientColors = [colors.primaryLight, colors.primary],
        textColor = colors.white,
        isShadowEffects = true,
    }: Props) => {
        const buttonContainerStyle = [
            styles.buttonContainer,
            isShadowEffects && styles.shadowEffects,
            { opacity: disabled ? 0.32 : 1 },
        ];

        return (
            <Pressable onPress={onPress} style={buttonContainerStyle} disabled={disabled}>
                <LinearGradient
                    colors={gradientColors}
                    start={{ x: 1, y: 0.41 }}
                    end={{ x: 0, y: 0.59 }}
                    locations={[0.0757, 0.9243]}
                    style={styles.gradientContainer}
                >
                    {inProgress ? (
                        <View>
                            <ActivityIndicator size="small" color={textColor} />
                        </View>
                    ) : (
                        <Text style={[styles.text, { color: textColor }]}>{title}</Text>
                    )}
                </LinearGradient>
            </Pressable>
        );
    },
);

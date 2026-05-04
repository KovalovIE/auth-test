import { KeyboardAvoidingView, Platform, ScrollView, Text, View } from 'react-native';
import { useAuth } from '../hooks/useAuth';
import { styles } from './styles';
import { CustomButton } from '../../../shared/customButton';
import { CustomInput } from '../../../shared/customInput';
import { SafeAreaView } from 'react-native-safe-area-context';
import { InfoIcon } from '../../../assets/icons/infoIcon';
import { scaleHorizontal } from '../../../utils/scale';

export const AuthScreen = () => {
    const {
        username,
        password,
        onChangeText,
        onPressLogin,
        isLoading,
        isError,
        isButtonDisabled,
        validationErrors,
        onFocusField,
        onBlurField,
    } = useAuth();

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={styles.keyboardAvoidingView}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            >
                <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">
                    <View style={styles.content}>
                        <CustomInput
                            value={username}
                            onChangeText={onChangeText}
                            inputName="username"
                            errorText={validationErrors.username || ''}
                            placeholder="Username"
                            onFocus={onFocusField}
                            onBlur={onBlurField}
                        />
                        <CustomInput
                            value={password}
                            onChangeText={onChangeText}
                            inputName="password"
                            errorText={validationErrors.password || ''}
                            placeholder="Password"
                            secureTextEntry={true}
                            onFocus={onFocusField}
                            onBlur={onBlurField}
                        />
                        {isError && (
                            <View style={styles.errorContainer}>
                                <InfoIcon width={scaleHorizontal(18)} height={scaleHorizontal(18)} />
                                <Text style={styles.errorText}>{isError ? 'User email doesn’t exist.' : ''}</Text>
                            </View>
                        )}
                        <CustomButton
                            title="Login"
                            onPress={onPressLogin}
                            disabled={isButtonDisabled}
                            inProgress={isLoading}
                        />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

import React, { useState, memo, useMemo } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { getStyles } from './styles';
import { colors } from '../theme';
import { AuthField } from '../../modules/auth/types';
import { CloseIcon } from '../../assets/icons/closeIcon';
import { scaleHorizontal } from '../../utils/scale';

type Props = {
    value: string;
    onChangeText: (inputName: AuthField, text: string) => void;
    placeholder: string;
    inputName: AuthField;
    onFocus: (inputName: AuthField) => void;
    onBlur: (inputName: AuthField) => void;
    errorText: string;
    secureTextEntry?: boolean;
};

export const CustomInput = memo(
    ({ value, placeholder, onChangeText, inputName, onFocus, onBlur, errorText, secureTextEntry }: Props) => {
        const [isFocused, setIsFocused] = useState(false);
        const isError = Boolean(errorText);
        const styles = useMemo(() => getStyles(isError), [isError]);
        const focusedStyle = isFocused ? styles.containerFocused : null;
        const errorStyle = isError ? styles.containerError : null;
        const isLabelVisible = isFocused || Boolean(value);
        const activeColor = isError ? colors.error : colors.primary;

        const onHandleFocus = () => {
            setIsFocused(true);
            onFocus(inputName);
        };

        const onHandleBlur = () => {
            setIsFocused(false);
            onBlur(inputName);
        };

        const onChangeInputText = (text: string) => {
            onChangeText(inputName, text);
        };

        const clearInput = () => {
            onChangeText(inputName, '');
        };

        return (
            <View style={styles.container}>
                <View style={[styles.inputContainer, focusedStyle, errorStyle]}>
                    {isLabelVisible ? (
                        <Text style={[styles.label, { color: activeColor }]}>{placeholder}</Text>
                    ) : null}
                    <TextInput
                        style={[styles.input, isLabelVisible && styles.inputWithLabel]}
                        value={value}
                        onChangeText={onChangeInputText}
                        placeholder={isLabelVisible ? undefined : placeholder}
                        placeholderTextColor={isError ? colors.error : colors.textPlaceholder}
                        autoCapitalize={'none'}
                        onFocus={onHandleFocus}
                        onBlur={onHandleBlur}
                        selectionColor={activeColor}
                        secureTextEntry={secureTextEntry}
                    />
                    {value ? (
                        <Pressable onPress={clearInput} style={styles.closeButton} hitSlop={styles.hitSlop}>
                            <CloseIcon width={scaleHorizontal(8.15)} height={scaleHorizontal(8.15)} />
                        </Pressable>
                    ) : null}
                </View>
                {errorText ? <Text style={styles.errorText}>{errorText}</Text> : null}
            </View>
        );
    },
);

import React from 'react';
import { TextInput, TextInputProps, View } from 'react-native';
import styles from './styles';
import { Text } from '../Text';
import colors from '../../theme/color';

interface TextFieldProps {
  label?: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  inputProps?: TextInputProps;
}

const TextField: React.FC<TextFieldProps> = ({
  label = '',
  value,
  onChangeText,
  placeholder,
  inputProps,
}) => {
  return (
    <View style={styles.textFieldContainer}>
      {label && (
        <Text variant="bodyCompact" weight="semiBold" color={colors.grey100}>
          {label}
        </Text>
      )}
      <TextInput
        style={styles.textInput}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.grey54}
        multiline={true}
        numberOfLines={5}
        {...inputProps}
      />
    </View>
  );
};

export default TextField;

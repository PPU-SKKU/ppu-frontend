import React from 'react';
import { Modal, Pressable, View, ViewStyle } from 'react-native';
import { Text } from '../Text';
import colors from '../../theme/color';
import styles from './styles';

interface BasicModalProps {
  visible: boolean;
  title?: string;
  description?: string;
  children?: React.ReactNode;
  onClose: () => void;
  onConfirm?: () => void;
  buttonType?: 'single' | 'double'; // ✅ 버튼 타입 추가
  confirmText?: string;
  cancelText?: string;
  confirmBackgroundColor?: string;
  confirmTextColor?: string;
  cancelBackgroundColor?: string;
  cancelTextColor?: string;
  contentContainerStyle?: ViewStyle;
}

const BasicModal: React.FC<BasicModalProps> = ({
  visible,
  title,
  description,
  onClose,
  onConfirm,
  buttonType = 'double', // 기본값 double
  confirmText = '확인',
  cancelText = '취소',
  contentContainerStyle,
  confirmBackgroundColor = '#242424',
  confirmTextColor = '#FFFFFF',
  cancelBackgroundColor = 'rgba(36, 36, 36, 0.12)',
  cancelTextColor = '#242424',
  children,
}) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      {/* 배경 */}
      <Pressable style={styles.backgroundContainer} onPress={onClose}>
        {/* 모달 컨텐츠 */}
        <Pressable
          style={[styles.contentContainer, contentContainerStyle]}
          onPress={e => e.stopPropagation()}
        >
          {/* 제목 */}
          {title && (
            <Text variant="subtitle1" weight="bold" color={colors.grey100}>
              {title}
            </Text>
          )}

          {/* 설명 */}
          {description && (
            <Text style={styles.descriptionText} color={colors.grey100}>
              {description}
            </Text>
          )}

          {/* 커스텀 UI */}
          {children}

          {/* 버튼 영역 */}
          <View style={styles.buttonContainer}>
            {buttonType === 'double' ? (
              <>
                {/* 취소 버튼 */}
                <Pressable
                  style={[
                    styles.button,
                    { backgroundColor: cancelBackgroundColor },
                  ]}
                  onPress={onClose}
                >
                  <Text variant="body" weight="bold" color={cancelTextColor}>
                    {cancelText}
                  </Text>
                </Pressable>

                {/* 확인 버튼 */}
                {onConfirm && (
                  <Pressable
                    style={[
                      styles.button,
                      { backgroundColor: confirmBackgroundColor },
                    ]}
                    onPress={() => {
                      onConfirm();
                      onClose();
                    }}
                  >
                    <Text variant="body" weight="bold" color={confirmTextColor}>
                      {confirmText}
                    </Text>
                  </Pressable>
                )}
              </>
            ) : (
              // single 타입일 때 확인 버튼만 노출
              onConfirm && (
                <Pressable
                  style={[
                    styles.button,
                    { backgroundColor: confirmBackgroundColor, flex: 1 },
                  ]}
                  onPress={() => {
                    onConfirm();
                    onClose();
                  }}
                >
                  <Text variant="body" weight="bold" color={confirmTextColor}>
                    {confirmText}
                  </Text>
                </Pressable>
              )
            )}
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default BasicModal;

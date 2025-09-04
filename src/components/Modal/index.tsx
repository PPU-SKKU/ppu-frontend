import React from 'react';
import { Modal, Pressable, View, ViewStyle } from 'react-native';
import { Text } from '../Text';
import colors from '../../theme/color';
import styles from './styles';

interface BasicModalProps {
  visible: boolean; // 모달 열림 여부
  title?: string; // 제목
  description?: string; // 설명
  onClose: () => void; // 닫기 함수
  onConfirm?: () => void; // 확인 함수 (옵션)
  confirmText?: string; // 확인 버튼 텍스트
  cancelText?: string; // 취소 버튼 텍스트
  contentContainerStyle?: ViewStyle; // 내용 컨테이너 스타일 오버라이드
  backgroundColor?: string; // 버튼 배경 색상 (옵션)
  children?: React.ReactNode; // 커스텀 UI
}

const BasicModal: React.FC<BasicModalProps> = ({
  visible,
  title,
  description,
  onClose,
  onConfirm,
  confirmText = '확인',
  cancelText = '취소',
  contentContainerStyle,
  backgroundColor = '242424',
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
          onPress={e => e.stopPropagation()} // 배경 터치 이벤트 차단
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
            {/* 취소 버튼 */}
            <Pressable style={styles.cancelButton} onPress={onClose}>
              <Text variant="body" weight="bold" color={colors.grey100}>
                {cancelText}
              </Text>
            </Pressable>

            {/* 확인 버튼 */}
            {onConfirm && (
              <Pressable
                style={styles.confirmButton}
                onPress={() => {
                  onConfirm();
                  onClose();
                }}
              >
                <Text variant="body" weight="bold" color={colors.white}>
                  {confirmText}
                </Text>
              </Pressable>
            )}
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default BasicModal;

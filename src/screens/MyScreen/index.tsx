import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';
import BasicModal from '../../components/Modal';
import colors from '../../theme/color';

const MyScreen: React.FC = () => {
  const [visible, setVisible] = useState(true);
  return (
    <View style={styles.container}>
      {/*<Text>마이페이지 화면</Text>*/}
      <BasicModal
        visible={visible}
        title="작성 취소"
        description="작성 중인 내용이 모두 사라져요!"
        onClose={() => setVisible(false)}
        onConfirm={() => console.log('확인 버튼 눌림')}
        confirmText="취소"
        cancelText="나가기"
        backgroundColor={colors.grey100}
      >
        {/* 모달 안에 커스텀 UI 넣기 가능 */}
        {/* <View>
          <Text></Text>
        </View>*/}
      </BasicModal>
      <Pressable onPress={() => setVisible(true)}>
        <Text>모달 열기</Text>
      </Pressable>
    </View>
  );
};

export default MyScreen;

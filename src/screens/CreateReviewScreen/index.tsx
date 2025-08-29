import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import CustomStackHeader from '../../components/CustomStackHeader';
import colors from '../../theme/color';
import styles from './styles';
import { View } from 'react-native';
import TextField from '../../components/TextField';
import { useState } from 'react';
import { Text } from '../../components/Text';
import DefaultPerfumeLimeGreen from '../../assets/svgs/default_perfume_limegreen.svg';
import Divider from '../../components/Divider';
import Segment from './components/\bSegment';
import StateTag from './components/StateTag';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesome6Icon from 'react-native-vector-icons/FontAwesome6';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const CreateReviewScreen: React.FC = () => {
  const [memo, setMemo] = useState('');
  const [isOwned, setIsOwned] = useState(false);
  const [isWishListed, setIsWishListed] = useState(true);
  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <CustomStackHeader
        gradientStartColor={colors.limeGreenLight}
        title="시향기 작성"
        disabled={false}
        onPress={() => {
          console.log('시향기 작성 완료!');
        }}
      />
      <ScrollView
        contentContainerStyle={styles.bodyContainer}
        showsVerticalScrollIndicator={false}
      >
        <ImageBackground
          source={require('../../assets/svgs/default_perfume_limegreen.png')}
          style={styles.imageBackgroundContainer}
          resizeMode="cover"
        ></ImageBackground>
        <View style={styles.perfumeProfileContainer}>
          <View style={styles.perfumeDetailContainer}>
            <View style={styles.perfumeInfoSection}>
              <Text variant="title2" weight="semiBold" color={colors.grey100}>
                오 드 빠르펭
              </Text>
              <Text variant="caption1" weight="medium" color={colors.grey54}>
                샤넬
              </Text>
            </View>
            <View style={styles.perfumeStatusTagSection}>
              <StateTag
                icon={
                  isOwned ? (
                    <EntypoIcon
                      name="check"
                      size={10}
                      color={colors.grey100}
                    ></EntypoIcon>
                  ) : (
                    <FontAwesome6Icon name="xmark"></FontAwesome6Icon>
                  )
                }
                label={isOwned ? '보유중' : '미보유'}
              ></StateTag>
              <StateTag
                icon={
                  isWishListed ? (
                    <FontAwesomeIcon
                      name="bookmark"
                      size={10}
                      color={colors.grey100}
                    ></FontAwesomeIcon>
                  ) : (
                    <FontAwesomeIcon name="bookmark-o"></FontAwesomeIcon>
                  )
                }
                label={isWishListed ? '등록됨' : '등록안됨'}
              ></StateTag>
            </View>
          </View>
          <Divider></Divider>
          <View style={styles.perfumePreferenceContainer}>
            <Text variant="title1" weight="bold">
              호불호를 선택해주세요
            </Text>
            <View style={styles.segmentedControlsContainer}>
              <Segment label={'호'} isSelected={true}></Segment>
              <Segment label={'불호'} isSelected={false}></Segment>
            </View>
          </View>
        </View>
        <TextField
          label="나의 향기 기록"
          value={memo}
          onChangeText={text => {
            setMemo(text);
          }}
          placeholder="나만의 향기 기록을 작성해주세요"
        ></TextField>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateReviewScreen;

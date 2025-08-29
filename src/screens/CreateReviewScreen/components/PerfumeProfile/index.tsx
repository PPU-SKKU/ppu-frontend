import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';
import styles from './styles';
import { Text } from '../../../../components/Text';
import StateTag from '../StateTag';
import DefaultPerfumeLimeGreen from '../../../../assets/svgs/default_perfume_limegreen.svg';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesome6Icon from 'react-native-vector-icons/FontAwesome6';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import colors from '../../../../theme/color';
import Divider from '../../../../components/Divider';
import Segment from '../\bSegment';

interface PerfumeProfileProps {
  isOwned: boolean;
  isWishListed: boolean;
}

const PerfumeProfile: React.FC<PerfumeProfileProps> = ({
  isOwned,
  isWishListed,
}) => {
  return (
    <View style={styles.perfumeProfileContainer}>
      {/*<ImageBackground
        source={require('../../../../assets/svgs/default_perfume_limegreen.png')}
        style={styles.perfumeImageContainer}
        resizeMode="cover"
      ></ImageBackground>*/}
      <View style={styles.perfumeImageContainer}>
        <DefaultPerfumeLimeGreen
          width="100%"
          height="100%"
        ></DefaultPerfumeLimeGreen>
      </View>
      <View style={styles.perfumeOverViewContainer}>
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
    </View>
  );
};

export default PerfumeProfile;

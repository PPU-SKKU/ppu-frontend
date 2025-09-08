import React, { useState } from 'react';
import {
  Image,
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
import { Perfume } from '../../../../types/perfume';
import EmptyRatingIcon from '../../../../assets/svgs/empty_rating_icon.svg';
import FilledRatingIcon from '../../../../assets/svgs/filled_rating_icon.svg';

interface PerfumeProfileProps {
  perfume: Perfume;
  isOwned: boolean;
  isWished: boolean;
  preferenceOptions: { value: string; isSelected: boolean }[];
  setPreferenceOptions: React.Dispatch<
    React.SetStateAction<{ value: string; isSelected: boolean }[]>
  >;
}

const PerfumeProfile: React.FC<PerfumeProfileProps> = ({
  perfume,
  isOwned,
  isWished,
  preferenceOptions,
  setPreferenceOptions,
}) => {
  const [isRatingVisible, setIsRatingVisible] = useState(true);
  const handleSelectPreference = (value: string) => {
    setPreferenceOptions(prevOptions =>
      prevOptions.map(
        option =>
          option.value === value
            ? { ...option, isSelected: true } // 클릭된 것만 true
            : { ...option, isSelected: false }, // 나머지는 false
      ),
    );
    setIsRatingVisible(value === '호');
  };
  return (
    <View style={styles.perfumeProfileContainer}>
      {/*<ImageBackground
        source={require('../../../../assets/svgs/default_perfume_limegreen.png')}
        style={styles.perfumeImageContainer}
        resizeMode="cover"
      ></ImageBackground>*/}
      {perfume.image ? (
        <View style={styles.perfumeImageContainer}>
          <Image
            source={{ uri: perfume.image }}
            style={styles.perfumeImage}
            resizeMode="cover"
          ></Image>
        </View>
      ) : (
        <View style={styles.perfumeImageContainer}>
          <DefaultPerfumeLimeGreen
            width="100%"
            height="100%"
          ></DefaultPerfumeLimeGreen>
        </View>
      )}

      <View style={styles.perfumeOverViewContainer}>
        <View style={styles.perfumeDetailContainer}>
          <View style={styles.perfumeInfoSection}>
            <Text variant="title2" weight="semiBold" color={colors.grey100}>
              {perfume.koreanName}
            </Text>
            <Text variant="caption1" weight="medium" color={colors.grey54}>
              {perfume.brandKoreanName}
            </Text>
          </View>
          <View style={styles.perfumeStatusTagSection}>
            {isOwned && (
              <StateTag
                icon={
                  <EntypoIcon
                    name="check"
                    size={10}
                    color={colors.grey100}
                  ></EntypoIcon>
                }
                label={'HAVE'}
              ></StateTag>
            )}
            <StateTag
              icon={
                <FontAwesomeIcon
                  name="bookmark"
                  size={10}
                  color={colors.grey100}
                ></FontAwesomeIcon>
              }
              label={'WISH'}
            ></StateTag>
          </View>
        </View>
        <Divider></Divider>
        <View style={styles.perfumePreferenceContainer}>
          <Text variant="title1" weight="bold">
            호불호를 선택해주세요
          </Text>
          <View style={styles.segmentedControlsContainer}>
            {preferenceOptions.map(option => (
              <Segment
                key={option.value}
                label={option.value}
                isSelected={option.isSelected}
                onPress={() => handleSelectPreference(option.value)}
              />
            ))}
          </View>
          {isRatingVisible && (
            <View style={styles.ratingContainer}>
              <View style={styles.ratingIconContainer}>
                <FilledRatingIcon width={60} height={60}></FilledRatingIcon>
                <FilledRatingIcon width={60} height={60}></FilledRatingIcon>
                <EmptyRatingIcon width={60} height={60}></EmptyRatingIcon>
                <EmptyRatingIcon width={60} height={60}></EmptyRatingIcon>
                <EmptyRatingIcon width={60} height={60}></EmptyRatingIcon>
              </View>
              <Text variant="caption1" weight="regular">
                아래의 기준으로 향수의 평점을 매겨주세요!
              </Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default PerfumeProfile;

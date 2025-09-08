import React from 'react';
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

interface PerfumeProfileProps {
  perfume: Perfume;
  isOwned: boolean;
  isWished: boolean;
}

const PerfumeProfile: React.FC<PerfumeProfileProps> = ({
  perfume,
  isOwned,
  isWished,
}) => {
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
      </View>
    </View>
  );
};

export default PerfumeProfile;

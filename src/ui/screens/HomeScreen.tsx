import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View, TouchableOpacity} from 'react-native';
import {RootStackParamList, Screens} from '../../navigation/Routes';
import {StackNavigationProp} from '@react-navigation/stack';
import styles from '../styles/Title';
import {useNavigation} from '@react-navigation/native';

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  Screens.HomeScreen
>;

const HomeScreen = () => {
  const {t} = useTranslation();
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{t('homeTitle')}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.push(Screens.GameScreen);
        }}>
        <Text style={styles.buttonText}>{t('play')}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

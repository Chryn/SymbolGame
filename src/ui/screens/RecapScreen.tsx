import React from 'react';
import {useTranslation} from 'react-i18next';
import {Text, View, TouchableOpacity} from 'react-native';
import {RootStackParamList, Screens} from '../../navigation/Routes';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import styles from '../styles/Title';
import {useNavigation, useRoute, CommonActions} from '@react-navigation/native';

type RecapScreenRouteProp = RouteProp<RootStackParamList, Screens.RecapScreen>;

type RecapScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  Screens.RecapScreen
>;

const ReportScreen = () => {
  const {t} = useTranslation();
  const navigation = useNavigation<RecapScreenNavigationProp>();
  const route = useRoute<RecapScreenRouteProp>();
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>
        {t('score_recap', {score: route.params.score.toString()})}
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [
                {name: Screens.HomeScreen},
                {
                  name: Screens.GameScreen,
                },
              ],
            }),
          );
        }}>
        <Text style={styles.buttonText}>{t('play_again')}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ReportScreen;

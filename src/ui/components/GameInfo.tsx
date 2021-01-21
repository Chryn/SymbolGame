import React from 'react';
import {Text, View, Image} from 'react-native';
import {useTranslation} from 'react-i18next';
import styles from './GameInfoStyle';
const heartImage = require('../../assets/heart.png');

interface GameInfoListProps {
  score: number;
  timeLeft: number;
  lives: number;
}

export default (props: GameInfoListProps) => {
  const {score, timeLeft, lives} = props;
  const {t} = useTranslation();

  return (
    <View style={styles.textContainer}>
      <Text style={styles.score}>
        {score} {t('score')}
      </Text>
      <Text style={styles.time}>{timeLeft}</Text>
      <View style={styles.heartContainer}>
        {[...Array(lives)].map((e, i) => (
          <Image style={styles.heartImage} key={i} source={heartImage} />
        ))}
      </View>
    </View>
  );
};

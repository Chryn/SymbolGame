import React, {useState, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {View, Alert} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList, Screens} from '../../navigation/Routes';
import {useNavigation, CommonActions} from '@react-navigation/native';
import {shuffle} from '../../common/utils';
import GameRound from '../components/GameRound';
import GameInfo from '../components/GameInfo';
import styles from '../styles/GameScreenStyle';
const Storedimages = require('../../services/game');

type GameScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  Screens.GameScreen
>;

const GameScreen = () => {
  const navigation = useNavigation<GameScreenNavigationProp>();
  const {t} = useTranslation();
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [timeLeft, setTimeLeft] = useState(60);
  const [images] = useState<IImage[]>(Storedimages.images);
  const [imagestoDisplay, setImagestoDisplay] = useState<IDisplayImage[]>([]);
  const imagesPerCharacteristic: IimagesPerCharacteristic = {
    backgroundPlain: 3,
    backgroundBlank: 3,
    typeFlower: 3,
    typeLeaf: 3,
    circled: 3,
    notcircled: 3,
  };

  useEffect(() => {
    initRound();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(
    () =>
      navigation.addListener('beforeRemove', (e) => {
        const action = e.data.action;
        if (timeLeft <= 0 || lives <= 1) {
          return;
        }

        e.preventDefault();

        Alert.alert(t('cancel_game_title'), t('cancel_game_body'), [
          {text: t('cancel'), style: 'cancel', onPress: () => {}},
          {
            text: t('quit'),
            style: 'destructive',
            onPress: () => navigation.dispatch(action),
          },
        ]);
      }),
    [navigation, timeLeft, lives, t],
  );

  useEffect(() => {
    if (timeLeft <= 0) {
      goToRecap();
    }
    const secondsLeft = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearInterval(secondsLeft);
  });

  const goToRecap = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [
          {name: Screens.HomeScreen},
          {
            name: Screens.RecapScreen,
            params: {score: score},
          },
        ],
      }),
    );
  };

  const initRound = () => {
    const excludedImages: number[] = [];
    const commonCarac: string = CommonRand(imagesPerCharacteristic);
    const displayImages: IDisplayImage[] = [];

    for (let i = 0; i < 3; i++) {
      chooseImage(commonCarac, excludedImages, displayImages);
    }
    chooseIntruder(displayImages);
    shuffle(displayImages);
    setImagestoDisplay(displayImages);
  };

  const finishRound = (isIntruder: boolean) => {
    if (isIntruder) {
      setScore(score + 1);
    } else {
      setLives(lives - 1);
      if (lives <= 1) {
        goToRecap();
      } else {
        setImagestoDisplay([]);
      }
    }
    initRound();
  };

  const CommonRand = (NewDictionary: IimagesPerCharacteristic) => {
    const keys = Object.keys(NewDictionary);
    let i = keys.length;
    const j = Math.floor(Math.random() * i);
    return keys[j];
  };

  const chooseIntruder = (displayImages: IDisplayImage[]) => {
    const intruder = images.find((obj) => {
      let bool: boolean = true;
      Object.keys(obj.caracteristic).forEach((key) => {
        if (
          imagesPerCharacteristic[
            key.toString() as keyof IimagesPerCharacteristic
          ] > 1 &&
          !obj.caracteristic[key.toString() as keyof ICaracCount]
        ) {
          bool = false;
        }
      });
      return bool;
    });
    if (intruder) {
      displayImages.push({name: intruder.name, isIntruder: true});
    }
  };

  const chooseImage = (
    commonCarac: string,
    excludedImages: number[],
    displayImages: IDisplayImage[],
  ) => {
    const imNum: number = Math.floor(Math.random() * images.length);
    if (
      images[imNum].caracteristic[
        commonCarac.toString() as keyof ICaracCount
      ] &&
      !excludedImages.includes(imNum)
    ) {
      excludedImages.push(imNum);
      Object.keys(images[imNum].caracteristic).map((key) => {
        if (images[imNum].caracteristic[key as keyof ICaracCount]) {
          imagesPerCharacteristic[key as keyof IimagesPerCharacteristic] -= 1;
        }
      });
      displayImages.push({name: images[imNum].name, isIntruder: false});
    } else {
      chooseImage(commonCarac, excludedImages, displayImages);
    }
  };

  return (
    <View style={styles.container}>
      <GameInfo score={score} timeLeft={timeLeft} lives={lives} />
      <GameRound imagestoDisplay={imagestoDisplay} finishRound={finishRound} />
    </View>
  );
};

export default GameScreen;

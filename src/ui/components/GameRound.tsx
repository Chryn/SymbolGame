import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './GameRoundStyle';

interface GameRoundListProps {
  imagestoDisplay: IDisplayImage[];
  finishRound: Function;
}

export default (props: GameRoundListProps) => {
  const {imagestoDisplay, finishRound} = props;

  return (
    <View style={styles.symbolsContainer}>
      {imagestoDisplay.map(
        (image, index) =>
          imagestoDisplay && (
            <TouchableOpacity
              style={styles.image}
              key={index}
              onPress={() => finishRound(image.isIntruder)}>
              <Text>{image.name}</Text>
              <Image style={styles.image} key={index} source={image.name} />
            </TouchableOpacity>
          ),
      )}
    </View>
  );
};

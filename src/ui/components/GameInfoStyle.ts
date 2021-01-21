import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heartContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    aspectRatio: 1.5,
    resizeMode: 'contain',
  },
  time: {
    textAlign: 'center',
    fontSize: 40,
    color: '#FFFFFF',
    flexGrow: 1,
  },
  score: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    flexGrow: 1,
  },
  heartImage: {
    flex: 0.3,
    aspectRatio: 1.5,
    resizeMode: 'contain',
  },
});

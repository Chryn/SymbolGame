import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#000000',
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#e67e22',
    marginTop: 20,
    paddingLeft: 50,
    paddingRight: 50,
    borderRadius: 10,
    padding: 10,
  },
  buttonText: {
    color: '#FFFFFF',
  },
  titleText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  symbolsContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  image: {
    flex: 1,
    aspectRatio: 1.5,
    resizeMode: 'contain',
  },
});

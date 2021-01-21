export enum Screens {
  HomeScreen = 'HomeScreen',
  GameScreen = 'GameScreen',
  RecapScreen = 'RecapScreen',
}

export type RootStackParamList = {
  HomeScreen: undefined;
  GameScreen: undefined;
  RecapScreen: {score: string};
};

import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {getLocales} from 'react-native-localize';

i18n.use(initReactI18next).init({
  lng: getLocales()[0].languageCode,
  fallbackLng: 'fr',
  resources: {
    en: {
      translation: {
        homeTitle: 'Technical Test',
        play: 'Play',
        seconds_left: 'Seconds left',
        lives_left: 'Lives left',
        score: 'Score',
        score_recap: 'You scored {{score}} points',
        play_again: 'Play again',
        cancel_game_title: 'Get back to title screen ?',
        cancel_game_body:
          'You will leave the current game. Are you sure to leave the screen and go to title screen ?',
        cancel: 'Cancel',
        quit: 'Quit',
      },
    },
    fr: {
      translation: {
        homeTitle: 'Test technique',
        play: 'Jouer',
        seconds_left: 'Secondes restantes',
        lives_left: 'Vies restantes',
        score: 'Points',
        score_recap: 'Vous avez marqué {{score}} points',
        play_again: 'Rejouer',
        cancel_game_title: "Retourner à l'écran titre ?",
        cancel_game_body:
          "Vous allez quitter la partie. Êtes-vous sûr de vouloir quitter cet écran et revenir à l'écran titre ?",
        cancel: 'Annuler',
        quit: 'Quitter',
      },
    },
  },
});
export default i18n;

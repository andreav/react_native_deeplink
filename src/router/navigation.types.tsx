// This registers which makes navigation fully type-safe.
// https://reactnavigation.org/docs/typescript#specifying-default-types-for-usenavigation-link-ref-etc

// serve per usare useNavigation() e non avere errori typescriptp
// refs - https://github.com/react-navigation/react-navigation/issues/9741#issuecomment-955947433
import {Routes} from './routes';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends Routes {}
  }
}

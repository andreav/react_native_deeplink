// refs - https://medium.com/timeless/working-with-stack-navigation-in-react-native-with-typescript-2deda91eab8a

import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type Routes = {
  A: undefined;
  B: undefined;
};

export type AScreenProps = NativeStackScreenProps<Routes, 'A'>;
export type BScreenProps = NativeStackScreenProps<Routes, 'B'>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends Routes {}
  }
}

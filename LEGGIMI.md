    npx react-native init rn_deeplink --template react-native-template-typescript
    cd rn_deeplink
    npm install @react-navigation/native
    npm install react-native-screens react-native-safe-area-context

react-native-screens package requires one additional configuration step to properly work on Android devices. Edit MainActivity.java file which is located in android/app/src/main/java/<your package name>/MainActivity.java.

Add the following code to the body of MainActivity class:

    @Override
    protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
    }

and make sure to add the following import statement at the top of this file below your package statement:

    import android.os.Bundle;

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

Impostare uno schema

    <activity
        android:name=".MainActivity"
        android:launchMode="singleTask">
        <intent-filter>
            <action android:name="android.intent.action.MAIN" />
            <category android:name="android.intent.category.LAUNCHER" />
        </intent-filter>
        <intent-filter>
            <action android:name="android.intent.action.VIEW" />
            <category android:name="android.intent.category.DEFAULT" />
            <category android:name="android.intent.category.BROWSABLE" />
            <data android:scheme="rn_deeplink" />
        </intent-filter>
    </activity>

Testing

    // navigatre to B
    npx uri-scheme open "rn_deeplink://B" --android

    adb shell am start -W -a android.intent.action.VIEW -d "rn_deeplink://B" com.rn_deeplink

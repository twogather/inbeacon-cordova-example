# inBeacon Cordova Plugin example app

## Prerequisites

 * nodejs >=4.2.3
 * npm >= 2.14.7
 * cordova >= 6.2.0 
 * git
 * xcode >=7
 * xcode command line tools
 * Android SDK

To check the requirements after installation use `cordova requirements`.


## Install & run on iOS

1. npm install -g cordova
2. git clone https://github.com/twogather/inbeacon-cordova-example.git
3. cd inbeacon-cordova-example
4. cordova platform add ios
5. cordova run ios --device *(a device must be attached to your mac, otherwise it starts a simulator)*

## Install & run on Android

1. npm install -g cordova
2. git clone https://github.com/twogather/inbeacon-cordova-example.git
3. cd inbeacon-cordova-example
4. cordova platform add android
5. cordova run android *(Uses attached device if available, otherwise runs on emulator)*

## Install & run on Android using Cordova versions <4
Installing the plugin using Cordova v3 or older requires an additional step (5).

1. npm install -g cordova
2. git clone https://github.com/twogather/inbeacon-cordova-example.git
3. cd inbeacon-cordova-example
4. cordova platform add android
5. copy inBeacon SDK and dependencies (.jar files) to folder `platforms/android/libs/`

  Download the inBeacon SDK and it's dependencies:
  - com.inbeacon:android.sdk:1.+
  - com.android.support:support v4:22.2.0
  - org.altbeacon:android beacon library:2.8.1
  - com.loopj.android:android async http:1.4.9

  You need to add the .jar files of these libraries.  
  Some libraries, like the inBeacon SDK, are distributed as an .aar file. This file can be unzipped like any other .zip file. Extract the classes.jar file from this .aar archive, and rename it to something like 'inBeaconSDK1.5.jar'.

  Place the 4 .jar files in the directory `platforms/android/libs/` and continue as usual.

6. cordova run android *(Uses attached device if available, otherwise runs on emulator)*


## Usage

To get connected with inBeacon API you'll need a working clientId and secret which you can add/edit under the settings page:

<img src="settings.png" alt="Settings" />

You can also edit the defaults in `www/js/index.js` at line number 21

```
var app = {

    clientId    : 'your-clientid',
    secret      : 'your-secret',
    ...
}
```

and repeat step 5 from Install & run

## Background mode (iOS)

To enable **full background mode** open it in Xcode from `platforms/ios/HelloCordova.xcodeproj` and change the *Background Modes* settings under *Capabilities*


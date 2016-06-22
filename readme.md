# inBeacon Cordova Plugin example app

## Prerequisits

 * git
 * xcode >=7
 * nodejs >=4.2.3
 * npm >= 2.14.7
 * cordova >= 6.2.0 

## Install & Run

1. npm install -g cordova
2. git clone https://github.com/twogather/inbeacon-cordova-example.git
3. cd inbeacon-cordova-example
4. cordova add platform ios
5. cordova run ios --device *(a device must be attached to your mac, otherwise it starts a simulator)*

## Usage

To get connected with InBeacon API you'll need a working clientId and secret which you can add/edit under the settings page:
<img src="settings.png" alt="Settings" />

You can also edit the defaults in `www/js/index.js` at line number 21

```
var app = {

    clientId    : '',
    secret      : '',
    ...
}
```

and repeat step 5 form Install&Run

##  Background mode

To enable **full background mode** open it in Xcode from  `platforms/ios/HelloCordova.xcodeproj` and change the *Background Modes* settings under *Capabilities* 

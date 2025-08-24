// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: 'typescript-angular-c3662.firebaseapp.com',
    databaseURL: 'https://typescript-angular-c3662.firebaseio.com',
    projectId: 'typescript-angular-c3662',
    storageBucket: 'typescript-angular-c3662.appspot.com',
    messagingSenderId: '682992510442',
    appId: '1:682992510442:web:8538e90dc7d65174aa7e93',
    measurementId: 'G-8SYQSZ976J'
  }
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

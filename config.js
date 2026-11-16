/* Low Card Showdown settings. This is the only file you need to edit.
   Anything a test page set beforehand is kept, so leave the Object.assign line as it is. */
window.LCS_CONFIG = Object.assign({
  // Where room messages travel. The default is a free public test relay: fine for trying the game
  // with friends, not for a Play Store launch. Replace it with your own relay address before publishing.
  relayUrl: 'wss://broker.emqx.io:8084/mqtt',

  // Ads. Leave empty for no ads. After Google approves you for H5 Games Ads, put your publisher ID
  // here, for example 'ca-pub-1234567890123456'. Set adsTest to true to see test ads while checking.
  adsClient: '',
  adsTest: false,

  // Shop. Address of the purchase-confirmation server function (see extras/purchase-server).
  // Leave empty until the Android app and that function are set up; items then show as "Locked".
  verifyUrl: '',

  // Google sign-in. Leave as null for guest play only (credits saved on the device).
  // After creating your Firebase project, paste its web app config here, for example:
  // firebase: { apiKey: '...', authDomain: 'your-project.firebaseapp.com', projectId: 'your-project', appId: '...' },
  firebase: null,

  // true = every shop item unlocks free. For trying the look only. Must be false on the live site.
  shopTest: false
}, window.LCS_CONFIG || {});

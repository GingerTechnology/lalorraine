import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAyLHutxXSrDFHP2V3pSlrJott8JD47JxI',
    libraries: 'places',
  },
});

<template>
  <v-container class="mt-3">

    <h2 class="text-xs-center big" >Rechercher le meilleurs coin de ma lorraine.</h2>

    <v-container grid-list-xl>
      <v-layout row wrap align-center>
        <GmapMap
          id="map"
          ref="mmm"
          :center="mapOptions.center"
          :zoom="mapOptions.zoom"
          :map-type-id="mapOptions.mapTypeId"
          :map-style="mapOptions.mapStyle"
          :map-type-control="mapOptions.mapTypeControl"
        >
          <!-- <GmapMarker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            :clickable="true"
            :draggable="true"
            @click="center=m.position"
          /> -->
        </GmapMap>
      </v-layout>
    </v-container>

  </v-container>
</template>
<script>
import { gmapApi } from 'vue2-google-maps';

export default {
  data: () => ({
    mapOptions: {
      center: {
        lat: 48.84539,
        lng: 6.137453,
      },
      zoom: 9,
      draggable: !0,
      scrollwheel: !1,
      panControl: !0,
      zoomControl: !0,
      mapTypeControl: !0,
      scaleControl: !0,
      streetViewControl: !0,
      overviewMapControl: !0,
      rotateControl: !0,
      mapTypeId: 'roadmap',
      mapStyle: 'red',
    },
  }),
  props: {
    source: String,
  },
  computed: {
    google: gmapApi,
  },
  methods: {
    changeOptions() {
      this.$refs.mmm.setOptions(this.mapOptions);
    },
  },
  mounted() {
    console.log(this.$refs);
    // this.$refs.mymap.setOptions(this.mapOptions);
  },
};
</script>
<style lang="scss">
#map {
  width:100vw;
  height:500px;
}
</style>

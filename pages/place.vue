<template>
  <v-container class="mt-3">

    <h1 class="text-xs-center big" >Nom de mon lieux.</h1>

    <v-container grid-list-xl>

      <v-layout row wrap>

        <v-flex xs12 md6>
          <h2>Vous aimerez.</h2>
          <p>zadjkazbdkbjazdboazndioaz</p>

          <h2>Vous pourrez.</h2>
          <p>zadjkazbdkbjazdboazndioaz</p>

          <h2>Quelques liens utiles.</h2>
          <p>zadjkazbdkbjazdboazndioaz</p>

        </v-flex>
        <v-flex xs12 md6>
          <v-carousel>
            <v-carousel-item v-for="(item,i) in items" :src="item.src" :key="i"></v-carousel-item>
          </v-carousel>
        </v-flex>

      </v-layout>

    </v-container>

  </v-container>
</template>
<script>
  export default {
    data() {
      return {
        items: [
          {
            src: '/images/lieux/l1.jpg',
          },
          {
            src: '/images/lieux/l2.jpg',
          },
        ],
      };
    },
  };
</script>

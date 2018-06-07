<template>
  <section id="intro">

    <v-parallax src="/images/intro.jpg" height="600" >
      <v-layout column align-center justify-center class="introText">
        <h1 class="white--text">Bienvenu !!</h1>
        <h2 class="white--text">Ma lorraine et sa foret vous attend !</h2>
      </v-layout>
    </v-parallax>

    <v-container>

      <h2 class="text-xs-center big" >Nos lieux choisis</h2>

      <v-container grid-list-xl>
        <v-layout row wrap align-center>

          <v-flex xs12 md4 v-for="item in featuredPlaces">
            <v-card class="elevation-0 featuredPlace">
              <v-card-media
                class="white--text"
                height="200px"
                :src="`/images/${item.img}`">
                <v-container fill-height fluid>
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                      <span class="headline">{{item.title}}</span>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-card-media>
              <v-card-title>
                <div>
                  {{item.description}}
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn block color="secondary" depressed to="/place">Voir</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>

        </v-layout>
        <v-layout row wrap>
          <v-spacer></v-spacer>
          <v-btn to="/recherche" color="primary" depressed>
            Voir tous les lieux
            <v-icon right dark>keyboard_arrow_right</v-icon>
          </v-btn>
        </v-layout>
      </v-container>

    </v-container>

    <v-container>

      <h2 class="text-xs-center big" >Pourquoi ce site</h2>

      <v-container grid-list-xl>
        <v-layout row wrap align-center>
          azdl,azpdjazjdmazndpmazndmoazn
        </v-layout>
      </v-container>

    </v-container>

  </section>
</template>
<script>
export default {
  data: () => ({
    featuredPlaces: [
      {
        title: 'Titre 1',
        img: 'intro.jpg',
        description: 'Look around you. You ll see two councilmen, a union official, couple off-duty cops and a judge...',
      },
      {
        title: 'Titre 1',
        img: 'intro.jpg',
        description: 'Look around you. You ll see two councilmen, a union official, couple off-duty cops and a judge...',
      },
      {
        title: 'Titre 1',
        img: 'intro.jpg',
        description: 'Look around you. You ll see two councilmen, a union official, couple off-duty cops and a judge...',
      },
    ],
  }),
  methods: {
  },
  mounted() {
  },
};
</script>

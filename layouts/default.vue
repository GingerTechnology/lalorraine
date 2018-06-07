<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list dense>

        <v-list-tile to="/">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Accueil</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile to="/inspire">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Page 2</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile to="/bonus">
          <v-list-tile-action>
            <v-icon>restore</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Bonus</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

      </v-list>
    </v-navigation-drawer>

    <v-toolbar app id="header">


        <!-- <v-toolbar-side-icon class="burger" @click.stop="drawer = !drawer" ></v-toolbar-side-icon> -->

        <div class="burger-menu" @click.stop="drawer = !drawer" :class="{ 'menu-on' : drawer }">
          <div class="burger"></div>
        </div>

        <nuxt-link to="/" class="logo mx-3">
          <img src="../static/images/logo.png" />
        </nuxt-link>


    </v-toolbar>

    <v-content>

      <nuxt />

    </v-content>

    <v-footer color="primary">
      <v-spacer></v-spacer>
      <nuxt-link to="/credits" class="white--text mx-3">Mentions légales</nuxt-link>
      <span class="white--text">-</span>
      <span class="white--text mx-3">Ma Lorraine &copy; 2018</span>
    </v-footer>

  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: false,
    }),
    props: {
      source: String,
    },
  };
</script>

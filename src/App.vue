<template>
  <v-app dark>
    <v-navigation-drawer
            v-model="drawer"
            temporary
            app
    >
      <v-list dense>
        <v-list-tile v-on:click="$router.push('/')">
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>fingerprint</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Login</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>shop</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Donation</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-on:click="$router.push('settings')">
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Settings</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-on:click="$router.push('roadmap')">
          <v-list-tile-action>
            <v-icon>map</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Roadmap</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-on:click="$router.push('about')">
          <v-list-tile-action>
            <v-icon>info</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>About</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-lef>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase" v-on:click="$router.push('/')">
        <span>{{$route.name}}</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'


export default {
  name: 'App',
  components: {},
  data: () => ({
    drawer: null,
    notificationModel: false,
    notificationText:"",
    notificationIcon:""
  }),
  methods:{
    ...mapActions(['initUpgradeList']),

  },
  async created() {
    this.initUpgradeList()
  },

  metaInfo:{
    titleTemplate: '%s | Clicker',
    meta: [
      {name: 'theme-color', content: '#212121'},
    ]
  }
}
</script>

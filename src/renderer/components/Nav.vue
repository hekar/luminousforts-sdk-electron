<template>
  <v-app-bar
    dense
  >
    <Logo />
    <v-toolbar-title>&nbsp;&nbsp;LuminousForts SDK</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn icon @click="openToolByName('Start Game')" v-on="on">
          <v-icon>mdi-play</v-icon>
        </v-btn>
      </template>
      <span>Start Game</span>
    </v-tooltip>

    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn icon @click="openToolByName('Website')" v-on="on">
          <v-icon>mdi-webpack</v-icon>
        </v-btn>
      </template>
      <span>Website</span>
    </v-tooltip>

    <v-tooltip bottom>
      <template v-slot:activator="{ on }">
        <v-btn icon @click="openToolByName('Commit Log')" v-on="on">
          <v-icon>mdi-file-tree</v-icon>
        </v-btn>
      </template>
      <span>Developer Log</span>
    </v-tooltip>
  </v-app-bar>
</template>

<script>
import Logo from './Logo'

export default {
  components: {
    Logo
  }
}
</script>

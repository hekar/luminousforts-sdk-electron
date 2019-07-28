<template>
  <div>
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

    <v-card>
      <v-card-text>
        <p>Based on the Source SDK 2013 with the aim of creating a series of experimental games centered around fort building.</p>
        <p>This application contains the tools used to launch, update and develop LuminousForts.</p>
      </v-card-text>
    </v-card>

    <v-tabs vertical>
      <v-tab>VPK</v-tab>
      <v-tab>Tools</v-tab>
      <v-tab>Config</v-tab>
      <v-tab>Hammer</v-tab>

      <v-tab-item>
        <Vpk />
      </v-tab-item>
      <v-tab-item>
        <Tools />
      </v-tab-item>
      <v-tab-item>
        <Config />
      </v-tab-item>
      <v-tab-item>
        <Hammer />
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
import Config from './Config'
import Hammer from './Hammer'
import Tools from './Tools'
import Vpk from './Vpk'
import Logo from './Logo'

export default {
  components: {
    Config,
    Hammer,
    Tools,
    Vpk,
    Logo
  }
}
</script>

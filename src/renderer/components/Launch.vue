<template>
  <v-sheet>
    <v-container>
      <v-card>
        <v-list flat>
        <v-subheader>Downloads</v-subheader>
        <v-list-item inactive>
          <v-list-item-icon>
            <Logo width="24" height="24" />
          </v-list-item-icon>
          <v-list-item-content>
            <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-list-item-title v-on="on">LuminousForts</v-list-item-title>
            </template>
            <span>Download and install the latest version of LuminousForts from Github</span>
            </v-tooltip>
          </v-list-item-content>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-list-item-action v-on="on">
                <v-btn
                  color="green darken-2"
                  elevation="16"
                  dark
                  @click="openTool('start_game')"
                >START</v-btn>
              </v-list-item-action>
            </template>
            <span>Start the Game</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-list-item-action v-on="on">
                <v-btn
                  color="indigo darken-3"
                  dark
                  elevation="4"
                  @click="downloadGame()"
                  >DOWNLOAD</v-btn>
              </v-list-item-action>
            </template>
            <span>Download or Update</span>
          </v-tooltip>
        </v-list-item>
        <v-list-item inactive>
          <v-list-item-icon>
            <v-icon>mdi-brush</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-list-item-title v-on="on">LuminousForts Artwork</v-list-item-title>
            </template>
            <span>Download the latest raw art assets (.bsp, .tga, .qc, .blend, etc.)</span>
            </v-tooltip>
          </v-list-item-content>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-list-item-action v-on="on">
                <v-btn
                  elevation="4"
                  @click="openTool('explore_artwork')"
                >EXPLORE</v-btn>
              </v-list-item-action>
            </template>
            <span>Open Artwork Folder</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-list-item-action v-on="on">
                <v-btn
                  elevation="4"
                  @click="download()"
                  >DOWNLOAD</v-btn>
              </v-list-item-action>
            </template>
            <span>Download or Update</span>
          </v-tooltip>
        </v-list-item>
        <v-list-item inactive>
          <v-list-item-icon>
            <v-icon>mdi-code-braces</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-list-item-title v-on="on">LuminousForts Source Code</v-list-item-title>
            </template>
            <span>Download the latest C++ source code</span>
            </v-tooltip>
          </v-list-item-content>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-list-item-action v-on="on">
                <v-btn
                  @click="openTool('explore_source_code')"
                >EXPLORE</v-btn>
              </v-list-item-action>
            </template>
            <span>Open Source Code Folder</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on }">
              <v-list-item-action v-on="on">
                <v-btn
                  @click="downloadSourceCode()"
                  >DOWNLOAD</v-btn>
              </v-list-item-action>
            </template>
            <span>Download or Update</span>
          </v-tooltip>
        </v-list-item>
        </v-list>
      </v-card>
  </v-container>
  <v-container grid-list-md>
    <v-layout wrap>
      <v-flex lg4>
      <v-card>
        <v-list flat>
          <v-subheader>Start Game</v-subheader>
          <v-list-item-group color="primary">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-play</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title
                  @click="openTool('start_game')"
                >Normal</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-code-greater-than</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title
                  @click="openTool('start_game_dev')"
                >Developer Mode</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-window-restore</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title
                  @click="openTool('start_game_dev_windowed')"
                >Developer Mode (Windowed)</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-flare</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title
                  @click="openTool('start_game_particle')"
                >Particle Editor (Windowed)</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
      </v-flex>
      <v-flex lg4>
      <v-card>
        <v-list flat>
          <v-subheader>Tools</v-subheader>
          <v-list-item-group color="primary">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-hammer</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title
                  @click="openTool('hammer')"
                >Hammer</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-human</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title
                  @click="openTool('hlmv')"
                >Model Viewer</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-face</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title
                  @click="openTool('qc_eyes')"
                >Face Poser</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-file-document-edit-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title
                  @click="openTool('edit_gameconfig')"
                >Edit Gameconfig</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
      </v-flex>
      <v-flex lg4>
      <v-card>
        <v-list flat>
          <v-subheader>Links</v-subheader>
          <v-list-item-group color="primary">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-file-tree</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title
                  @click="openTool('commit_log')"
                >Developer Log</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-file-document-box</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title
                  @click="openTool('documentation')"
                >Documentation</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-webpack</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title
                  @click="openTool('website')"
                >Website</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-file-document-box-multiple</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title
                  @click="openTool('valve_wiki')"
                >Valve SDK Wiki</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
      </v-flex>
    </v-layout>
  </v-container>
  </v-sheet>
</template>

<script>
import Logo from './Logo'

export default {
  components: {
    Logo
  },
  data () {
    return {}
  },
  methods: {
    openTool (id) {
      this.$electron.remote.app.sdk.openTool(id)
    },
    downloadGame () {
      debugger
    },
    downloadArtwork () {
      debugger
    }
  }
}
</script>

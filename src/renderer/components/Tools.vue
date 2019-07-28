<template>
  <div>
    <v-app-bar
      dense
    >
      <v-toolbar-title>LuminousForts</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>

    <v-tabs vertical>
      <v-tab>Tools</v-tab>
      <v-tab>Config</v-tab>
      <v-tab>Hammer</v-tab>

      <v-tab-item>
        <v-card flat>
          <v-list flat>
            <v-subheader>TOOLS</v-subheader>
            <v-list-item-group color="primary">
              <v-list-item
                v-for="tool in tools"
                :key="tool.name"
              >
                <v-list-item-content>
                  <v-list-item-title
                    :v-text="tool.name"
                    @click="openTool(tool)"
                  >
                    {{ tool.name }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>

    <v-snackbar
      v-model="snackbar"
    >
      {{ text }}
      <v-btn
        color="pink"
        text
        timeout="6000"
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
  export default {
    name: 'tools',
    data () {
      return {
        snackbar: true,
        text: 'Welcome to LuminousForts',
        folder: {
          bin: '~/.steam/steam/steamapps/common/Source SDK Base 2013 Singleplayer/bin/'
        },
        tools: [{
          name: 'Hammer',
          cmd: 'hammer.exe'
        }, {
          name: 'HLMV',
          cmd: 'hlmv.exe'
        }, {
          name: 'QC Eyes',
          cmd: 'qc_eyes.exe'
        }]
      }
    },
    methods: {
      openTool (tool) {
        const cwd = this.folder.bin
        const { cmd } = tool

        this.text = 'opening hammer'
        this.snackbar = true
        this.$electron.remote.app.sdk.open({
          cwd,
          cmd
        })
      }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body { font-family: 'Source Sans Pro', sans-serif; }
</style>

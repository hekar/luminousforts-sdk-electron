<template>
<div>
  <p>More information on VPKs: <a target="_blank" href="https://developer.valvesoftware.com/wiki/VPK">https://developer.valvesoftware.com/wiki/VPK</a></p>

  <v-card>
    <v-card-title>
      Extract
    </v-card-title>

    <v-file-input label="Valve Pak (.vpk) file"></v-file-input>
    <v-file-input
      label="Export Folder"
      webkitdirectory
    ></v-file-input>

    <v-card-actions>
      <v-tooltip right>
        <template v-slot:activator="{ on }">
          <v-btn icon @click="extract" v-on="on">
            <v-icon>mdi-export</v-icon>
          </v-btn>
        </template>
        <span>Extract</span>
      </v-tooltip>
    </v-card-actions>
  </v-card>

  <VpkList></VpkList>
</div>
</template>

<script>
import VpkList from './vpk/VpkList'

export default {
  name: 'tools',
  components: {
    VpkList
  },
  data () {
    return {
    }
  },
  methods: {
    extract () {

    },
    openTool (tool) {
      const { cmd, cwd } = tool

      this.text = `${tool.name}: ${tool.cmd} in ${cwd}`
      this.$electron.remote.app.sdk[tool.launcher]({
        cwd,
        cmd
      })
    }
  }
}
</script>

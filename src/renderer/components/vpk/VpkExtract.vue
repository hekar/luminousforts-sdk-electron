<template>
  <v-card>
    <v-card-title>
      Extract
    </v-card-title>

    <FileInput
      label="Valve Pak (.vpk) file"
      @file-selected="selectVpk"
    />

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
</template>

<script>
import FileInput from '../input/FileInput'

export default {
  components: {
    FileInput
  },
  data () {
    return {
      items: [],
      files: [],
      search: '',
      selectedFile: '',
      headers: [{
        text: 'Filepath',
        value: 'path'
      }]
    }
  },
  methods: {
    selectVpk ({ selectedFile }) {
      this.selectedFile = selectedFile
    },
    extract () {
      this.$electron.remote.app.sdk.wine({
        cwd: '~/.steam/steam/steamapps/common/Source SDK Base 2013 Singleplayer/bin/',
        cmd: `vpk.exe "${this.selectedFile}"`
      }).then(({ stdout }) => {
        debugger
      })
    }
  }
}
</script>

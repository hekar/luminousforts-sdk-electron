<template>
  <v-card>
    <v-card-title>
      List VPK
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        label="Search"
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-file-input
      ref="vpkInput"
      accept=".vpk"
      v-model="files"
      solo
      display-size
      label="Valve Pak (.vpk) file"
    ></v-file-input>
    <v-btn text @click="openFile()">
      Open
    </v-btn>
    <v-data-table
      :headers="headers"
      :items="items"
      :search="search"
    ></v-data-table>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      items: [],
      files: [],
      search: '',
      headers: [{
        text: 'Filepath',
        value: 'path'
      }]
    }
  },
  methods: {
    openFile (filename) {
      debugger
    }
  },
  watch: {
    files: function () {
      debugger

      this.$electron.remote.app.sdk.wine({
        cwd: '~/.steam/steam/steamapps/common/Source SDK Base 2013 Singleplayer/bin/',
        cmd: 'vpk.exe x '
      })
    }
  }
}
</script>

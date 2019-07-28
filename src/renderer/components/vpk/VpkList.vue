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
    <FileInput
      accept=".vpk"
      label="Valve Pak"
      title="Valve Pak (.vpk) file"
      @file-selected="listVpk"
    />
    <v-data-table
      :headers="headers"
      :items="items"
      :search="search"
    >
      <template v-slot:item.action="{ item }">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
          <v-btn
            icon
            class="mr-2"
            v-on="on"
            @click="extract(item)"
          >
            <v-icon>mdi-export</v-icon>
          </v-btn>
          </template>
          <span>Extract file</span>
        </v-tooltip>
      </template>
    </v-data-table>
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
      selectedFile: null,
      headers: [{
        text: 'Filepath',
        value: 'path'
      }, {
        text: 'Export',
        value: 'action',
        sortable: false
      }]
    }
  },
  methods: {
    listVpk ({ selectedFile }) {
      this.selectedFile = selectedFile
      this.$electron.remote.app.sdk.wine({
        cwd: '~/.steam/steam/steamapps/common/Source SDK Base 2013 Singleplayer/bin/',
        cmd: `vpk.exe l "${selectedFile}"`
      }).then(({ stdout }) => {
        this.items = stdout.split('\n').map((s) => ({
          path: s
        }))
      })
    },
    extract ({ path }) {
      const selectedFile = this.selectedFile
      this.$electron.remote.app.sdk.wine({
        cwd: '~/.steam/steam/steamapps/common/Source SDK Base 2013 Singleplayer/bin/',
        cmd: `vpk.exe x "${selectedFile}" "${path}"`
      }).then(({ stdout, stderr }) => {
        debugger
      })
    }
  }
}
</script>

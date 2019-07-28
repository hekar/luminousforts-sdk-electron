<template>
<v-sheet>
  <v-container>
    <p>More information on VPKs: <a target="_blank" href="https://developer.valvesoftware.com/wiki/VPK">https://developer.valvesoftware.com/wiki/VPK</a></p>

    <FileInput
      label="Export Folder"
      directory
    />

    <v-flex xs12>
      <VpkExtract />
    </v-flex>
    <v-divider />
    <v-flex xs12>
      <VpkList />
    </v-flex>
  </v-container>
</v-sheet>
</template>

<script>
import FileInput from './input/FileInput'
import VpkExtract from './vpk/VpkExtract'
import VpkList from './vpk/VpkList'

export default {
  name: 'tools',
  components: {
    FileInput,
    VpkExtract,
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

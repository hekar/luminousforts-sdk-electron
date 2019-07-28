<template>
<v-layout fluid
      pa-2>
  <v-text-field
    d-inline-block
    :label="label"
    prepend-icon="mdi-attachment"
    @click="openDialog()"
    v-model="selectedFile"
  ></v-text-field>
  <v-btn icon @click="openDialog()">
    <v-icon>mdi-folder-open</v-icon>
  </v-btn>
</v-layout>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Select'
    },
    cwd: {
      type: String,
      default: '/home/hekar/.steam/steam/steamapps/common/'
    },
    directory: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      selectedFile: null
    }
  },
  methods: {
    openDialog () {
      const title = this.title
      const defaultPath = this.cwd

      const filters = (this.directory) ? undefined : []
      // filters.push({
      //   name: 'Valve Pak File (.vpk)',
      //   extensions: ['vpk']
      // })

      const properties = [
        (this.directory) ? 'openDirectory' : 'openFile'
      ]

      if (this.multiple) {
        properties.push('multiSelections')
      }

      this.$electron.remote.dialog.showOpenDialog({
        title,
        filters,
        defaultPath,
        properties
      }, (filePaths) => {
        if (filePaths && filePaths.length > 0) {
          this.selectedFile = filePaths[0]
          this.$emit('file-selected', {
            selectedFile: this.selectedFile
          })
        }
      })
    }
  }
}
</script>

<template>
    <v-card flat>
      <v-list flat>
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
</template>

<script>
  export default {
    name: 'tools',
    data () {
      const folder = {
        root: '~/.steam/steam/steamapps/common/Source SDK Base 2013 Multiplayer/',
        bin: '~/.steam/steam/steamapps/common/Source SDK Base 2013 Singleplayer/bin/'
      }

      const tools = [{
        name: 'Start Game',
        cmd: [
          './hl2.sh',
          '-game sourcetest -steam -secure',
          '-game ~/.local/share/Steam/steamapps/sourcemods/luminousforts'
        ].join(' '),
        cwd: folder.root,
        launcher: 'shell'
      }, {
        name: 'Start Game (Developer Mode)',
        cmd: [
          './hl2.sh',
          '-game sourcetest -steam -secure',
          '-console -dev -allowdebug +developer 1',
          '-game ~/.local/share/Steam/steamapps/sourcemods/luminousforts'
        ].join(' '),
        cwd: folder.root,
        launcher: 'shell'
      }, {
        name: 'Start Game (Developer Mode - Windowed)',
        cmd: [
          './hl2.sh',
          '-game sourcetest -steam -secure',
          '-console -dev -allowdebug +developer 1 -sw -w 800 -h 600',
          '-game ~/.local/share/Steam/steamapps/sourcemods/luminousforts'
        ].join(' '),
        cwd: folder.root,
        launcher: 'shell'
      }, {
        name: 'Game Folder',
        cmd: '~/.local/share/Steam/steamapps/sourcemods/luminousforts',
        cwd: folder.root,
        launcher: 'start'
      }, {
        name: 'Hammer',
        cmd: 'hammer.exe',
        cwd: folder.bin,
        launcher: 'wine'
      }, {
        name: 'HLMV',
        cmd: 'hlmv.exe',
        cwd: folder.bin,
        launcher: 'wine'
      }, {
        name: 'QC Eyes',
        cmd: 'qc_eyes.exe',
        cwd: folder.bin,
        launcher: 'wine'
      }, {
        name: 'Edit GameConfig',
        cmd: 'GameConfig.txt',
        cwd: folder.bin,
        launcher: 'start'
      }, {
        name: 'Particle Editor (Windowed)',
        cmd: [
          './hl2.sh',
          '-game sourcetest',
          '-steam -secure',
          '-sw -console -tools -nop4 -w 1920 -h 1080 +sv_lan 0',
          '-game ~/.local/share/Steam/steamapps/sourcemods/luminousforts'
        ].join(' '),
        cwd: folder.root,
        launcher: 'shell'
      }, {
        name: 'Commit Log',
        cmd: 'https://github.com/hekar/luminousforts-2013/commits/master',
        cwd: '.',
        launcher: 'start'
      }, {
        name: 'Website',
        cmd: 'https://hekar.github.io/luminousforts-website/doc/',
        cwd: '.',
        launcher: 'start'
      }]

      return {
        folder,
        tools
      }
    },
    methods: {
      openTool (tool) {
        const { cmd, cwd } = tool

        this.text = `${tool.name}: ${tool.cmd} in ${cwd}`
        this.$electron.remote.app.sdk[tool.launcher]({
          cwd,
          cmd
        })
      },
      openToolByName (name) {
        const tool = this.tools
          .filter(tool => tool.name === name)
        if (tool.length > 0) {
          this.openTool(tool[0])
        } else {
          console.error('Could not find tool', name)
        }
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

<template>
<div>
  <Nav />

  <iframe src="/#/console"></iframe>

  <v-card>
    <v-card-text>
      <p>Based on the Source SDK 2013 with the aim of creating a series of experimental games centered around fort building.</p>
      <p>This application contains the tools used to launch, update and develop LuminousForts.</p>
    </v-card-text>
  </v-card>

  <v-tabs vertical>
    <v-tab>Launch</v-tab>
    <v-tab>Config</v-tab>
    <v-tab>Hammer</v-tab>
    <v-tab>VPK</v-tab>
    <v-tab>Vtf</v-tab>

    <v-tab-item>
      <Launch />
    </v-tab-item>
    <v-tab-item>
      <Config />
    </v-tab-item>
    <v-tab-item>
      <Hammer />
    </v-tab-item>
    <v-tab-item>
      <Vpk />
    </v-tab-item>
    <v-tab-item>
      <Vtf />
    </v-tab-item>
  </v-tabs>
</div>
</template>

<script>
import Nav from './Nav'
import Config from './Config'
import Hammer from './Hammer'
import Launch from './Launch'
import Vpk from './Vpk'
import Vtf from './Vtf'

export default {
  components: {
    Config,
    Hammer,
    Launch,
    Vpk,
    Vtf,
    Nav
  }
}
</script>

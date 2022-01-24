<template>
  <v-navigation-drawer v-model="drawer" app>
    <!-- Background image -->
    <v-img height="140" class="pa-4" :src="getImgUrl(sidebar.background)">
      <div class="text-center">
        <v-avatar class="mb-4" color="grey darken-1" size="64">
          <v-img aspect-ratio="30" :src="getImgUrl(sidebar.logo)" />
        </v-avatar>
        <h2 class="font-bungee">{{ sidebar.title }}</h2>
      </div>
    </v-img>
    <v-divider></v-divider>

    <!-- Menu 1 -->
    <v-list nav dense>
      <div v-for="(link, i) in sidebar.navLinks" :key="i">
        <v-list-item
          v-if="!link.subLinks"
          :to="link.to"
          avatar
          class="v-list-item"
        >
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-title v-text="link.text" />
        </v-list-item>

        <v-list-group
          v-else
          :key="link.text"
          no-action
          :prepend-icon="link.icon"
          :value="false"
        >
          <template v-slot:activator>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </template>

          <v-list-item
            v-for="sublink in link.subLinks"
            :to="sublink.to"
            :key="sublink.text"
          >
            <v-list-item-icon>
              <v-icon>{{ sublink.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ sublink.text }}</v-list-item-title>
          </v-list-item>
        </v-list-group>
      </div>
    </v-list>

    <hr>
    <!-- Menu 2 -->
    <v-list nav dense>
      <div v-for="(link, i) in sidebar.staticLinks" :key="i">
        <v-list-item
          v-if="!link.subLinks"
          :to="link.to"
          avatar
          class="v-list-item"
        >
          <v-list-item-icon>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-title v-text="link.text" />
        </v-list-item>

        <v-list-group
          v-else
          :key="link.text"
          no-action
          :prepend-icon="link.icon"
          :value="false"
        >
          <template v-slot:activator>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </template>

          <v-list-item
            v-for="sublink in link.subLinks"
            :to="sublink.to"
            :key="sublink.text"
          >
            <v-list-item-icon>
              <v-icon>{{ sublink.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ sublink.text }}</v-list-item-title>
          </v-list-item>
        </v-list-group>
      </div>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import * as sidebarSettings from "../settings/sidebar";
console.log(sidebarSettings);
export default {
  name: "Sidebar",
  props: ["drawer"],
  data() {
    return {
      sidebar: sidebarSettings,
    };
  },
  methods: {
    getImgUrl(imgName) {
      var images = require.context("../assets/", false, /\.png$/);
      return images("./" + imgName);
    },
  },
};
</script>

<style scoped></style>

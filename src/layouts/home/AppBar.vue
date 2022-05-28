<template>
  <div>
    <v-app-bar id="home-app-bar" app elevation="1" height="70">
      <base-img
        :src="
          require(`@/assets/logo-${
            $vuetify.theme.isDark ? 'dark' : 'light'
          }.png`)
        "
        contain
        max-width="24"
        width="100%"
      />

      <div>
        <v-tabs background-color="transparent">
          <a
            class="v-tab font-weight-bold"
            href="https://app.daoswap.cc/#/swap"
            >{{ $t("Swap") }}</a
          >
          <a
            class="v-tab font-weight-bold"
            href="https://app.daoswap.cc/#/pool"
            >{{ $t("Pool") }}</a
          >
          <a
            class="v-tab font-weight-bold"
            href="https://app.daoswap.cc/#/dao"
            >{{ $t("DAO") }}</a
          >
          <a
            class="v-tab font-weight-bold"
            href="https://app.daoswap.cc/#/staking-lp"
            >{{ $t("Node") }}</a
          >
        </v-tabs>
      </div>

      <v-spacer />

      <!-- 多语言切换 -->
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn text v-bind="attrs" v-on="on">
            <v-icon>mdi-translate</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="item in localeList" :key="item.locale" link>
            <v-list-item-title
              v-text="item.title"
              @click="changeLang(item.locale)"
            ></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
import { WHITE_LISTS_SWITCH, WHITE_LISTS } from "@/constants";

export default {
  name: "HomeAppBar",

  data: () => ({
    // 当前包含语言
    localeList: [
      {
        locale: "zh",
        title: "中文"
      },
      {
        locale: "en",
        title: "English"
      }
    ]
  }),
  computed: {
    address() {
      return this.$store.state.web3.address;
    },
    isInWhiteList() {
      return WHITE_LISTS_SWITCH && WHITE_LISTS.indexOf(this.address) > -1;
    }
  },
  methods: {
    changeLang(locale) {
      this.$i18n.locale = locale;
    }
  }
};
</script>

<style lang="sass">
#home-app-bar
  .v-tabs-slider
    max-width: 24px
    margin: 0 auto

  .v-tab
    &::before
      display: none

  .v-tab
    text-transform: none
    font-size: 14px
    min-width: 0
    padding: 0 12px
</style>

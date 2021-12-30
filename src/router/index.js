import Vue from "vue";
import VueRouter from "vue-router";
import StakingLimitForLP from "../views/staking/StakingLimitForLP.vue";
import StakingLimitForLPHistory from "../views/staking/StakingLimitForLPHistory.vue";
import StakingLimitForSingle from "../views/staking/StakingLimitForSingle.vue";
import StakingLimitForSingleHistory from "../views/staking/StakingLimitForSingleHistory.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/home/Index.vue"),
    children: [
      {
        path: "",
        name: "Home",
        redirect: "/staking",
        component: () => import("@/views/home/Index.vue")
      },
      {
        path: "/staking",
        name: "Staking",
        redirect: "/staking/lp",
        component: () => import("@/layouts/home/ViewBlank.vue"),
        children: [
          {
            path: "/staking/lp",
            name: "StakingLimitForLP",
            redirect: "/staking/lp/1",
            component: () => import("@/layouts/home/ViewBlank.vue"),
            children: [
              {
                path: "/staking/lp/1",
                name: "StakingLimitForLP1",
                component: StakingLimitForLP
              },
              {
                path: "/staking/lp/1/history",
                name: "StakingLimitForLP1History",
                component: StakingLimitForLPHistory
              }
            ]
          },
          {
            path: "/staking/single",
            name: "StakingLimitForSingle",
            redirect: "/staking/single/1",
            component: () => import("@/layouts/home/ViewBlank.vue"),
            children: [
              {
                path: "/staking/single/1",
                name: "StakingLimitForSingle1",
                component: StakingLimitForSingle
              },
              {
                path: "/staking/single/1/history",
                name: "StakingLimitForSingle1History",
                component: StakingLimitForSingleHistory
              }
            ]
          }
        ]
      },
      {
        path: "/404",
        component: () => import("@/views/home/Index.vue")
      },
      {
        path: "*",
        redirect: "/"
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) return { selector: to.hash };
    if (savedPosition) return savedPosition;

    return { x: 0, y: 0 };
  },
  routes
});

export default router;

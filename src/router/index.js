import Vue from "vue";
import VueRouter from "vue-router";
import StakingLimitForLP1 from "../views/staking/StakingLimitForLP1.vue";
import StakingLimitForLPHistory1 from "../views/staking/StakingLimitForLPHistory1.vue";
import StakingLimitForLP2 from "../views/staking/StakingLimitForLP2.vue";
import StakingLimitForLPHistory2 from "../views/staking/StakingLimitForLPHistory2.vue";
import StakingLimitForLP3 from "../views/staking/StakingLimitForLP3.vue";
import StakingLimitForLPHistory3 from "../views/staking/StakingLimitForLPHistory3.vue";
import StakingLimitForSingle1 from "../views/staking/StakingLimitForSingle1.vue";
import StakingLimitForSingleHistory1 from "../views/staking/StakingLimitForSingleHistory1.vue";

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
            redirect: "/staking/lp/3",
            component: () => import("@/layouts/home/ViewBlank.vue"),
            children: [
              {
                path: "/staking/lp/3",
                name: "StakingLimitForLP3",
                component: StakingLimitForLP3
              },
              {
                path: "/staking/lp/3/history",
                name: "StakingLimitForLP3History",
                component: StakingLimitForLPHistory3
              },
              {
                path: "/staking/lp/2",
                name: "StakingLimitForLP2",
                component: StakingLimitForLP2
              },
              {
                path: "/staking/lp/2/history",
                name: "StakingLimitForLP2History",
                component: StakingLimitForLPHistory2
              },
              {
                path: "/staking/lp/1",
                name: "StakingLimitForLP1",
                component: StakingLimitForLP1
              },
              {
                path: "/staking/lp/1/history",
                name: "StakingLimitForLP1History",
                component: StakingLimitForLPHistory1
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
                component: StakingLimitForSingle1
              },
              {
                path: "/staking/single/1/history",
                name: "StakingLimitForSingle1History",
                component: StakingLimitForSingleHistory1
              }
            ]
          }
        ]
      },
      {
        path: "/404",
        component: () => import("@/views/404.vue")
      },
      {
        path: "*",
        redirect: "/404"
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

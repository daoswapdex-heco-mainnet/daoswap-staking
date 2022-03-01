import Vue from "vue";
import VueRouter from "vue-router";
import StakingLimitForLP1 from "../views/staking-limit/StakingLimitForLP1.vue";
import StakingLimitForLPHistory1 from "../views/staking-limit/StakingLimitForLPHistory1.vue";
import StakingLimitForLP2 from "../views/staking-limit/StakingLimitForLP2.vue";
import StakingLimitForLPHistory2 from "../views/staking-limit/StakingLimitForLPHistory2.vue";
import StakingLimitForLP3 from "../views/staking-limit/StakingLimitForLP3.vue";
import StakingLimitForLPHistory3 from "../views/staking-limit/StakingLimitForLPHistory3.vue";
import StakingLimitForSingle1 from "../views/staking-limit/StakingLimitForSingle1.vue";
import StakingLimitForSingleHistory1 from "../views/staking-limit/StakingLimitForSingleHistory1.vue";
import StakingLimitForSingle2 from "../views/staking-limit/StakingLimitForSingle2.vue";
import StakingLimitForSingleHistory2 from "../views/staking-limit/StakingLimitForSingleHistory2.vue";
import StakingInviterForLP1 from "../views/staking-inviter/StakingInviterForLP1.vue";
import StakingInviterForLPHistory1 from "../views/staking-inviter/StakingInviterForLPHistory1.vue";
import StakingInviterForLP2 from "../views/staking-inviter/StakingInviterForLP2.vue";
import StakingInviterForLPHistory2 from "../views/staking-inviter/StakingInviterForLPHistory2.vue";
import StakingInviterForSingle1 from "../views/staking-inviter/StakingInviterForSingle1.vue";
import StakingInviterForSingleHistory1 from "../views/staking-inviter/StakingInviterForSingleHistory1.vue";
import StakingInviterForLP3 from "../views/staking-inviter/StakingInviterForLP3.vue";
import StakingInviterForLPHistory3 from "../views/staking-inviter/StakingInviterForLPHistory3.vue";

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
            redirect: "/staking/lp/6",
            component: () => import("@/layouts/home/ViewBlank.vue"),
            children: [
              {
                path: "/staking/lp/6",
                name: "StakingLimitForLP6",
                component: StakingInviterForLP3
              },
              {
                path: "/staking/lp/6/history",
                name: "StakingLimitForLP6History",
                component: StakingInviterForLPHistory3
              },
              {
                path: "/staking/lp/5",
                name: "StakingLimitForLP5",
                component: StakingInviterForLP2
              },
              {
                path: "/staking/lp/5/history",
                name: "StakingLimitForLP5History",
                component: StakingInviterForLPHistory2
              },
              {
                path: "/staking/lp/4",
                name: "StakingLimitForLP4",
                component: StakingInviterForLP1
              },
              {
                path: "/staking/lp/4/history",
                name: "StakingLimitForLP4History",
                component: StakingInviterForLPHistory1
              },
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
            redirect: "/staking/single/3",
            component: () => import("@/layouts/home/ViewBlank.vue"),
            children: [
              {
                path: "/staking/single/3",
                name: "StakingLimitForSingle3",
                component: StakingInviterForSingle1
              },
              {
                path: "/staking/single/3/history",
                name: "StakingLimitForSingle3History",
                component: StakingInviterForSingleHistory1
              },
              {
                path: "/staking/single/2",
                name: "StakingLimitForSingle2",
                component: StakingLimitForSingle2
              },
              {
                path: "/staking/single/2/history",
                name: "StakingLimitForSingle2History",
                component: StakingLimitForSingleHistory2
              },
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
      // {
      //   path: "/staking-inviter",
      //   name: "StakingInviter",
      //   redirect: "/staking-inviter/lp",
      //   component: () => import("@/layouts/home/ViewBlank.vue"),
      //   children: [
      //     {
      //       path: "/staking-inviter/lp",
      //       name: "StakingInviterForLP",
      //       redirect: "/staking-inviter/lp/1",
      //       component: () => import("@/layouts/home/ViewBlank.vue"),
      //       children: [
      //         {
      //           path: "/staking-inviter/lp/1",
      //           name: "StakingInviterForLP1",
      //           component: StakingInviterForLP1
      //         },
      //         {
      //           path: "/staking-inviter/lp/1/history",
      //           name: "StakingInviterForLP1History",
      //           component: StakingInviterForLPHistory1
      //         }
      //       ]
      //     },
      //     {
      //       path: "/staking-inviter/single",
      //       name: "StakingInviterForSingle",
      //       redirect: "/staking-inviter/single/1",
      //       component: () => import("@/layouts/home/ViewBlank.vue"),
      //       children: [
      //         {
      //           path: "/staking-inviter/single/1",
      //           name: "StakingInviterForSingle1",
      //           component: StakingInviterForSingle1
      //         },
      //         {
      //           path: "/staking-inviter/single/1/history",
      //           name: "StakingInviterForSingle1History",
      //           component: StakingInviterForSingleHistory1
      //         }
      //       ]
      //     }
      //   ]
      // },
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

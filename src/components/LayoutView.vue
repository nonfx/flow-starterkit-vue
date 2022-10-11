<template>
  <!-- starterkit-vue -->
  <f-div
    direction="column"
    padding="none"
    height="100%"
    state="default"
    id="starterkit-vue"
  >
    <!-- don't show this top-navbar if screen size is less than 600px in responsiveness -->
    <span v-if="openSidebar && checkWindowSizeStatus"></span>
    <!-- top-nav snippet start -->
    <f-div
      v-else
      align="middle-left"
      gap="small"
      border="small solid default bottom"
      padding="medium"
      variant="block"
      state="default"
      id="top-nav"
      height="hug-content"
    >
      <!-- section-left start-->
      <f-div
        align="middle-left"
        gap="small"
        width="hug-content"
        id="section-left"
      >
        <f-icon
          source="i-hamburger"
          size="large"
          class="responsive-header"
          @click="toggleSidebar()"
          :clickable="true"
        ></f-icon>
        <f-icon
          source="https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-logo/7c68ee60c1588f7dfdf55a5b1f471efe.png"
          size="large"
        ></f-icon>
      </f-div>
      <!-- section-left end-->
      <!-- section-middle start -->
      <f-div
        align="middle-left"
        gap="small"
        width="fill-container"
        class="not-responsive-header"
        id="section-middle"
      >
        <!-- left swappable section start -->
        <f-icon source="i-arrow-left" size="small" :clickable="true"></f-icon>
        <f-text variant="heading" size="x-small" weight="regular">
          Home / Foundation
        </f-text>
        <!-- left swappable section end -->
      </f-div>
      <!-- section-middle end-->
      <!-- section-bottom start-->
      <f-div
        align="middle-right"
        gap="medium"
        width="hug-content"
        class="responsive-width-change"
        id="section-bottom"
      >
        <!-- right swappable section start -->
        <f-icon-button
          icon="i-search"
          size="small"
          variant="round"
          type="fill"
          state="neutral"
          class="show-search-icon"
        ></f-icon-button>
        <f-div
          padding="none"
          gap="small"
          class="not-responsive-icon-group"
          align="middle-right"
          width="hug-content"
        >
          <f-icon
            source="i-git"
            size="medium"
            state="secondary"
            :clickable="true"
          ></f-icon>
          <f-icon
            source="i-file"
            size="medium"
            state="secondary"
            :clickable="true"
          ></f-icon>
          <f-icon
            source="i-alarm"
            size="medium"
            state="secondary"
            :clickable="true"
          ></f-icon>
        </f-div>
        <f-icon-button
          icon="i-user"
          size="small"
          variant="round"
          type="fill"
          state="neutral"
        ></f-icon-button>
        <MenuPopover />
        <!-- right swappable section end -->
      </f-div>
      <!-- section-bottom end-->
    </f-div>
    <!-- top-nav snippet end -->
    <!-- body section start -->
    <f-div padding="none" id="body">
      <!-- side-nav section start-->
      <f-div
        align="top-center"
        border="small solid default right"
        variant="block"
        direction="column"
        height="fill-container"
        :width="openSidebar ? '320px' : '55px'"
        :class="openSidebar ? 'mobile-view-responsive' : 'hide-in-mobile-view'"
        state="default"
        overflow="hidden"
        id="side-nav"
      >
        <!-- section-top start -->
        <f-div
          padding="small"
          gap="small"
          :align="openSidebar ? 'middle-left' : 'middle-center'"
          height="hug-content"
          :direction="openSidebar ? 'row' : 'column'"
          state="default"
          overflow="hidden"
          id="section-top"
        >
          <f-icon
            :source="openSidebar ? 'i-hamburger-close' : 'i-hamburger'"
            size="large"
            @click="toggleSidebar()"
            :clickable="true"
          ></f-icon>
          <f-icon-button
            icon="i-icon"
            size="large"
            variant="round"
            type="transparent"
            state="primary"
          ></f-icon-button>
        </f-div>
        <!-- section-top end -->
        <!-- section-middle start -->
        <f-div
          padding="none"
          direction="column"
          align="top-left"
          overflow="scroll"
          class="remove-scrollbar"
          id="section-middle"
        >
          <f-div
            v-for="item in [0]"
            padding="medium"
            border="small solid default bottom"
            :align="openSidebar ? 'middle-left' : 'middle-center'"
            height="hug-content"
            :selected="item === 0 ? 'notch-right' : 'none'"
            :gap="openSidebar ? 'medium' : 'none'"
            :state="item === 0 ? 'secondary' : 'default'"
            :key="item"
            :id="item"
          >
            <f-pictogram
              size="medium"
              source="🌐"
              state="default"
              variant="square"
            ></f-pictogram>
            <f-text
              variant="heading"
              size="small"
              weight="medium"
              v-if="openSidebar"
            >
              Heading {{ item }}
            </f-text>
          </f-div>
        </f-div>
        <!-- section-middle end -->
        <!-- section-bottom start -->
        <f-div
          :padding="openSidebar ? 'none' : 'small'"
          direction="column"
          :align="openSidebar ? 'bottom-left' : 'top-center'"
          height="hug-content"
          border="small solid default top"
          state="default"
          id="section-bottom"
        >
          <f-div
            v-for="item in [0]"
            :padding="openSidebar ? 'medium' : 'small'"
            :align="openSidebar ? 'middle-left' : 'middle-center'"
            height="hug-content"
            gap="medium"
            :key="item"
            overflow="hidden"
            :id="item"
          >
            <f-icon
              source="i-setting"
              size="large"
              state="secondary"
              :clickable="true"
            ></f-icon>
            <f-text
              variant="heading"
              size="small"
              weight="medium"
              v-if="openSidebar"
            >
              Heading
            </f-text>
          </f-div>
        </f-div>
        <!-- section-bottom end -->
      </f-div>
      <!-- side-nav section end -->
      <slot /><!-- slot of main body content -->
    </f-div>
    <!-- body section end -->
  </f-div>
  <!-- starterkit-vue -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MenuPopover from "./MenuPopover.vue";

export default defineComponent({
  name: "LayoutView",
  data: () => ({
    sidebar: false,
  }),
  computed: {
    openSidebar(): boolean {
      return this.sidebar;
    },
    checkWindowSizeStatus(): boolean {
      return window.matchMedia("(max-width: 600px)").matches;
    },
  },
  methods: {
    toggleSidebar() {
      this.sidebar = !this.sidebar;
    },
  },
  components: { MenuPopover },
});
</script>

<style>
#top-nav .not-responsive-icon-group {
  width: inherit;
}

@media (max-width: 768px) {
  #top-nav .responsive-icon-group {
    width: inherit;
  }
  #top-nav .not-responsive-icon-group {
    display: none;
  }
}
@media (min-width: 768px) {
  #top-nav .responsive-icon-group {
    display: none;
  }
  #top-nav .not-responsive-icon-group {
    width: inherit;
  }
}
@media (max-width: 992px) {
  #top-nav .show-search-icon {
    width: inherit;
  }
}
@media (min-width: 992px) {
  #top-nav .show-search-icon {
    display: none;
  }
}
@media (min-width: 600px) {
  #top-nav .not-responsive-header {
    width: inherit;
  }
  #top-nav .responsive-header {
    display: none;
  }
}
@media (max-width: 600px) {
  #top-nav .not-responsive-header {
    display: none;
  }
  #top-nav .responsive-width-change {
    flex: 1 1 !important;
    max-width: 100% !important;
  }
  #top-nav .responsive-header {
    width: inherit;
  }
}

.mobile-view-responsive {
  width: inherit;
}
@keyframes slideInFromLeft {
  0% {
    transform: translateX(-80%);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes slide-right {
  from {
    margin-left: -10%;
  }
  to {
    margin-left: 0%;
  }
}
@media (max-width: 600px) {
  .mobile-view-responsive {
    width: 100% !important;
  }
}
@media (min-width: 600px) {
  .mobile-view-responsive {
    width: 320px !important;
    animation: 0.4s ease-out 0s 1 slide-right;
  }
}
.hide-in-mobile-view {
  width: inherit;
}
@keyframes slide-left {
  from {
    margin-left: 7%;
  }
  to {
    margin-left: 0%;
  }
}
@keyframes slideInFromLeft {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(-80%);
  }
}
@media (max-width: 600px) {
  .hide-in-mobile-view {
    display: none !important;
  }
}
@media (min-width: 600px) {
  .hide-in-mobile-view {
    width: inherit;
    animation: 0.4s ease-out 0s 1 slide-left;
  }
}
.remove-scrollbar::-webkit-scrollbar {
  display: none;
}
.remove-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>

<template>
  <!-- starterkit-vue -->
  <f-div
    data-f-id="starterkit-vue"
    direction="column"
    padding="none"
    height="100%"
    state="default"
  >
    <!-- don't show this top-navbar if screen size is less than 600px in responsiveness -->
    <span v-if="openSidebar && checkWindowSizeStatus"></span>
    <!-- top-nav start -->
    <f-div
      v-else
      data-f-id="top-nav"
      padding="medium"
      gap="small"
      state="secondary"
      align="middle-left"
      height="hug-content"
      border="small solid default bottom"
      class="top-nav"
    >
      <!--This data-f-id=\"top-nav-left\" is swappable, Find examples in https://flow.cldcvr.com/templates/index.html?path=/docs/top-nav--top-nav-left-logo  -->
      <f-div
        data-f-id="top-nav-left"
        width="hug-content"
        align="middle-center"
        gap="small"
      >
        <f-icon-button
          icon="i-hamburger"
          variant="round"
          size="large"
          state="neutral"
          type="packed"
          class="responsive-header"
          @click="toggleSidebar()"
        ></f-icon-button>
        <f-icon source="p-cloudcover" size="large"></f-icon>
      </f-div>
      <!--This data-f-id=\"top-nav-middle\" is swappable, Find examples in https://flow.cldcvr.com/templates/index.html?path=/docs/top-nav--top-nav-middle-breadcrumb  -->
      <f-div
        data-f-id="top-nav-middle"
        gap="small"
        align="middle-left"
        class="not-responsive-header"
      >
        <f-icon source="i-arrow-left"></f-icon>
        <f-text size="small"
          >Home / Project / Environment / Application / Logs
        </f-text>
      </f-div>
      <!--This data-f-id=\"top-nav-right\" is swappable, Find examples in https://flow.cldcvr.com/templates/index.html?path=/docs/top-nav--top-nav-right-search  -->
      <f-div
        data-f-id="top-nav-right"
        align="middle-right"
        gap="large"
        class="responsive-width-change"
        width="hug-content"
      >
        <f-icon-button
          icon="i-search"
          size="small"
          state="neutral"
        ></f-icon-button>
        <f-div
          gap="small"
          width="hug-content"
          class="not-responsive-icon-group"
        >
          <f-icon-button
            icon="i-search"
            variant="round"
            size="large"
            state="neutral"
            type="packed"
          ></f-icon-button>
          <f-icon-button
            icon="i-file"
            variant="round"
            size="large"
            state="neutral"
            type="packed"
          ></f-icon-button>
          <f-icon-button
            icon="i-alarm"
            variant="round"
            size="large"
            state="neutral"
            type="packed"
          ></f-icon-button>
        </f-div>
        <f-icon-button
          icon="i-user"
          size="small"
          state="neutral"
          id="profile-popover"
          @click="toggleAvatarPopup()"
        ></f-icon-button>
        <f-popover
          size="small"
          @overlay-click="toggleAvatarPopup()"
          :open="openAvatarPopup"
          target="#profile-popover"
        >
          <f-div direction="column" state="secondary">
            <f-div
              padding="medium"
              gap="small"
              border="small solid default bottom"
            >
              <f-pictogram source="i-user" variant="circle"></f-pictogram>
              <f-div direction="column">
                <f-text size="x-small" state="secondary">Logged in as</f-text>
                <f-text>no@email.com</f-text>
              </f-div>
              <f-div align="top-right">
                <f-icon source="i-edit" state="secondary"></f-icon>
              </f-div>
            </f-div>
            <f-div
              padding="medium"
              gap="small"
              clickable
              state="default"
              :selected="computedTheme === 'f-dark' ? 'background' : 'none'"
              @click="setTheme('f-dark')"
            >
              <f-text>Dark theme</f-text>
              <f-icon
                v-if="computedTheme === 'f-dark'"
                source="i-tick"
                state="success"
              ></f-icon>
            </f-div>
            <f-div
              padding="medium"
              gap="small"
              border="small solid default bottom"
              clickable
              :selected="computedTheme === 'f-light' ? 'background' : 'none'"
              @click="setTheme('f-light')"
            >
              <f-text>Light theme</f-text>
              <f-icon
                v-if="computedTheme === 'f-light'"
                source="i-tick"
                state="success"
              ></f-icon>
            </f-div>
            <f-div padding="medium" gap="small" clickable>
              <f-text>Logout</f-text>
            </f-div>
          </f-div>
        </f-popover>
        <MenuPopover></MenuPopover>
      </f-div>
    </f-div>
    <!-- top-nav end -->
    <!-- body section start -->
    <f-div data-f-id="body" padding="none">
      <!-- side-nav start-->
      <f-div
        data-f-id="side-nav"
        align="top-center"
        border="small solid default right"
        variant="block"
        direction="column"
        height="fill-container"
        :width="openSidebar ? '320px' : '55px'"
        :class="openSidebar ? 'mobile-view-responsive' : 'hide-in-mobile-view'"
        state="secondary"
        overflow="hidden"
      >
        <!-- side-nav top start -->
        <f-div
          data-f-id="side-nav-top"
          padding="small"
          gap="small"
          :align="openSidebar ? 'middle-left' : 'middle-center'"
          height="hug-content"
          :direction="openSidebar ? 'row' : 'column'"
          overflow="hidden"
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
        <!-- side-nav top end -->
        <!-- side-nav middle start -->
        <f-div
          data-f-id="side-nav-middle"
          padding="none"
          direction="column"
          align="top-left"
          overflow="scroll"
          class="remove-scrollbar"
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
        <!-- side-nav middle end -->
        <!-- side-nav bottom start -->
        <f-div
          data-f-id="side-nav-bottom"
          :padding="openSidebar ? 'none' : 'small'"
          direction="column"
          :align="openSidebar ? 'bottom-left' : 'top-center'"
          height="hug-content"
          border="small solid default top"
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
        <!-- side-nav bottom end -->
      </f-div>
      <!-- side-nav end -->
      <slot /><!-- slot of main body content -->
    </f-div>
    <!-- body section end -->
  </f-div>
  <!-- starterkit-vue -->
</template>

<script lang="ts">
import { ConfigUtil } from "@cldcvr/flow-core";
import { defineComponent } from "vue";
import MenuPopover from "./MenuPopover.vue";

export default defineComponent({
  name: "LayoutView",
  components: { MenuPopover },
  data: () => ({
    sidebar: false,
    avatar: false,
    theme: "f-dark",
  }),
  computed: {
    openSidebar(): boolean {
      return this.sidebar;
    },
    checkWindowSizeStatus(): boolean {
      return window.matchMedia("(max-width: 600px)").matches;
    },
    openAvatarPopup(): boolean {
      return this.avatar;
    },
    computedTheme(): string {
      return this.theme;
    },
  },
  methods: {
    toggleSidebar() {
      this.sidebar = !this.sidebar;
    },
    toggleAvatarPopup() {
      this.avatar = !this.avatar;
    },
    setTheme(theme: "f-dark" | "f-light") {
      if (theme) {
        this.theme = theme;
        ConfigUtil.setConfig({ theme });
      }
    },
  },
});
</script>

<style>
.top-nav .not-responsive-icon-group {
  width: inherit;
}

@media (max-width: 768px) {
  .top-nav .responsive-icon-group {
    width: inherit;
  }
  .top-nav .not-responsive-icon-group {
    display: none;
  }
}
@media (min-width: 768px) {
  .top-nav .responsive-icon-group {
    display: none;
  }
  .top-nav .not-responsive-icon-group {
    width: inherit;
  }
}
@media (max-width: 992px) {
  .top-nav .show-search-icon {
    width: inherit;
  }
}
@media (min-width: 992px) {
  .top-nav .show-search-icon {
    display: none;
  }
}
@media (min-width: 600px) {
  .top-nav .not-responsive-header {
    width: inherit;
  }
  .top-nav .responsive-header {
    display: none;
  }
}
@media (max-width: 600px) {
  .top-nav .not-responsive-header {
    display: none;
  }
  .top-nav .responsive-width-change {
    flex: 1 1 !important;
    max-width: 100% !important;
  }
  .top-nav .responsive-header {
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

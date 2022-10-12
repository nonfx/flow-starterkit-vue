<template>
  <f-popover
    :open="openMenuPopover"
    :size="checkWindowSizeStatus ? 'stretch' : 'small'"
    target="#popoverTarget"
    @overlay-click="togglePopover()"
  >
    <f-div direction="column">
      <f-div
        v-for="(item, index) in recursiveArray"
        gap="small"
        :border="
          index !== recursiveArray.length - 1
            ? 'small solid default bottom'
            : undefined
        "
        padding="medium"
        :key="item"
        :id="index"
      >
        <f-div width="hug-content" align="middle-left">
          <f-icon source="i-icon" size="medium" state="secondary"></f-icon>
        </f-div>
        <f-div width="fill-container" align="middle-left">
          <f-text variant="heading" size="small" weight="medium">
            Heading
          </f-text>
        </f-div>
        <f-div width="hug-content" align="middle-right">
          <f-icon
            source="i-chevron-right"
            size="small"
            state="secondary"
            :clickable="true"
          ></f-icon>
        </f-div>
      </f-div>
    </f-div>
  </f-popover>
  <f-icon
    source="i-more"
    size="medium"
    state="secondary"
    id="popoverTarget"
    @click="togglePopover()"
    :clickable="true"
    class="responsive-icon-group"
  ></f-icon>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MenuPopover",
  data: () => ({
    menuPopover: false,
    recursiveArray: [0, 1, 2],
  }),
  computed: {
    openMenuPopover(): boolean {
      return this.menuPopover;
    },
    checkWindowSizeStatus(): boolean {
      return window.matchMedia("(max-width: 600px)").matches;
    },
  },
  methods: {
    togglePopover() {
      this.menuPopover = !this.menuPopover;
    },
  },
});
</script>

<style>
.not-responsive-icon-group {
  width: inherit;
}

@media (max-width: 768px) {
  .responsive-icon-group {
    width: inherit;
  }
  .not-responsive-icon-group {
    display: none;
  }
}
@media (min-width: 768px) {
  .responsive-icon-group {
    display: none;
  }
  .not-responsive-icon-group {
    width: inherit;
  }
}
</style>

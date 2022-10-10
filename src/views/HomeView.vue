<template>
  <LayoutView>
    <BodySection></BodySection>
  </LayoutView>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BodySection from "@/components/BodySection.vue";
import LayoutView from "../components/LayoutView.vue";

export default defineComponent({
  name: "HomeView",
  components: { BodySection, LayoutView },
});
</script>

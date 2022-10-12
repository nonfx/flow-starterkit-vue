<template>
  <!-- LayoutView for top-bar and side-bar. Navigate to components/LayoutView.vue -->
  <LayoutView>
    <!-- BodySection used as a slot inside Layout, which contains the data to be displayed in body. Navigate to components/BodySection.vue -->
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

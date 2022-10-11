<template>
  <!-- LayoutView for top-bar and side-bar -->
  <LayoutView>
    <!-- BodySection used as a slot inside Layout, which contains the data to be displayed in body -->
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

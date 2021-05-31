<template>
  <div class="layout-wrapper">
    <div class="container mx-auto">
      <div class="header">
        <h1 class="header__title">LocalStorage Directive (vue)</h1>
        <p class="header__description">
          Implement a directive that will adjust the value of input. <br />
          The directive should work with different types of input, for example
          checkbox <br />
          <b>P.S:</b> While realizing that some users type quickly enough.
        </p>
      </div>

      <main class="content">
        <form-section />
        <debug-section />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import FormSection from "@/components/FormSection.vue";
import DebugSection from "@/components/DebugSection.vue";

@Component({
  name: "App",
  components: {
    FormSection,
    DebugSection,
  },
})
export default class App extends Vue {}
</script>
<style lang="scss">
body,
html {
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  width: 100%;
  min-height: 100%;
}

.layout-wrapper {
  @apply flex flex-col flex-auto w-full p-2 md:py-8 md:px-4 bg-gray-100;

  .header {
    @apply pb-10;

    &__title {
      @apply inline-block text-3xl font-extrabold text-gray-900 tracking-tight mb-4;
    }

    &__description {
      @apply mt-1 text-sm text-gray-500 sm:mt-0 sm:col-span-2;
    }
  }

  .content {
    @apply grid grid-cols-2 grid-rows-1 gap-4;

    &__section {
      @apply mt-5 md:mt-0 shadow sm:rounded-md sm:overflow-hidden px-4 py-5 bg-white space-y-6 sm:p-6;

      .section__title {
        @apply inline-block text-xl font-bold text-gray-900 tracking-tight mb-4;
      }
    }
  }
}
</style>

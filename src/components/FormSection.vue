<template>
  <section class="content__section">
    <h3 class="section__title">Form controls</h3>
    <div class="controls">
      <label class="control">
        <span class="control__label">Name</span>
        <input
          v-model="name"
          name="name"
          type="text"
          class="control__input"
          placeholder=""
          v-persisted
        />
      </label>
      <label class="control">
        <span class="control__label">Email</span>
        <input
          v-model="email"
          name="email"
          type="email"
          class="control__input"
          placeholder="john@example.com"
          v-persisted
        />
      </label>
      <label class="control">
        <span class="control__label">Date</span>
        <input
          v-model="date"
          name="date"
          type="date"
          class="control__input"
          v-persisted
        />
      </label>
      <label class="control">
        <span class="control__label">Select</span>
        <select
          v-model="select"
          name="select"
          class="control__input"
          v-persisted
        >
          <option value="Event">Event</option>
          <option value="Wedding">Wedding</option>
          <option value="Birthday">Birthday</option>
          <option value="Other">Other</option>
        </select>
      </label>
      <label class="control">
        <span class="control__label">Textarea</span>
        <textarea
          v-model="textarea"
          name="textarea"
          class="control__input"
          rows="3"
          spellcheck="false"
          v-persisted
        ></textarea>
      </label>
      <div class="block">
        <label class="control control--checkbox">
          <input
            v-model="checkbox"
            name="checkbox"
            type="checkbox"
            class="checkbox-input"
            v-persisted
          />
          <span class="ml-2 control__label">checkbox</span>
        </label>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import persistedDirective from "@/common/directives/persisted-directive";

@Component({
  directives: {
    persisted: persistedDirective,
  },
})
export default class FormSection extends Vue {
  name = "";
  email = "";
  date = "";
  select = "";
  textarea = "";
  checkbox = "";
}
</script>

<style lang="scss" scoped>
.content__section {
  .controls {
    @apply grid grid-cols-1 gap-6;

    .control {
      @apply block;

      &--checkbox {
        @apply inline-flex items-center mt-2;

        .checkbox-input {
          @apply rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50;
        }
      }

      &__label {
        @apply text-gray-700;
      }

      &__input {
        @apply mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50;
      }
    }
  }
}
</style>

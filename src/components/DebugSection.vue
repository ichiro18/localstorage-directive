<template>
  <section class="content__section">
    <h3 class="section__title">Debug</h3>
    <ul class="list-disc list-inside">
      <li>
        name:
        <code class="bg-gray-800 text-white px-2 py-0.5">
          {{ name || "undefined" }}
        </code>
      </li>
      <li>
        email:
        <code class="bg-gray-800 text-white px-2 py-0.5">
          {{ email || "undefined" }}
        </code>
      </li>
      <li>
        date:
        <code class="bg-gray-800 text-white px-2 py-0.5">
          {{ date || "undefined" }}
        </code>
      </li>
      <li>
        select:
        <code class="bg-gray-800 text-white px-2 py-0.5">
          {{ select || "undefined" }}
        </code>
      </li>
      <li>
        textarea:
        <code class="bg-gray-800 text-white px-2 py-0.5">
          {{ textarea || "undefined" }}
        </code>
      </li>
      <li>
        checkbox:
        <code class="bg-gray-800 text-white px-2 py-0.5">
          {{ checkbox || "undefined" }}
        </code>
      </li>
    </ul>
    <p><b>P.S:</b> or see Chrome Devtools - Application - LocalStorage</p>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "DebugSection",
})
export default class FormSection extends Vue {
  name = "";
  email = "";
  date = "";
  select = "";
  textarea = "";
  checkbox = "";

  parseData(): void {
    this.name = localStorage.getItem("input[name]") || "";
    this.email = localStorage.getItem("input[email]") || "";
    this.date = localStorage.getItem("input[date]") || "";
    this.select = localStorage.getItem("input[select]") || "";
    this.textarea = localStorage.getItem("input[textarea]") || "";
    this.checkbox = localStorage.getItem("input[checkbox]") || "";
  }
  mounted(): void {
    this.parseData();
    window.addEventListener("persisted:input", this.parseData);
  }
  beforeDestroy(): void {
    window.removeEventListener("persisted:input", this.parseData);
  }
}
</script>

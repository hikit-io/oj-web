<script lang="ts" setup>

</script>

<template>
  <table class="table">
    <thead>
      <tr  style="height: 13px;">
        <td style="width: 28px;"></td>
        <td class="label" colspan="3">Mar</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="week in 7" style="height: 10px;">
        <td class="label" tabindex="0" >
          <span>Sun</span>
        </td>
        <td v-for="i in 52" class="day" tabindex="-1" style="width: 10px;background: #2da212;"></td>
<!--        <td class="day" tabindex="-1" style="width: 10px;background: #2da212;"></td>-->
<!--        <td class="day" tabindex="-1" style="width: 10px;background: #2da212;"></td>-->
<!--        <td class="day" tabindex="-1" style="width: 10px;background: #2da212;"></td>-->
<!--        <td class="day" tabindex="-1" style="width: 10px;background: #2da212;"></td>-->
<!--        <td class="day" tabindex="-1" style="width: 10px;background: #2da212;"></td>-->
<!--        <td class="day" tabindex="-1" style="width: 10px;background: #2da212;"></td>-->
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.table {
  border-collapse: separate;
  border-spacing: 3px;
  position: relative;
  width: max-content;
  overflow: hidden;
  padding: 1em;
}

.label{
  font-size: 12px;
  line-height: 0;
}

.day{
  border-radius: 2px;
  outline: 1px solid rgba(96, 222, 96, 0.42);
  outline-offset: -1px;
  shape-rendering: geometricPrecision;
}
</style>
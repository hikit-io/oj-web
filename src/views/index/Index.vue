<script lang="ts" setup>

import Record from "./Record.vue";
import {ref} from "vue";

const val = ref(['1'])
</script>

<template>
  <var-space style="padding-top: 1em;padding-left: 1em;padding-right: 1em;" :direction="'column'">
    <var-row>
      <h2 style="margin: 0;"> Hi,Nekilc </h2>
    </var-row>
    <var-row :gutter="8" :justify="'space-between'" >
      <var-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
        <var-card :outline="true" :title="'Everyday'">

        </var-card>
      </var-col>
      <var-col :xs="24" :sm="16" :md="16" :lg="16" :xl="16">
        <var-card :outline="true" :title="'He'">
          <template #description>
            <div style="padding: 0.8em;">
              <var-space>
<!--                <var-table>-->
<!--                  <thead>-->
<!--                  <tr>-->
<!--                    <th>No.</th>-->
<!--                    <th>Nickname</th>-->
<!--                    <th>Total</th>-->
<!--                    <th>Win</th>-->
<!--                  </tr>-->
<!--                  </thead>-->
<!--                  <tbody>-->
<!--                  <tr>-->
<!--                    <td>耗子君</td>-->
<!--                    <td>124</td>-->
<!--                    <td>38</td>-->
<!--                  </tr>-->
<!--                  <tr>-->
<!--                    <td>火猫桑</td>-->
<!--                    <td>111</td>-->
<!--                    <td>11</td>-->
<!--                  </tr>-->
<!--                  </tbody>-->
<!--                </var-table>-->
<!--                <var-button type="primary" :size="'large'"> Rank </var-button>-->
              </var-space>
            </div>
          </template>
        </var-card>
      </var-col>
    </var-row>
    <var-row>
      <var-col>
        <var-card :title="'Me'" outline>
          <template #description>
                <Record></Record>
          </template>
        </var-card>
      </var-col>
    </var-row>
  </var-space>
</template>

<style scoped>

</style>
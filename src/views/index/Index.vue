<script lang="ts" setup>

</script>

<template>
  <var-space style="padding-top: 0.5em;padding-left: 0.5em;padding-right: 0.5em;" :direction="'column'">
    <var-row :gutter="8">
      <var-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
        <var-card :outline="true" :title="'Everyday'">

        </var-card>
      </var-col>
      <var-col :xs="24" :sm="16" :md="16" :lg="16" :xl="16">
        <var-card :outline="true" :title="'Ranking'">
          <template #description>
            <div style="padding: 0.8em;">
              <var-space>
                <var-table>
                  <thead>
                  <tr>
                    <th>No.</th>
                    <th>Nickname</th>
                    <th>Total</th>
                    <th>Win</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>耗子君</td>
                    <td>124</td>
                    <td>38</td>
                  </tr>
                  <tr>
                    <td>火猫桑</td>
                    <td>111</td>
                    <td>11</td>
                  </tr>
                  </tbody>
                </var-table>
                <var-button type="primary" :size="'large'"> Rank </var-button>
              </var-space>
            </div>
          </template>
        </var-card>
      </var-col>
    </var-row>
  </var-space>
</template>

<style scoped>

</style>
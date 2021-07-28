<template>
    <v-container
      id="PandL"
      fluid
      tag="section"
    >
      <v-row>
        <v-col
          cols="12"
          md="10"
        >
          <base-material-chart-card
            :data="dataCompletedTasksChart.data"
            :options="dataCompletedTasksChart.options"
            color="info"
            type="Line"
          >
          </base-material-chart-card>
          <base-material-card
            icon="mdi-clipboard-text"
            title="Revenue"
            class="px-5 py-3"
          >
            <v-simple-table>
              <thead>
                <tr>
                  <th>
                  </th>
                  <th>
                    10/26/2020
                  </th>
                  <th>
                    10/27/2020
                  </th>
                  <th>
                    10/28/2020
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Ads
                  </td>
                  <td>
                  </td>
                  <td>
                  </td>
                  <td>
                  </td>
                </tr>
                <tr>
                  <td>
                    Affiliate
                  </td>
                  <td>
                  </td>
                  <td>
                  </td>
                  <td>
                  </td>
                </tr>
              </tbody>
            </v-simple-table>
          </base-material-card>
          <base-material-card
            icon="mdi-clipboard-text"
            title="Expenses"
            class="px-5 py-3"
          >
            <v-simple-table>
              <tbody>
                <tr>
                  <td>
                    Ads
                  </td>
                  <td>
                  </td>
                  <td>
                  </td>
                  <td>
                  </td>
                </tr>
                <tr>
                  <td>
                    Affiliate
                  </td>
                  <td>
                  </td>
                  <td>
                  </td>
                  <td>
                  </td>
                </tr>
              </tbody>
            </v-simple-table>
          </base-material-card>
        </v-col>
        <v-col
          cols="12"
          md="10"
        ></v-col>
      </v-row>
    </v-container>
</template>
<script>
  export default {
    name: 'PandL',
    data () {
      return {
        dataCompletedTasksChart: {
          data: {
            labels: ['12am', '3pm', '6pm', '9pm', '12pm', '3am', '6am', '9am'],
            series: [
              [230, 750, 450, 300, 280, 240, 200, 190],
            ],
          },
          options: {
            lineSmooth: this.$chartist.Interpolation.cardinal({
              tension: 0,
            }),
            low: 0,
            high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
            chartPadding: {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
            },
          },
        },
      }
    },
  }
</script>

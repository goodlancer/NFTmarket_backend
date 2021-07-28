<template>
  <v-container
    id="content"
    fluid
    tag="section"
  >
    <v-row>
      <v-col
      cols="10"
      >
        <v-row>
            <v-btn
              color="success"
              rounded
              class="mr-2"
            >
            Website ABC
            </v-btn>
            <v-btn
              color="success"
              rounded
              class="mr-2"
            >
            Website ABC
            </v-btn>
            <v-btn
              color="success"
              rounded
              class="mr-2"
            >
            Website ABC
            </v-btn>
            <v-btn
              color="success"
              rounded
              class="mr-2"
            >
            Website ABC
            </v-btn>
        </v-row>
        <v-row>
            <v-col
              cols="12"
            >
              <v-simple-table>
                <thead>
                <tr>
                    <th class="primary--text">
                    Keyword Phrase
                    </th>
                    <th class="primary--text">
                    Writer
                    </th>
                    <th class="primary--text">
                    Link
                    </th>
                    <th class="text-right primary--text">
                    Status
                    </th>
                    <th class="primary--text">
                    Date
                    </th>
                </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="keyword in keywords"
                    :key="keyword.id"
                  >
                      <td>{{keyword.keyword}}</td>
                      <td>{{keyword.writer}}</td>
                      <td>{{keyword.links}}</td>
                      <td>{{(keyword.status)? 'Complete' : 'Incomplete'}}</td>
                      <td class="text-center">
                      {{keyword.dateCompleted}}
                      </td>
                  </tr>
                </tbody>
              </v-simple-table>
            </v-col>
        </v-row>
      </v-col>
      <v-col
      cols="2"
      >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'Content',
    data () {
      return {
        keywords: [],
        websites: [],
      }
    },
    mounted () {
      this.getKeywords()
    },
    methods: {
      ...mapActions([
        'getkeywords',
      ]),
      getKeywords () {
        console.log('work')
        this.getkeywords().then((res) => {
          this.keywords = res
        })
      },
    },
  }
</script>

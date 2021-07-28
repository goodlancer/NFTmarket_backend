<template>
  <v-container
    id="mainboard"
    fluid
    tag="section"
  >
    <v-row>
      <v-col
        cols="12"
        md="6"
      >
        <base-material-card
          color="warning"
          class="px-5, py-3"
        >
          <template v-slot:heading>
            <div class="text-h2 Headline font-weight-heaby">
              Revenus: Week of (M-S)
            </div>
          </template>
          <v-card-text />
        </base-material-card>
        <base-material-card
          class="px-5 py-3"
        >
          <template v-slot:heading>
            <div class="text-h2 Headline font-weight-heaby">
              Current Articles In-Progress
            </div>
          </template>
          <v-card-text>
            <v-row>
             <v-col
               cols="3"
             >
                Keyword
                <v-card
                  class="px-3 py-3"
                  v-for="keyword in keywords"
                  :key="keyword.id"
                >
                  {{keyword.keyword}}
                </v-card>
             </v-col>
             <v-col
               cols="3"
             >
                Writer
                <v-card
                  class="px-3 py-3"
                  v-for="keyword in keywords"
                  :key="keyword.id"
                >
                  {{keyword.writer}}
                </v-card>
             </v-col>
             <v-col
               cols="3"
             >
                Site

                <v-card class="px-3 py-3">
                    WebSite ABC
                </v-card>
                <v-card class="px-3 py-3">
                    WebSite ABC
                </v-card>
                <v-card class="px-3 py-3">
                    WebSite ABC
                </v-card>
                <v-card class="px-3 py-3">
                    WebSite ABC
                </v-card>
                <v-card class="px-3 py-3">
                    WebSite ABC
                </v-card>
             </v-col>
             <v-col
               cols="3"
             >
             </v-col>
            </v-row>
          </v-card-text>
        </base-material-card>
      </v-col>
      <v-col
        cols="12"
        md="4"
      >
        <base-material-card
          class="px-5 py-3"
        >
          <template v-slot:heading>
            <div class="text-h2 Headline font-weight-heaby">
              Site Snapshots
            </div>
          </template>
            <v-card-text>
              <v-card
                class="px-5 py-3"
                elevation="10"
              >
                <div class="text-h3 Headline py-2">
                  Website ABC
                </div>
                <v-row>
                  <v-col cols="1">
                    <v-icon
                      v-bind="attrs"
                      v-on="on"
                      color="red"
                    >
                      mdi-alien
                    </v-icon>
                  </v-col>
                  <v-col cols="5">
                    Not Started
                  </v-col>
                  <v-col cols="6">
                    10
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="1">
                    <v-icon
                      v-bind="attrs"
                      v-on="on"
                      color="yellow"
                    >
                      mdi-alien
                    </v-icon>
                  </v-col>
                  <v-col cols="5">
                    In-Progress
                  </v-col>
                  <v-col cols="6">
                    10
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="1">
                    <v-icon
                      v-bind="attrs"
                      v-on="on"
                      color="green"
                    >
                      mdi-alien
                    </v-icon>
                  </v-col>
                  <v-col cols="5">
                    Completed
                  </v-col>
                  <v-col cols="6">
                    10
                  </v-col>
                </v-row>
              </v-card>
              <v-card
                 class="px-5 py-3"
                 elevation="10"
                >
                    <div class="text-h3 Headline py-2">
                        Website ABC
                    </div>
                    <v-row>
                        <v-col cols="1">
                            <v-icon
                                v-bind="attrs"
                                v-on="on"
                                color="red"
                            >
                               mdi-alien
                            </v-icon>
                        </v-col>
                        <v-col cols="5">
                            Not Started
                        </v-col>
                        <v-col cols="6">
                            10
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="1">
                            <v-icon
                                v-bind="attrs"
                                v-on="on"
                                color="yellow"
                            >
                               mdi-alien
                            </v-icon>
                        </v-col>
                        <v-col cols="5">
                            In-Progress
                        </v-col>
                        <v-col cols="6">
                            10
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="1">
                            <v-icon
                                v-bind="attrs"
                                v-on="on"
                                color="green"
                            >
                               mdi-alien
                            </v-icon>
                        </v-col>
                        <v-col cols="5">
                            Completed
                        </v-col>
                        <v-col cols="6">
                            10
                        </v-col>
                    </v-row>
                </v-card>
                <v-card
                 class="px-5 py-3"
                 elevation="10"
                >
                    <div class="text-h3 Headline py-2">
                        Website ABC
                    </div>
                    <v-row>
                        <v-col cols="1">
                            <v-icon
                                v-bind="attrs"
                                color="red"
                                v-on="on"
                            >
                               mdi-alien
                            </v-icon>
                        </v-col>
                        <v-col cols="5">
                            Not Started
                        </v-col>
                        <v-col cols="6">
                            10
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="1">
                            <v-icon
                                v-bind="attrs"
                                color="yellow"
                                v-on="on"
                            >
                               mdi-alien
                            </v-icon>
                        </v-col>
                        <v-col cols="5">
                            In-Progress
                        </v-col>
                        <v-col cols="6">
                            10
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="1">
                            <v-icon
                                v-bind="attrs"
                                color="green"
                                v-on="on"
                            >
                               mdi-alien
                            </v-icon>
                        </v-col>
                        <v-col cols="5">
                            Completed
                        </v-col>
                        <v-col cols="6">
                            219
                        </v-col>
                    </v-row>
                </v-card>
            </v-card-text>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'MainDashBoard',
    data () {
      return {
        keywords: [],
      }
    },
    mounted () {
      this.getKeywords()
    },
    methods: {
      ...mapActions([
        'getkeywords',
        'getWebsite',
      ]),
      getKeywords () {
        console.log('work')
        this.getkeywords().then((res) => {
          console.log(res)
          this.keywords = res
        })
      },
    },
  }
</script>

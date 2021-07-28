<template>
  <v-container>
    <v-row>
      <v-col
        cols="10"
      >
        <v-simple-table class="px-10">
          <tbody>
            <tr>
              <td>How to write an affiliate article</td>
              <td><a href="#">Google Link</a></td>
            </tr>
            <tr>
              <td>How to write an informational article</td>
              <td><a href="#">Google Link</a></td>
            </tr>
            <tr>
              <td>How to transfer ownership of Google Doc to admin</td>
              <td><a href="#">Google Link</a></td>
            </tr>
            <tr>
              <td>How to do this or that</td>
              <td><a href="#">Google Link</a></td>
            </tr>
            <tr
              v-for="item in tutorials"
              :key="item._id"
            >
              <td>{{ item.title }}</td>
              <td><a href=item.googlelink>Google Link</a></td>
            </tr>
          </tbody>
        </v-simple-table>
        <v-btn
          style="margin-top: 10px; margin-right: 10px; float: right;"
          @click="openDialog"
        >Add Tutorail</v-btn>
      </v-col>
      <v-col
        cols="2"
      >
      </v-col>
    </v-row>
    <v-dialog
        v-model="dialog"
        persistent
        max-width="600px"
      >
        <template>
          <v-card>
            <v-card-title>
              Add Tutorail
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                  >
                    <v-text-field
                      v-model="tutorial.title"
                      label="Title"
                      required
                    >
                    </v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                  >
                    <v-text-field
                      v-model="tutorial.googlelink"
                      label="Google Link"
                      required
                    >
                    </v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                  >
                    <v-text-field
                      v-model="tutorial.detail"
                      label="Detail"
                      required
                    >
                    </v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-action>
              <v-spacer></v-spacer>
              <v-btn
                class="mx-3 my-2"
                color="blue darken-1"
                outlined
                @click="dialog=false"
              >
                Close
              </v-btn>
              <v-btn
                class="mx-3 my-2"
                color="blue darken-1"
                outlined
                @click="addTutor"
              >
                Add
              </v-btn>
            </v-card-action>
          </v-card>
        </template>
      </v-dialog>
  </v-container>
</template>
<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'Tutorail',
    data: () => ({
      dialog: false,
      tutorials: [],
      tutorial: {
        title: '',
        detail: '',
        googlelink: '',
      },
    }),
    mounted () {
      this.getTutor()
    },
    methods: {
      ...mapActions([
        'addTutorial',
        'getTutorials',
      ]),
      openDialog () {
        this.tutorial = {
          title: '',
          detail: '',
          googlelink: '',
        }
        this.dialog = true
      },
      getTutor () {
        this.getTutorials().then((res) => {
          console.log(res)
          this.tutorials = res
        })
      },
      addTutor () {
        if (this.tutorial.title !== '' && this.tutorial.detail !== '' && this.tutorial.googlelink !== '') {
          this.addTutorial(this.tutorial).then((res) => {
            console.log(res)
            this.getTutor()
            this.dialog = false
          })
        }
      },
    },
  }
</script>

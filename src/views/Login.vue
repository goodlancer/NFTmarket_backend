<template>
    <v-app>
        <v-content>
            <v-container
              class="fill-height dark"
            >
                <v-row
                  class="align-center justify-center"
                >
                    <v-col
                      cols="4"
                      class="login-form text-center"
                    >
                        <div
                          class="text-h1 bold mb-3"
                        >
                            <v-icon
                              class="mr-2"
                              large="large"
                            >
                            mdi-briefcase
                            </v-icon>
                             Content ERP
                        </div>
                        <v-card light="light">
                            <v-card-text>
                              <div class="subheading text-h2">
                                  <template
                                    v-if="options.isLoggingIn"
                                  >
                                  Log in to your customer portal
                                  </template>
                                  <template
                                    v-else
                                  >
                                  Crate a new account
                                  </template>
                              </div>
                              <v-form class="text-h3">
                                  <v-text-field
                                    v-if="!options.isLoggingIn"
                                    v-model="user.username"
                                    prepend-icon="mdi-account"
                                    label="Name"
                                  >
                                  </v-text-field>
                                  <v-text-field
                                    v-model="user.email"
                                    prepend-icon="mdi-email"
                                    label="Email"
                                    type="email"
                                  >
                                  </v-text-field>
                                  <v-text-field
                                    v-model="user.password"
                                    prepend-icon="mdi-lock"
                                    label="Password"
                                    type="password"
                                  >
                                  </v-text-field>
                                  <v-checkbox
                                    v-if="options.isLoggingIn"
                                    v-model="options.shouldStayLoggedIn"
                                    label="Stay logged in?"
                                    hide-details="hide-details"
                                  >
                                  </v-checkbox>
                                  <v-btn
                                    v-if="options.isLoggingIn"
                                    @click.prevent="LoginMethod"
                                    block="block"
                                    color="#000"
                                    class="text-h3 mt-3"
                                    type="submit"
                                  >
                                  Sign in
                                  </v-btn>
                                  <v-btn
                                    v-else
                                    block
                                    class="text-h3 mt-3"
                                    type="submit"
                                    color="#000"
                                    @click.prevent="SignupMethod"
                                  >
                                  Sign up
                                  </v-btn>
                              </v-form>
                            </v-card-text>
                        </v-card>
                        <div
                          class="text-h3"
                          v-if="options.isLoggingIn"
                        >
                          Don't have an account?
                            <v-btn
                              class="text-h4"
                              color="#000"
                              @click="options.isLoggingIn = false"
                              >
                              Sign up
                            </v-btn>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    data () {
      return {
        user: {
          email: '',
          password: '',
          username: '',
        },
        options: {
          isLoggingIn: true,
          shouldStayLoggedIn: true,
        },
      }
    },
    methods: {
      ...mapActions([
        'loginUser',
        'SignupUser',
      ]),
      SignupMethod () {
        const {
          email,
          password,
          username,
        } = this.user
        this.SignupUser({
          email,
          password,
          username,
        }).then((result) => {
          console.log(result)
          this.$router.replace('/')
        }).catch((message) => {
          alert(message)
        }).finally(() => {
          // this.loading = false
        })
      },
      LoginMethod () {
        const {
          email,
          password,
        } = this.user
        this.loginUser({
          email,
          password,
        }).then((result) => {
          console.log(result)
          this.$router.replace('/')
        }).catch((message) => {
          alert(message)
        }).finally(() => {
          // this.loading = false
        })
      },
    },
  }
</script>

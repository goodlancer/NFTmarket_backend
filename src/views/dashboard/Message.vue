<template>
  <v-container
    class="fill-height"
    style="display: block;"
  >
    <v-row class="fill-height">
      <v-col
        cols="10"
      >
        <v-row class="fill-height">
          <v-col
            cols="4"
          >
            <v-list enabled>
              <v-subheader class="text-h3">Contacts/Team</v-subheader>
              <v-list-item-group
                v-model="selectedItem"
                color="primary"
              >
                <v-list-item
                  v-for="(item, i) in items"
                  :key="i"
                  @click="userClick(item.text)"
                >
                  <v-list-item-icon>
                    <v-avatar
                      color="red"
                      size="36"
                    >
                      <span class="white--text">
                       {{item.text[0]}}
                      </span>
                    </v-avatar>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-col>
          <v-col
            cols="8"
          >
            <v-col
              cols="12"
              class="fill-height"
            >
              <v-container
                class="fill-height"
              >
                <v-row
                  class="fill-height"
                  align="end"
                  style="border: 1px solid"
                >
                  <v-col
                    cols="12"
                  >
                    <div
                      v-for="(item, index) in chat"
                      :key="index"
                      :class="['d-flex flex-row align-center my-2', item.from == 'user' ? 'justify-end': null]"
                    >
                      <v-chip
                        v-if="item.from == 'user'"
                        class="blue--text mr-3 ma-2"
                        label
                      >
                        {{ item.msg }}
                      </v-chip>
                      <v-avatar
                        :color="item.from == 'user' ? 'indigo': 'red'"
                        size="36"
                      >
                        <span class="white--text">
                          {{ item.from[0] }}
                        </span>
                      </v-avatar>
                      <v-chip
                        v-if="item.from != 'user'"
                        class="blue--text ma-2 ml-3"
                        label
                      >
                        {{ item.msg }}
                      </v-chip>
                    </div>
                  </v-col>
                </v-row>
                <v-text-field
                  v-model="message"
                  :append-outer-icon="message ? 'mdi-send' : 'mdi-send'"
                  :prepend-icon="icon"
                  filled
                  clear-icon="mdi-close-circle"
                  clearable
                  label="Message"
                  type="text"
                  @click:append="toggleMarker"
                  @click:append-outer="sendMessage"
                  @click:prepend="changeIcon"
                  @click:clear="clearMessage"
                  class="mt-5"
                ></v-text-field>
              </v-container>
            </v-col>
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
  export default {
    name: 'Message',
    data () {
      return {
        chat: [],
        show: false,
        message: '',
        marker: true,
        iconIndex: 0,
        icons: [
          'mdi-emoticon',
          'mdi-emoticon-cool',
          'mdi-emoticon-dead',
          'mdi-emoticon-excited',
          'mdi-emoticon-happy',
          'mdi-emoticon-neutral',
          'mdi-emoticon-sad',
          'mdi-emoticon-tongue',
        ],
        selectedItem: 1,
        items: [
          { text: 'Real-Time', icon: 'mdi-clock' },
          { text: 'Audience', icon: 'mdi-account' },
          { text: 'Conversions', icon: 'mdi-flag' },
        ],
        selectedUser: '',
      }
    },
    computed: {
      icon () {
        return this.icons[this.iconIndex]
      },
    },
    methods: {
      toggleMarker () {
        this.marker = !this.marker
      },
      sendMessage () {
        this.chat.push({
          from: 'user',
          msg: this.message,
        })
        this.addReply()
        this.resetIcon()
        this.clearMessage()
      },
      addReply () {
        this.chat.push({
          from: this.selectedUser,
          msg: 'Ok, got it',
        })
      },
      clearMessage () {
        this.message = ''
      },
      resetIcon () {
        this.iconIndex = 0
      },
      changeIcon () {
        this.iconIndex === this.icons.length - 1
          ? this.iconIndex = 0
          : this.iconIndex++
      },
      userClick (user) {
        console.log(user)
        this.selectedUser = user
      },
    },
  }
</script>

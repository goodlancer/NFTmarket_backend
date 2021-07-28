<template>
  <v-container
    id="Orgenization"
    fluid
    tag="section"
  >
    <v-row>
      <v-col
        cols="12"
        md="10"
      >
        <v-row
          class="px-10"
        >
          <v-col
            cols="10"
          >
            <v-chip
              v-for="website in websites"
              :key="website.id"
              class="ma-2"
              color="green"
              @click="selectWeb(website.id)"
            >
              {{ website.websiteName }}
            </v-chip>
          </v-col>
          <v-col
            cols="2"
          >
            <v-btn
              class="mx-2"
              fab
              small
              color="gray"
              @click="dialog=true"
            >
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-row
          class="px-10"
        >
          <v-col
            cols="12"
          >
            <v-row>
              <v-btn
                class="mx-5"
                small
                tile
                color="warning"
                @click="openAddMember(1)"
              >
                <v-icon left>
                  mdi-plus
                </v-icon>
                Admin
              </v-btn>
              <v-btn
                class="mx-5"
                small
                tile
                color="warning"
                @click="openAddMember(2)"
              >
                <v-icon left>
                  mdi-plus
                </v-icon>
                Editor
              </v-btn>
              <v-btn
                class="mx-5"
                small
                tile
                color="warning"
                @click="openAddMember(3)"
              >
                <v-icon left>
                  mdi-plus
                </v-icon>
                Writer
              </v-btn>
            </v-row>
            <v-row>
              <v-col
                cols="5"
              >
                <v-treeview
                  class="my-16"
                  :open="initiallyOpen"
                  activatable
                  big
                  color="blue"
                  :items="websiteItem"
                  item-key="index"
                  @click="viewMember(item-key)"
                >
                  <template
                    slot="label"
                    slot-scope="{ item }"
                  >
                    <v-icon v-if="item.name">
                      mdi-account
                    </v-icon>
                    <a @click="viewMember(item.index)"> {{ item.name }} </a>
                  </template>
                </v-treeview>
              </v-col>
              <v-col
                cols="7"
              >
                <v-card class="py-3 px-3 fill-height">
                  <v-card-title>
                    {{ viewableMember.name }}
                  </v-card-title>
                  <v-card-text>
                    {{ viewableMember.detail }}
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col
        cols="12"
        md="2"
      >
      </v-col>
      <v-dialog
        v-model="dialog"
        persistent
        max-width="600px"
      >
        <template>
          <v-card>
            <v-card-title>
              Add SiteName
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                  >
                    <v-text-field
                      v-model="webstie_Name"
                      label="Website Name"
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
                @click="addWebstie"
              >
                Add
              </v-btn>
            </v-card-action>
          </v-card>
        </template>
      </v-dialog>
      <v-dialog
        v-model="MemberDialog"
        persistent
        max-width="600px"
      >
        <template>
          <v-card>
            <v-card-title>
              Add Member
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                  >
                    <v-select
                      v-if="member.role === 3"
                      v-model="member.releatedId"
                      :items="releatedMembers"
                      item-text="name"
                      item-value="_id"
                      label="Website Name"
                      required
                    >
                    </v-select>
                  </v-col>
                  <v-col
                    cols="12"
                  >
                    <v-text-field
                      v-model="member.name"
                      label="Website Name"
                      required
                    >
                    </v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                  >
                    <v-textarea
                      name="input-7-1"
                      label="Default style"
                      v-model="member.detail"
                      hint="Hint text"
                    ></v-textarea>
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
                @click="MemberDialog=false"
              >
                Close
              </v-btn>
              <v-btn
                class="mx-3 my-2"
                color="blue darken-1"
                outlined
                @click="addMembers"
              >
                Add
              </v-btn>
            </v-card-action>
          </v-card>
        </template>
      </v-dialog>
    </v-row>
  </v-container>
</template>
<script>
  import { mapActions } from 'vuex'
  export default {
    data: () => ({
      dialog: false,
      MemberDialog: false,
      webstie_Name: '',
      viewableMember: {
        name: '',
        detail: '',
      },
      member: {
        orgenizeId: '',
        releatedId: 0,
        name: '',
        detail: '',
        role: 0,
      },
      selectedWebsite: '',
      websites: [],
      initiallyOpen: [
        'public',
      ],
      releatedMembers: [],
      adminMember: null,
      editorMember: [],
      allMebers: [],
      websiteItem: [
        {
          name: 'Admin: Bob Slod',
          index: 1,
          children: [
            {
              name: 'Editor: Dan Kemp',
              index: 3,
              children: [
                {
                  name: 'writer: JusttimOveloder',
                  index: 2,
                },
                {
                  name: 'writer: Gray Flink',
                  index: 4,
                },
                {
                  name: 'writer: Aron Think',
                  index: 5,
                },
                {
                  name: 'writer: Chrise Kring',
                  index: 6,
                },
              ],
            },
          ],
        },
      ],
    }),
    mounted () {
      this.getWebsites()
    },
    methods: {
      ...mapActions([
        'addWebsite',
        'getWebsite',
        'addmember',
        'getmember',
      ]),
      getWebsites () {
        this.getWebsite().then((res) => {
          console.log(res)
          this.websites = []
          res.map((webitem) => {
            this.websites.push({
              id: webitem._id,
              websiteName: webitem.name,
            })
          })
          this.selectWeb(this.websites[0].id)
        })
      },
      addWebstie () {
        if (this.webstie_Name !== '') {
          const name = this.webstie_Name
          this.addWebsite({ name }).then((res) => {
            console.log(res)
            alert('Website Additional is completed')
            // this.webstie_Name = ''
            this.getWebsites()
          }).catch((err) => {
            console.log(err)
            alert('Faild')
          })
          // this.websites.push({
          //   id: 1,
          //   websiteName: this.webstie_Name,
          // })
        }
        this.dialog = false
      },
      selectWeb (id) {
        this.selectedWebsite = id
        const data = { id: id }
        this.getmember(data).then((res) => {
          console.log(res)
          this.websiteItem = [{
            name: 'Admin: ',
            index: 0,
            children: [],
          }]
          this.adminMember = null
          this.editorMember = []
          this.allMebers = res
          res.map((ele) => {
            console.log(ele)
            switch (ele.role) {
              case 1:
                this.websiteItem[0].name = 'Admin: ' + ele.name
                this.websiteItem[0].index = ele._id
                this.adminMember = ele
                break
              case 2:
                this.websiteItem[0].children.push({
                  name: 'Editor: ' + ele.name,
                  index: ele._id,
                  children: [],
                })
                this.editorMember.push(ele)
                break
              case 3:
                var found = this.websiteItem[0].children.find(element => element.index === ele.releatedId)
                console.log(found)
                found.children.push({
                  name: 'Writer: ' + ele.name,
                  index: ele._id,
                })
                break
            }
          })
        })
      },
      openAddMember (role) {
        this.member = {
          orgenizeId: this.selectedWebsite,
          releatedId: 0,
          name: '',
          detail: '',
          role: role,
        }
        this.releatedMembers = []
        switch (role) {
          case 2:
            this.member.releatedId = this.adminMember._id
            break
          case 3:
            this.releatedMembers = this.editorMember
            break
        }
        console.log('working')
        console.log(this.releatedMembers)
        this.MemberDialog = true
        if (this.adminMember && role === 1) {
          alert('The admin is exists')
          this.MemberDialog = false
        }
      },
      addMembers () {
        console.log(this.member)
        this.addmember(this.member).then((res) => {
          console.log(res)
          if (res === true) {
            alert('Completed')
            this.selectWeb(this.selectedWebsite)
            this.MemberDialog = false
          }
        })
      },
      viewMember (index) {
        var viewItem = this.allMebers.find(element => element._id === index)
        console.log(viewItem)
        this.viewableMember.name = viewItem.name
        this.viewableMember.detail = viewItem.detail
      },
    },
  }
</script>

<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3 ml-3">Orders</h1>
        <v-list two-line subheader>
          <v-list-tile
                  avatar
                  v-for="order in orders"
                  :key="order.id"
          >
            <v-list-tile-action>
                  <v-checkbox class="ml-4"
                          color="success"
                          :input-value="order.done"
                          @change="markDone(order)"
                  ></v-checkbox>
            </v-list-tile-action >
            <v-list-tile-content>

              <span class="ml-4">
                 <v-list-tile-title>{{ order.name}}</v-list-tile-title>
              </span>
              <span class="ml-3">
                 <v-list-tile-sub-title>{{order.phone}}</v-list-tile-sub-title>
              </span>

            </v-list-tile-content>
            <v-list-tile-action>
                 <v-btn
                         :to="'/ad/' + order.adId"
                         class="primary ml-8"
                 >Open</v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        orders: [
          {
            id: 'fds3',
            name: 'Vladimir',
            phone: '8-977-777-77-77',
            adId: '123',
            done: false
          }
        ]
      }
    },
    methods: {
      markDone (order) {
        order.done = true
      }
    }
  }
</script>

<style scoped>


</style>

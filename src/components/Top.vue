<template>
  <div>
    <h2 class="title">テニス合宿選手権</h2>
    <v-img :src="this.img" class="img"></v-img>
    <br />
    <v-divider></v-divider>
    <br />
    <v-card class="mx-auto card" max-width="350">
      <v-card-text>
        <div>最新の対戦結果</div>
      </v-card-text>
      <div class="text">
        <div>いいだ 6-0 おかだ</div>
        <div>おかだ 6-3 やまぐち</div>
        <div>おかだ 7-5 やまだ</div>
      </div>
    </v-card>
    <br />
    <v-divider></v-divider>
    <br />
    <v-container class="container">
      <v-row>
        <v-col>
          <router-link :to="{ name : 'RegisterSinglesPlayer' }">シングルス選手登録</router-link>
        </v-col>
        <v-col>
          <router-link :to="{ name : 'RegisterDoublesPlayer' }">ダブルス選手登録</router-link>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <router-link :to="{ name : 'ShowPlayerList' }">選手一覧</router-link>
        </v-col>
        <v-col>
          <router-link :to="{ name : 'RegisterMatch' }">試合結果登録</router-link>
        </v-col>
        <v-col>
          <router-link :to="{ name : 'EditMatch' }">試合結果一覧</router-link>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      img: require("@/assets/mario.jpg"),
    };
  },
  created() {
    this.$axios.get('/showAllSinglesPlayers')
      .then((res) => {
        this.setSinglesPlayers(res.data)
    })
    this.$axios.get('/showAllDoublesPlayer')
      .then((res) => {
        this.setDoublesPlayers(res.data)
    })
  },
  methods: {
    ...mapActions(["setSinglesPlayers","setDoublesPlayers"]),
  }
};
</script>

<style scoped>
.img {
  width: 60%;
  margin: 0 auto;
  margin-top: 50px;
}
.title {
  text-align: center;
  margin-top: 50px;
  font-family: 'arial unicode ms';
  letter-spacing: 0.2em;
}
.text {
  text-align: center;
  margin: 0 auto;
}
.card {
  padding-bottom: 10px;
}
.container {
  text-align: center;
}
</style>
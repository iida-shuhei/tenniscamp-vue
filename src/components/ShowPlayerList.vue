<template>
  <div>
    <h2 class="title">選手一覧</h2>
    <v-container>
      <v-row dense>
        <v-col v-for="(player, i) in players" :key="i" cols="12">
          <v-card>
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title v-text="player.singlesPlayerName"></v-card-title>
                <v-col>
                  勝ち :
                  <span v-text="player.totalWin"></span>回
                  <br />負け :
                  <span v-text="player.totalLose"></span>回
                  <br />ミッション数 :
                  <span v-text="player.totalMission"></span>個
                  <br />現在の得点 :
                  <span v-text="player.totalScore"></span>点
                  <br />
                </v-col>
              </div>
              <v-avatar class="ma-3" size="125" tile>
                <v-img :src="player.imagePath"></v-img>
              </v-avatar>
            </div>
            <v-card-actions>
              現在の順位 :
              <span v-text="player.ranking"></span>位
              <v-btn @click="openPlayerDetail()" tile outlined color="success" class="right">対戦結果を表示</v-btn>
            </v-card-actions>

          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <div class="link">
      <router-link to="/">トップに戻る</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      players: [
        {
          imagePath: '',
          singlesPlayerName: '',
          totalWin: '',
          totalLose: '',
          totalMission: '',
          totalScore: '',
          ranking: '',
          show: false,
        }
      ],
    };
  },
  created() {
    this.$axios.get('/showPlayers').then((res) => {
      this.players = res.data
    })
  }
};
</script>

<style scoped>
.title {
  margin-top: 50px;
  text-align: center;
  margin-bottom: 30px;
  font-family: "Osaka", sans-serif;
}
.link {
  text-align: center;
  margin-top: 30px;
  margin-bottom: 50px;
}
.right {
  margin: 0 0 0 auto;
}
</style>
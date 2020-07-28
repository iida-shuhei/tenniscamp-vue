<template>
  <div>
    <h2 class="title">選手一覧</h2>
    <v-container>
      <v-row dense>
        <v-col v-for="(player, i) in players" :key="i" cols="12">
          <v-card>
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title v-text="player.name"></v-card-title>
                <v-col>
                  勝ち :
                  <span v-text="player.win"></span>回
                  <br />負け :
                  <span v-text="player.lose"></span>回
                  <br />現在の順位 :
                  <span v-text="player.ranking"></span>位
                </v-col>
              </div>
              <v-avatar class="ma-3" size="125" tile>
                <v-img :src="player.src"></v-img>
              </v-avatar>
            </div>
              <v-card-actions>
                <v-btn @click="player.show = !player.show" tile outlined color="success">
                  対戦結果を表示
                </v-btn>
              </v-card-actions>

              <v-expand-transition>
                <div v-show="player.show">
                  <v-divider></v-divider>
                  <v-card-text>＜第一試合＞いいだ 6-0 おかだ</v-card-text>
                  <v-card-text>＜第二試合＞いいだ 6-0 やまぐち</v-card-text>
                </div>
              </v-expand-transition>
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
          src:
            "https://www.pakutaso.com/shared/img/thumb/MAX76_gjmax20140531_TP_V.jpg",
          name: "いいだ",
          win: 10,
          lose: 0,
          ranking: 1,
          show:false
        },
        {
          src:
            "https://www.pakutaso.com/shared/img/thumb/pp816IMGL0940_TP_V.jpg",
          name: "おかだ",
          win: 9,
          lose: 1,
          ranking: 2,
          show:false
        },
        {
          src:
            "https://assets.st-note.com/production/uploads/images/19855572/rectangle_large_type_2_72744417486396017220388f631f2107.jpeg?fit=bounds&format=jpeg&quality=45&width=960",
          name: "やまぐち",
          win: 8,
          lose: 2,
          ranking: 3,
          show:false
        },
        {
          src:
            "https://publicdomainq.net/images/201811/30s/publicdomainq-0028892nxr.jpg",
          name: "いしい",
          win: 7,
          lose: 3,
          ranking: 4,
          show:false
        },
        {
          src:
            "https://i.pinimg.com/originals/8d/32/f8/8d32f89bcd8e85b1ea266142e394fbae.jpg",
          name: "たかだ",
          win: 6,
          lose: 4,
          ranking: 5,
          show:false
        },
        {
          src:
            "https://www.pakutaso.com/shared/img/thumb/MAX86_gaijinnohannou20140531_TP_V.jpg",
          name: "よだ",
          win: 5,
          lose: 5,
          ranking: 6,
          show:false
        },
        {
          src:"https://pbs.twimg.com/profile_images/1098840651586650112/ZeGCzNRZ_400x400.png",
          name: "おぜき",
          win: 4,
          lose: 6,
          ranking: 7,
          show:false
        },
        {
          src:
            "https://www.ta-me-shi-te.net/master/wp-content/uploads/2014/12/LIG86_tonakaiagnet500-thumb-792x500-3718-630x397.jpg",
          name: "うえむら",
          win: 3,
          lose: 7,
          ranking: 8,
          show:false
        },
        {
          src:
            "https://d1f5hsy4d47upe.cloudfront.net/cb/cb1fac909a2449dc7472146ce1657ff1_t.jpeg",
          name: "さとう",
          win: 2,
          lose: 8,
          ranking: 9,
          show:false
        },
        {
          src:"https://rentry.jp/note/wp-content/uploads/2018/10/smartphone_happy_tereru_man.png",
          name: "やまだ",
          win: 1,
          lose: 9,
          ranking: 10,
          show:false
        },
      ],
    };
  },
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
</style>
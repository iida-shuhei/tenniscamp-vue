<template>
  <div>
    <h2 class="title">試合結果登録</h2>
    <v-card class="mx-auto card" max-width="350">
      <v-container>
        <v-radio-group v-model="match" row>
          <v-radio label="シングルス" value="1"></v-radio>
          <v-radio label="ダブルス" value="2"></v-radio>
        </v-radio-group>
        <v-select
          v-if="this.match == 1"
          v-model="single1"
          :items="players"
          label="自分の名前を選択"
          required
        ></v-select>
        <v-select
          v-if="this.match == 1"
          v-model="single2"
          :items="players"
          label="相手の名前を選択"
          required
        ></v-select>
        <v-select
          v-if="this.match == 2"
          v-model="double1"
          :items="players"
          label="自分の名前を選択"
          required
        ></v-select>
        <v-select
          v-if="this.match == 2"
          v-model="double2"
          :items="players"
          label="自分のペアを選択"
          required
        ></v-select>
        <v-select
          v-if="this.match == 2"
          v-model="double3"
          :items="players"
          label="相手の名前を選択"
          required
        ></v-select>
        <v-select
          v-if="this.match == 2"
          v-model="double4"
          :items="players"
          label="相手の名前を選択"
          required
        ></v-select>
        <v-row>
          <v-col>
            <v-select
              v-model="score1"
              :items="scores"
              label="自分のスコア"
              required
            ></v-select>
          </v-col>
          <v-col cols="1"><div><br>−</div></v-col>
          <v-col>
            <v-select
              v-model="score2"
              :items="scores"
              label="相手のスコア"
              required
            ></v-select>
          </v-col>
        </v-row>
        <v-radio-group v-model="result" row>
          <v-radio label="勝ち" value="1"></v-radio>
          <v-radio label="負け" value="2"></v-radio>
        </v-radio-group>
        <v-select v-model="mustMission" :items="missions" label="必須ミッション" required></v-select>
        <v-select v-model="addMission" :items="missions" label="追加ミッション" required></v-select>
        <v-row>
          <v-btn
            outlined
            color="indigo"
            class="ma-2 white--text register"
            @click="registerSingles()"
            v-if="this.match == 1"
          >
            シングルスの試合結果登録
            <v-icon right dark>mdi-checkbox-marked-circle</v-icon>
          </v-btn>
          <v-btn
            outlined
            color="indigo"
            class="ma-2 white--text register"
            @click="registerDoubles()"
            v-if="this.match == 2"
          >
            ダブルスの試合結果登録
            <v-icon right dark>mdi-checkbox-marked-circle</v-icon>
          </v-btn>
          <br />
        </v-row>
      </v-container>
    </v-card>
    <div class="link">
      <router-link to="/">トップに戻る</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      players: ["いいだ", "おかだ", "やまぐち", "いしい"],
      missions: ["クリアならず", "1つクリア", "2つクリア"],
      scores:["0","1","2","3","4","5","6","7"],
      match: "1",
      single1: "",
      single2: "",
      double1: "",
      double2: "",
      score1:"",
      score2:"",
      result: "1",
      mustMission: "",
      addMission: "",
    };
  },
  methods: {
   registerSingles() {
    this.$router.push('/')
   },
   registerDoubles() {
    this.$router.push('/')
   }
  }
};
</script>

<style scoped>
.uploadButton {
  display: inline-block;
  position: relative;
  overflow: hidden;
  border-radius: 3px;
  background: #099;
  color: #fff;
  text-align: center;
  padding: 7px;
  width: 180px;
  cursor: pointer;
}
.uploadButton:hover {
  background: #0aa;
}
.uploadButton input[type="file"] {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  opacity: 0;
}
.uploadValue {
  display: none;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
  padding: 3px;
  color: #ffffff;
}
.btn {
  width: 100%;
}
.register {
  width: 94%;
}
.title {
  margin-top: 30px;
  text-align: center;
  margin-bottom: 20px;
  font-family: "Osaka", sans-serif;
}
.link {
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>
<template>
  <div>
    <h2 class="title">選手登録</h2>
    <v-card class="mx-auto card" max-width="350">
      <v-container>
        <v-row>
          <v-col>
            <v-text-field v-model="name" label="名前" required></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <div class="uploadButton btn">
              画像を選択
              <input
                type="file"
                class="btn"
                onchange="uv.style.display='inline-block'; uv.value = this.value;"
              />
              <v-icon right dark>mdi-cloud-upload</v-icon>
              <input type="text" id="uv" class="uploadValue" disabled />
            </div>
            <br />
            <br />
          </v-col>
          <v-btn outlined color="indigo" class="ma-2 white--text register" @click="registerPlayer()">
            選手登録
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
    };
  },
  methods: {
    registerPlayer() {
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
  margin-top: 50px;
  text-align: center;
  margin-bottom: 50px;
  font-family: "Osaka", sans-serif;
}
.link {
  text-align: center;
  margin-top: 50px;
}
</style>
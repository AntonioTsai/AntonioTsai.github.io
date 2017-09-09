<template>
  <section class="containner">
    <b-jumbotron class="text-center">
      <h1 slot="header" class="display-4">About Me</h1>
      <p slot="lead" class="mx-5 my-2">喜歡研究各式各樣的網頁開發技術，對視覺化相關的技術很感興趣，只要是關於網站開發的技術都樂於學習。偶爾會設計些小工具讓生活可以過的更便利點，能自動化的事，就不要手動處理，畢竟，科技始終於人性，
        <del>人性就是懶惰。</del>
      </p>
      <hr class="mx-5 my-4">
      <b-row class="justify-content-lg-center">
        <template v-for="button in contacts">
          <b-col col md="auto" :key="`_${button.name}`">
            <b-button :variant="button.variant">
              <img :src="button.icon"> {{ button.name }}
            </b-button>
          </b-col>
        </template>
      </b-row>
    </b-jumbotron>
  </section>
</template>

<script>
export default {
  fetch ({ store, params }) {
    store.commit('setPageTitle', 'index')
  },
  data () {
    return {
      contacts: [
        {
          herf: '#Resume_Download_Link',
          icon: require('~/assets/ic_file_download_white_18dp_1x.png'),
          name: 'Resume',
          variant: 'primary'
        },
        {
          herf: 'mailto:antonio.tsaii@gmail.com',
          icon: require('~/assets/ic_mail_outline_white_18dp_1x.png'),
          name: 'antonio.tsaii@gmail.com',
          variant: 'outline-sucess'
        },
        {
          herf: 'http://github.com/AntonioTsai',
          icon: require('~/assets/GitHub-Mark-Light-32px.png'),
          name: 'AntonioTsai',
          variant: 'outline-sucess'
        }]
    }
  },
  layout: 'personal-site'
}
</script>

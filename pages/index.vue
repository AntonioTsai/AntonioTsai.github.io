<template>
  <section class="containner">
    <b-jumbotron class="text-center">
      <template slot="header" class="display-4">About Me</template>
      <template slot="lead" class="mx-5 my-2">喜歡研究各式各樣的網頁開發技術，對視覺化相關的技術很感興趣，只要是關於網站開發的技術都樂於學習。偶爾會設計些小工具讓生活可以過的更便利點，能自動化的事，就不要手動處理，畢竟，科技始終於人性，
        <del>人性就是懶惰</del>。
      </template>

      <hr class="mx-5 my-4">
      <b-row>
        <b-col cols="12" lg="6">
          <h2>Contact</h2>
          <b-row class="justify-content-center">
            <b-col cols="12">
              <template v-for="button in contacts">
                <address :key="`_${button.name}`">
                  <strong>{{ button.name + ': ' }}</strong>
                  <a :href="button.href">{{ button.text }}</a>
                </address>
              </template>
            </b-col>
          </b-row>
        </b-col>
        <b-col md="12" class="d-block d-lg-none">
          <hr class="mx-5 my-4">
        </b-col>
        <b-col cols="12" lg="6">
          <h2>Resume</h2>
          <b-row class="justify-content-center">
            <b-col cols="auto">
              <b-button variant="primary" size="sm" :href="resume.href" class="resume">{{ resume.text}}
                <i class="material-icons align-middle">{{ resume.icon }}</i>
              </b-button>
            </b-col>
          </b-row>
        </b-col>
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
          href: 'https://github.com/AntonioTsai',
          name: 'GitHub',
          text: 'https://github.com/AntonioTsai'
        },
        {
          href: 'mailto:antonio.tsaii@gmail.com',
          name: 'Email',
          text: 'antonio.tsaii@gmail.com'
        }
      ],
      resume: {
        href: '#Resume_Download_Link',
        icon: 'file_download',
        text: 'Download'
      }
    }
  },
  layout: 'personal-site'
}
</script>

<style lang="scss" scoped>
$button-icon:1.2em;

.resume {
  i.material-icons {
    font-size: $button-icon;
  }
}
</style>

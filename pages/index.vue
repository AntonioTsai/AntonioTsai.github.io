<template>
  <section class="containner">
    <div>
      <p>
        喜歡研究各式各樣的網頁開發技術，對於跟視覺化相關的技術都很感興趣，只要是關於網站開發的技術都樂於學習。
      </p>
      <p>
        能自動化的事，就不要手動處理，興趣是利用自己所擁有的技術去開發使生活更便利的小工具。
      </p>
    </div>
  </section>
</template>

<script>
export default {
  fetch ({ store, params }) {
    store.commit('setPageTitle', 'index')
  },
  layout: 'personal-site'
}
</script>

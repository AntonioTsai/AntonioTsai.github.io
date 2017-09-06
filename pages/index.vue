<template>
  <section class="containner">
    <div>
      <p>
        喜歡研究各式各樣的網頁開發技術，對視覺化相關的技術很感興趣，只要是關於網站開發的技術都樂於學習。
      </p>
      <p>
        偶爾會設計些小工具讓生活可以過的更便利點，能自動化的事，就不要手動處理，畢竟，科技始終於人性，
        <del>人性就是懶惰。</del>
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

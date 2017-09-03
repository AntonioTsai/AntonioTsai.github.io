<template>
  <b-container>
    <div class="header clearfix">
      <b-nav tabs class="float-right">
        <b-nav-item href="/about" active>About Me</b-nav-item>
        <b-nav-item href="/skills">Skills</b-nav-item>
        <b-nav-item href="experiences">Experiences</b-nav-item>
        <b-nav-item href="projects">Projects</b-nav-item>
      </b-nav>
      <div class="brand">
        <b-img left rounded="circle" src="https://www.gravatar.com/avatar/28150f77152f009b564a81c0a0b603e1" alt="Gravatar"></b-img>
        <h3 class="text-muted align-middle">蔡豐年 | Fung-Nien Tsai | Antonio</h3>
      </div>
    </div>
    <nuxt/>
  </b-container>
</template>

<style lang="scss">
$brand-size:50px;

.brand {
  h3 {
    line-height: $brand-size;
  }

  img {
    width: $brand-size;
    height: $brand-size;
    margin-left: .5em;
    margin-right: .5em;
  }
}

body {
  padding-top: 2.5rem
}
</style>

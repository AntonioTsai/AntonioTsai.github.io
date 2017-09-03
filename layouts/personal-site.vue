<template>
  <b-container>
    <div class="header clearfix">
      <b-nav tabs class="float-right">
        <b-nav-item active>About Me</b-nav-item>
        <b-nav-item>Skills</b-nav-item>
        <b-nav-item>Experiences</b-nav-item>
        <b-nav-item>Projects</b-nav-item>
        <b-nav-item>Contact</b-nav-item>
      </b-nav>
      <div class="brand">
        <b-img left rounded="circle" width="60" height="60" src="https://www.gravatar.com/avatar/28150f77152f009b564a81c0a0b603e1" alt="Gravatar"></b-img>
        <h2 class="text-muted align-middle">蔡豐年 | Fung-Nien Tsai | Antonio</h2>
      </div>
    </div>
    <nuxt/>
  </b-container>
</template>

<style>
.brand h2 {
  line-height: 60px;
}

body {
  padding-top: 2.5rem;
}
</style>

<template>
  <b-container>
    <b-navbar toggleable="md" class="header" variant="light" type="light" sticky>

      <!-- Brand part -->
      <b-navbar-brand href="#" class="brand">
        <b-img left rounded="circle" src="https://www.gravatar.com/avatar/28150f77152f009b564a81c0a0b603e1" alt="Gravatar"></b-img>
        <h3 class="text-muted d-none d-md-block">蔡豐年 / Antonio / Fung-Nien Tsai</h3>
      </b-navbar-brand>

      <!-- nav collapse button -->
      <b-nav-toggle target="nav_collapse" class="ml-auto"><img src="~/assets/ic_menu_black_18dp_2x.png" alt=""></b-nav-toggle>

      <b-collapse is-nav id="nav_collapse">

        <!-- Nav items nav for screen size < md(992px) -->
        <b-nav is-nav-bar class="d-md-none" right>
          <b-nav-text class="brand">
            蔡豐年 / Antonio /
            <span>
              Fung-Nien Tsai
            </span>
          </b-nav-text>
          <b-nav-item href="/about" v-bind:active="current_page === 'about'">About Me</b-nav-item>
          <b-nav-item href="/skills" v-bind:active="current_page === 'skills'">Skills</b-nav-item>
          <b-nav-item href="experiences" v-bind:active="current_page === 'experiences'">Experiences</b-nav-item>
          <b-nav-item href="projects" v-bind:active="current_page === 'projects'">Projects</b-nav-item>
        </b-nav>

        <!-- Right aligned nav items nav for screen size >= lg(992px) -->
        <b-nav tabs class="ml-lg-auto d-none d-lg-flex" right>
          <b-nav-item href="/about" v-bind:active="current_page === 'about'">About Me</b-nav-item>
          <b-nav-item href="/skills" v-bind:active="current_page === 'skills'">Skills</b-nav-item>
          <b-nav-item href="experiences" v-bind:active="current_page === 'experiences'">Experiences</b-nav-item>
          <b-nav-item href="projects" v-bind:active="current_page === 'projects'">Projects</b-nav-item>
        </b-nav>

        <!-- Right aligned nav items for screen size >= .md(768px) -->
        <b-nav is-nav-bar class="ml-md-auto d-none d-md-flex d-lg-none">
          <b-nav-item-dropdown no-caret right>

            <!-- Using button-content slot -->
            <img slot="button-content" src="~/assets/ic_menu_black_18dp_2x.png" alt="">
            <b-dropdown-item href="/about" v-bind:active="current_page === 'about'">About Me</b-dropdown-item>
            <b-dropdown-item href="/skills" v-bind:active="current_page === 'skills'">Skills</b-dropdown-item>
            <b-dropdown-item href="experiences" v-bind:active="current_page === 'experiences'">Experiences</b-dropdown-item>
            <b-dropdown-item href="projects" v-bind:active="current_page === 'projects'">Projects</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-nav>
      </b-collapse>
    </b-navbar>

    <nuxt/>
  </b-container>
</template>

<style lang="scss">
$brand-size:50px;

.brand {
  font-size: 1.5rem;

  h3 {
    line-height: $brand-size;
  }

  img {
    width: $brand-size;
    height: $brand-size;
    margin-left: .5rem;
    margin-right: .5rem;
  }

  span {
    white-space: nowrap;
  }
}

.header {
  padding-bottom: 1rem;
}

body {
  padding-top: 2.5rem
}

nav.header {
  padding-left: 0px;
  padding-right: 0px;
}
</style>

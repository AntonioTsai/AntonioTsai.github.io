<template>
  <b-container>
    <b-navbar toggleable="md" sticky>

      <b-nav-toggle target="nav_collapse"></b-nav-toggle>

      <b-navbar-brand href="#" class="brand">
        <b-img left rounded="circle" src="https://www.gravatar.com/avatar/28150f77152f009b564a81c0a0b603e1" alt="Gravatar"></b-img>
        <h3 class="text-muted align-middle">蔡豐年 | Fung-Nien Tsai | Antonio</h3>
      </b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <!-- Right aligned nav items -->
        <b-nav is-nav-bar class="ml-auto">
          <!-- nav for screen size >= lg(992px) -->
          <b-nav tabs class="d-none d-lg-flex">
            <b-nav-item href="/about" active>About Me</b-nav-item>
            <b-nav-item href="/skills">Skills</b-nav-item>
            <b-nav-item href="experiences">Experiences</b-nav-item>
            <b-nav-item href="projects">Projects</b-nav-item>
          </b-nav>

          <!-- nav for screen size >= .md(768px) -->
          <b-nav-item-dropdown no-caret class="d-none d-md-flex d-lg-none" right>
            <!-- Using button-content slot -->
            <img slot="button-content" src="~/assets/ic_menu_black_18dp_2x.png" alt="">
            <b-dropdown-item>About Me</b-dropdown-item>
            <b-dropdown-item>Skills</b-dropdown-item>
            <b-dropdown-item>Experiences</b-dropdown-item>
            <b-dropdown-item>Projects</b-dropdown-item>
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

.header {
  padding-bottom: 1rem;
}

body {
  padding-top: 2.5rem
}
</style>

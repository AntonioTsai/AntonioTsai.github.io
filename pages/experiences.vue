<template>
  <section>
    <div>
      <h1>EXPERIENCES</h1>
      <h2>Education</h2>
      <h3>
        Tatung University (2013-2017)
      </h3>
      <p>
        Bachelor of Science in Computer Science and Engineering
      </p>

      <h2>Work</h2>
      <h3>JM-PLUS (2016)</h3>
      <h4>
        Front-End Developer
      </h4>
      <ul>
        <li>
          Developed earphones customizer website used on iPad using jQuery and Materialize
        </li>
        <li>
          Improved UI and User Experience based on customer and salespeople's feedback.
        </li>
        <li>
          Used JavaScript and AJAX for client-side rendering.
        </li>
        <li>
          Manage development flow using Git and Git-flow.
        </li>
        <li>
          Use Gulp and Browsersync for Testing.
        </li>
      </ul>

      <h3>inwinSTACK (Jul. 2015 - Aug. 2015)</h3>
      <h4>
        Intern
      </h4>
      <ul>
        <li>
          Surveyed the basic architecture and deploy Openstack.
        </li>
        <li>
          Contributed to Openstack by fixing bugs.
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  fetch ({ store, params }) {
    store.commit('setPageTitle', 'experiences')
  },
  layout: 'personal-site'
}
</script>

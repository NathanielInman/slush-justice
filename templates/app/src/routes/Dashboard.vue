<template lang="pug">
section.section
  .container
    h1.title Welcome {{name}} to Slush Justice!
    hr
    p.
      This generator helps set you up for a SPA written in modern javascript
      with the Vue framework.
    hr
    h3.subtitle Technologies
    span.bold PUG
    span : template preprocessing
    br
    span.bold Stylus
    span : style preprocessing
    br
    span.bold PostCSS
    span : style optimizer used for autoprefixer
    br
    span.bold Vue + Vue-Router
    span : Modern SPA framework with mix of React/Angular technologies
    br
    span.bold Vuex
    span : Flux data management. Multiple stores, single dispatcher, no clumsy reducers
    br
    span.bold Parcel
    span : Project compilation, module bundler, uglifier, etc.
    br
    span.bold Buefy
    span : Vue component library extension of Bulma style library
    br
    span.bold Vue Hot Reload API
    span : Auto-reload and update
    br
    span.bold Babel
    span : Use modern javascript now and polyfill for older browsers.
</template>
<script>
import Vuex from 'vuex';

const {mapActions,mapGetters,mapMutations,mapState} = Vuex;

// Prepare the main template
export default {
  name: 'Dashboard',
  computed: {
    ...mapState('user',['name'])
  }
};
</script>
<style lang="stylus" scoped>
.bold
  font-weight bold
</style>

<template lang="pug">
main
  nav.navbar
    .navbar-brand(style='align-items:center')
      router-link(to='/')
        img(style='width:15px;height:30px;margin-left:1rem',
          src='https://i.imgur.com/dlwtnzo.png')
      .navbar-burger.burger(@click='menuActive^=1')
        span
        span
        span
    .navbar-menu(:class="{'is-active': menuActive}")
      .navbar-start
        .navbar-item.has-dropdown.is-hoverable
          .navbar-link more information
          .navbar-dropdown
            router-link.navbar-item(to='/help') help
  router-view
  footer.footer
    .container
      .content.has-text-centered
        p.
          #[strong Slush Justice] was written by 
          #[a(href='http://nathanielinman.com') Nathaniel Inman] of
          #[a(href='http://www.theoestudio.com') The OE Studio].
        p.
          Copyright © {{(new Date).getFullYear()}}
          #[a(href='http://www.theoestudio.com') The OE Studio]. All Rights Reserved.
</template>
<script>
import Vuex from 'vuex';

const {mapActions,mapGetters,mapState,mapMutations} = Vuex;

// Prepare the main template
export default {
  name: 'app',
  data(){
    return {
      menuActive: 0
    };
  }
};
</script>
<style lang="stylus" scoped>
.b-tabs .tab-content
  overflow visible

section.tab-content
  background #fff
  padding 1rem
  border-right 1px solid #dbdbdb
  border-left 1px solid #dbdbdb
  border-bottom 1px solid #dbdbdb
.b-tabs .tabs
  margin-bottom 0
</style>

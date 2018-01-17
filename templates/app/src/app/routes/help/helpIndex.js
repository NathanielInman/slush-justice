import template from './helpIndex.pug';

export const HelpIndex = {
  template: template(),
  data(){
    return {
      name: '<%= authorName %>'
    };
  }
};

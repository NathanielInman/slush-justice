import template from './helpIndex.pug';

export const helpIndex = {
  template: template(),
  data(){
    return {
      name: '<%= authorName %>'
    };
  }
};

require.config({
  baseUrl: "/public/",
  paths: {
    jquery: 'assets/jquery/jquery',
    jquery_cookie: 'assets/jquery-cookie/jquery.cookie',
    jquery_form: 'assets/jquery-form/jquery.form',
    template: 'assets/artTemplate/template-web',
    bootstrap: 'assets/bootstrap/js/bootstrap',
    tool: 'js/common/tool',
    datepicker: 'assets/bootstrap-datepicker/js/bootstrap-datepicker',
    datepicker_zh: 'assets/bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
    noprogress: 'assets/nprogress/nprogress',
    NProgress: 'assets/nprogress/nprogress',
    uploadify: 'assets/uploadify/jquery.uploadify.min'
  },
  shim: {
    bootstrap: {
      deps: ['jquery']
    },
    datepicker_zh: {
      deps: ['jquery']
    },
    uploadify: {
      deps: ['jquery']
    }
  }
})
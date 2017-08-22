require.config({
  baseUrl: "/public/",
  paths: {
    jquery: 'assets/jquery/jquery',
    jquery_cookie: 'assets/jquery-cookie/jquery.cookie',
    jquery_form: 'assets/jquery-form/jquery.form',
    template: 'assets/artTemplate/template-web',
    bootstrap: 'assets/bootstrap/js/bootstrap',
    tool: 'js/common/tool'
  },
  shim: {
    bootstrap: {
      deps: ['jquery']
    }
  }
})
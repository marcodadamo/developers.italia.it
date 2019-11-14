(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['search'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=container.escapeExpression;

  return "<div class=\"col-sm-12 col-md-6 col-lg-4 col-xl-4 p-2 p-md-3\">\n  <span class=\""
    + alias3(((helper = (helper = helpers.categoryClass || (depth0 != null ? depth0.categoryClass : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"categoryClass","hash":{},"data":data}) : helper)))
    + "\">"
    + alias3(((helper = (helper = helpers.category || (depth0 != null ? depth0.category : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"category","hash":{},"data":data}) : helper)))
    + "</span>\n  <article class=\"d-flex flex-column align-items-start mb-2 mb-md-5\">\n    <a href=\""
    + alias3(((helper = (helper = helpers.path || (depth0 != null ? depth0.path : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"path","hash":{},"data":data}) : helper)))
    + "\" title=\""
    + alias3(((helper = (helper = helpers.localisedName || (depth0 != null ? depth0.localisedName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"localisedName","hash":{},"data":data}) : helper)))
    + "\" class=\"d-block decoration-none \">\n      \n      <figure>\n        <img class=\"main-image\" src=\""
    + alias3(((helper = (helper = helpers.screenshot || (depth0 != null ? depth0.screenshot : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"screenshot","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias3(((helper = (helper = helpers.localisedName || (depth0 != null ? depth0.localisedName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"localisedName","hash":{},"data":data}) : helper)))
    + "\">\n      </figure>\n      \n      <h1 class=\"projectslist__listing__title\">"
    + alias3(((helper = (helper = helpers.localisedName || (depth0 != null ? depth0.localisedName : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"localisedName","hash":{},"data":data}) : helper)))
    + "</h1>\n      <span class=\"projectslist__listing__url\">"
    + alias3(((helper = (helper = helpers.readMore || (depth0 != null ? depth0.readMore : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"readMore","hash":{},"data":data}) : helper)))
    + " →</span>\n    </a>\n  </article>\n</div>";
},"useData":true});
})();
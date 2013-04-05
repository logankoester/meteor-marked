// Source: https://github.com/chjj/marked

Package.describe({
  summary: "A markdown parser and compiler. Built for speed."
});

Npm.depends({"underscore": "1.4.4"});
var _ = Npm.require('underscore');

Package.on_use(function (api, where) {
  where = where || ["client", "server"];
  where = where instanceof Array ? where : [where];

  api.add_files("marked/lib/marked.js", where);

  // XXX what we really want to do is, load template-integration after
  // handlebars, iff handlebars was included in the project.
  if (where === "client" ||
      (where instanceof Array && _.indexOf(where, "client") !== -1)) {
    api.use("handlebars", "client");
    api.add_files("template-integration.js", "client");
  }
});

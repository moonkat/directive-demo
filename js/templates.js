angular.module("app").run(["$templateCache", function($templateCache) {$templateCache.put("views/contact_us_view.html","<div class=\"row\" id=\"contactFormWrapper\">\r\n	<div class=\"col-md-12\">\r\n		<h3>Contact</h3>\r\n		<form class=\"row\" role=\"form\">\r\n			<div class=\"form-group col-md-4\">\r\n				<fluidlabel class=\"fluid-label\">\r\n					<input class=\"form-control\" id=\"name1\" type=\"text\" placeholder=\"Name\">\r\n				</fluidlabel>\r\n			</div>\r\n			<div class=\"form-group col-md-4\">\r\n				<fluidlabel class=\"fluid-label\">\r\n					<input class=\"form-control\" id=\"exampleInputEmail1\" type=\"email\" placeholder=\"Email\">\r\n				</fluidlabel>\r\n			</div>\r\n			<div class=\"form-group col-md-4\">\r\n				<fluidlabel class=\"fluid-label\">\r\n					<input class=\"form-control\" id=\"subject1\" type=\"text\" placeholder=\"subject\">\r\n				</fluidlabel>\r\n			</div>\r\n			<div class=\"form-group col-md-12\">\r\n					<textarea class=\"form-control\" rows=\"3\" placeholder=\"What can we help you with?\"></textarea>\r\n			</div>\r\n			<div class=\"form-group col-md-12\">\r\n				<button type=\"submit\" class=\"btn btn-default pull-right\">\r\n					Send\r\n				</button>\r\n			</div>\r\n		</form>\r\n	</div>\r\n</div>\r\n");
$templateCache.put("views/login_view.html","<form class=\"form-signin\" role=\"form\">\n  <h2 class=\"form-signin-heading\">Please sign in</h2>\n\n  <input type=\"email\" class=\"form-control\" placeholder=\"Email address\" required autofocus>\n  <input type=\"password\" class=\"form-control\" placeholder=\"Password\" required>\n  <input type=\"text\" class=\"form-control\" placeholder=\"Auth code\" required>\n  <label class=\"checkbox\">\n    <input type=\"checkbox\" value=\"remember-me\"> Remember me\n  </label>\n  <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\">Sign in</button>\n</form>\n");}]);
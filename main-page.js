var viewModel = require("./main-view-model");
function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = viewModel;
}

exports.pageLoaded = pageLoaded;

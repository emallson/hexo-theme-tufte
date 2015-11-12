var hljs = require('highlight.js'),
    jsdom = require('jsdom');

hexo.extend.filter.register('after_post_render', function(data) {
    var document = jsdom.jsdom(data.content);
    var codes = document.querySelectorAll('pre code');

    Array.prototype.forEach.call(codes, function(code) {
        if(code.className === 'plain') {
            return;
        } else if(code.className) {
            code.innerHTML = hljs.highlight(code.className, code.innerHTML).value;
        } else {
            code.innerHTML = hljs.highlightAuto(code.innerHTML).value;
        }
    });
    data.content = jsdom.serializeDocument(document);
});

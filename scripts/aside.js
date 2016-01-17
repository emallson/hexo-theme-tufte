var crypto = require('crypto'),
    util = require('util');

hexo.extend.tag.register('sidenote', function(args, content) {
    var id = crypto.createHash('sha256').update(content).digest('hex');
    return util.format('<label for="%s" class="sidenote-number margin-toggle"></label>', id) +
        util.format('<input type="checkbox" class="margin-toggle" id="%s">', id) +
        '<span class="sidenote">' + hexo.render.renderSync({text: content, engine: 'md'}).replace(/<\/?p>/g, "") + "</span>";
}, {ends: true});

// repeated because adding several conditionals turns 2 4-line
// functions into a single hard-to-follow 10-line function
hexo.extend.tag.register('marginnote', function(args, content) {
    var id = crypto.createHash('sha256').update(content).digest('hex');
    return util.format('<label for="%s" class="margin-toggle">&#8853;</label>', id) +
        util.format('<input type="checkbox" class="margin-toggle" id="%s">', id) +
        '<span class="marginnote">' + hexo.render.renderSync({text: content, engine: 'md'}).replace(/<\/?p>/g, "") + "</span>";
}, {ends: true});

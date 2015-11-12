var jsdom = require('jsdom'),
    crypto = require('crypto'),
    util = require('util');

hexo.extend.filter.register('after_post_render', function(data) {
    data.content = data.content.replace(/<aside>([^\r]+?)<\/aside>/mg, function(match, content) {
        var id = crypto.createHash('sha256').update(content).digest('hex');
        return util.format('<label for="%s" class="sidenote-number margin-toggle"></label>', id) +
            util.format('<input type="checkbox" class="margin-toggle" id="%s">', id) +
            '<span class="sidenote">' + content + "</span>";
    });
});

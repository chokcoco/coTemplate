/**
 * 小巧的 html 模板
 *  
 */
(function(name, definition) {
    if (typeof define === 'function') {
        define(definition);
    } else {
        this[name] = definition();
    }
})('comtemplate', function() {
    var tplReg = /\$\{\s*([^\{\}\s]+)\s*\}/g;
    var jsReg = /(^( )?(if|for|else|switch|case|break|{|}))(.*)?/g;

    var code = 'var r=[];\n';
    var match = 'undefined';
    var pointer = 0;

    /**
     * 添加单行逻辑
     * @param {*} line 
     */
    function lineAdd(line) {
        code += 'r.push("' + line.replace(/"/g, '\\"') + '");\n';
    }

    /**
     * 模板拼接
     * @param {String} tpl 模板字符串 
     * @param {Objcet} data 模板内替换对象
     */
    function comtemplate(tpl, data) {
        while (match = tplReg.exec(tpl)) {
            // 添加非逻辑部分
            lineAdd(tpl.slice(pointer, match.index)); 

            // 添加逻辑部分 "${" + match[1] + "}";
            code += ('r.push(String(this.' + match[1] + '));');

            pointer = match.index + match[0].length;
        }

        // 添加代码的最后一截
        lineAdd(tpl.substr(pointer, tpl.length - pointer)); 

        // 返回结果，在这里我们就拿到了装入数组后的代码
        code += 'return r.join("");'; 

        console.log(code);

        return new Function(code.replace(/[\r\t\n]/g, '')).apply(data);
    }

    /**
     * export
     */
    return comtemplate;
});
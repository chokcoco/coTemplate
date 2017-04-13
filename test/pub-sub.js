/**
 * 发布-订阅模式
 * 提供 3 个方法
 * - @emit 发布事件
 * - @sub 订阅事件
 * - @cancle 取消事件
 *  
 */
(function(name, definition) {
    if (typeof define === 'function') {
        define(definition);
    } else {
        this[name] = definition();
    }
})('pubSub', function() {

    function pubSub() {
        this.subList = {};
    }

    /**
     * 发布事件
     * @param [name] 发布事件的名称
     * @param [arg] 传给回调函数的参数
     */
    pubSub.prototype.emit = function() {

        var args = [].slice.call(arguments);
        var name = args.shift();

        if (!this.subList[name]) {
            return;
        }

        this.subList[name].forEach(function(callback) {
            callback.apply(this, args);
        });
    }

    /**
     * 订阅事件
     * @param [String] name 订阅的事件名称
     * @param [Function] func 订阅回调
     */
    pubSub.prototype.sub = function(name, func) {
        if (!this.subList[name]) {
            this.subList[name] = [];
        }

        this.subList[name].push(func);
    }

    /**
     * 取消订阅
     * @param [String] name 取消订阅的事件名称
     * @param [Function] func 取消订阅回调
     */
    pubSub.prototype.cancle = function(name, func) {
        var fns = this.subList[name];

        if (!fns || !func) {
            return;
        }

        var length = fns.length;

        // 反向遍历
        for (var i = length - 1; i >= 0; i--) {
            
            var fn = fns[i];

            if(func === fn) {
                fns.splice(i, 1);
            }
        }
    }

    /**
     * export
     */
    return pubSub;
});
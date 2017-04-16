# coTemplate

一款小巧的 HTML 模板引擎 。

## Usage 

支持 AMD、CMD、CommonJS 模块引入。

## API

### `cotemplate(str:String, data:Object);`

## Demo

``` HTML
<script src="../js/cotemplate.js"></script>
<script>
var data = {
    name: 'Coco',
    info: {
        age: 18
    },
    bar: {
        foo: {
            else: 'co-template'
        }
    }
}

var tpl = `
            <p>name:${coco}</p>
            <p>Age:${info.age}</p>
            <div>${bar.foo.else}</div>
          `;

cotemplate(tpl, data);
// <p>Name:Coco</p>        
// <p>Age:18</p>        
// <div>HTML-template:co-template</div>
</script>      
```

## License

MIT

# coTemplate

一款小巧的 HTML 模板引擎

## Usage 

`comtemplate(str:String, data:Object);`

## Demo

``` javascript
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

comtemplate(tpl, data);
// <p>Name:Coco</p>        
// <p>Age:18</p>        
// <div>HTML-template:co-template</div>
          
```



## License

MIT

## fis-postprocessor-cssgrace

### INSTALL

```
npm install -g fis-postprocessor-cssgrace
```

### USE

- in fis3
    
    ```js
    // vi fis-conf.js
    fis.match('*.css', {
        postprocessor: fis.plugin('cssgrace')
    });
    ```

- in fis

    ```js
    //vi fis-conf.js
    fis.config.set('modules.postprocessor.css', 'cssgrace');
    ```

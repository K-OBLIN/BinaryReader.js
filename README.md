# ☕ BinaryReader.js
You can read arrays in **binary format**.

## How to use?
```html
<script src="./BinaryReader.js"></script>
<script>
    let br = new BinaryReader();
    
    // Read the fihe with FileReader.
    let reader = new FileReader();
    reader.onload = function(e) {
        let binData = e.target.result;
        let dataView = new DataView(binData);
        
        let arr = [];
        for (let i = 0; i < binData.length; i++) {
            arr.push(dataView.getUint8(i));
        }
        
        // Read
        br.ReadData(arr);
        
        console.log(arr);
    };
</script>
```

## Example
[Online PE Viewer](https://ssims-kr.github.io/OPV/index.html)

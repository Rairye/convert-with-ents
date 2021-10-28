# convert-with-ents
Light-weight tool for converting characters in a string into common HTML entities (without regex).

Converts the following characters into the HTML entity equivalents.

1. Ampersand (&)
2. Less than (<)
3. Greater than (>)
4. Double quote (")
5. Single quote (')

## Standard JS Version 

### Installation

Download the raw file at https://github.com/Rairye/convert-with-ents/blob/main/convert-with-ents.js

Or, download one of the releases on the right.

### Code Sample

```html
<script src = "convert-with-ents.js"> </script>
```
```javascript
var source = "<text>Hey, how are you doing?<\/text>";
var result = convertWithEnts(source);
console.log(result);
```
## Module Version 

### Installation

npm i convert-with-ents

### Code Sample

```javascript
import convertWithEnts from "convert-with-ents";

var source = "<text>Hey, how are you doing?<\/text>";
var result = convertWithEnts(source);
console.log(result);
```

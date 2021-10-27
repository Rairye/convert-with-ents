# convert-with-ents
Light-weight tool for converting characters in a string to common HTML entities (without regex).

Converts the following characters into the HTML entity quivalents.

1. Ampersand (&)
2. Less than (<)
3. Greater than (>)
4. Double quote (")
5. Single quote (')

## Code Sample (standard JS)


```html
<script src = "convert-with-ents.js"> </script>
```
```javascript
var source = "<text>Hey, how are you doing?<\/text>";
result = convertWithEnts(source);
console.log(result);
```

# convert-with-ents
Light-weight tool for converting characters in a string to common HTML entities (without regex).

Converts the following characters into the HTML entity equivalents.

1. Ampersand (&)
2. Less than (<)
3. Greater than (>)
4. Double quote (")
5. Single quote (')

Note: Ampersands are replaced by default, but they can be skipped. Please see the examples below.

## Installation

Install using npm:

npm i convert-with-ents


## Code Sample

```javascript
import convertWithEnts from "convert-with-ents";

var source = "<text>Hey, how are you doing?<\/text>";
var result = convertWithEnts(source);
console.log(result);
```
If, for some reason, you need to skip ampersands, please use convertWithEnts(source, true)

```javascript
import convertWithEnts from "convert-with-ents";

var source = "<text>I like JS && Python.<\/text>";
var result = convertWithEnts(source, true);
console.log(result);
```


## Other Packages

If you would like to filter out or create a whitelist for punctuation characters, please see https://github.com/Rairye/js-mnl-punct-norm

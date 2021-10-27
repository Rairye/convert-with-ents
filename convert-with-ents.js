/*
Copyright 2021 Rairye
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/

var charEntMap = new Map([["&", "&amp;"], ["<", "&lt;"], [">", "&gt;"], ["\"", "&quot;"], ["\'", "&#39;"]]);

function convertWithEnts(inputStr) {
	if (typeof inputStr != "string") {
		return inputStr;
	}
	
	var result = "";
	var lastReplacement = 0;
	var stringLength = inputStr.length;
	
	for (var i = 0; i < stringLength; i++) {
		var currentChar = inputStr.charAt(i);
		if (charEntMap.has(currentChar)) {
		   var replacement = charEntMap.get(currentChar);
		   result+= (i > lastReplacement ? (inputStr.substring(lastReplacement, i) + replacement) : replacement);
		   lastReplacement = i + 1;
		}

	}
	
	if (lastReplacement == 0) {
		return inputStr;
	}
	
	return (lastReplacement == stringLength ? result : result + inputStr.substring(lastReplacement));
	
}

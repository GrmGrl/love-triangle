/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
   var tring = 0;

   preferences.forEach(function(item, i, arr) {
   	var a = preferences[i];
   	var b = preferences[a - 1];
   	var c = preferences[b - 1];
   	if (a === preferences[c - 1]) {
   		tring++;
   	}
   });
   return (tring / 3);	

};

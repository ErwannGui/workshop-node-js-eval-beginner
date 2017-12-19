exports.run = function(input) {
	var res = input.split(",");
	var somme = 0;
	for (var i=0; i < res.length; i++) {
		somme += Number(res[i]);
	}
  console.log(somme);
};

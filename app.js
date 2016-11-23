

(function (){

	var sum = 0;

	for(var i=0;i<1000;++i)
	{
		sum +=i;
	}

	console.log("sum of 1000 number using for loop : "+sum);

	sum =0;
	i=0;
	while(i<1000)
	{
		sum+=i;
		i++;
	}

	console.log("sum of 1000 number using while loop : " + sum);

}());
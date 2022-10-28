var request=new XMLHttpRequest();


request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");

request.send();

var result=JSON.parse(request.response);//object stored in result 
 console.log(result);
 console.log(result[0].name);
for (var i=0; i<result.length;i++){
    console.log(result[i].name + " "+ result[i].capital + " " + result[i].region + " " + result[i].subregion +  " " + result[i].population);
}
}




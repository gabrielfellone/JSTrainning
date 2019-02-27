function sayHello(){
	alert("Hello World!")
}

var myVar ="global"
		function checkScope() {
			var myVar ="local";
			document.write(myVar);
		}


			function Exercicio() {
				var a=10;
				var b=30;
				var c = "Teste";
				var linebreak="<br/>";

				document.write("A = " + a);
				document.write(linebreak);
				document.write("B = "+ b);
				document.write(linebreak);
				document.write(linebreak);

				document.write("a+b=");
				result = a+b;
				document.write(result);
				document.write(linebreak);

				document.write("a-b=");
				result = a-b;
				document.write(result);
				document.write(linebreak);

				document.write("a*b=");
				result = a*b;
				document.write(result);
				document.write(linebreak);

				document.write("a/b=");
				result = a/b;
				document.write(result);
				document.write(linebreak);

				document.write("a%b=");
				result = a%b;
				document.write(result);
				document.write(linebreak);

				document.write("a+b+c=");
				result = a+b+c;
				document.write(result);
				document.write(linebreak);

				document.write("a==b=");
				result = a==b;
				document.write(result);
				document.write(linebreak);

				document.write("a!=b=");
				result = a!=b;
				document.write(result);
				document.write(linebreak);

				document.write("a>b=");
				result = a>b;
				document.write(result);
				document.write(linebreak);

				document.write("a<b=");
				result = a<b;
				document.write(result);
				document.write(linebreak);

				document.write("a&&b=");
				result = (a&&b);
				document.write(result);
				document.write(linebreak);

				document.write("a||b=");
				result = (a||b);
				document.write(result);
				document.write(linebreak);

				document.write("!(a||b)=");
				result = !(a||b);
				document.write(result);
				document.write(linebreak);

				document.write("a^b=");
				result = (a^b);
				document.write(result);
				document.write(linebreak);

				document.write("~b=");
				result = (~b);
				document.write(result);
				document.write(linebreak);

				document.write("(a>>b)=");
				result = (a>>b);
				document.write(result);
				document.write(linebreak);

				document.write("a*=b =");
				result = (a*=b);
				document.write(result);
				document.write(linebreak);

				document.write("a/=b =");
				result = (a/=b);
				document.write(result);
				document.write(linebreak);

				document.write("a%=b =");
				result = (a%=b);
				document.write(result);
				document.write(linebreak);
                                                         
				document.write("a>b ? 100:200 = ");
				result = (a>b) ? 100:200;
				document.write(result);
				document.write(linebreak);

				document.write("a>b? ");
				result = (a>b) ? "Não":"Sim";
				document.write(result);
				document.write(linebreak);

				document.write("a = String? ");
				result = (typeof a=="string" ? "A é uma String": "A = numerico");
				document.write(result);
				document.write(linebreak);

			
			}


			function loop() {

			var x=1;
			document.write("Entrando no loop<br/>");
			while(x<20){
				if (x==5){
					break;
				}
				x =x +1;
				document.write(x + "<br/>");
			}
				document.write("Saindo do loop <br/>")

			}

			function loop2() {

 			outerloop:
 			document.write("Entrando no loop <br/>");
			for(var i=0; i<3; i++){
				document.write("outerloop:" +i+"<br/>")
				for(var j=0;j<5;j++){
					if(j==3){
						continue outerloop;
					}
					document.write("Innerloop: "+j+"<br/>")
				}
			}
				document.write("Saindo do loop<br/>");		
			}


			function sayName(name,age) {
			document.write("Say my name"+ name + "Say my age"+ age);

			}

			function concatena(primeiro,ultimo) {
				var full;
				full = primeiro + ultimo;
				return full;

			}

			function segundaFuncao() {
				var result;
				result = concatena("Gabriel","Fellone");
				doucument.write(reslt);
			}


			function over() {
				alert("Mouse Over")

			}
			function out() {
				alert("Mouse Out")

			} 
			function WriteCookie(){
				if (document.myform.costumer.value=="") {
						alert("EERRRERER");
						return;
				}
				cookievalue = escape(document.myform.costumer.value) + ";";
				document.cookie = "name=" + cookievalue;
				document.write("Setting Cookies:" + "name=" + cookievalue);

			}	

			function ReadCookie() {
				var allcookies= document.cookie;
				document.write("All Cookies:" +allcookies);


				cookiearray=allcookies.split(';');
				for(var i=0; i=cookiearray.lenght; i++){
					name=cookiearray[i].split('=')[0];
					name=cookiearray[i].split('=')[1];
					document.write("Key is:" + name + "and Value is:" +value);
				}
			}


					function WriteCookie2() {
		    var now = new Date();
		    now.setMonth(now.getMonth() - 1);
		    cookievalue = escape(document.myform.customer.value) +";" 
			
			document.cookie = "name=" + cookievalue;
			document.cookie = "expires=" + now.toUTCString() +";"
			document.write("Setting Cookies" + "name=" + cookievalue);
			
			  
			}

				function Redirect(){
			  window.location="https://www.google.com"

			document.write("Você será redirecionado para outra pagina 10 seg");
			setTimeout("Redirect()",100000);
			  
			}


			function Dialog(){ 
				var retVal=prompt("Entre com seu nome ","aqui");
				document.write("Voce digitou:"+retVal);

			}


			function Imprimir(){
				window.print(); 
			}



			function Object1() {
				var book = new Object();
				book.subject = "Pearl"
				book.author = "Mohtashim"
				document.write("Nome do livro:" +book.subject+"<br/>");
				document.write("Nome do autor: " + book.author+"<br/>")

			}

			function Object1ss(livro,autor) {
				this.livro=livro;
				this.autor=autor;

			}

			function bookPrice(mount) {
				this.price = mount;
			}
			function Object2() {
				var book = new Object1ss("Batata","Batatudo");
				var aprice = new bookPrice(100);
				document.write("Nome do livro:" +book.livro+"<br/>");
				document.write("Nome do autor: " + book.autor+"<br/>")
				document.write("Nome do autor: " + aprice.price+"<br/>")

			}

			function Array1(){

				let arr = new Array();
				let arr =[];
				let fruits = ["Apple","Orange","Pineapple"]
			
				document.write(fruits[0]);
				document.write(fruits[1]);
				document.write(fruits[2]);


			}


			function Array2(){
				let fruits2 = ["Apple", "Orange", "Banana"];
				alert(fruits2.pop());	//Excluir o ultimo do vetor
				alert(fruits2);


			}

			function Array3(){
				let fruits2 = ["Apple", "Orange"];
				alert(fruits2);
				fruits2.push("Banana");	//Adiciona na ultima posicao do vetor
				alert(fruits2);

			}


			function Array4(){
				let fruits2 = ["Apple", "Orange"];
				alert(fruits2);
				fruits2.shift();	//Adiciona na ultima posicao do vetor
				alert(fruits2);

			}




			function Array5(){
				let arr = ["Apple", "Orange", "Banana"];

				for (var i =0; i<arr.length;i++) {
					alert(arr[i]);
				}
			}


			function Array6(){
			
				let matrix=[
				[1,2,3],
				[4,5,6],
				[7,8,9]

				]
				alert(matrix[1][1]); // printa o 5


			}


			function Array7(){

				let arr=[1,2,3];
				alert(arr);
				alert(String(arr));

			}

			function Array8(){
			alert([] +1);
			alert([1] +1);
			alert([1,2] +1);

			}

		
			function Slice(){ //Slice(Start,End)

				let str="test";
				let arr=["t","e","s","t"];

				alert(str.slice(1,3)); // es
				alert(arr.slice(1,3)); // e,s



				}

				function Concat(){

					let arr= [1,2];
					alert(arr.concat([3,4]));

				}


				function Find(){

					let users=[
						{id: 1, nome: "Gabriel"},
						{id: 2, nome: "Rafael"},
						{id: 3, nome: "Ismael"}];
					
				
					let user = users.find(item => item.id==1);
					alert(user.nome);

				}


				function Filter(){
					let users=[{id: 1, name: "Gabriel"},{id: 2, name:"Rafael"},
					{id: 3, name:"Ismael"}]
					let someUsers = users.filter(item => item.id <3);
					alert(someUsers.length);


				}
				
				function Map(){
					let lengths=["Bilbo","Gandalf","Nazgul"].map(item=>item.length);
					alert(lengths);

				}


				function Sort(){
					let arr=[1,2,15];
					arr.sort();
					alert(arr); //ELE VAi COMPRAR OS VALORES COMO STRING

				}

				function Sort1(){
				
					let arr=[1,2,15];
					arr.sort(function(a,b){ return a-b;}); // melhor jeito
					alert(arr);

				}
				
				function Arrow(){
					let arr=[1,2,15];
					arr.sort((a,b)=>a-b); // mesma coisa mas com arrow
					alert(arr);
				}

				function Reverse1(){
					let arr=[1,2,3,4,5]; // reverter
					arr.reverse();
					alert(arr);

				}

				function Split(){
					let names = 'Bilbo, Gandalf, Nazgul'; // vai printar bilbo,gandalf
					let arr = names.split(', ');			//Nazgul sem o ,
					for (let name of arr){
						alert(`A message to ${name}.`);

					}
				}



				function Reduce(){
					let arr=[1,2,3,4,5];
					let result = arr.reduce((sum,current) => sum+current,0);
					alert(result);			


					}

					function Mapt(){

						let map = new Map();
						map.set('1', 'str1');
							map.set(1, 'int1');
								map.set(true, 'boolean1');
					

									alert(map.get(1));
									alert(map.get('1'));
									alert(map.size);
					}



					function MapRecipe(){

							let recipeMap = new Map([
								  ['cucumber', 500],
								  ['tomatoes', 350],
								  ['onion',    50]
								]);

								// iterate over keys (vegetables)
								for (let vegetable of recipeMap.keys()) {
								  alert(vegetable); // cucumber, tomatoes, onion
								}

								// iterate over values (amounts)
								for (let amount of recipeMap.values()) {
								  alert(amount); // 500, 350, 50
								}

								// iterate over [key, value] entries
								for (let entry of recipeMap) { // the same as of recipeMap.entries()
								  alert(entry); // cucumber,500 (and so on)
								}
													}

var sampleId = -1;

var tasks = [

'//3 Points\n\n'+
'//You are given a list of numbers.\n'+ 
'//Find the second biggest even number in most efficient way.\n'+
'//P.S. You can imagine, that list contains at least 1 million entries\n\n'+
'var numbers = [1,78,11,54,84,2,9,10,15,48,55,6,2,0,74,82]\n'+
'function findSecondBiggestEvenNumber(input){\n'+
'\n'+
'       //your solution should be here\n\n'+
'	return 82;\n'+
'}\n\n'+
"console.log(findSecondBiggestEvenNumber(numbers));\n",

'//3 Points\n\n'+
'//You are given a sorted list of integer numbers and the sum.\n'+ 
'//Finish a contains method to check if collection contains a pair to a matching sum.\n'+ 
'//Example: [1, 1, 3, 8], sum = 4, contains. \n'+ 
'//Example: [1, 1, 3, 8], sum = 9, contains. \n'+ 
'//Example: [-1, 1, 3, 9], sum = 8, contains. \n'+ 
'//Example: [1, 1, 3, 8], sum = 7, do not contain. \n'+ 
'var numbers = [1,2,3,4,5,6,7,8,9,20,30,40,50,60,70,80,90]\n'+
'function contains(numbers, sum){\n'+
'\n'+
'       //your solution should be here\n\n'+
'	return true;\n'+
'}\n\n'+
"console.log(contains(numbers, 47) ? 'contains' : 'do not contain');\n",

'//2 Points\n'+
'//Write a function to convert International Morse Code to a text.\n'+
'//For example:\n'+ 
'//*****   *-***-**--- *-- --- *-* *-**-** |<-end\n'+ 
'//H   E   L   L   O   W   O   R   L   D\n'+ 
'//Alphabet:\n'+ 
'//A = *-  ;\n'+ 
'//B = -***;\n'+ 
'//C = -*-*;\n'+ 
'//D = -** ;\n'+ 
'//E = *   ;\n'+ 
'//F = **-*;\n'+ 
'//G = --* ;\n'+ 
'//H = ****;\n'+ 
'//I = **  ;\n'+ 
'//J = *---;\n'+ 
'//K = -*- ;\n'+ 
'//L = *-**;\n'+ 
'//M = --  ;\n'+ 
'//N = -*  ;\n'+ 
'//O = --- ;\n'+ 
'//P = *--*;\n'+ 
'//Q = --*-;\n'+ 
'//R = *-* ;\n'+ 
'//S = *** ;\n'+ 
'//T = -   ;\n'+ 
'//U = **- ;\n'+ 
'//V = ***-;\n'+ 
'//W = *-- ;\n'+ 
'//X = -**-;\n'+ 
'//Y = -*--;\n'+ 
'//Z = --**;\n\n'+
'function convert(input){\n'+	
'       //your solution should be here\n\n'+
'	return "HELLOWORLD";\n'+
'}\n\n\n'+
"console.log(convert('*****   *-***-**--- *-- --- *-* *-**-** |'));\n", 

'//2 Points\n'+
'//Create a custom JSON parser by using only built in String functions. Any standard JSON parsing function is not allowed to use.\n'+
'//Input:\n'+
'//{"name":"John", "age":30, "car":}\n'+
'//{"name":"Mike", "age":26, "car":2}\n'+
'//Expected output in the console:\n'+
'//User John, who is 30 years old has no cars.\n'+
'//User Mike, who is 26 years old has 2 cars.\n\n'+
'function parse(input){\n'+	
'       //your solution should be here\n\n'+
'	return "User John, who is 30 years old has no cars.";\n'+
'}\n\n\n'+
"console.log(parse('{\"name\":\"John\", \"age\":30, \"car\":}'));\n",

'//2 Points\n'+
'//Check if the given number is a prime number or not?\n'+
'function isPrime(numbers){\n'+
'\n'+
'       //your solution should be here\n\n'+
'	return true;\n'+
'}\n\n'+
"console.log(isPrime(13) ? 'Prime' : 'Is Not a Prime');\n",

'//2 Points\n'+
'//An isogram is a word that has no repeating letters, consecutive or non-consecutive. \n'+
'//Implement a function that determines whether a string that contains only letters is an isogram.\n'+ 
'//Assume the empty string is an isogram. Ignore letter case.\n\n'+
'//isIsogram( "Dermatoglyphics" ) == true\n'+
'//isIsogram( "aba" ) == false\n'+
'//isIsogram( "moOse" ) == false // -- ignore letter case\n'+
'function isIsogram(isogram){\n'+
'\n'+
'       //your solution should be here\n\n'+
'	return true;\n'+
'}\n\n'+
"console.log(isIsogram('Dermatoglyphics') ? 'Isogram' : 'Is Not an Isogram');\n",

'// 1 Point\n'+
'//Finish to write a function to filter out wrong characters (all possible wrong characters are presented in example below). \n'+
'function filter(input){\n'+
'	var output = "Juozas, Tuminas, +37062528161, Kaunas, Rugiškų 8-10";\n\n'+	
'       //your solution should be here\n\n'+
'	return output;\n'+
'}\n\n'+
"console.log(filter('Juoz^^%$as, T^^%$uminas, +370625*28\161, Ka&^^%$##@%unas, Rugiškų 8-10'));\n",

'// 1 Point\n'+
'//Finish convert function to parse and print year, month, day, hour, minute, seconds and\n'+
'//millis from provided data.\n\n'+
'//Input: date in a string.  Like: 2018-08-13 17.00.05:542;\n'+
'//Expected output from a function in console:\n'+
'//Current time is 17 hours, 00 min, 05 sec & 542 millis. Date: 13/08/2017.\n\n'+
'function convert(input){\n'+
'	var output = "Current time is 17 hours, 00 min, 05 sec & 542 millis. Date: 13/08/2017.";\n\n'+	
'       //your solution should be here\n\n'+
'	return output;\n'+
'}\n\n'+
"console.log(convert('2018-08-13 17.00.05:542'));\n",

'// 1 Point\n'+
'//Write a function that takes a list of strings an prints them, one per line, in a rectangular frame. For example the list ["Hello", "Danske Bank"] gets printed as:). \n'+
'//***************\n'+
'//*$Hello$$$$$$$*\n'+
'//*$Danske Bank$*\n'+
'//***************\n\n'+

'var input = ["Hello", "Danske Bank"]\n'+
'function printer(input){\n'+
'       //your solution should be here\n\n'+
'	console.log("***************")\n'+
'	console.log("*$Hello$$$$$$$*")\n'+
'	console.log("*$Danske Bank$*")\n'+
'	console.log("***************")\n'+

'}\n\n'+
'printer(input);'




];

var tests = [

'var numbers = [1,78,11,54,84,2,9,10,15,48,55,6,2,0,74,82,-2,12,90,88]\n'+
'if(findSecondBiggestEvenNumber(numbers) == 88){\n'+
'	alert("Solution is good");\n'+
'}\n'+
'else{\n'+
'	alert("Solution is bad");\n'+
'}\n',

'var numbers = [1,2,3,4,5,6,7,8,9,20,30,40,50,60,70,80,90]\n'+
'if(contains(numbers, 47) && !contains(numbers, 1111)){\n'+
'	alert("Solution is good");\n'+
'}\n'+
'else{\n'+
'	alert("Solution is bad");\n'+
'}\n',

"if(convert('*****   *-***-**--- *-- --- *-* *-**-** |') == 'HELLOWORLD'){\n"+
'	alert("Solution is good");\n'+
'}\n'+
'else{\n'+
'	alert("Solution is bad");\n'+
'}\n',


"if(parse('{\"name\":\"John\", \"age\":20, \"car\":}') == 'User John, who is 20 years old has no cars.'){\n"+
'	alert("Solution is good");\n'+
'}\n'+
'else{\n'+
'	alert("Solution is bad");\n'+
'}\n',


"if(isPrime(11)){\n"+
'	alert("Solution is good");\n'+
'}\n'+
'else{\n'+
'	alert("Solution is bad");\n'+
'}\n',

"if(isIsogram('gatibl') && !isIsogram('gatibla')){\n"+
'	alert("Solution is good");\n'+
'}\n'+
'else{\n'+
'	alert("Solution is bad");\n'+
'}\n',

"if(filter('Juoz^^%$as, T^^%$uminas, +370625*28q, Ka&^^%$##@%unas, Rugiškų 8-10') == 'Juozas, Tuminas, +37062528161, Kaunas, Rugiškų 8-10'){\n"+
'	alert("Solution is good");\n'+
'}\n'+
'else{\n'+
'	alert("Solution is bad");\n'+
'}\n',

"var testSample = '2018-08-13 17.00.05:542';\n"+
'var output = "Current time is 17 hours, 00 min, 05 sec & 542 millis. Date: 13/08/2017."\n'+

'if(convert(testSample) == output){\n'+
'	alert("Solution is good");\n'+
'}\n'+
'else{\n'+
'	alert("Solution is bad");\n'+
'}\n',

'alert("Not testable, check console output.")'


]

function testSolution(){
	
	var el = document.getElementById('jscontent');
   	
    var oldScript = document.getElementById('scriptContainer');
		
    var newScript;

    if (oldScript) {
      oldScript.parentNode.removeChild(oldScript);
    }
	
	var userSript = el.value;
	    userSript = userSript + tests[sampleId];
		
    newScript = document.createElement('script');
    newScript.id = 'scriptContainer';
    newScript.text = userSript;
    document.body.appendChild(newScript);
}



var former = console.log;
	console.log = function (msg) {
    former(msg);

    var ul = document.getElementById("log");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(msg));
    ul.appendChild(li)

}

function clearLog() {
    document.getElementById("log").innerHTML = "";
    Materialize.toast("Console Cleared", 4000)
}

function reloadPage() {
    location.reload();
}

function loadTask(sampleId) {
	if(this.sampleId != -1){
		var el = document.getElementById('jscontent');
		tasks[this.sampleId] = el.value;
	}
	
	this.sampleId = sampleId; 
    document.getElementById('jscontent').value = tasks[sampleId];
	
}

function saveSolution(){
	var el = document.getElementById('jscontent');
	download(el.value, "solution_" + sampleId, ".txt");
}

function download(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
}

window.onbeforeunload = function() {
  return "Code will be lost if you leave the page, are you sure?";
};



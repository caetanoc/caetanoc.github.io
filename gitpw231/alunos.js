var alunos = 
["ALUNO",
'ANTONIO',   
'AUGUSTO',  
'BRUNO',    
'CARLOS',   
'CECILIA',  
'DIEGO',    
'Enzo',     
'EVELYN',   
'FELIPE',   
'GEOVANNA', 
'GUILHERME',
'JESSICA',  
'JOAO',     
'LEONARDO', 
'LUCCAS',   
'MARCELO',  
'MARIANA',  
'MATHEUS',  
'NICOLE',   
'RAMON',    
'RODRIGO',  
'ULISSES',  
'VINICIUS', 
'YURI',     
];

var len = alunos.length;
var text = '<table id="t01"> ';

for (i=0; i < len; i++) {
    text += "<tr><td>" + i + "</td>";
    text += "<td>" + alunos[i] + "</td>";
    text += '<td><img src="' + alunos[i] + '.gif" alt="' + alunos[i] + '" style="width:200px;height:100px;"></td>'
    text += "</tr>";
}

text += "</table>";
document.getElementById("lista").innerHTML = text;

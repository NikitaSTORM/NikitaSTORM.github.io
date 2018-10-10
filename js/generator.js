var arr2=[1,2,3,4,5,6,7,8,9,0];  //цифра в конце названия отвечает за параметр за который отвечает массив
var arr3=['a','b','c','d'];
var arr4=['A','B','C','D'];
var arr5=['!','@','$'];

document.getElementById('param-1').oninput=function(){
    //генерация ползунка-длинна массива
    document.getElementById('password-lenght').innerHTML=this.value; 
}

document.getElementById('generator').onclick=generatePASS;//главная функция вызывает функцию generatPASS

function generatePASS(){
    var result=[];
    if(document.getElementById('param-2').checked){
        result = result.concat(arr2);
        
    }
    if(document.getElementById('param-3').checked){
        result = result.concat(arr3);
       
    }
    if(document.getElementById('param-4').checked){
        result = result.concat(arr4);
       
    }
    if(document.getElementById('param-5').checked){
        result = result.concat(arr5); //checked-проверка на чекбокс всех параметров, concat-функция соединения массивов
        
    }
    
   
    result.sort(compareRandom);//сорт позволяет сортировать массив указанной функцией   
    document.getElementById('out').innerHTML='';
    for(var k=0;k<6;k++){   
    var pass='';//пустая строка для вывода пароля 
    var passlenght=parseInt(document.getElementById('param-1').value);
        for(var i=0; i<passlenght;i++){//цикл по длине пароля 
            pass+=result[randomInteger(0,result.length-1)];//сулчайное значение из массива result
            } 
        document.getElementById('out').innerHTML +='<p>'+pass+'</p>';//вывод
        if(document.getElementById('param-2').checked==false && document.getElementById('param-3').checked==false && document.getElementById('param-4').checked==false && document.getElementById('param-5').checked==false){
            document.getElementById('out').innerHTML='Введите параметры пароля';
           }
    }
    
    }
function compareRandom(a, b) {//функция перемешки массива
    return Math.random() - 0.5;
  }

  function randomInteger(min, max) { //поиска рандомного числа в массиве
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
  }

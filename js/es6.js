console.log("Learning Javascript");
// tap1
const d = new Date();
const days = ['Bazar','Bazar ertəsi','Çərşənbə axşamı','Çərşənbə','Perşembe','Cümə axşamı ','Şənbə']
console.log(d);

document.getElementById("result").innerHTML=days[d.getDay()];

// tap 2
function x() {
    const dd = new Date();
    const deneme = document.getElementById("date").innerHTML=dd.toLocaleTimeString();
}
var stop = setInterval(x,1000)

 // tap2
 function fulltime() {
     var fulldate = new Date(); // if you give your own numbers then it must be 7 numbers and end number usually iz zero accaptabling
      document.getElementById("year").innerHTML = fulldate.getFullYear();
      document.getElementById("month").innerHTML = fulldate.getMonth();
      document.getElementById("day").innerHTML = fulldate.getDay();
      document.getElementById("hour").innerHTML = fulldate.getHours();
      document.getElementById("minute").innerHTML = fulldate.getMinutes();
      document.getElementById("second").innerHTML = fulldate.getSeconds();

 }

 const contunie = setInterval(fulltime,1000)

 function stopSecond(params) {
    clearInterval(contunie);
}


// tap3
 let dt = new Date();
 console.log(dt.toLocaleDateString());
 console.log(dt.toLocaleTimeString());
 console.log(dt.getTimezoneOffset());

 // tap4
 function calculateFactorial() {
     let deger = Number(document.getElementById("deger").value);
     let factorresult = document.getElementById("factorresult");
     let factor =1;
     for (let i = 1; i <= deger; i++) {
         factor*=i;  // factor = factor*i  it is the same as factor*=i
         
     }
     factorresult.style.display = "block";
     factorresult.innerHTML=factor;
 }
 



 // tap5
 const addTodoText = () => {
     const item = document.getElementById("gettext").value;
     const todoresult = document.getElementById("todoresult");
     const text = document.createTextNode(item);
     const newItem = document.createElement("li");
     newItem.appendChild(text);
     todoresult.style.display="block";
     todoresult.appendChild(newItem);
}
 

 // tap6
const changeMoney = () => {
    const dollarSum = document.getElementById("getdollar").value;
    const moneyresult = document.getElementById("moneyresult");
    const item = document.createTextNode(dollarSum*1.70+" "+"Manat")
    const newitem = document.createElement("li")
    newitem.appendChild(item);
    moneyresult.style.display = "block"
    moneyresult.appendChild(newitem);
}

// Tap 7 Math calculator
const addTwoNumbers = () => {
    const number1 = Number(document.getElementById("number1").value);
    const number2 = Number(document.getElementById("number2").value);
    const text = document.createTextNode(`${number1} + ${number2} is`+" "+(number1+number2));
    const addRes = document.createElement("li")
    addRes.appendChild(text);

    
    document.getElementById("matresult").style.display = "block";
    document.getElementById("matresult").appendChild(addRes);
}


const subtractTwoNumbers = () => {
    const number1 = Number(document.getElementById("number1").value);
    const number2 = Number(document.getElementById("number2").value);
    const text = document.createTextNode(`${number1} - ${number2} is`+" "+(number1-number2));
    const subtractResult = document.createElement("li");
    subtractResult.appendChild(text);
    
    document.getElementById("matresult").style.display = "block";
    document.getElementById("matresult").appendChild(subtractResult);
}


const multTwoNumbers = () => {
    const number1 = Number(document.getElementById("number1").value);
    const number2 = Number(document.getElementById("number2").value);
    const text = document.createTextNode(`${number1} * ${number2} is`+" "+(number1*number2));
    const multResult = document.createElement("li");
    multResult.appendChild(text);

    document.getElementById("matresult").style.display = "block";
    document.getElementById("matresult").appendChild(multResult);
}

const divideTwoNumbers = () => {
    const number1 = Number(document.getElementById("number1").value);
    const number2 = Number(document.getElementById("number2").value);
    const text = document.createTextNode(`${number1} / ${number2} is`+" "+(number1/number2));
    const divideResult = document.createElement("li");
    divideResult.appendChild(text);

    document.getElementById("matresult").style.display = "block";
    document.getElementById("matresult").appendChild(divideResult);
}


// Tap8 Show and Hide

const showHide = () => {
    const getimg = document.querySelector('#picture');
    if (getimg.style.display == "none") {
        getimg.style.display="block";
    }else {
        getimg.style.display ="none";
    }
}


// Tap 9 Show and Hide Advanced

const showComment = () => {
    const getcommentInput = document.getElementById("commentInput");
    if (getcommentInput.style.display == "none") {
        getcommentInput.style.display="block";
    } else {
        getcommentInput.style.display="none";
    }
}

const addComment = () => {
    const getName = document.getElementById("yourName").value;
    const getLastName = document.getElementById("yourLastName").value;
    const getcomment = document.getElementById("comment").value;
    const text = document.createTextNode(`<<${getName} ${getLastName}>>:` + " " + getcomment);
    const addComment = document.createElement("li");
    addComment.appendChild(text);

    document.getElementById("commentresult").style.display = "block";
    document.getElementById("commentresult").appendChild(addComment);
}


/// tap 10 Add new button
var btnAdd = document.getElementById("addbtn");
var panelDiv = document.querySelector("#panel");
var deger =1;
btnAdd.onclick =  addNewButton = () => {
    const createbtn = document.createElement("button");
    createbtn.textContent = "Button"+" "+ (deger++);
    createbtn.classList = "kare-button";
    panelDiv.appendChild(createbtn)
}

//tap 11 Validate Personal Informatıon
const getPName = document.getElementById("inputName");
const getPSurname = document.getElementById("inputSurname");
const getPCity = document.getElementById("inputCity");
const getPProfess = document.getElementById("inputProfession");
const getPAge = document.getElementById("inputAge");
const liste = document.getElementById("liste");
const btnAddInfo = document.getElementById("validatePersInf");

btnAddInfo.onclick = validatePersonalInfo = () => {
    const tdName = document.createElement("td");
    const tdSurname = document.createElement("td");
    const tdCity = document.createElement("td");
    const tdProfes = document.createElement("td");
    const tdAge = document.createElement("td");

    tdName.textContent=getPName.value;
    tdSurname.textContent=getPSurname.value;
    tdCity.textContent=getPCity.value;
    tdProfes.textContent=getPProfess.value;
    tdAge.textContent=getPAge.value;

    const tr = document.createElement("tr");
    tr.appendChild(tdName);
    tr.appendChild(tdSurname);
    tr.appendChild(tdCity);
    tr.appendChild(tdProfes);
    tr.appendChild(tdAge);

    liste.appendChild(tr)
    

}


//Tap 12 Check Odd or Even
var btnCheckOddOrEven = document.getElementById("oddOrEven");


btnCheckOddOrEven.onclick = checkOddEven = () => {
    var degerOE = Number(document.getElementById("degerOE").value);
    
    if (degerOE%2 == 0) {
        var itemeo = document.createTextNode(degerOE+" "+"this is even");
        var newitemeo = document.createElement("li");
        newitemeo.appendChild(itemeo);
        document.getElementById("oddevenresult").appendChild(newitemeo)
        document.getElementById("oddevenresult").style.display = "block"
    } else {
        var itemeo = document.createTextNode(degerOE+" "+"this is odd");
        var newitemeo = document.createElement("li");
        newitemeo.appendChild(itemeo);
        document.getElementById("oddevenresult").appendChild(newitemeo)
        document.getElementById("oddevenresult").style.display = "block"
    }
    
    

}

// Tap 12 Countries Api
/* var myArray = []
        
$.ajax({
    method:'GET',
    url:'https://restcountries.eu/rest/v2/all',
    success:function (response) {
        myArray = response
        buildTable(myArray)
        console.log(myArray)
        
        
        
    }
})

function buildTable(data) {
    var table = document.getElementById("data");
   
    for (let i = 0; i < data.length; i++) {
        var row = `<tr>
                        <td><img src="${data[i].flag}" width='50' height='50'></td>
                        <td>${data[i].name}</td>
                        <td>${data[i].capital}</td>
                        <td>${data[i].population}</td>
                        <td>${data[i].alpha2Code}</td>
                        <td>${data[i].region}</td>
                        <td>${data[i].numericCode}</td>
                        
                  </tr>`
        
        
        table.innerHTML += row
    }
}
 */
















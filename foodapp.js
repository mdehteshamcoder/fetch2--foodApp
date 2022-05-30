
if(JSON.parse(localStorage.getItem('categories'))==null){


        var data=fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
.then((x)=>{return x.json()})
.then((x)=>{localStorage.setItem('categories',JSON.stringify(x.categories))
    dropdown(x.categories)})
}else{
    dropdown(JSON.parse(localStorage.getItem('categories')))
}

display("Moton")

function dropdown(x){
    console.log(x)
    var select=document.getElementById("categories")
    x.forEach(element => {
        var d= document.createElement("option")
        d.innerText=element.strCategory
        d.value=element.strCategory
    
        select.appendChild(d)
        
    });
    select.addEventListener('change',()=>{display(select.value)})
}
  async function display(x){
    try{
        var data =   await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${x}`)
        .then((c)=>c.json())
.then((c)=>displaymeals(c.foodmeals))
console.log("working")
     }
     catch (er){
         console.log(er)
        }
        
    }
    function displaymeals(y){
        var pre= document.querySelectorAll('.foodmeals')
        console.log(pre)
        pre.forEach(x=>x.remove())
        




        y.forEach((x)=>{
            var div = document.createElement('div')
        div.className="foodmeals"
        div.innerHTML=`<img src='${x.strMealThumb}' alt="" class="m">
    <h1>${x.strMeal}</h1>`
    document.getElementById('foodshow').appendChild(div)
        })
        
    }

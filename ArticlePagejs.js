
window.onload = function listArticles(){
    if (localStorage.getItem("currentNumber") === 0 | localStorage.getItem("currentNumber") === null){
        alert("Could not find any article!");
    }else{
        let $Items ="";
        let l = localStorage.getItem("currentNumber");
        for(let x = 1; x <= l; x++){
            const $CurrentArticle = JSON.parse(localStorage.getItem(x));
            let $currentKey = String(x);
            let $Title = $CurrentArticle.Title;
            $Items += ("<li class='nav-item'> <a class='nav-link active' aria-current='page' onclick='getArticle("+$currentKey+")' href='#'>"+$Title+"</a> </li>");    
        }
        document.getElementById("ArticlesList").innerHTML = $Items;
    }
}

function getArticle(id){
    const $CurrentArticle = JSON.parse(localStorage.getItem(id));
    if($CurrentArticle == null){
        alert("could not find the article!")
    }else{
        document.getElementById("HTitle").innerHTML = $CurrentArticle.Title;
        document.getElementById("PContent").innerHTML = $CurrentArticle.Content;
    }
    
}

//window.onbeforeunload = function() {
//    let l = localStorage.getItem("currentNumber");
//        for(let x = 1; x <= l; x++){
//            localStorage.removeItem(x);
//        }
//        localStorage.removeItem("currentNumber");
//  };
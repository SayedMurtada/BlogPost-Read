if (localStorage.getItem("currentNumber") == null){
    localStorage.setItem("currentNumber", 0);
}

function postArticle () {
    $title = document.querySelector("#ITitle").value;
    $content = document.querySelector("#IContent").value;
    if ($title == "" | $content == ""){
        alert("Please fill all inputs");
    }else{
        $currentArticleId = parseInt(localStorage.getItem("currentNumber")) + 1;
        localStorage.setItem("currentNumber", $currentArticleId);
        const article = {
            Id: $currentArticleId,
            Title: $title,
            Content: $content,
        };
        $id = String($currentArticleId);
        localStorage.setItem($id, JSON.stringify(article));
        alert("Your article have been saved successfully");
    }
}

document.querySelector('#Postbtn').addEventListener('click', postArticle);

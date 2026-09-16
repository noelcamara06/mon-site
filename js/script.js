let currentPage = 1;


function showPage(page){

    let oldPage = document.getElementById(
        "page" + currentPage
    );

    if(oldPage){
        oldPage.classList.remove("active");
    }


    currentPage = page;


    let newPage = document.getElementById(
        "page" + currentPage
    );


    if(newPage){

        setTimeout(()=>{

            newPage.classList.add("active");

        },300);

    }

}



function nextPage(){

    showPage(currentPage + 1);

}



function previousPage(){

    if(currentPage > 1){

        showPage(currentPage - 1);

    }

}



function goPage(page){

    showPage(page);

}
document.addEventListener("DOMContentLoaded",function(){
    const Container = document.getElementById("Container")
    console.log(Container);
    const dataset = [
       {
            link:"nothing",
            type:"Bigner",
            tag:"free",
            img:"nothing",
            title:"there is not title",

        },
        {
            link:"nothing",
            type:"Bigner",
            tag:"free",
            img:"nothing",
            title:"there is not title",
        }
    ]
    dataset.forEach(element => {
        console.log(element.link);
    });
})
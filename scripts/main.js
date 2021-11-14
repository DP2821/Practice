$(document).ready(function() {

var specialElementHandlers = {
    "#editor":function(element,renderer){
        return true;
    }
};

$("#cmd").click(function(){

    (async function() {
        
        let blob = await fetch("./images/Screenshot (1).png").then(r => r.blob());

        let dataUrl = await new Promise(resolve => {
          let reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.readAsDataURL(blob);
        });
        // now do something with `dataUrl`
        alert(dataUrl)
        var doc = new jsPDF();
    
        doc.setFontSize(40)
        doc.addImage(dataUrl,'png',10,10,177,100)
        doc.fromHTML($("#target").html(),15,15,{
            "elementHandlers":specialElementHandlers
        });
    
        doc.save("sample-file.pdf");
        var number = document.getElementById("number").value;
        
        window.location.href = "http://wa.me/+91" + number;
    })();




});  

});
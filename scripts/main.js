$(document).ready(function() {

var specialElementHandlers = {
    "#editor":function(element,renderer){
        return true;
    }
};

$("#cmd").click(function(){

    (async function() {
        
        var url = sessionStorage.getItem("url");
        
        let blob = await fetch(url).then(r => r.blob());

        let dataUrl = await new Promise(resolve => {
          let reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.readAsDataURL(blob);
        });
        // now do something with `dataUrl`

        var doc = new jsPDF();
    
        doc.setFontSize(40)
        doc.addImage(dataUrl,'png',10,10,190,107)
        doc.fromHTML($("#target").html(),15,15,{
            "elementHandlers":specialElementHandlers
        });
    
        doc.save("sample-file.pdf");
        var number = document.getElementById("number").value;



        // //For mail

        //     Email.send({
        //       Host: "smtp.gmail.com",
        //       Username: "dhruvilpatelsakariya@gmail.com",
        //       Password: "282151992337791072",
        //       To: 'ndpatel561@gmail.com',
        //       From: "dhruvilpatelsakariya@gmail.com",
        //       Subject: "Sending Email using javascript",
        //       Body: "Well that was easy!!",
        //     //   Attachments: [
        //     //     {
        //     //       name: "sample-doc.pdf",
        //     //       path: doc
        //     //     }]
        //     })
        //       .then(function (message) {
        //         alert("Mail has been sent successfully")
        //       });
          
        
        window.location.href = "http://wa.me/+91" + number;
    })();




});  

});
$(document).ready(function () {
  var specialElementHandlers = {
    "#editor": function (element, renderer) {
      return true;
    },
  };

  $("#cmd").click(function () {
    (async function () {
      document.getElementById("loading").style.visibility = "visible";
      var url = sessionStorage.getItem("url");

      let blob = await fetch(url).then((r) => r.blob());

      let dataUrl = await new Promise((resolve) => {
        let reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.readAsDataURL(blob);
      });
      // now do something with `dataUrl`

      var doc = new jsPDF();

      doc.setFontSize(40);
      doc.addImage(dataUrl, "png", 10, 10, 190, 107);
      doc.fromHTML($("#target").html(), 15, 15, {
        elementHandlers: specialElementHandlers,
      });

      var phone_number = document.getElementById("number").value;
      doc.save(phone_number + ".pdf");
      var number = document.getElementById("number").value;

      var sender_mail = document.getElementById("email").value;
      window.location.href = "http://wa.me/+91" + number;
      // window.location.href = "mailto:" + sender_mail;
    })();
  });
});

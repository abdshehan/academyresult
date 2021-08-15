function result() {
var studentname=document.getElementById('studentname').value;
if (studentname=="011"){
    output.innerHTML=`<hr>
    الاسم: عبد المنعم الشيحان
    <br>
    رياضيات: 30
    <br>
    فيزياء:40
     <hr>`;
} else if (studentname=="022"){
        output.innerHTML=`<hr>
        الاسم: عبد المنعم
        <br>
        رياضيات: 300
        <br>
        فيزياء:400
         <hr>`;
} else {
    output.innerHTML="<hr>هذا الاسم غير موجود  <hr>";
};
};



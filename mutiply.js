function calculateGrade() {
    var num = document.getElementById("num").value;
    var result = document.getElementById("result");

    // ตรวจสอบว่ากรอกชื่อและคะแนนหรือยัง
    if (num === "") {
        alert("กรุณากรอกเลข");
        return;
    }


    // แปลงคะแนนเป็นตัวเลข
    num = parseFloat(num);

    
    if (isNaN(num) || num < 1 ) {
        alert("กรุณากรอกเลข");
        return;
    }

    // คำนวณเเม่สูตรคูณ           
        var output = "<strong>เเม่สูตรเเม่ที่"+num+"</strong> <br> <br>"
        for (i = 1; i <= 12; i++) {
        var total  = num * i;
         output += num + '*' + i + '=' + total + '<br>';
        }
    // แสดงผลลัพธ์
    result.innerHTML = output;


    function resetForm() {
        // ล้างข้อมูลในฟอร์ม
        document.getElementById("MutitplyForm").reset();

        // ล้างผลลัพธ์ที่แสดงอยู่
        document.getElementById("result").innerHTML = "";
    }
}
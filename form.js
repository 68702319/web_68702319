
    function addStudent() {
        // รับค่าจากฟอร์ม
        var id_std = document.getElementById("id_std").value;
        var fullname = document.getElementById("fullname").value;
        var Nickname = document.getElementById("Nickname").value;
        var department = document.getElementById("department").value;
        var telephone = document.getElementById("telephone").value;
        var Email = document.getElementById("Email").value;
        // ตรวจสอบว่ากรอกข้อมูลครบหรือไม่
        if(id_std === "" || fullname === "" || Nickname === "" || department === ""|| telephone === ""|| Email === "") {
            alert("กรุณากรอกข้อมูลให้ครบทุกช่อง");
            return;
        }

        // เพิ่มข้อมูลลงในตาราง
        var table = document.getElementById("studentTable");
        var newRow = table.insertRow();

        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        var cell3 = newRow.insertCell(2);
        var cell4 = newRow.insertCell(3);
        var cell5 = newRow.insertCell(4);
        var cell6 = newRow.insertCell(5);

        cell1.innerHTML = id_std;
        cell2.innerHTML = fullname;
        cell3.innerHTML = Nickname;
        cell4.innerHTML = department;
        cell5.innerHTML = telephone;
        cell6.innerHTML = Email;
        

        // ล้างข้อมูลในฟอร์ม
        document.getElementById("studentForm").reset();
    }

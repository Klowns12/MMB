const partNumbers = ["A2189009700", "A2189009103", "A2059005010", "A2228700789", "A2229004812", "A1669002800","A0993200258","2050000001","2050000002","2050001100","2053204768","2053204868","2133200125","2133200225","2133201911"
    ,"2133202011","A0002703300"
];

        // ฟังก์ชันสำหรับการค้นหาเมื่อผู้ใช้กด Enter
        document.getElementById("partNumber").addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                event.preventDefault();
                
                // ดึงค่าที่ผู้ใช้กรอกจาก input
                let searchQuery = document.getElementById("partNumber").value;

                // ค้นหา part number ที่ตรงกับ query
                let result = partNumbers.filter(part => part.includes(searchQuery));

                // แสดงผลการค้นหา
                if (result.length > 0) {
                    document.getElementById("searchResult").innerText = "Found: " + result.join(", ");
                    
                    // แสดงภาพตาม part number ที่ค้นเจอ
                    let imagesHtml = result.map(part => 
                        `<img src="/src/image/electronic/${part}.jpg" alt="${part}" style="width: 300px; height: auto; margin: 10px;">`
                    ).join("");
                    document.getElementById("imageResult").innerHTML = imagesHtml;
                } else {
                    document.getElementById("searchResult").innerText = "No matching part found.";
                    document.getElementById("imageResult").innerHTML = ""; // เคลียร์ภาพเมื่อไม่พบผลลัพธ์
                }

                // เคลียร์ช่องกรอกข้อมูล
                document.getElementById("partNumber").value = '';
            }
        });


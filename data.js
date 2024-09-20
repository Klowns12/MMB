const partNumbers = ["A2189009700", "A2189009103", "A205 900 50 10", "A222 870 07 89", "A222 900 48 12", "A1669002800"];

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
                        `<img src="/src/image/electronic/${part}.jpg" alt="${part}" style="width: 200px; height: auto; margin: 10px;">`
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


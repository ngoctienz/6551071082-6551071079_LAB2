// Dán đè đoạn code này vào file Javascript/script.js

$(document).ready(function () {
    // --- MENU DANH MỤC ẨN/HIỆN (Nếu có) ---
    $("#menuToggle").click(function () {
        $(".danh-muc-list").toggleClass("hidden-keep-space");
        $(this).toggleClass('active');
    });

    const pagesItem = document.querySelector('.pages-item');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    let timeoutId; // Khai báo biến để lưu trữ ID của timeout

    if (pagesItem && dropdownMenu) {
       
        pagesItem.addEventListener('mouseenter', () => {
            clearTimeout(timeoutId); // Xóa timeout nếu đang chuẩn bị đóng
            dropdownMenu.style.display = 'block';
        });

        pagesItem.addEventListener('mouseleave', () => {
            // Đặt timeout 300ms trước khi đóng menu
            timeoutId = setTimeout(() => {
                dropdownMenu.style.display = 'none';
            }, 300); 
        });

        dropdownMenu.addEventListener('mouseenter', () => {
            clearTimeout(timeoutId); // Nếu chuột di vào menu con, hủy đóng menu
            dropdownMenu.style.display = 'block';
        });

        dropdownMenu.addEventListener('mouseleave', () => {
            // Khi chuột rời khỏi menu con, đặt lại timeout để đóng
            timeoutId = setTimeout(() => {
                dropdownMenu.style.display = 'none';
            }, 300);
        });
    }
});
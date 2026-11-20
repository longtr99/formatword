Hướng dẫn cài đặt (Sideload)

* Trên macOS (Word for Mac)

Bước 1: Tải file manifest.xml từ repository này.

Bước 2: Mở Finder, nhấn Cmd + Shift + G và dán đường dẫn sau:

Plaintext
~/Library/Containers/com.microsoft.Word/Data/Documents/wef/ 

(Nếu chưa có thư mục wef, hãy tạo mới thư mục tên wef bên trong Documents).

Bước 3: Copy file manifest.xml vào thư mục wef.

Bước 4: Khởi động lại Microsoft Word → vào tab Insert → Add-ins → My Add-ins → chọn FormatWord Pro.

* Trên Windows (Word for Windows)

Bước 1: Tạo một thư mục chia sẻ mạng (Shared Folder) chứa file manifest.xml.

Bước 2: Mở Word → File → Options → Trust Center → Trust Center Settings → Trusted Add-in Catalogs.

Bước 3: Dán đường dẫn mạng (\\Tên-Máy\Tên-Thư-Mục) vào ô Catalog URL, bấm Add catalog, tick chọn Show in Menu → OK và khởi động lại Word.

Bước 4: Vào tab Insert → My Add-ins → Shared Folder → chọn FormatWord Pro.

* Xử lý sự cố thường gặp (Word for Mac)
Add-in chưa hiện bản cập nhật mới sau khi sửa code

Word for Mac thường giữ bộ nhớ đệm (cache) WebKit của giao diện cũ. Để làm mới hoàn toàn:

Bước 1: Thoát hẳn Word bằng tổ hợp phím Cmd + Q.

Bước 2: Mở Terminal và chạy 2 lệnh sau (chỉ xóa cache tạm, không mất file manifest.xml):

Bash
rm -rf ~/Library/Containers/com.microsoft.Word/Data/Library/Caches/*
rm -rf ~/Library/Containers/com.microsoft.Word/Data/Library/WebKit/*

Bước 3: Mở lại Word và chạy lại Add-in.

Mục lục (TOC) chưa hiện số trang sau khi chèn
Do cơ chế bảo mật của Word, trường TOC chèn tự động cần người dùng xác nhận cập nhật: click chuột phải vào vùng Mục lục → chọn Update Field → Update entire table.

Nhật ký phiên bản (Changelog)
v3.4: Tự động nhận diện và ghi đè cập nhật thông tin trên 2 trang bìa UFM hiện có (tránh nhân đôi trang bìa).
v3.3: Dựng lại Bìa chính & Phụ bìa UFM hoàn toàn bằng OOXML khung viền kép chuẩn, khắc phục lỗi dính dòng trên Word for Mac

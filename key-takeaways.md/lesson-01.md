# Lesson 1

## Playwright

NVM = Node Version Manager = Quản lý các phiên bản NodeJs
NodeJs = Công cụ để chạy code
Nên chọn cài codeJs qua NVM để dễ chuyển đổi nhiều phiên bản (các dự án khác nhau có thể làm trên nhiều phiên bản khác nhau)

## GIT & GitHub

Git: Quản lý source code
GitHub: Chia sẻ code, làm việc nhóm
Cấu hình Git:
- Config username (tên người dùng): 
git config - global user.name " < tên bạn›"
- Config email (địa chỉ email):
git config -global user.email " ‹email của bạn›"
- Config branch default (nhánh mặc định):
git config -global init. defaultBranch main

Kết nối GitHub
SSH key là cặp khoá giúp xác thực đăng nhập trở nên dễ dàng hơn. Được lưu ở ~/.ssh
- id_rsa: cần giữ bí mật, không được công khai
- id_rsa.pub: có thể gửi cho người khác

Lệnh tạo SSH Keys:
ssh-keygen -t rsa -b 4096 -C"yourmail@ẽample.com"

Lấy nội dung ssh key: cat ~/.ssh/id_rsa.pub
Truy cập: https://github.com/settings/ssh/new để thêm ssh key

Cài đặt Playwright: npm init playwright@latest
Khởi tạo
• Khởi tạo repo local: git init
• Liên kết repository vừa tạo với Git: git remote add origin < ssh_link›
• Thêm code: git add .
• Thêm commit: git commit -m"init project"
• Push code: git push origin main
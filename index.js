// Tính tiền lương nhân viên
/*
    phân tích :
        - input : số ngày làm việc
        - processs : 
                + Lương 1 ngày 100.000
                + Công Thức Tính Lương = 100.00 * số ngày làm việc
        - output : thông báo số tiền nhận được 
*/

document.getElementById("btn-tinhTien").onclick = function () {
  console.log("Đã Nhấn");
  var days = document.getElementById("days").value;
  var luong = 100000 * days;
  console.log("Lương nhân viên là :", luong);
  document.getElementById("spanTienLuong").innerHTML = luong;
  document.getElementById("tienLuong").style.display = "block";
};

// Tính giá trị trung bình của 5 số thực
/*
    phân tích :
        - input : nhập vào 5 số thực
        - processs : giá trị trung bình = (tổng 5 số thực / 5)
        - output : thông báo giá trị trung bình của 5 số thực nhập vào
*/

document.getElementById("btn-tinhTrungBinh").onclick = function () {
  console.log("Đã Nhấn");
  var soThuc1 = parseInt(document.getElementById("soThuc1").value);
  var soThuc2 = parseInt(document.getElementById("soThuc2").value);
  var soThuc3 = parseInt(document.getElementById("soThuc3").value);
  var soThuc4 = parseInt(document.getElementById("soThuc4").value);
  var soThuc5 = parseInt(document.getElementById("soThuc5").value);
  var trungBinh = (soThuc1 + soThuc2 + soThuc3 + soThuc4 + soThuc5) / 5;
  console.log("Giá Trị Trung Bình Là :", trungBinh);
  document.getElementById("spanGiaTriTrungBinh").innerHTML = trungBinh;
  document.getElementById("giaTriTrungBinh").style.display = "block";
};

// Quy Đổi Tiền
/*
    phân tích :
        - input : nhập vào số tiền (USD)
        - processs :
                + 1 USD = 23.500 VND
                + Quy Đổi Tiền = 23.500 * số tiền (USD)
        - output : thông báo số tiền đã quy đổi
*/

document.getElementById("btn-doiTien").onclick = function () {
  console.log("Đã Nhấn");
  var soTien = document.getElementById("soTien").value;
  var quyDoi = soTien * 23500;
  console.log("Số Tiền Đã Quy Đổi Là :", quyDoi);
  document.getElementById("spanDoiTien").innerHTML = quyDoi;
  document.getElementById("doiTien").style.display = "block";
};

// Tính Diện Tích, Chu Vi Hình Chữ Nhật
/*
    phân tích :
        - input : nhập vào chiều dài, chiều rộng hình chữ nhật
        - processs :
                + Diện tích = chiều dài * chiều rộng
                + Chu vi = (dài + rộng) / 2
        - output : thông báo diện tích, chu vi hình chữ nhật
*/

document.getElementById("btn-tinhDienTich").onclick = function () {
  console.log("Đã Nhấn");
  var chieuDai = parseInt(document.getElementById("chieuDai").value);
  var chieuRong = parseInt(document.getElementById("chieuRong").value);
  var dienTich = chieuDai * chieuRong;
  var chuVi = (chieuRong + chieuDai) / 2;
  console.log("Diện Tích Là :", dienTich);
  console.log("Chu Vi Là :", chuVi);
  document.getElementById("spanDienTich").innerHTML = dienTich;
  document.getElementById("spanChuVi").innerHTML = chuVi;
  document.getElementById("dienTich").style.display = "block";
  document.getElementById("chuVi").style.display = "block";
};

// Tính Tổng 2 Ký Số
/*
    phân tích :
        - input : nhập vào 1 số có 2 chữ số
        - processs : Tổng 2 Ký số = (so % 10) + (so / 10)
        - output : thông báo tổng 2 ký số
*/

document.getElementById("btn-tinhTong").onclick = function () {
  console.log("Đã Nhấn");
  var kySo = parseInt(document.getElementById("kySo").value);
  var tonng2KySo = (kySo % 10) + Math.floor(kySo / 10);
  console.log("Tổng 2 Ký Số Là :", tonng2KySo);
  document.getElementById("spanTongKySo").innerHTML = tonng2KySo;
  document.getElementById("tongKySo").style.display = "block";
};

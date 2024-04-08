const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  tenSanPham: {
    type: String,
    required: true,
  },
  loaiSanPham: {
    type: String,
    required: true,
  },
  thuongHieu: {
    type: String,
    required: true,
  },
  moTa: {
    type: String,
    required: true,
  },
  giaBan: {
    type: Number,
    required: true,
  },
  giaGoc: {
    type: Number,
    required: true,
  },
  hinhAnh: {
    type: [String],
    required: true,
  },
  kichThuoc: {
    type: [String],
    required: true,
  },
  soLuongTon: {
    type: Number,
    required: true,
  },
  danhGia: {
    type: [
      {
        nguoiDanhGia: String,
        noiDung: String,
        xepHang: Number,
      },
    ],
    default: [],
  },
});
const Product = mongoose.model("Product", productSchema);

module.exports = Product;

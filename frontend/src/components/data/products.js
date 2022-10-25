const products = [
  {
    id: "1",
    name: "Bàn Aillen",
    price: "400.000₫",
    image:
      "https://product.hstatic.net/200000280801/product/upload_e2e740ce86b24f429cd1dfbe206777b2_large.jpg",
    imageLarge: "/imgZoom/product_1_large.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    countInStock: 3,
    status: "còn hàng",
    rating: 4,
    numReviews: 4,
  },
  {
    id: "2",
    name: "Bàn Binas",
    image:
      "https://product.hstatic.net/200000280801/product/upload_babeef6fa6044844b32d08b14892f8c1_large.jpg",
    price: "960.000₫",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    countInStock: 10,
    status: "còn hàng",
    rating: 2,
    numReviews: 2,
  },
  {
    id: "3",
    name: "Ghế Euro",
    image:
      "https://product.hstatic.net/200000280801/product/upload_6b032c7ce891416e8c001bc6a063b57e_large.jpg",
    price: "750.000₫",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    countInStock: 0,
    status: "còn hàng",
    rating: 3.5,
    numReviews: 3,
  },
  {
    id: "4",
    name: "Ghế Euro 02",
    image:
      "https://product.hstatic.net/200000280801/product/upload_cbd997dac1b64693a255edc1f3c4355c_large.jpg",
    price: "750.000₫",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    countInStock: 10,
    status: "còn hàng",
    rating: 5,
    numReviews: 9,
  },
  {
    id: "5",
    name: "Ghế Luxury",
    image:
      "https://product.hstatic.net/200000280801/product/upload_111b23fecf12438cbaaf881b39ad6182_large.jpg",
    price: "570.000₫",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    countInStock: 7,
    status: "còn hàng",
    rating: 2,
    numReviews: 2,
  },
  {
    id: "6",
    name: "Ghế Woody ",
    image:
      "https://product.hstatic.net/200000280801/product/upload_900a35429e89464bb1f66bdae46142d9_large.jpg",
    price: "900.000₫",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    countInStock: 0,
    status: "còn hàng",
    rating: 0,
    numReviews: 0,
  },
  {
    id: "7",
    name: "Ghế Woody Pinky",
    image:
      "https://product.hstatic.net/200000280801/product/upload_470ce5aa3e8e4c7eaa1302d321ddd1b1_large.jpg",
    price: "1.200.000₫",
    countInStock: 7,
    status: "còn hàng",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    rating: 2,
    numReviews: 2,
  },
  {
    id: "8",
    name: "Sofa đơn ALice ",
    image:
      "https://product.hstatic.net/200000280801/product/upload_23f65cdc9c064abb8be1179d2b6cf118_large.jpg",
    price: "800.000₫",
    countInStock: 7,
    status: "còn hàng",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    rating: 2,
    numReviews: 2,
  },
  {
    id: "9",
    name: "Bàn Allien 02 ",
    image:
      "https://product.hstatic.net/200000280801/product/upload_1dbf5c0621a7410c83406c329e08ac3a_large.jpg",
    price: "1.000.000₫",
    countInStock: 7,
    status: "còn hàng",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    rating: 2,
    numReviews: 2,
  },
  {
    id: "10",
    name: "Đồng hồ Miso ",
    image:
      "https://product.hstatic.net/200000280801/product/upload_6335a50c71584d4fb92ebc1957c6f55a_large.jpg",
    price: "1.000.000₫",
    countInStock: 7,
    status: "còn hàng",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    rating: 2,
    numReviews: 2,
  },
  {
    id: "11",
    name: "Đồng hồ Tabu ",
    image:
      "https://product.hstatic.net/200000280801/product/upload_9a8f14769bdf4fee829e345726d85346_large.jpg",
    price: "350.000₫",
    countInStock: 7,
    status: "còn hàng",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    rating: 2,
    numReviews: 2,
  },
  {
    id: "12",
    name: "Đồng hồ Tabu 01",
    image:
      "https://product.hstatic.net/200000280801/product/upload_0ba54b04a9f54d5a8498338ff2bc8273_large.jpg",
    price: "600.000₫",
    countInStock: 7,
    status: "còn hàng",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    rating: 2,
    numReviews: 2,
  },
  {
    id: "13",
    name: "Kệ đẩy Hobu",
    image:
      "https://product.hstatic.net/200000280801/product/upload_e85dbae4286f455785face60d686e414_large.jpg",
    price: "750.000₫",
    countInStock: 7,
    status: "còn hàng",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    rating: 2,
    numReviews: 2,
  },
  {
    id: "14",
    name: "Kệ treo Poplar ",
    image:
      "https://product.hstatic.net/200000280801/product/upload_b902d84a30ff4bfd9994a9b1b723c3c7_large.jpg",
    price: "500.000₫",
    countInStock: 7,
    status: "còn hàng",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    rating: 2,
    numReviews: 2,
  },
  {
    id: "15",
    name: "Sofa băng Bella ",
    image:
      "https://product.hstatic.net/200000280801/product/upload_b9e9dc548cb94b66b17aa80b91f46153_large.jpg",
    price: "2.200.000₫",
    countInStock: 7,
    status: "còn hàng",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    rating: 2,
    numReviews: 2,
  },
  {
    id: "16",
    name: "Sofa góc bella ",
    image:
      "https://product.hstatic.net/200000280801/product/upload_79d7d8c0b23a46039d0f66fcb838ad6f_large.jpg",
    price: "5.100.000₫",
    countInStock: 7,
    status: "còn hàng",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    rating: 2,
    numReviews: 2,
  },
];

export default products;

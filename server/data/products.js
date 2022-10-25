const products = [
  {
    name: "Bàn Aillen",
    price: 400000,
    image:
      "https://product.hstatic.net/200000280801/product/upload_e2e740ce86b24f429cd1dfbe206777b2_large.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    countInStock: 3,
    rating: 4,
    numReviews: 4,
  },
  {
    name: "Bàn Binas",
    image:
      "https://product.hstatic.net/200000280801/product/upload_babeef6fa6044844b32d08b14892f8c1_large.jpg",
    price: 960000,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    countInStock: 10,
    rating: 2,
    numReviews: 2,
  },
  {
    name: "Ghế Euro",
    image:
      "https://product.hstatic.net/200000280801/product/upload_6b032c7ce891416e8c001bc6a063b57e_large.jpg",
    price: 750000,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    countInStock: 0,
    status: "hết hàng",
    rating: 3.5,
    numReviews: 3,
  },
  {
    name: "Ghế Euro 02",
    image:
      "https://product.hstatic.net/200000280801/product/upload_cbd997dac1b64693a255edc1f3c4355c_large.jpg",
    price: 750000,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    countInStock: 10,
    rating: 5,
    numReviews: 9,
  },
  {
    name: "Ghế Luxury",
    image:
      "https://product.hstatic.net/200000280801/product/upload_111b23fecf12438cbaaf881b39ad6182_large.jpg",
    price: 570000,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    countInStock: 7,
    rating: 2,
    numReviews: 2,
  },
  {
    name: "Ghế Woody ",
    image:
      "https://product.hstatic.net/200000280801/product/upload_900a35429e89464bb1f66bdae46142d9_large.jpg",
    price: 900000,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    countInStock: 0,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Ghế Woody Pinky",
    image:
      "https://product.hstatic.net/200000280801/product/upload_470ce5aa3e8e4c7eaa1302d321ddd1b1_large.jpg",
    price: 1200000,
    countInStock: 7,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    rating: 2,
    numReviews: 2,
  },
  {
    name: "Sofa đơn ALice ",
    image:
      "https://product.hstatic.net/200000280801/product/upload_23f65cdc9c064abb8be1179d2b6cf118_large.jpg",
    price: 800000,
    countInStock: 4,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    rating: 2,
    numReviews: 2,
  },
  {
    name: "Bàn Allien 02 ",
    image:
      "https://product.hstatic.net/200000280801/product/upload_1dbf5c0621a7410c83406c329e08ac3a_large.jpg",
    price: 1000000,
    countInStock: 7,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    rating: 2,
    numReviews: 2,
  },
  {
    name: "Đồng hồ Miso ",
    image:
      "https://product.hstatic.net/200000280801/product/upload_6335a50c71584d4fb92ebc1957c6f55a_large.jpg",
    price: 1000000,
    countInStock: 8,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    rating: 2,
    numReviews: 2,
  },
  {
    name: "Đồng hồ Tabu ",
    image:
      "https://product.hstatic.net/200000280801/product/upload_9a8f14769bdf4fee829e345726d85346_large.jpg",
    price: 350000,
    countInStock: 0,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    rating: 2,
    numReviews: 2,
  },
  {
    name: "Đồng hồ Tabu 01",
    image:
      "https://product.hstatic.net/200000280801/product/upload_0ba54b04a9f54d5a8498338ff2bc8273_large.jpg",
    price: 600000,
    countInStock: 7,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    rating: 2,
    numReviews: 2,
  },
  {
    name: "Kệ đẩy Hobu",
    image:
      "https://product.hstatic.net/200000280801/product/upload_e85dbae4286f455785face60d686e414_large.jpg",
    price: 750000,
    countInStock: 4,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    rating: 2,
    numReviews: 2,
  },
  {
    name: "Kệ treo Poplar ",
    image:
      "https://product.hstatic.net/200000280801/product/upload_b902d84a30ff4bfd9994a9b1b723c3c7_large.jpg",
    price: 500000,
    countInStock: 7,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    rating: 2,
    numReviews: 2,
  },
  {
    name: "Sofa băng Bella ",
    image:
      "https://product.hstatic.net/200000280801/product/upload_b9e9dc548cb94b66b17aa80b91f46153_large.jpg",
    price: 2200000,
    countInStock: 8,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    rating: 2,
    numReviews: 2,
  },
  {
    name: "Sofa góc bella ",
    image:
      "https://product.hstatic.net/200000280801/product/upload_79d7d8c0b23a46039d0f66fcb838ad6f_large.jpg",
    price: 5100000,
    countInStock: 5,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    rating: 2,
    numReviews: 2,
  },
];

export default products;

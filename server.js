// express 서버 구축하기

const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;

// json 형식의 데이터를 처리할 수 있게 하기
app.use(express.json());
app.use(cors());

// products의 경로로 get 요청이 왔을 때 아래 함수가 진행됨
app.get("/products", (req, res) => {
  // http와는 다르게 express에서는 send안에 객체 넣을 수 있음
  res.send({
    product: [
      {
        id: 1,
        name: "농구공",
        price: 100000,
        seller: "조던",
        imageurl: "images/products/basketball1.jpeg",
      },
      {
        id: 2,
        name: "축구공",
        price: 500000,
        seller: "메시",
        imageurl: "images/products/soccerball1.jpg",
      },
      {
        id: 3,
        name: "키보드",
        price: 10000,
        seller: "그랩",
        imageurl: "images/products/keyboard1.jpg",
      },
    ],
  });
});

app.post("/products", (req, res) => {
  res.send("상품이 등록되었습니다.");
});

app.listen(port, () => {
  console.log("그랩의 쇼핑몰 서버가 돌아가고 있습니다.");
});

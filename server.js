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
  res.send("업로드 된 상품들입니다.");
});

app.post("/products", (req, res) => {
  res.send("상품이 등록되었습니다.");
});

app.listen(port, () => {
  console.log("그랩의 쇼핑몰 서버가 돌아가고 있습니다.");
});

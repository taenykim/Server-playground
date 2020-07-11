const express = require("express");
const cors = require("cors");

const dotenv = require("dotenv");
dotenv.config();

const app = express();
const PORT = process.env.PORT;
const request = require("request");

function naver() {
  const NAVER_CLIENT_ID = process.env.NAVERID;
  const NAVER_CLIENT_SECRET = process.env.NAVERPASSWORD;

  const option = {
    query: "꽃", //이미지 검색 텍스트
  };

  request.get(
    {
      uri: "https://openapi.naver.com/v1/search/image", //xml 요청 주소는 https://openapi.naver.com/v1/search/image.xml
      qs: option,
      headers: {
        "X-Naver-Client-Id": NAVER_CLIENT_ID,
        "X-Naver-Client-Secret": NAVER_CLIENT_SECRET,
      },
    },
    function (err, res, body) {
      let json = JSON.parse(body); //json으로 파싱
      return json;
    },
  );
}

app.use(
  cors({
    origin: "http://localhost:3001",
    credentials: true,
  }),
);

app.get("/", async (req, res) => {
  const json = await naver();
  res.send(json);
});

app.listen(PORT, () => {
  console.log("server is running");
});

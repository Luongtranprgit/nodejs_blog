const express = require("express");
// require("express") là nạp cái express từ node_mudules và lưu vào biến express
const app = express();
// Cái gì mà express được trả về thì nó được xây dựng sẵn ở express rồi nên khi ta gọi express() thì trả lại cho ta 1 đối tượng để ta có thể xây dựng website

const post = 1405;
// biến post giúp ta muốn chạy website ở cổng nào
app.get("/", (req, res) => {
  res.send("Xin chào bạn");
});
// Get : như ta dùng route

app.listen(post, () => {
  console.log(`listening on port ${post}`);
});

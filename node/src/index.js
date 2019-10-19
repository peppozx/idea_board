const express = require("express");
const app = express();

const PORT = 3500 || process.env.PORT;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-Width, Content-Type, Accept"
  );
  next();
});
// Body Parser Middleware
app.use(express.json());

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// Deal with url encoded data
app.use(express.urlencoded({ extended: false }));

app.use("/api/ideas", require("./routes/api/ideas"));

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});

let express = require('express');

let app = express();

let port = process.env.PORT || 8080;

app.use(express.static("frontend"))

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

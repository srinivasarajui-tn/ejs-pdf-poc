const app = require("./server");
const printPDF = require("./pdf");
async function main() {
  const listener = app.listen(8080);
  /* for (i = 1; i <= 10; i++) {
    for (j = 1; j <= 10; j++) {
      await printPDF(i, j);
    }
  }*/
  await printPDF(5, 3);
  listener.close(() => {
    console.log("Closed out remaining connections");
    process.exit(0);
  });
}

main();

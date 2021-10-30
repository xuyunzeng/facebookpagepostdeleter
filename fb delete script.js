let menuButton;

setInterval(() => {
  menuButton = document.querySelector(
    "div[aria-label='Actions for this post']"
  );
  menuButton.click();

  setTimeout(() => {
    let deletePost = document.evaluate(
      "//span[text()='Delete post']",
      document,
      null,
      XPathResult.ANY_TYPE,
      null
    );
    let deletePostElement = deletePost.iterateNext();
    setTimeout(() => {
      deletePostElement.click();
      setTimeout(() => {
        let deleteModal = document.evaluate(
          "//span[text()='Delete']",
          document,
          null,
          XPathResult.ANY_TYPE,
          null
        );
        console.log(deleteModal);
        let deleteModalElement = deleteModal.iterateNext();
        console.log(deleteModalElement);
        setTimeout(() => {
          deleteModalElement.click();
          3;
        }, 5000);
      }, 6000);
    }, 5000);
  }, 3000); //lets the menu load
}, 25000);

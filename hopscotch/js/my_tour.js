// Define the tour!
var tour = {
  id: "hello-hopscotch",
  steps: [
    {
      title: "My Header",
      content: "This is the header of my page.",
      target: "header",
      placement: "bottom"
    },
    {
      title: "My content",
      content: "Here is where I put my content.",
      target: "p",
              // document.querySelector("#content p"),
      placement: "bottom"
    }
  ]
};

    // Start the tour!
hopscotch.startTour(tour);
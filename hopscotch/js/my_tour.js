// Define the tour!
var tour = {
  id: "hello-hopscotch",
  steps: [
    {
      title: "Hello",
      content: "Hello! This is an interactive tutorial on Digital Editions. It focuses on the synergy between content and technologies; it does not take into account other issues related with Digital Scholarly Editions, as User Interface (which is still under development within this demo)",
      target: "img",
              // document.querySelector("#content p"),
      placement: "right"
    },
    {
      title: "Digital what?!",
      content: "Digital library? Digital editions? Digital archive? Which are the differences between them? These terms are flexible and have been extensively used in different ways. For a discussion see: <ul><li>Price, Kenneth M. 'Electronic Scholarly Editions'. In <i>A Companion to Digital Literary Studies</i>, edited by Susan Schreibman and Raymond Siemens, 434-50. Malden: Blackwell Publishing, 2007. <a href='http://www.whitmanarchive.org/about/articles/anc.00267.html'>Read online</a></li><li>Wim Van Mierlo, 'Reflections on textual editing', in <i>Variants</i> 10 (2013), pp. 148-151.</li></ul>",
      target: "header",
      placement: "bottom"
    }
  ]
};

    // Start the tour!
hopscotch.startTour(tour);
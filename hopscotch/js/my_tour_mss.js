// Define the tour!
var tour = {
  id: "hello-hopscotch",
  steps: [
    {
      title: "TEI",
      content: "This is the description of a manuscript. It is made following a standard: that of the <a href='http://www.tei-c.org/index.xml'>Text Encoding Initiative</a>. The TEI provides Guidelines, as Proposals (we are now in Proposal 5 = P5). An entire chapter of the Guidelines (Chapter 10) is devoted to <a href='http://www.tei-c.org/release/doc/tei-p5-doc/en/html/index.html'>Manuscript Description</a>",
      target: "ms",
              // document.querySelector("#content p"),
      placement: "bottom"
    },
    {
      title: "TEI e W3C",
      content: "The TEI itself follows standards, for instance the indications provided by the W3C. When dealing with DATES, it is important to use shared formats: in TEI there are two classes of attributes taken from the WRC, <b>att.datable.w3c</b> and <b>att.duration.w3c</b>. Let's have a look at <a href='http://www.tei-c.org/release/doc/tei-p5-doc/en/html/ref-att.datable.w3c.html'>att.datable.w3c</a>",
      target: "tpq",
              // document.querySelector("#content p"),
      placement: "bottom"
    }
  ]
};

    // Start the tour!
hopscotch.startTour(tour);
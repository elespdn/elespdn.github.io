// Define the tour!
var tour = {
  id: "hello-hopscotch",
  steps: [
    {
      title: "Hello",
      content: "Hello! This is an interactive tutorial on Digital Editions. It focuses on the synergy between content and technologies; it does not take into account other issues related with Digital Scholarly Editions, as User Interface (which is still under development within this demo)",
      target: "img",
      placement: "right"
    },
    {
      title: "Digital ...",
      content: "Digital library? Digital editions? Digital archive? Which are the differences between them? These terms are flexible and have been extensively used in different ways. For a discussion see: <ul><li>Price, Kenneth M. 'Electronic Scholarly Editions'. In <i>A Companion to Digital Literary Studies</i>, edited by Susan Schreibman and Raymond Siemens, 434-50. Malden: Blackwell Publishing, 2007. <a href='http://www.whitmanarchive.org/about/articles/anc.00267.html'>Read online</a></li><li>Wim Van Mierlo, 'Reflections on textual editing', in <i>Variants</i> 10 (2013), pp. 148-151.</li></ul>",
      target: "header",
      placement: "bottom",
      multipage: true,
      onNext: function() {
        window.location = "mss.html"
              }
    },
    {
      title: "TEI",
      content: "This is the description of a manuscript. It is made following a standard: that of the <a href='http://www.tei-c.org/index.xml'>Text Encoding Initiative</a>. The TEI provides Guidelines, as Proposals (we are now in Proposal 5 = P5). An entire chapter of the Guidelines (Chapter 10) is devoted to <a href='http://www.tei-c.org/release/doc/tei-p5-doc/en/html/index.html'>Manuscript Description</a>",
      target: "ms",
      placement: "bottom"
    },
    {
      title: "TEI e W3C",
      content: "The TEI itself follows standards, for instance the indications provided by the W3C. When dealing with DATES, it is important to use shared formats: in TEI there are two classes of attributes taken from the WRC, <b>att.datable.w3c</b> and <b>att.duration.w3c</b>. Let's have a look at <a href='http://www.tei-c.org/release/doc/tei-p5-doc/en/html/ref-att.datable.w3c.html'>att.datable.w3c</a>",
      target: "tpq",
      placement: "bottom",
      multipage: true,
      onNext: function() {
        window.location = "text.html"
              }
    },
    {
      title: "Rendering TEI",
      content: "Once encoded a text using XML-TEI, how to visualize it? There are several possibilities. In the case of this demo, we used <a href='http://teic.github.io/CETEIcean/'>CETEI</a>, a Javascript library, maintained by the TEI-Consortium. A similar option is <a href=''http://dcl.ils.indiana.edu/teibp/>TEI-Boilerplate</a>. And do not forget the multitude of stylesheets for convertion available at <a href='http://www.tei-c.org/oxgarage/'>OxGarage</a>!",
      target: "content",
      placement: "bottom"
    },
    {
      title: "Transcriptions and editions",
      content: "Before even encoding the text, it needs to be transcribed! This is a philological task, that implies a first <b>interpretation</b> of the text. Segre clearly theorized the issue involved in trancriptions through the concept of <i>diasystème</i>, which means that in the text the system of the author meets that of the scribe and that of the transcriber. Want to know more? Read: Segre, Cesare. ‘Critique Textuelle, Théorie Des Ensembles et Diasystème’. <i>Bulletin de La Classe Des Lettres et Des Sciences Morales et Politiques de l’Académie Royale de Belgique</i> 62 (1976): 279–292.",
      target: "prova",
              // document.querySelector("#content p"),
      placement: "bottom"
    }
  ]
};

    // Start the tour!
hopscotch.startTour(tour);





    /*var tour = {
      id: "hello-hopscotch",
      steps: [
        {
          title: "My Header",
          content: "This is the header of my page.",
          target: "header",
          placement: "right"
        }
      ]
    };

    hopscotch.startTour(tour);*/
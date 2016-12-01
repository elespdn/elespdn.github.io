// Define the tour!
var tour = {
  id: "hello-hopscotch",
  steps: [
    {
      title: "Rendering TEI",
      content: "Once encoded a text, using TEI or another markup language, how to visualize it? There are several possibilities, while none of these solutions will probably cover by default all your needs. In the case of this demo, we used <a href='http://teic.github.io/CETEIcean/'>CETEI</a>, a Javascript library, maintained by the TEI-Consortium. A similar option is <a href=''http://dcl.ils.indiana.edu/teibp/>TEI-Boilerplate</a>. And do not forget the multitude of stylesheets for convertion available at <a href='http://www.tei-c.org/oxgarage/'>OxGarage</a>",
      target: "content",
              // document.querySelector("#content p"),
      placement: "bottom"
    },
    {
      title: "Transcriptions and editions",
      content: "Before even encoding the text, it needs to be transcribed! This is a philological task, that implies a first <b>interpretation</b> of the text. Segre clearly theorized the issue involved in trancriptions through the concept of <i>diasystème</i>, which meand that in the text the system of the author meets that of the scribe and that of the transcriber. Want to know more? Read: Segre, Cesare. ‘Critique Textuelle, Théorie Des Ensembles et Diasystème’. <i>Bulletin de La Classe Des Lettres et Des Sciences Morales et Politiques de l’Académie Royale de Belgique</i> 62 (1976): 279–292.",
      target: "lastspan",
              // document.querySelector("#content p"),
      placement: "bottom"
    }
  ]
};

    // Start the tour!
hopscotch.startTour(tour);
import { autocompleteClasses } from "@mui/material";
import React from "react";
function About() {
  const divStyle = {
    backgroundImage: `url(https://wallpaperaccess.com/full/1333114.jpg)`,
    textAlign: "center",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "1400px",
    height: "1000px",
  };
  return (
    <div className="about-block" style={divStyle}>
      <h1>Greek Mythos</h1>
      <p>
        Greek mythology, body of stories concerning the gods, heroes, and
        rituals of the ancient Greeks. That the myths contained a considerable
        element of fiction was recognized by the more critical Greeks, such as
        the philosopher Plato in the 5th–4th century BCE. In general, however,
        in the popular piety of the Greeks, the myths were viewed as true
        accounts. Greek mythology has subsequently had extensive influence on
        the arts and literature of Western civilization, which fell heir to much
        of Greek culture. Although people of all countries, eras, and stages of
        civilization have developed myths that explain the existence and
        workings of natural phenomena, recount the deeds of gods or heroes, or
        seek to justify social or political institutions, the myths of the
        Greeks have remained unrivaled in the Western world as sources of
        imaginative and appealing ideas. Poets and artists from ancient times to
        the present have derived inspiration from Greek mythology and have
        discovered contemporary significance and relevance in Classical
        mythological themes.
      </p>
      <p>
        In Greek mythology, there is no single original text like the Christian
        Bible or the Hindu Vedas that introduces all of the myths’ characters
        and stories. Instead, the earliest Greek myths were part of an oral
        tradition that began in the Bronze Age, and their plots and themes
        unfolded gradually in the written literature of the archaic and
        classical periods. The poet Homer’s 8th-century BC epics the Iliad and
        the Odyssey, for example, tell the story of the (mythical) Trojan War as
        a divine conflict as well as a human one. They do not, however, bother
        to introduce the gods and goddesses who are their main characters, since
        readers and listeners would already have been familiar with them. Did
        you know? Many consumer products get their names from Greek mythology.
        Nike sneakers are the namesake of the goddess of victory, for example,
        and the website Amazon.com is named after the race of mythical female
        warriors. Many high school, college and professional sports teams
        (Titans, Spartans and Trojans, for instance) also get their names from
        mythological sources. Around 700 BC, the poet Hesiod’s Theogony offered
        the first written cosmogony, or origin story, of Greek mythology. The
        Theogony tells the story of the universe’s journey from nothingness
        (Chaos, a primeval void) to being, and details an elaborate family tree
        of elements, gods and goddesses who evolved from Chaos and descended
        from Gaia (Earth), Ouranos (Sky), Pontos (Sea) and Tartaros (the
        Underworld). Later Greek writers and artists used and elaborated upon
        these sources in their own work. For instance, mythological figures and
        events appear in the 5th-century plays of Aeschylus, Sophocles and
        Euripides and the lyric poems of Pindar. Writers such as the 2nd-century
        BC Greek mythographer Apollodorus of Athens and the 1st-century BC Roman
        historian Gaius Julius Hyginus compiled the ancient myths and legends
        for contemporary audiences.
      </p>
    </div>
  );
}
export default About;

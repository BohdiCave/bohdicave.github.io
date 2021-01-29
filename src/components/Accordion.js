import React from 'react';
import Card from "./Card.js";

export default function Accordion({address}) {
  return(
    <div 
      className="accordion" 
      id={address==="wisdom.html" ? "wisdom" :
          address==="mystory.html" ? "story" :
          address==="myinterests.html" ? "interests" : "contacts"}
    >
      <Card name="headingOne" collapse="collapseOne" 
        headerBtn={address==="wisdom.html" ? "Ukrainian" :
                  address==="mystory.html" ? "Several biographical facts" :
                  address==="myinterests.html" ? "Arts and Humanities" : "E-mail"}
        page={address==="wisdom.html" ? "#wisdom" : address==="mystory.html" ? "#story" : 
              address==="myinterests.html" ? "#interests" : "#contacts"}
        listItem1={address==="wisdom.html" 
              ? (<><strong> Краще голий та правдивий, ніж багатий та беззаконний.</strong><br></br>
              It is better to be naked and honest than rich and lawless <br></br>- <strong>Hryhoriy Skovoroda, 18th c. philosopher</strong></>)
              : address==="mystory.html" ? (<><strong>Born and raised in Lviv, Ukraine</strong>, when she was still under the Soviet occupation.</>)
              : address==="myinterests.html" ? (<><strong>Informally pursuing continued independent scholarship 
              </strong> by following many an Ariadna's thread through the natural and social labyrinths of knowledge: <strong> Philosophy, history, philology, literature, music and art.</strong></>)
              : (<a href="mailto:bohdan.pechenyak@gmail.com">bohdan.pechenyak@gmail.com</a>)
        }
        listItem2={address==="wisdom.html" 
              ? (<><strong>Лиш боротись - значить жить! Vivere memento!</strong><br></br> Only struggle means to be alive! Remember to live! <br></br>- <strong>Ivan Franko, late 19th-early 20th cc. writer and philosopher</strong>"</>)
              : address==="mystory.html" ? (<><strong>Experienced Ukraine's Independence</strong> as a 10-year-old.</>)
              : (<><strong>Bilingual writing:</strong> of poetry, creative fiction, essays (and code, as a web developer).</>)
        }
        listItem3={address==="wisdom.html"
              ? (<><strong>Сором - хилитися і долі коритися.</strong><br></br> It's a shame - to bow down and submit to fate. <br></br>- <strong>Lesya Ukrainka, early 20th c. poet and dramatist</strong></>)
              : address==="mystory.html" ? (<><strong>Emigrated to USA at the age of 17.</strong> Currently, I live in Philadelphia, PA.</>)
              : (<>Drawn to <strong>artistic pursuits</strong> both verbal and visual (collage, photography, graphic design).</>)      
        }
        listItem4={address==="wisdom.html" 
              ? (<><strong>Людина створена для щастя, як птах для польоту. </strong><br></br> A human being is meant to be happy, as a bird is meant to be flying. <br></br>- <strong>Volodymyr Korolenko, 20th c. writer</strong></>)
              : address==="mystory.html" ? (<><strong>Formally educated in sociology</strong> (B.A.) and social work (M.S.W.)</>)
              : (<><strong>Some of my favorite novelists:</strong> D.H. Lawrence, Hermann Hesse, Thomas Mann, V.Domontovych, Yuriy Kosach, Kurt Vonnegut, Milan Kundera, Umberto Eco.</>)
        }
        listItem5={address==="wisdom.html" 
              ? (<><strong>Єдине, що від нас іще залежить, - принаймні вік прожити, як належить. </strong><br></br> The only thing that still depends on us - is to live our life properly. <br></br>- <strong>Lina Kostenko, poet and 1960-70s dissident</strong></>)
              : address==="mystory.html" ? (<><strong>Despite being an émigré, I "lived through" the two recent revolutions in Ukraine</strong> - Orange (2004-05) and Dignity (2013-14). That struggle is not over, as the Russian aggression in Eastern Ukraine and illegally occupied Crimea continues.</>)
              : (<><strong>Some of my favorite artists:</strong> <strong>Georgia O'Keeffe, Surrealism</strong> (Dali, Magritte, Frida Kahlo, others), <strong>Cubism</strong> (Picasso, Chagall, Archipenko, Gris, Marc, Severini, others), <strong>Art Nouveau/Secession</strong> (Mucha, Klimt), <strong>abstract art</strong> (Hilma af Klint, Klee, Kandinsky, Pollock, others), and many-many more.</>)
        }
      />
      <Card name="headingTwo" collapse="collapseTwo" 
        headerBtn={address==="wisdom.html" ? "Latin" :
                  address==="mystory.html" ? "Intellectual orientation" :
                  address==="myinterests.html" ? "Social Sciences" : "Related to Web Development"}
        page={address==="wisdom.html" ? "#wisdom" : address==="mystory.html" ? "#story" :
              address==="myinterests.html" ? "#interests" : "#contacts"}
        listItem1={address==="wisdom.html"
              ? (<><strong>Omnia mea mecum porto. </strong><br></br> All that is mine I carry with me. - <strong>Bias of Priene</strong></>)
              : address==="mystory.html" ? (<><strong>At heart, I am a writer (bilingual)</strong> - of poetry, creative fiction, essays, and code (sic!), as a web developer.</>)
              : address==="myinterests.html" ? (<><strong>In the realm of sociology and anthropology: </strong>travel and languages, worldviews and cultures, decolonization and antiracism, identity and difference.</>) 
              : (<><strong>LinkedIn: </strong><a href="http://linkedin.com/in/pechenyak" target="new">Profile</a></>)
        }
        listItem2={address==="wisdom.html" 
              ? (<><strong>Veni, vidi, vici.</strong> <br></br> I came, I saw, I conquered. - <strong>Julius Caesar</strong></>)
              : address==="mystory.html" ? (<><strong>Informally pursuing continued independent scholarship</strong> by following many an Ariadna's thread through the natural and social labyrinths of knowledge.
              </>)
              : address==="interests.html" ? (<> <strong>In the realm of psychology: </strong> evolutionary and moral psychology, "thinking slow and fast", multiple aspects of intelligence, flow and the origins of creativity, positive child development; a variety of psychotherapeutic perspectives, such as cognitive-behavioral, schema-based, inner family system, developmental, trauma-informed, personality-based, psychodynamic (i.e. psychoanalysis), Jungian (i.e. analytic psychology, archetypes, etc.).</>)
              : (<><strong>GitHub: </strong><a href="https://github.com/BohdiCave" target="new">BohdiCave</a>
              </>)
        }
        listItem3={address==="wisdom.html" 
              ? (<><strong>Homo homini lupus est. </strong><br></br> A human is a wolf to another human. - <strong>Plautus</strong></>) 
              : address==="mystory.html" ? (<><strong>Deeply interested in ecology</strong> and climate change, <strong>artistic pursuits</strong> both verbal and visual, <strong>travel</strong> and languages, <strong>worldviews</strong> and cultures, <strong>decolonization and antiracism</strong>, identity and difference.</>)
              : (<><strong>In the realm of religious studies: </strong> comparative perspective among world religions, philosophical systems and worldviews; Western and Eastern esotericism; integrative spiritual practices and perspectives. I practice <strong>mindfulness-awareness meditation</strong> (<em>shamatha-vipashyana</em>), within a "secular" or "modern Buddhist" approach.</>)
        }
        listItem4={address==="wisdom.html" 
              ? (<><strong>Sapienti sat. </strong><br></br> Enough for the wise. - <strong>Plautus</strong></>)
              : address==="mystory.html" ? (<><strong>No less deeply interested in the study of complex systems
              </strong>: systems theory, <strong>quantum</strong> theory, <strong>chaos</strong> theory, <strong>complexity</strong>, <strong>evolutionary science</strong> (emergence and self-organization, pattern formation, etc.).</>)
              : (<><strong>In the realm of historical studies:</strong> history of science and maths, archaeology of knowledge, genealogy of social institutions.</>)
        }
        listItem5={<><strong>In vino veritas.</strong> <br></br> Truth is in the wine. - <strong>Pliny The Elder</strong></>}
      />
      <Card name="headingThree" collapse="collapseThree"
        headerBtn={address==="wisdom.html" ? "Greek" :
                  address==="mystory.html" ? "Motivational outlook" :
                  address==="myinterests.html" ? "Natural Sciences" : "Related to Writing or Translation"}
        page={address==="wisdom.html" ? "#wisdom" : address==="mystory.html" ? "#story" :
              address==="myinterests.html" ? "#interests" : "#contacts"}
        listItem1={address==="wisdom.html"
              ? (<><strong>γνῶθι σεαυτόν. Gnôthi seautón. </strong><br></br> Know thyself. - <strong>Heraclitus
              </strong></>) 
              : address==="mystory.html" ? (<>Dedicated practitioner of <strong>mindfulness-awareness meditation</strong> (<em>shamatha-vipashyana</em>), within a "secular" or "modern" Buddhist approach.</>) 
              : address==="myinterests.html" ? (<><strong>Study of complex systems</strong>: systems theory, <strong>chaos</strong> theory, and <strong>complexity.</strong></>)
              : (<><strong>Facebook: </strong><a href="http://www.facebook.com/BohdiCave" target="new">My author's page</a></>)
        }
        
        listItem2={address==="wisdom.html"
              ? (<><strong>ἀγεωμέτρητος μηδεὶς εἰσίτω. Ageōmétrētos mēdeìs eisítō.</strong> <br></br> Let no one untrained in geometry enter. - <strong>Plato</strong></>) 
              : address==="mystory.html" ? (<><strong>My motivation in life:</strong> my loving wife <strong>Olena</strong> (also Ukrainian, a biochemist), and two ungovernable but sweet Jack Russell terriers: <strong>Dali and Mucha.</strong></>) 
              : address==="myinterests.html" ? (<><strong>Evolutionary science: </strong>emergence over scale, self-organization over time, pattern formation, complex adaptive systems, evolutionary neuroscience and psychology.</>)
              : (<><strong>Medium: </strong><a href="http://medium.com/@BohdanPechenyak" target="new">My stories</a></>)
        }
        listItem3={address==="wisdom.html"
              ? (<><strong>ἀνάγκᾳ δ’ οὐδὲ θεοὶ μάχονται. Anánkāi d'oudè theoì mákhontai.</strong> <br></br> Not even the gods fight necessity. - <strong>Simonides</strong></>) 
              : address==="mystory.html" ? (<><strong>My philosophy of life:</strong> Life is an art best practiced through <strong>wisdom and compassion</strong>. Everything in life points to the <strong>truth of interbeing</strong> and interconnectedness. Separate "self" and "other", "us" and "them" are mere illusions. <strong>The Other is also the Self and "they" are also "we".</strong></>) 
              : (<><strong>Mathematics:</strong> numbers, algebras, geometries, probability theory; relation of maths to music, philosophy and cosmology, to <strong>quantum physics and relativity.</strong></>)
        }
        listItem4={address==="wisdom.html"
              ? (<><strong>δῶς μοι πᾶ στῶ καὶ τὰν γᾶν κινάσω. Dôs moi pâ stô, kaì tàn gân kīnā́sō.</strong> <br></br> Give me somewhere to stand, and I will move the earth. - <strong>Archimedes</strong></>) 
              : address==="mystory.html" ? (<><strong>Wisdom of Love, Love of Wisdom.</strong></>) 
              : (<><strong>Life sciences:</strong> genetics, molecular biology, systems biology, <strong>ecology and climate change.</strong></>)
        }
        listItem5={<><strong>ἓν οἶδα ὅτι οὐδὲν οἶδα. Hèn oîda hóti oudèn oîda.</strong> <br></br> I know one thing, that I know nothing. - <strong>Socrates</strong></>} 
      />
      {address==="wisdom.html" && 
      <Card name="headingFour" collapse="collapseFour" headerBtn="German" page="#wisdom"
        listItem1={<><strong>Wer sein selbst Meister ist und sich beherrschen kann, dem ist die weite Welt und alles untertan. </strong><br></br> He, who is master of himself and has command over his emotions, has at his feet the whole wide world and everything therein. - <strong>Paul Fleming</strong></>}
        listItem2={<><strong>Lebe, wie du, wenn du stirbst, wünschen wirst, gelebt zu haben. </strong><br></br> Live like, when you die, you will wish to have lived. - <strong>Christian Fürchtegott Gellert</strong></>}
        listItem3={<><strong>Jeder, der sich die Fähigkeit erhält, Schönes zu erkennen, wird nie alt werden. </strong><br></br> Anyone who holds on to the ability to see beauty never grows old. - <strong>Franz Kafka</strong></>}
        listItem4={<><strong>Zwei Dinge sind unendlich, das Universum und die menschliche Dummheit, aber bei dem Universum bin ich mir noch nicht ganz sicher. </strong><br></br> Two things are infinite: the universe and human stupidity; but I’m still not completely sure about the universe. - <strong>Albert Einstein</strong></>}
        listItem5={<><strong>Wir leben alle unter dem gleichen Himmel, aber wir haben nicht alle den gleichen Horizont. </strong><br></br> We all live under the same sky, but we don’t all have the same horizon. <br></br>- <strong>Konrad Adenauer</strong></>}
      />
      }
      {address==="mystory.html" && <><br></br> <br></br></>}
    </div>
  );
}

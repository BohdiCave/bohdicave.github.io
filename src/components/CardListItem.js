import React from 'react';
import {useLocation} from 'react-router-dom';

export default function CardListItem({name, collapse}) {
  const location = useLocation;
  const address = location.pathname;

  return(
    <li className="list-group-item">
      
      { name==="li1" ?  
        
        ( collapse==="collapseOne" ? (
          address==="/wisdom" ? 
            (<><strong> Краще голий та правдивий, ніж багатий та беззаконний.</strong><br></br> It is better to be naked and honest than rich and lawless <br></br>- <strong>Hryhoriy Skovoroda, 18th c. philosopher</strong></>)
          : address==="/story" ? 
            (<><strong>Born and raised in Lviv, Ukraine</strong>, when she was still under the Soviet occupation.</>)
          : address==="/interests" ? 
            (<><strong>Informally pursuing continued independent scholarship </strong> by following many an Ariadna's thread through the natural and social labyrinths of knowledge: <strong> Philosophy, history, philology, literature, music and art.</strong></>)
          : address==="/contacts" && 
            (<a href="mailto:bohdan.pechenyak@gmail.com">bohdan.pechenyak@gmail.com</a>))
        : collapse==="collapseTwo" ? (
          address==="/wisdom" ? 
            (<><strong>Omnia mea mecum porto. </strong><br></br> All that is mine I carry with me. - <strong>Bias of Priene</strong></>)
          : address==="/story" ? 
            (<><strong>At heart, I am a writer (bilingual)</strong> - of poetry, creative fiction, essays, and code (sic!), as a web developer.</>)
          : address==="/interests" ? 
            (<><strong>In the realm of sociology and anthropology: </strong>travel and languages, worldviews and cultures, decolonization and antiracism, identity and difference.</>) 
          : address==="/contacts" && 
            (<><strong>LinkedIn: </strong><a href="http://linkedin.com/in/pechenyak" target="new">Profile</a></>))
        : collapse==="collapseThree" ? (
          address==="/wisdom" ? 
            (<><strong>γνῶθι σεαυτόν. Gnôthi seautón. </strong><br></br> Know thyself. - <strong>Heraclitus</strong></>) 
          : address==="/story" ? 
            (<>Dedicated practitioner of <strong>mindfulness-awareness meditation</strong> (<em>shamatha-vipashyana</em>), within a "secular" or "modern" Buddhist approach.</>) 
          : address==="/interests" ? 
            (<><strong>Study of complex systems</strong>: systems theory, <strong>chaos</strong> theory, and <strong>complexity.</strong></>)
          : address==="/contacts" && 
            (<><strong>Facebook: </strong><a href="http://www.facebook.com/BohdiCave" target="new">My author's page</a></>))
        : collapse==="collapseFour" && 
            (<><strong>Wer sein selbst Meister ist und sich beherrschen kann, dem ist die weite Welt und alles untertan. </strong><br></br> He, who is master of himself and has command over his emotions, has at his feet the whole wide world and everything therein. - <strong>Paul Fleming</strong></>)
        )

      : name==="li2" ?  
        
        ( collapse==="collapseOne" ? 
          (address==="/wisdom" ? 
            (<><strong>Лиш боротись - значить жить! Vivere memento!</strong><br></br> Only struggle means to be alive! Remember to live! <br></br>- <strong>Ivan Franko, late 19th-early 20th cc. writer and philosopher</strong>"</>)
          : address==="/story" ? 
            (<><strong>Experienced Ukraine's Independence</strong> as a 10-year-old.</>)
          : address==="/interests" && 
            (<><strong>Bilingual writing:</strong> of poetry, creative fiction, essays (and code, as a web developer).</>)) 
        : collapse==="collapseTwo" ? 
          (address==="/wisdom" ? 
            (<><strong>Veni, vidi, vici.</strong> <br></br> I came, I saw, I conquered. - <strong>Julius Caesar</strong></>)
          : address==="/story" ? 
            (<><strong>Informally pursuing continued independent scholarship</strong> by following many an Ariadna's thread through the natural and social labyrinths of knowledge.</>)
          : address==="/interests" ? 
            (<> <strong>In the realm of psychology: </strong> evolutionary and moral psychology, "thinking slow and fast", multiple aspects of intelligence, flow and the origins of creativity, positive child development; a variety of psychotherapeutic perspectives, such as cognitive-behavioral, schema-based, inner family system, developmental, trauma-informed, personality-based, psychodynamic (i.e. psychoanalysis), Jungian (i.e. analytic psychology, archetypes, etc.).</>)
          : address==="/contacts" && 
            (<><strong>GitHub: </strong><a href="https://github.com/BohdiCave" target="new">BohdiCave</a></>))
        : collapse==="collapseThree" ? 
          (address==="/wisdom" ? 
            (<><strong>ἀγεωμέτρητος μηδεὶς εἰσίτω. Ageōmétrētos mēdeìs eisítō.</strong> <br></br> Let no one untrained in geometry enter. - <strong>Plato</strong></>) 
          : address==="/story" ? 
            (<><strong>My motivation in life:</strong> my loving wife <strong>Olena</strong> (also Ukrainian, a biochemist), and two ungovernable but sweet Jack Russell terriers: <strong>Dali and Mucha.</strong></>) 
          : address==="/interests" ? 
            (<><strong>Evolutionary science: </strong>emergence over scale, self-organization over time, pattern formation, complex adaptive systems, evolutionary neuroscience and psychology.</>)
          : address==="/contacts" && 
            (<><strong>Medium: </strong><a href="http://medium.com/@BohdanPechenyak" target="new">My stories</a></>))
        : collapse==="collapseFour" && 
            (<><strong>Lebe, wie du, wenn du stirbst, wünschen wirst, gelebt zu haben. </strong><br></br> Live like, when you die, you will wish to have lived. - <strong>Christian Fürchtegott Gellert</strong></>)
        )
      
      : name==="li3" ? 

        ( collapse==="collapseOne" ? 
          (address==="/wisdom" ? 
            (<><strong>Сором - хилитися і долі коритися.</strong><br></br> It's a shame - to bow down and submit to fate. <br></br>- <strong>Lesya Ukrainka, early 20th c. poet and dramatist</strong></>)
          : address==="/story" ? 
            (<><strong>Emigrated to USA at the age of 17.</strong> Currently, I live in Philadelphia, PA.</>)
          : address==="/interests" && 
            (<>Drawn to <strong>artistic pursuits</strong> both verbal and visual (collage, photography, graphic design).</>)) 
        : collapse==="collapseTwo" ? 
          (address==="/wisdom" ? 
            (<><strong>Homo homini lupus est. </strong><br></br> A human is a wolf to another human. - <strong>Plautus</strong></>) 
          : address==="/story" ? 
            (<><strong>Deeply interested in ecology</strong> and climate change, <strong>artistic pursuits</strong> both verbal and visual, <strong>travel</strong> and languages, <strong>worldviews</strong> and cultures, <strong>decolonization and antiracism</strong>, identity and difference.</>)
          : address==="/interests" && 
            (<><strong>In the realm of religious studies: </strong> comparative perspective among world religions, philosophical systems and worldviews; Western and Eastern esotericism; integrative spiritual practices and perspectives. I practice <strong>mindfulness-awareness meditation</strong> (<em>shamatha-vipashyana</em>), within a "secular" or "modern Buddhist" approach.</>))
        : collapse==="collapseThree" ? 
          (address==="/wisdom"? 
            (<><strong>ἀνάγκᾳ δ’ οὐδὲ θεοὶ μάχονται. Anánkāi d'oudè theoì mákhontai.</strong> <br></br> Not even the gods fight necessity. - <strong>Simonides</strong></>) 
          : address==="/story" ? 
            (<><strong>My philosophy of life:</strong> Life is an art best practiced through <strong>wisdom and compassion</strong>. Everything in life points to the <strong>truth of interbeing</strong> and interconnectedness. Separate "self" and "other", "us" and "them" are mere illusions. <strong>The Other is also the Self and "they" are also "we".</strong></>) 
          : address==="/interests" && 
            (<><strong>Mathematics:</strong> numbers, algebras, geometries, probability theory; relation of maths to music, philosophy and cosmology, to <strong>quantum physics and relativity.</strong></>))
        : collapse==="collapseFour" && 
            (<><strong>Jeder, der sich die Fähigkeit erhält, Schönes zu erkennen, wird nie alt werden. </strong><br></br> Anyone who holds on to the ability to see beauty never grows old. - <strong>Franz Kafka</strong></>)
        )

      : name==="li4" ?

        ( collapse==="collapseOne" ? 
          (address==="/wisdom" ? 
            (<><strong>Людина створена для щастя, як птах для польоту. </strong><br></br> A human being is meant to be happy, as a bird is meant to be flying. <br></br>- <strong>Volodymyr Korolenko, 20th c. writer</strong></>)
          : address==="/story" ? 
            (<><strong>Formally educated in sociology</strong> (B.A.) and social work (M.S.W.)</>)
          : address==="/interests" && 
            (<><strong>Some of my favorite novelists:</strong> D.H. Lawrence, Hermann Hesse, Thomas Mann, V.Domontovych, Yuriy Kosach, Kurt Vonnegut, Milan Kundera, Umberto Eco.</>)) 
        : collapse==="collapseTwo" ? 
          (address==="/wisdom" ? 
            (<><strong>Sapienti sat. </strong><br></br> Enough for the wise. - <strong>Plautus</strong></>)
          : address==="/story" ? 
            (<><strong>No less deeply interested in the study of complex systems </strong>: systems theory, <strong>quantum</strong> theory, <strong>chaos</strong> theory, <strong>complexity</strong>, <strong>evolutionary science</strong> (emergence and self-organization, pattern formation, etc.).</>)
          : address==="/interests" && 
            (<><strong>In the realm of historical studies:</strong> history of science and maths, archaeology of knowledge, genealogy of social institutions.</>))
        : collapse==="collapseThree" ? 
          (address==="/wisdom" ? 
            (<><strong>δῶς μοι πᾶ στῶ καὶ τὰν γᾶν κινάσω. Dôs moi pâ stô, kaì tàn gân kīnā́sō.</strong> <br></br> Give me somewhere to stand, and I will move the earth. - <strong>Archimedes</strong></>) 
          : address==="/story" ? 
            (<><strong>Wisdom of Love, Love of Wisdom.</strong></>) 
          : address==="/interests" && 
            (<><strong>Life sciences:</strong> genetics, molecular biology, systems biology, <strong>ecology and climate change.</strong></>))
        : collapse==="collapseFour" && 
            (<><strong>Zwei Dinge sind unendlich, das Universum und die menschliche Dummheit, aber bei dem Universum bin ich mir noch nicht ganz sicher. </strong><br></br> Two things are infinite: the universe and human stupidity; but I’m still not completely sure about the universe. - <strong>Albert Einstein</strong></>)
        )
         
      : name==="li5" &&   
         
        ( collapse==="collapseOne" ? 
          (address==="/wisdom" ? 
            (<><strong>Єдине, що від нас іще залежить, - принаймні вік прожити, як належить. </strong><br></br> The only thing that still depends on us - is to live our life properly. <br></br>- <strong>Lina Kostenko, poet and 1960-70s dissident</strong></>)
          : address==="/story" ? 
            (<><strong>Despite being an émigré, I "lived through" the two recent revolutions in Ukraine</strong> - Orange (2004-05) and Dignity (2013-14). That struggle is not over, as the Russian aggression in Eastern Ukraine and illegally occupied Crimea continues.</>)
          : address==="/interests" && 
            (<><strong>Some of my favorite artists:</strong> <strong>Georgia O'Keeffe, Surrealism</strong> (Dali, Magritte, Frida Kahlo, others), <strong>Cubism</strong> (Picasso, Chagall, Archipenko, Gris, Marc, Severini, others), <strong>Art Nouveau/Secession</strong> (Mucha, Klimt), <strong>abstract art</strong> (Hilma af Klint, Klee, Kandinsky, Pollock, others), and many-many more.</>)) 
        : collapse==="collapseTwo" ? 
            (<><strong>In vino veritas.</strong> <br></br> Truth is in the wine. - <strong>Pliny The Elder</strong></>)
        : collapse==="collapseThree" ? 
            (<><strong>ἓν οἶδα ὅτι οὐδὲν οἶδα. Hèn oîda hóti oudèn oîda.</strong> <br></br> I know one thing, that I know nothing. - <strong>Socrates</strong></>)
        : collapse==="collapseFour" && 
            (<><strong>Wir leben alle unter dem gleichen Himmel, aber wir haben nicht alle den gleichen Horizont. </strong><br></br> We all live under the same sky, but we don’t all have the same horizon. <br></br>- <strong>Konrad Adenauer</strong></>)
        )
      }
    </li>
  );
}
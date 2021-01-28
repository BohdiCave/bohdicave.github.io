import React from 'react';

export default function Accordion() {
    return(
        <div className="accordion" id="accordionExample">
            <div className="card">
                <div className="card-header" id="headingOne">
                    <h2 className="mb-0">
                    <button className="btn btn-link btn-block text-left collapsed " type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Ukrainian
                    </button>
                    </h2>
                </div>
                <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                    <div className="card-body">
                    <ul className="list-group">
                        <li className="list-group-item"><strong>Краще голий та правдивий, ніж багатий та беззаконний.</strong><br></br> It is better to be naked and honest than rich and lawless. <br></br>- <strong>Hryhoriy Skovoroda, 18th c. philosopher</strong></li>
                        <li className="list-group-item"><strong>Лиш боротись - значить жить! Vivere memento!</strong><br></br> Only struggle means to be alive! Remember to live! <br></br>- <strong>Ivan Franko, late 19th-early 20th cc. writer and philosopher</strong></li>
                        <li className="list-group-item"><strong>Сором - хилитися і долі коритися.</strong><br></br> It's a shame - to bow down and submit to fate. <br></br>- <strong>Lesya Ukrainka, early 20th c. poet and dramatist</strong></li>
                        <li className="list-group-item"><strong>Людина створена для щастя, як птах для польоту. </strong><br></br> A human being is meant to be happy, as a bird is meant to be flying. <br></br>- <strong>Volodymyr Korolenko, 20th c. writer</strong></li>
                        <li className="list-group-item"><strong>Єдине, що від нас іще залежить, - принаймні вік прожити, як належить. </strong><br></br> The only thing that still depends on us - is to live our life properly. <br></br>- <strong>Lina Kostenko, poet and 1960-70s dissident</strong></li>
                    </ul>  
                    </div>
                </div>
            </div>
        
            <div className="card">
                <div className="card-header" id="headingTwo">
                    <h2 className="mb-0">
                    <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Latin
                    </button>
                    </h2>
                </div>
                <div id="collapseTwo" className="collapse show" aria-labelledby="headingTwo" data-parent="#accordionExample">
                    <div className="card-body">
                    <ul className="list-group">
                        <li className="list-group-item"><strong>Omnia mea mecum porto. </strong><br></br> All that is mine I carry with me. - <strong>Bias of Priene</strong></li>
                        <li className="list-group-item"><strong>Veni, vidi, vici.</strong> <br></br> I came, I saw, I conquered. - <strong>Julius Caesar</strong></li>
                        <li className="list-group-item"><strong>Homo homini lupus est. </strong><br></br> A human is a wolf to another human. - <strong>Plautus</strong></li>
                        <li className="list-group-item"><strong>Sapienti sat. </strong><br></br> Enough for the wise. - <strong>Plautus</strong></li>
                        <li className="list-group-item"><strong>In vino veritas.</strong> <br></br> Truth is in the wine. - <strong>Pliny The Elder</strong></li>
                    </ul>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header" id="headingThree">
                    <h2 className="mb-0">
                    <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Greek
                    </button>
                    </h2>
                </div>
                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                    <div className="card-body">
                    <ul className="list-group">
                        <li className="list-group-item"><strong>γνῶθι σεαυτόν. Gnôthi seautón. </strong><br></br> Know thyself. - <strong>Heraclitus</strong></li>
                        <li className="list-group-item"><strong>ἀγεωμέτρητος μηδεὶς εἰσίτω. Ageōmétrētos mēdeìs eisítō.</strong> <br></br> Let no one untrained in geometry enter. - <strong>Plato</strong></li>
                        <li className="list-group-item"><strong>ἀνάγκᾳ δ’ οὐδὲ θεοὶ μάχονται. Anánkāi d'oudè theoì mákhontai.</strong> <br></br> Not even the gods fight necessity. - <strong>Simonides</strong></li>
                        <li className="list-group-item"><strong>δῶς μοι πᾶ στῶ καὶ τὰν γᾶν κινάσω. Dôs moi pâ stô, kaì tàn gân kīnā́sō.</strong> <br></br> Give me somewhere to stand, and I will move the earth. - <strong>Archimedes</strong></li>
                        <li className="list-group-item"><strong>ἓν οἶδα ὅτι οὐδὲν οἶδα. Hèn oîda hóti oudèn oîda.</strong> <br></br> I know one thing, that I know nothing. - <strong>Socrates</strong></li>
                    </ul>
                    </div>
                </div>
            </div>
        
            <div className="card">
                <div className="card-header" id="headingFour">
                    <h2 className="mb-0">
                    <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        German
                    </button>
                    </h2>
                </div>
                <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                    <div className="card-body">
                    <ul className="list-group">
                        <li className="list-group-item"><strong>Wer sein selbst Meister ist und sich beherrschen kann, dem ist die weite Welt und alles untertan. </strong><br></br> He, who is master of himself and has command over his emotions, has at his feet the whole wide world and everything therein. - <strong>Paul Fleming</strong></li>
                        <li className="list-group-item"><strong>Lebe, wie du, wenn du stirbst, wünschen wirst, gelebt zu haben. </strong><br></br> Live like, when you die, you will wish to have lived. - <strong>Christian Fürchtegott Gellert</strong></li>
                        <li className="list-group-item"><strong>Jeder, der sich die Fähigkeit erhält, Schönes zu erkennen, wird nie alt werden. </strong><br></br> Anyone who holds on to the ability to see beauty never grows old. - <strong>Franz Kafka</strong></li>
                        <li className="list-group-item"><strong>Zwei Dinge sind unendlich, das Universum und die menschliche Dummheit, aber bei dem Universum bin ich mir noch nicht ganz sicher. </strong><br></br> Two things are infinite: the universe and human stupidity; but I’m still not completely sure about the universe. - <strong>Albert Einstein</strong></li>
                        <li className="list-group-item"><strong>Wir leben alle unter dem gleichen Himmel, aber wir haben nicht alle den gleichen Horizont. </strong><br></br> We all live under the same sky, but we don’t all have the same horizon. <br></br>- <strong>Konrad Adenauer</strong></li>
                    </ul>  
                    </div>
                </div>
            </div>
        </div>

        {/* My Story
        <div className="accordion" id="accordionExample">
              <div className="card">
                <div className="card-header" id="headingOne">
                  <h2 className="mb-0">
                    <button className="btn btn-link btn-block text-left collapsed " type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Several biographical facts
                    </button>
                  </h2>
                </div>
                <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                  <div className="card-body">
                    <ul className="list-group">
                      <li className="list-group-item"><strong>Born and raised in Lviv, Ukraine</strong>, when it was still under the Soviet occupation.</li>
                      <li className="list-group-item"><strong>Experienced Ukraine's Independence</strong> as a 10-year-old.</li>
                      <li className="list-group-item"><strong>Emigrated to USA at the age of 17.</strong> Currently, I live in Philadelphia, PA.</li>
                      <li className="list-group-item"><strong>Formally educated in sociology</strong> (B.A.) and social work (M.S.W.)</li>
                      <li className="list-group-item"><strong>Despite being an émigré, I "lived through" the two recent revolutions in Ukraine</strong> - Orange (2004-05) and Dignity (2013-14). That struggle is not over, as the Russian aggression in Eastern Ukraine and illegally occupied Crimea continues.</li>
                    </ul>  
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingTwo">
                  <h2 className="mb-0">
                    <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Intellectual orientation
                    </button>
                  </h2>
                </div>
                <div id="collapseTwo" className="collapse show" aria-labelledby="headingTwo" data-parent="#accordionExample">
                  <div className="card-body">
                      <ul className="list-group">
                        <li className="list-group-item"><strong>At heart, I am a writer (bilingual)</strong> - of poetry, creative fiction, essays, and - yes - code, as a web developer.</li>
                        <li className="list-group-item"><strong>Informally pursuing continued independent scholarship</strong> by following many an Ariadna's thread through the natural and social labyrinths of knowledge</li>
                        <li className="list-group-item"><strong>Deeply interested in ecology</strong> and climate change, <strong>artistic pursuits</strong> both verbal and visual, <strong>travel</strong> and languages, <strong>worldviews</strong> and cultures, <strong>decolonization and antiracism</strong>, identity and difference.</li>
                        <li className="list-group-item"><strong>No less deeply interested in the study of complex systems</strong>: systems theory, <strong>quantum</strong> theory, <strong>chaos</strong> theory, <strong>complexity</strong>, <strong>evolutionary science</strong> (emergence and self-organization, pattern formation, etc.).  </strong></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="headingThree">
                    <h2 className="mb-0">
                      <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Motivational outlook
                      </button>
                    </h2>
                  </div>
                  <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                    <div className="card-body">
                      <ul className="list-group">
                        <li className="list-group-item">Dedicated practitioner of <strong>mindfulness-awareness meditation</strong> (<em>shamatha-vipashyana</em>), within a "secular" or "modern" Buddhist approach.</li>
                        <li className="list-group-item"><strong>My motivation in life:</strong> my loving wife <strong>Olena</strong> (also Ukrainian, a biochemist), and two ungovernable but sweet Jack Russell terriers: <strong>Dali and Mucha.</strong></li>
                        <li className="list-group-item"><strong>My philosophy of life:</strong> Life is an art best practiced through <strong>wisdom and compassion</strong>. Everything in life points to the <strong>truth of interbeing</strong> and interconnectedness. Separate "self" and "other", "us" and "them" are mere illusions. <strong>The Other is also the Self and "they" are also "we".</strong></li>
                        <li className="list-group-item"><strong>Wisdom of Love, Love of Wisdom.</strong></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <br><br>
            </div>
        
        Interests Page: 

        <div className="accordion" id="accordionExample">
            <div className="card">
              <div className="card-header" id="headingOne">
                <h2 className="mb-0">
                  <button className="btn btn-link btn-block text-left collapsed " type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">                    
                    Arts and Humanities
                  </button>
                </h2>
              </div>
              <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div className="card-body">
                  <ul className="list-group">
                    <li className="list-group-item"><strong>Informally pursuing continued independent scholarship</strong> by following many an Ariadna's thread through the natural and social labyrinths of knowledge:<strong> Philosophy, history, philology, literature, music and art.</strong></li>
                    <li className="list-group-item"><strong>Bilingual writing:</strong> of poetry, creative fiction, essays (and code, as a web developer).</li>                      <li className="list-group-item">Drawn to <strong>artistic pursuits</strong> both verbal and visual (collage, photography, graphic design).</li>
                    <li className="list-group-item"><strong>Some of my favorite novelists:</strong> D.H. Lawrence, Hermann Hesse, Thomas Mann, V.Domontovych, Yuriy Kosach, Kurt Vonnegut, Milan Kundera, Umberto Eco.</li>
                    <li className="list-group-item"><strong>Some of my favorite artists:</strong> <strong>Georgia O'Keeffe, Surrealism</strong> (Dali, Magritte, Frida Kahlo, others), <strong>Cubism</strong> (Picasso, Chagall, Archipenko, Gris, Marc, Severini, others), <strong>Art Nouveau/Secession</strong> (Mucha, Klimt), <strong>abstract art</strong> (Hilma af Klint, Klee, Kandinsky, Pollock, others), and many-many more.</li>
                  </ul>  
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingTwo">
                <h2 className="mb-0">
                  <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Social Sciences
                  </button>
                </h2>
              </div>
              <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                <div className="card-body">
                  <ul className="list-group">                   
                    <li className="list-group-item"><strong>In the realm of sociology and anthropology: </strong>travel and languages, worldviews and cultures, decolonization and antiracism, identity and difference.</li>
                    <li className="list-group-item"><strong>In the realm of psychology: </strong> evolutionary and moral psychology, "thinking slow and fast", multiple aspects of intelligence, flow and the origins of creativity, positive child development; a variety of psychotherapeutic perspectives, such as cognitive-behavioral, schema-based, inner family system, developmental, trauma-informed, personality-based, psychodynamic (i.e. psychoanalysis), Jungian (i.e. analytic psychology, archetypes, etc.).</li> 
                    <li className="list-group-item"><strong>In the realm of religious studies: </strong> comparative perspective among world religions, philosophical systems and worldviews; Western and Eastern esotericism; integrative spiritual practices and perspectives. I practice <strong>mindfulness-awareness meditation</strong> (<em>shamatha-vipashyana</em>), within a "secular" or "modern Buddhist" approach.</li>
                    <li className="list-group-item"><strong>In the realm of historical studies:</strong> history of science and maths, archaeology of knowledge, genealogy of social institutions.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingThree">
                <h2 className="mb-0">
                  <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Natural Sciences
                  </button>
                </h2>
              </div>
              <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                <div className="card-body">
                  <ul className="list-group">
                    <li className="list-group-item"><strong>Study of complex systems</strong>: systems theory, <strong>chaos</strong> theory, and <strong>complexity.</strong></li>
                    <li className="list-group-item"><strong>Evolutionary science: </strong>emergence over scale, self-organization over time, pattern formation, complex adaptive systems, evolutionary neuroscience and psychology.</li>
                    <li className="list-group-item"><strong>Mathematics:</strong> numbers, algebras, geometries, probability theory; relation of maths to music, philosophy and cosmology, to <strong>quantum physics and relativity.</strong></li>
                    <li className="list-group-item"><strong>Life sciences:</strong> genetics, molecular biology, systems biology, <strong>ecology and climate change.</strong></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        
        Contacts Page:
         <div className="accordion accordion2" id="accordionExample">
              <div className="card">
                <div className="card-header" id="headingOne">
                  <h2 className="mb-0">
                    <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      E-mail
                    </button>
                  </h2>
                </div>               
                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                  <div className="card-body">
                    <a href="mailto:bohdan.pechenyak@gmail.com">bohdan.pechenyak@gmail.com</a>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingThree">
                  <h2 className="mb-0">
                    <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Related to Web Development
                    </button>
                  </h2>
                </div>
                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                  <div className="card-body">
                    <ul className="list-group">
                      <li className="list-group-item"><strong>LinkedIn: </strong><a href="http://linkedin.com/in/pechenyak" target="new">Profile</a></li> 
                      <li className="list-group-item"><strong>GitHub: </strong><a href="https://github.com/BohdiCave" target="new">BohdiCave</a></li>
                    </ul>  
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingFour">
                  <h2 className="mb-0">
                    <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      Related to Writing or Translation
                    </button>
                  </h2>
                </div>
                <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                  <div className="card-body">
                    <ul className="list-group">
                      <li className="list-group-item"><strong>Facebook: </strong><a href="http://www.facebook.com/BohdiCave" target="new">My author's page</a></li>
                      <li className="list-group-item"><strong>Medium: </strong><a href="http://medium.com/@BohdanPechenyak" target="new">My stories</a></li>
                    </ul>  
                  </div>
                </div>
              </div>
            </div>
        
        
        */}
    );
}

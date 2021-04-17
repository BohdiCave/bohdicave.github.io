import React from 'react';
import {useLocation} from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import '../styles/accordion-style.css';

export default function AccordionFold({id}) {
  const location = useLocation();
  const address = location.pathname;
 
  return(
    <Accordion defaultActiveKey="0" id={id}>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">          
            <h2>
            {address==="/wisdom" ? "Ukrainian" :
            address==="/story" ? "Several biographical facts" :
            address==="/interests" ? "Arts and Humanities" : 
            address==="/contacts" ? "E-mail" : 
            address==="/wisdom-ua" ? "Українська" : 
            address==="/story-ua" ? "Декілька біографічних фактів" : 
            address==="/interests-ua" ? "Мистецтво та гуманістика" : 
            address==="/contacts-ua" ? "Е-пошта" : "Error"} 
            </h2>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0" data-parent={ 
          (address==="/wisdom" || address==="/wisdom-ua") ? "#wisdom" : 
          (address==="/story" || address==="/story-ua") ? "#story" :
          (address==="/interests" || address==="/interests-ua") ? "#interests" : 
          (address==="/contacts" || address==="/contacts-ua") ? "#contacts" : undefined}>
          {(address==="/wisdom" || address==="/wisdom-ua") ? 
          (<ListGroup variant="flush">
            <ListGroup.Item>
              {address==="/wisdom" ? (<strong>Краще голий та правдивий, ніж багатий та беззаконний.</strong>)
              : "Краще голий та правдивий, ніж багатий та беззаконний"}
              <br></br>
              {address==="/wisdom" ? 
              (<>It is better to be naked and honest than rich and lawless." <br></br>
              - <strong>Hryhoriy Skovoroda, 18th c. philosopher</strong></>) 
              : (<>- <strong>Григорій Сковорода, філософ</strong></>)}
            </ListGroup.Item>
            <ListGroup.Item>
              {address==="/wisdom" ? (<strong>Лиш боротись - значить жить! Vivere memento!</strong>)
              : "Лиш боротись - значить жить! Vivere memento!"}
              <br></br> 
              {address==="/wisdom" ? (<>Only to struggle means to be alive! Remember to live! <br></br>
              - <strong>Ivan Franko, late 19th-early 20th cc. writer and philosopher</strong></>)
              : (<>- <strong>Іван Франко, письменник та філософ</strong></>)}
            </ListGroup.Item>
            <ListGroup.Item>
              {address==="/wisdom" ? (<strong>Сором - хилитися і долі коритися.</strong>)
              : "Сором - хилитися і долі коритися."}
              <br></br> 
              {address==="/wisdom" ? (<>It's a shame - to bow down and submit to fate. <br></br>
              - <strong>Lesya Ukrainka, early 20th c. poet and dramatist</strong></>)
              : (<>- <strong>Леся Українка, поетка та драматургиня</strong></>)}
            </ListGroup.Item>
            <ListGroup.Item>
              {address==="wisdom" ? (<strong>Людина створена для щастя, як птах для польоту. </strong>) 
              : "Людина створена для щастя, як птах для польоту."}
              <br></br> 
              {address==="/wisdom" ? (<>A human being is meant to be happy, as a bird is meant to be flying. <br></br> - <strong>Volodymyr Korolenko, 20th c. writer</strong></>)
              : (<>- <strong>Володимир Короленко, письменник</strong></>)}
            </ListGroup.Item>
            <ListGroup.Item>
              {address==="/wisdom" ? (<strong>Єдине, що від нас іще залежить, - принаймні вік прожити, як належить. </strong>) : "Єдине, що від нас іще залежить, - принаймні вік прожити, як належить."}
              <br></br>
              {address==="/wisdom" ? (<>The only thing that still depends on us - is to live our life properly. 
              <br></br> - <strong>Lina Kostenko, poet and 1960-70s dissident</strong></>)
              : (<> - <strong>Ліна Костенко, поетка</strong></>)}
            </ListGroup.Item>
          </ListGroup>) 
          : (address==="/story" || address==="/story-ua") ?
          (<ListGroup variant="flush">
            <ListGroup.Item>
              {address==="/story" ? (<><strong>Born and raised in Lviv, Ukraine</strong>, when she was still under the Soviet occupation.</>) 
              : (<><strong>Народився й виріс у Львові</strong> в останнє десятиліття радянської окупації.</>)}
            </ListGroup.Item>
            <ListGroup.Item>
              {address==="/story" ? (<><strong>Experienced Ukraine's Independence</strong> as a 10-year-old.</>)
              : (<><strong>Пережив Акт проголошення Незалежності</strong> у віці 10 років.</>)}
            </ListGroup.Item>
            <ListGroup.Item>
              {address==="/story" ? (<><strong>Emigrated to USA at the age of 17.</strong> Currently, I live in Philadelphia, PA.</>) 
              : (<><strong>Емігрував до США у віці 17 років.</strong> Зараз живу в місті Філадельфія, штат Пенсильванія.</>)}
            </ListGroup.Item>
            <ListGroup.Item>
              {address==="/story" ? (<><strong>Formally educated in sociology</strong> (B.A.) and social work (M.S.W.)</>) 
              : (<><strong>Формальна освіта - соціологія</strong> (бакалаврат, B.A.) та соціальна робота (маґістратура, M.S.W.)</>)}
            </ListGroup.Item>
            <ListGroup.Item>
              {address==="/story" ? (<><strong>Despite being an émigré, I "lived through" the two recent revolutions in Ukraine</strong> - Orange (2004-05) and Dignity (2013-14). That struggle is not over, as the Russian aggression in Eastern Ukraine and illegally occupied Crimea continues.</>)
              : (<><strong>Будучи емігрантом, "пережив" дві нещодавні революції в Україні</strong> - Помаранчеву (2004-05) та Гідності (2013-14). Боротьбa продовжується, оскільки російська окупація східної України та незаконна окупація Криму ще триває.</>)}
            </ListGroup.Item>
          </ListGroup>)
          : (address==="/interests" || address==="/interests-ua") ? 
          (<ListGroup variant="flush">
            <ListGroup.Item>
              {address==="/interests" ? (<><strong>Informally pursuing continued independent scholarship </strong> by following many an Ariadna's thread through the natural and social labyrinths of knowledge: <strong> Philosophy, history, philology, literature, music and art.</strong></>)
              : (<><strong>Неформально продовжую вивчення та самоосвіту </strong>, слідуючи за численними нитями Аріадни крізь природничі та суспільнознавчі лабіринти знань:<strong> філософію, історію, філологію, літературу, музику та мистецтво.</strong></>)}
            </ListGroup.Item>
            <ListGroup.Item>
              {address==="/interests" ? (<><strong>Bilingual writing:</strong> of poetry, creative fiction, essays (and code, as a web developer).</>)
              : (<><strong>Двомовний автор:</strong> поезій, прози, есеїв (а також коду як веб-розробник).</>)}         
            </ListGroup.Item>
            <ListGroup.Item>
              {address==="/interests" ? (<>Drawn to <strong>artistic pursuits</strong> both verbal and visual (collage, photography, graphic design).</>)
              : (<>Мене приваблюють <strong>мистецькі та творчі проєкти</strong>, як вербального, так і візуального штибу (колаж, фотографія, графічний дизайн).</>)}
            </ListGroup.Item>
            <ListGroup.Item>
              {address==="/interests" ? (<><strong>Some of my favorite novelists:</strong> D.H. Lawrence, Hermann Hesse, Thomas Mann, V.Domontovych, Yuriy Kosach, Kurt Vonnegut, Milan Kundera, Umberto Eco.</>) 
              : (<><strong>Кілька улюблених письменників-романістів:</strong> Д.Г.Лоренс, Герман Гессе, Томас Манн, В.Домонтович, Юрій Косач, Курт Воннеґут, Мілан Кундера, Умберто Еко.</>)}
            </ListGroup.Item>
            <ListGroup.Item>
              {address==="/interests" ? (<>
                <strong>Some of my favorite artists:</strong> <strong>Georgia O'Keeffe, Surrealism</strong> (Dali, Magritte, Frida Kahlo, others), <strong>Cubism</strong> (Picasso, Chagall, Archipenko, Gris, Marc, Severini, others), <strong>Art Nouveau/Secession</strong> (Mucha, Klimt), <strong>abstract art</strong> (Hilma af Klint, Klee, Kandinsky, Pollock, others), and many-many more.
              </>) : (<>
                <strong>Кілька улюблених мистців:</strong> <strong>Джорджія О'Кіф, Сюрреалізм</strong> (Далі, Маґріт, Фріда Кало та инші), <strong>Кубізм</strong> (Пікассо, Шаґал, Архипенко, Ґрі, Марк, Северіні та инші), <strong>Art Nouveau/Сецесія</strong> (Муха, Клімт), <strong>абстрактне мистецтво</strong> (Гільма аф Клінт, Клее, Кандінський, Поллок та инші), а також ще багато-багато инших.
              </>)}
            </ListGroup.Item>
          </ListGroup>)
          : (address==="/contacts" || address==="/contacts-ua") ? 
          (<ListGroup variant="flush">
            <ListGroup.Item>
              <a href="mailto:bohdan.pechenyak@gmail.com">bohdan.pechenyak@gmail.com</a>
            </ListGroup.Item>
          </ListGroup>) 
          : (<ListGroup>
              <ListGroup.Item>Error</ListGroup.Item>
            </ListGroup>)
          }            
        </Accordion.Collapse>
      </Card>
      <Card>  
        <Accordion.Toggle as={Card.Header} eventKey="1">
          <h2>
            {address==="/wisdom" ? "Latin" :
            address==="/story" ? "Intellectual orientation" :
            address==="/interests" ? "Social Sciences" : 
            address==="/contacts" ? "Related to Web Development" :
            address==="/wisdom-ua" ? "Латинська" :
            address==="/story-ua" ? "Інтелектуальна орієнтація" :
            address==="/interests-ua" ? "Суспільнознавство" : 
            address==="/contacts-ua" ? "Стосовно веб-розробки" : "Error"} 
          </h2>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1" data-parent={ 
          (address==="/wisdom" || address==="/wisdom-ua") ? "#wisdom" : 
          (address==="/story" || address==="/story-ua") ? "#story" :
          (address==="/interests" || address==="/interests-ua") ? "#interests" : 
          (address==="/contacts" || address==="/contacts-ua") ? "#contacts" : undefined}>
          {(address==="/wisdom" || address==="/wisdom-ua") ? 
          (<ListGroup variant="flush">
            <ListGroup.Item>           
              <strong>Omnia mea mecum porto. </strong>
              <br></br>
              {address==="/wisdom" ? 
              (<>All that is mine I carry with me. - <strong>Bias of Priene</strong></>) 
              : (<>Все своє ношу з собою. - <strong>Біас з Пріени</strong></>)}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Homo homini lupus est. </strong>
              <br></br> 
              {address==="/wisdom" ? 
              (<>A human is a wolf to another human. - <strong>Plautus</strong></>)
              : (<>Прийшов, побачив, переміг. - <strong>Юлій Цезар</strong></>)}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Veni, vidi, vici.</strong> 
              <br></br> 
              {address==="/wisdom" ? 
              (<>I came, I saw, I conquered. - <strong>Julius Caesar</strong></>)
              : (<>Людина людині - вовк. - <strong>Плавт</strong></>)}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Sapienti sat. </strong>
              <br></br> 
              {address==="/wisdom" ? 
              (<>Enough for the wise. - <strong>Plautus</strong></>)
              : (<>Мудрому вистачить. - <strong>Плавт</strong></>)}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>In vino veritas.</strong> 
              <br></br> 
              {address==="/wisdom" ? 
              (<>Truth is in the wine. - <strong>Pliny The Elder</strong></>)
              : (<>Правда - у вині. - <strong>Пліній старший</strong></>)}
            </ListGroup.Item>
          </ListGroup>)
          : (address==="/story" || address==="/story-ua") ?
          (<ListGroup variant="flush">
            <ListGroup.Item>
              {address==="/story" ? 
              (<><strong>At heart, I am a writer (bilingual)</strong> - of poetry, creative fiction, essays, and code (sic!), as a web developer.</>) 
              : (<><strong>В душі, я поет і письменник (двомовний)</strong> - пишу вірші, прозу, есеї, а також код, як веб-розробник.</>)}
            </ListGroup.Item>
            <ListGroup.Item>
              {address==="/story" ? 
              (<><strong>Informally pursuing continued independent scholarship</strong> by following many an Ariadna's thread through the natural and social labyrinths of knowledge.</>) 
              : (<><strong>Неформально продовжую незалежний процес самоосвіти та дослідження</strong>, слідуючи за численними нитями Аріадни крізь природничі та суспільнознавчі лабіринти знань.</>)}
            </ListGroup.Item>
            <ListGroup.Item>
              {address==="/story" ? 
              (<><strong>Deeply interested in ecology</strong> and climate change, <strong>artistic pursuits</strong> both verbal and visual, <strong>travel</strong> and languages, <strong>worldviews</strong> and cultures, <strong>decolonization and antiracism</strong>, identity and difference.</>) 
              : (<><strong>Маю глибоке зацікавлення в екології</strong> та зміні клімату, <strong>мистецтві та творчості</strong>, як вербальному, так і візуальному, <strong>люблю подорожувати</strong>, цікавлюся мовами, <strong>світоглядами</strong> та культурами, <strong>підтримую деколонізацію та антирасизм</strong>, цікавлюся питаннями ідентичності та відмінності.</>)}
            </ListGroup.Item>
            <ListGroup.Item>
              {address==="/story" ? 
              (<><strong>No less deeply interested in the study of complex systems </strong>: systems theory, <strong>quantum</strong> theory, <strong>chaos</strong> theory, <strong>complexity</strong>, <strong>evolutionary science</strong> (emergence and self-organization, pattern formation, etc.).</>) 
              : (<><strong>Не менш глибоко зацікавлений у вивченні комплексних систем</strong>: теорію систем, <strong>квантову</strong> теорію, теорію <strong>хаосу</strong>, <strong>комплексність</strong>, <strong>еволюційну науку</strong> (виникнення/емергентність та самоорганізація, формування візерунків та схем тощо).</>)}
            </ListGroup.Item>
          </ListGroup>)
          : (address==="/interests" || address==="/interests-ua") ?
          (<ListGroup variant="flush">
            <ListGroup.Item>
            {address==="/interests" ? 
            (<><strong>In the realm of sociology and anthropology: </strong>travel and languages, worldviews and cultures, decolonization and antiracism, identity and difference.</>) 
            : (<><strong>У сфері соціології та антропології: </strong>подорожі та мови, світогляди та культури, деколонізація та антирасизм, ідентичність та відмінність.</>)}
            </ListGroup.Item>
            <ListGroup.Item>
            {address==="/interests" ? 
            (<><strong>In the realm of psychology: </strong> evolutionary and moral psychology, "thinking slow and fast", multiple aspects of intelligence, flow and the origins of creativity, positive child development; a variety of psychotherapeutic perspectives, such as cognitive-behavioral, schema-based, inner family system, developmental, trauma-informed, personality-based, psychodynamic (i.e. psychoanalysis), Jungian (i.e. analytic psychology, archetypes, etc.).</>) 
            : (<><strong>У сфері психології: </strong> еволюційна та моральна психологія, "швидке та повільне мислення", багатогранність та множинність розуму, плинність та джерела творчості, позитивний розвиток дитини; різноманітні психотерапевтичні перспективи, наприклад когнітивно-поведінкова (КПТ), схематична, внутрішня сімейна система, розвиткова, травматологія, особистісна, психодинамічна (себто психоаналіз), аналітична психологія Юнґа (архетипи тощо).</>)}
            </ListGroup.Item>
            <ListGroup.Item>
            {address==="/interests" ? 
            (<><strong>In the realm of religious studies: </strong> comparative perspective among world religions, philosophical systems and worldviews; Western and Eastern esotericism; integrative spiritual practices and perspectives. I practice <strong>mindfulness-awareness meditation</strong>(<em>shamatha-vipashyana</em>), within a "secular" or "modern Buddhist" approach.</>) 
            : (<><strong>У сфері релігієзнавства: </strong> порівняльна перспектива між світовими релігіями, філософськими системами та світоглядами; Західна та Східна езотерика; інтегративні духовні практики та перспективи. Я практикую <strong>медитацію уважності-усвідомленості</strong> (<em>шаматга-віпаш'яна</em>), в межах "світського" чи "модерного" Буддизму.</>)}
             </ListGroup.Item>
            <ListGroup.Item>
            {address==="/interests" ? 
            (<><strong>In the realm of historical studies:</strong> history of science and maths, archaeology of knowledge, genealogy of social institutions.</>) 
            : (<><strong>У сфері історичних досліджень:</strong> історія науки та математики, археологія знань, генеалогія суспільних інституцій.</>)}
            </ListGroup.Item>
          </ListGroup>)
          : (address==="/contacts" || address==="/contacts-ua") ? 
          (<ListGroup variant="flush">
            <ListGroup.Item>
              <strong>LinkedIn: </strong><a href="http://linkedin.com/in/pechenyak" target="new">{address==="/contacts" ? "Profile" : "Профіль"}</a>
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>GitHub: </strong><a href="https://github.com/BohdiCave" target="new">BohdiCave</a>
            </ListGroup.Item>
          </ListGroup>) 
          : (<ListGroup variant="flush">
              <ListGroup.Item>Error</ListGroup.Item>
            </ListGroup>)}
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="2">
          <h2>
            {address==="/wisdom" ? "Greek" :
            address==="/story" ? "Motivational outlook" :
            address==="/interests" ? "Natural Sciences" : 
            address==="/contacts" ? "Related to Writing or Translation" :  
            address==="/wisdom-ua" ? "Грецька" : 
            address==="/story-ua" ? "Мотиваційна перспектива" : 
            address==="/interests-ua" ? "Природничі науки" :
            address==="/contacts-ua" ? "Стосовно письма чи перекладу" 
            : "Error"}
          </h2>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="2" data-parent={ 
            address==="/wisdom" ? "#wisdom" : 
            address==="/story" ? "#story" :
            address==="/interests" ? "#interests" : 
            address==="/contacts" ? "#contacts" : undefined}>
          {(address==="/wisdom" || address==="/wisdom-ua") ?
          (<ListGroup variant="flush">
            <ListGroup.Item>
              <strong>γνῶθι σεαυτόν. Gnôthi seautón. </strong>
              <br></br> 
              {address==="/wisdom" ? (<>Know thyself. - <strong>Heraclitus</strong></>)
              : (<>Знай себе. - <strong>Геракліт</strong></>)}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>ἀγεωμέτρητος μηδεὶς εἰσίτω. Ageōmétrētos mēdeìs eisítō.</strong>
              <br></br> 
              {address==="/wisdom" ? (<>Let no one untrained in geometry enter. - <strong>Plato</strong></>)
              : (<>Нехай ніхто без знання геометрії не заходить. - <strong>Платон</strong></>)}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>ἀνάγκᾳ δ’ οὐδὲ θεοὶ μάχονται. Anánkāi d'oudè theoì mákhontai.</strong> 
              <br></br> 
              {address==="/wisdom" ? (<>Not even the gods fight necessity. - <strong>Simonides</strong></>)
              : (<>Навіть боги не перечать необхідності. - <strong>Симонід</strong></>)}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>δῶς μοι πᾶ στῶ καὶ τὰν γᾶν κινάσω. Dôs moi pâ stô, kaì tàn gân kīnā́sō.</strong> 
              <br></br> 
              {address==="/wisdom" ? (<>Give me somewhere to stand, and I will move the earth. - <strong>Archimedes</strong></>) 
              : (<>Дайте мені точку опори - і я переверну світ. - <strong>Архімед</strong></>)}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>ἓν οἶδα ὅτι οὐδὲν οἶδα. Hèn oîda hóti oudèn oîda.</strong> 
              <br></br> 
              {address==="/wisdom" ? (<>I know one thing, that I know nothing. - <strong>Socrates</strong></>)
              : (<>Я знаю лише одне: що я не знаю нічого. - <strong>Сократ</strong></>)}
            </ListGroup.Item>
          </ListGroup>)
          : (address==="/story" || address==="/story-ua") ?
          (<ListGroup variant="flush">
            <ListGroup.Item>
              {address==="/story" ? (<>Dedicated practitioner of <strong>mindfulness-awareness meditation</strong> (<em>shamatha-vipashyana</em>), within a "secular" or "modern" Buddhist approach.</>)
              : (<>Присвячуюся практиці <strong>медитації уважності-усвідомленості</strong> (<em>шаматга-віпаш'яна</em>), в межах "світської" чи "модерної" буддистської філософської перспективи.</>)}
            </ListGroup.Item>
            <ListGroup.Item>
              {address==="/story" ? (<><strong>My motivation in life:</strong> my loving wife <strong>Olena</strong> (also Ukrainian, a biochemist), and two ungovernable but sweet Jack Russell terriers: <strong>Dali and Mucha.</strong></>)
              : (<><strong>Моя мотивація в житті:</strong> моя любляча дружина <strong>Оленка</strong> (також українка, біохемік), а також двоє невиправних, але страшенно солодких Джек Рассел тер'єрів: <strong>Далі та Муха (або ж Сальвадор та Альфонс).</strong></>)}
            </ListGroup.Item>
            <ListGroup.Item>
              {address==="/story" ? (<><strong>My philosophy of life:</strong> Life is an art best practiced through <strong>wisdom and compassion</strong>. Everything in life points to the <strong>truth of interbeing</strong> and interconnectedness. Separate "self" and "other", "us" and "them" are mere illusions. <strong>The Other is also the Self and "they" are also "we".</strong></>)
              : (<><strong>Моя філософія життя:</strong> Життя - це мистецтво, яке найкраще практикувати шляхом <strong>мудрості та співчуття</strong>. Все у житті вказує на <strong>істину міжбуття</strong> та взаємозв'язку. Окремі "я" та "инші", "ми" та "вони" - це всього лиш ілюзії.  <strong>Инший є також Собою, а "вони" - це також "ми".</strong></>)}
            </ListGroup.Item>
            <ListGroup.Item>
              {address==="/story" ? (<><strong>Wisdom of Love, Love of Wisdom.</strong></>) : (<><strong>Мудрість Любові, Любов Мудрості.</strong></>)}
            </ListGroup.Item>
          </ListGroup>)
          : (address==="/interests" || address==="/interests-ua") ?
          (<ListGroup variant="flush">
            <ListGroup.Item>
              {address==="/interests" ? 
              (<><strong>Study of complex systems</strong>: systems theory, <strong>chaos</strong> theory, and <strong>complexity.</strong></>) 
              : (<><strong>Вивчення комплексних систем</strong>: теорія систем, теорія <strong>хаосу</strong> та <strong>комплексність.</strong></>)}
            </ListGroup.Item>
            <ListGroup.Item>
              {address==="/interests" ? 
              (<><strong>Evolutionary science: </strong>emergence over scale, self-organization over time, pattern formation, complex adaptive systems, evolutionary neuroscience and psychology.</>) 
              : (<><strong>Еволюційна наука: </strong>виникнення/емергентність у просторі, самоорганізація в часі, формування схем та візерунків, комплексні адаптивні системи, еволюційна нейронаука та психологія.</>)}
            </ListGroup.Item>
            <ListGroup.Item>
              {address==="/interests" ? 
              (<><strong>Mathematics:</strong> numbers, algebras, geometries, probability theory; relation of maths to music, philosophy and cosmology, to <strong>quantum physics and relativity.</strong></>) 
              : (<><strong>Математика:</strong> теорія чисел, алгебри, геометрії, теорія ймовірності; співвідношення математики і музики, філософії та космології; <strong>квантова фізика та теорія відносності.</strong></>)}
            </ListGroup.Item>
            <ListGroup.Item>
              {address==="/interests" ? 
              (<><strong>Life sciences:</strong> genetics, molecular biology, systems biology, <strong>ecology and climate change.</strong></>) 
              : (<><strong>Вивчення життя:</strong> генетика, молекулярна біологія, системна біологія, <strong>екологія та зміна клімату.</strong></>)}
            </ListGroup.Item>
          </ListGroup>)
          : (address==="/contacts" || address==="/contacts-ua") ?
          (<ListGroup variant="flush">
            <ListGroup.Item>
              <strong>{address==="/contacts" ? "Facebook:" : "Фейсбук:"}</strong>
              <a href="http://www.facebook.com/BohdiCave" target="new">
                {address==="/contacts" ? "My author's page" : "Моя авторська сторінка"}
              </a>
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>{address==="/contacts" ? "Medium:" : "Медіум:"}</strong>
              <a href="http://medium.com/@BohdanPechenyak" target="new">
                {address==="/contacts" ? "My stories" : "Мої тексти"}
              </a>
            </ListGroup.Item>
          </ListGroup>)    
          : (<ListGroup variant="flush">
              <ListGroup.Item>Error</ListGroup.Item>
            </ListGroup>)}
        </Accordion.Collapse>
      </Card>
      {(address==="/wisdom" || address==="/wisdom-ua") &&
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="3">
          <h2>{address==="/wisdom" ? "German" : "Німецька"}</h2>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="3" data-parent="#wisdom">
          <ListGroup variant="flush">
            <ListGroup.Item>
              <strong>Wer sein selbst Meister ist und sich beherrschen kann, dem ist die weite Welt und alles untertan. </strong>
              <br></br>
              {address==="/wisdom" ?  
              (<>He, who is master of himself and has command over his emotions, has at his feet the whole wide world and everything therein. 
              - <strong>Paul Fleming</strong></>) 
              : (<>Той, хто опанував себе та керує своїми емоціями, має перед собою ввесь широкий світ і все у ньому. 
              - <strong>Пауль Флемінг</strong></>)}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Lebe, wie du, wenn du stirbst, wünschen wirst, gelebt zu haben. </strong>
              <br></br> 
              {address==="/wisdom" ? (<>Live like, when you die, you will wish to have lived. 
              - <strong>Christian Fürchtegott Gellert</strong></>) 
              : (<>Живи так, щоб лиш так і бажав прожити своє життя, коли помиратимеш. 
              - <strong>Крістіан Фюрхтеґот Ґеллерт</strong></>)}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Jeder, der sich die Fähigkeit erhält, Schönes zu erkennen, wird nie alt werden. </strong>
              <br></br> 
              {address==="/wisdom" ? (<>Anyone who holds on to the ability to see beauty never grows old. 
              - <strong>Franz Kafka</strong></>)
              : (<>Той, хто не втрачає здатності бачити красу, ніколи не старіє. - <strong>Франц Кафка</strong></>)}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Zwei Dinge sind unendlich, das Universum und die menschliche Dummheit, aber bei dem Universum bin ich mir noch nicht ganz sicher. </strong>
              <br></br>
              {address==="/wisdom" ? (<>Two things are infinite: the universe and human stupidity; but I’m still not completely sure about the universe. - <strong>Albert Einstein</strong></>)
              : (<>Дві речі є безмежними: всесвіт та людська дурість; але я все ще не цілком впевнений стосовно всесвіту. - <strong>Альберт Айнштайн</strong></>)} 
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>
              Wir leben alle unter dem gleichen Himmel, aber wir haben nicht alle den gleichen Horizont. 
              </strong>
              <br></br> 
              {address==="/wisdom" ? (<>We all live under the same sky, but we don’t all have the same horizon. 
              <br></br>
              - <strong>Konrad Adenauer</strong></>)
              : (<>Ми всі живемо під одним небом, але не всі бачимо один горизонт. <br></br>
              - <strong>Конрад Аденауер </strong></>)}
            </ListGroup.Item>
          </ListGroup>
        </Accordion.Collapse>
      </Card>
      }
    </Accordion>
  );
}
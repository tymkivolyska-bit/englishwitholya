/* Diana's page: everything she sees comes from this file.
   After editing, change the ?v= number on the data.js line in index.html so her phone loads the new version.

   links      Miro board and Zoom (meeting ID and passcode are shown under the button).
   lessons    one entry per lesson, newest last. id is used by homework, flashcards and checks.
   homework   newest first. id must stay the same once Diana has seen it (her ticks are saved by id).
              answer: true shows a writing box; her text is saved on her phone and sent to the sheet.
              link: optional URL with linkLabel.
   sets       flashcards, one set per lesson. w = English, t = Ukrainian, ex = example sentence.
              Add new words at the end of a set; Diana's progress is saved by the English word.
   checks     progress checks. Question types:
              { q, o:[options], a: index of the right option, why: optional explanation }
              { q, type:"write", a:["answer", "other accepted answer"] }
   feedback   teacher's notes, newest first: date, lesson, good, work (to work on), next. */
window.DIANA = {
  student: "Diana",
  level: "A2+",
  teacher: "Olya",

  links: {
    miro: "https://miro.com/app/board/uXjVEYONBlw=/",
    zoom: "https://us04web.zoom.us/j/7873329727?pwd=anU2T3U1VVJaY2txMkF1TXZNekVJZz09",
    zoomId: "787 332 9727",
    zoomCode: "2VA2RC"
  },

  nextLesson: "",   // e.g. "Tuesday 2 December, 5 pm"

  lessons: [
    { id: "l1", title: "Why learn English?", topic: "Reading and speaking" },
    { id: "l2", title: "My last weekend", topic: "Past simple" },
    { id: "l3", title: "My bucket list", topic: "Holidays and travel dreams" }
  ],

  homework: [
    { id: "h4", lesson: "l3", due: "", text: "Flashcards: learn the 7 types of holidays (Lesson 3). Play Learn until every card is green." },
    { id: "h3", lesson: "l3", due: "", answer: true,
      text: "My bucket list: write about 5 holidays or places you dream about. What type of holiday is it? Why do you want to go?" },
    { id: "h2", lesson: "l2", due: "", answer: true,
      text: "My last weekend: write 6 to 8 sentences about your last weekend in the past simple. Use yesterday, ago and last at least once." },
    { id: "h1", lesson: "l2", due: "", text: "Do the Lesson 2 progress check (past simple). Try to get 10 out of 12 or more." }
  ],

  sets: [
    { id: "l1", title: "Lesson 1 · Why learn English?", cards: [
      { w: "native speaker", t: "носій мови", ex: "Only around 380 million people are native speakers of English." },
      { w: "go abroad", t: "поїхати за кордон", ex: "I want to go abroad and study in Europe." },
      { w: "subtitles", t: "субтитри", ex: "I watch YouTube videos without subtitles." },
      { w: "translation", t: "переклад", ex: "You don't have to wait for a translation." },
      { w: "chance", t: "шанс, ймовірність", ex: "There is a good chance it was in English." },
      { w: "opportunity", t: "можливість", ex: "English gives you more opportunities in the future." },
      { w: "course", t: "курс (навчальний)", ex: "Many universities teach some of their courses in English." },
      { w: "company", t: "компанія", ex: "International companies look for people who speak English." },
      { w: "colleague", t: "колега", ex: "She communicates with colleagues from other countries." },
      { w: "choice", t: "вибір", ex: "Good English gives you more choices." },
      { w: "communicate", t: "спілкуватися", ex: "I can communicate with gamers from Brazil." },
      { w: "confident", t: "впевнений", ex: "Being fluent means being confident enough to try." },
      { w: "fluent", t: "вільний (про мову)", ex: "Being fluent doesn't mean being perfect." },
      { w: "be afraid of", t: "боятися", ex: "Don't be afraid of mistakes." },
      { w: "make a mistake", t: "зробити помилку", ex: "Even native speakers make mistakes all the time." }
    ]},
    { id: "l2", title: "Lesson 2 · My last weekend", cards: [
      { w: "wake up → woke up", t: "прокидатися → прокинулася", ex: "Last Saturday I woke up at 7 a.m." },
      { w: "get up → got up", t: "вставати → встала", ex: "I got up late on Sunday." },
      { w: "go → went", t: "іти, їхати → пішла, поїхала", ex: "We went to a café after the shoot." },
      { w: "do → did", t: "робити → зробила", ex: "A make-up artist did our make-up." },
      { w: "have → had", t: "мати → мала", ex: "I had a great weekend." },
      { w: "feel → felt", t: "відчувати → відчувала", ex: "At first I felt nervous." },
      { w: "see → saw", t: "бачити → побачила", ex: "I saw my friends on Saturday." },
      { w: "eat → ate", t: "їсти → їла", ex: "We ate pizza in the evening." },
      { w: "drink → drank", t: "пити → пила", ex: "We drank bubble tea." },
      { w: "write → wrote", t: "писати → написала", ex: "I wrote a post about my weekend." },
      { w: "try on → tried on", t: "приміряти → приміряла", ex: "We tried on five different outfits." },
      { w: "photoshoot", t: "фотосесія", ex: "Lily's mum invited us to a real photoshoot." },
      { w: "make-up artist", t: "візажист", ex: "A make-up artist styled our hair." },
      { w: "outfit", t: "образ, вбрання", ex: "My favourite outfit was a black dress." },
      { w: "earrings", t: "сережки", ex: "She wore big silver earrings." },
      { w: "lip gloss", t: "блиск для губ", ex: "I loved my pink lip gloss!" },
      { w: "pose", t: "позувати", ex: "The photographer showed us how to pose." },
      { w: "nervous", t: "знервована, хвилююся", ex: "I felt nervous, but then I relaxed." },
      { w: "ago", t: "тому (про час)", ex: "I met Lily two days ago." },
      { w: "I don't mind + -ing", t: "я не проти + дія", ex: "I don't mind cooking." }
    ]},
    { id: "l3", title: "Lesson 3 · My bucket list", cards: [
      { w: "skiing holiday", t: "гірськолижний відпочинок", ex: "You ski all day and drink hot chocolate in the evening." },
      { w: "package holiday", t: "пакетний тур", ex: "A travel agency books flights, hotel and food for you." },
      { w: "camping holiday", t: "відпочинок у наметі, кемпінг", ex: "You sleep in a tent near a lake and watch the stars." },
      { w: "cruise holiday", t: "круїз", ex: "You travel on a big ship and visit a new port every day." },
      { w: "hitchhiking holiday", t: "подорож автостопом", ex: "You ask drivers to take you for free." },
      { w: "backpacking holiday", t: "подорож з рюкзаком", ex: "You carry everything on your back and stay in hostels." },
      { w: "sightseeing holiday", t: "екскурсійна подорож", ex: "You visit famous places like the Eiffel Tower." },
      { w: "bucket list", t: "список мрій (що зробити в житті)", ex: "A trip to Japan is on my bucket list." },
      { w: "suitcase", t: "валіза", ex: "Whose suitcase is this?" },
      { w: "travel agency", t: "туристична агенція", ex: "We booked our holiday with a travel agency." },
      { w: "tent", t: "намет", ex: "We slept in a tent near the lake." },
      { w: "hostel", t: "хостел", ex: "Backpackers often stay in cheap hostels." },
      { w: "ship", t: "корабель", ex: "A cruise ship is like a hotel on the sea." },
      { w: "flight", t: "переліт, рейс", ex: "Our flight to Rome was two hours long." }
    ]}
  ],

  checks: [
    { id: "c1", lesson: "l1", title: "Lesson 1 · Reading and words", questions: [
      { q: "True, false or not given? About 1.5 billion people in the world speak English.", o: ["True", "False", "Not given"], a: 0 },
      { q: "True, false or not given? All universities in Europe teach their courses in English.", o: ["True", "False", "Not given"], a: 1, why: "The text says many universities teach some of their courses in English." },
      { q: "True, false or not given? Gamers from Brazil prefer to chat in English.", o: ["True", "False", "Not given"], a: 2, why: "The text says you can chat with them, not what they prefer." },
      { q: "True, false or not given? The writer thinks the world becomes more interesting when you speak English.", o: ["True", "False", "Not given"], a: 0 },
      { q: "True, false or not given? Native speakers make more mistakes than English learners.", o: ["True", "False", "Not given"], a: 2, why: "The text says native speakers make mistakes too, but it doesn't compare." },
      { q: "People who learned English as children at home are …", o: ["native speakers", "colleagues", "fluent learners"], a: 0 },
      { q: "Being ___ doesn't mean being perfect.", o: ["fluent", "afraid", "abroad"], a: 0 },
      { q: "Many students are ___ to speak because they don't want to make mistakes.", o: ["confident", "afraid", "native"], a: 1 },
      { q: "Write the word: «можливість»", type: "write", a: ["opportunity"] },
      { q: "Write the word: «субтитри»", type: "write", a: ["subtitles"] }
    ]},
    { id: "c2", lesson: "l2", title: "Lesson 2 · Past simple", questions: [
      { q: "Last Saturday I ___ up at 7 a.m.", o: ["woke", "waked", "wake", "woken"], a: 0 },
      { q: "I ___ want to get up.", o: ["didn't", "don't", "wasn't", "not"], a: 0 },
      { q: "We ___ to school on Saturday.", o: ["didn't go", "didn't went", "not went", "don't went"], a: 0, why: "didn't + V1: didn't go." },
      { q: "___ you go to a photoshoot?", o: ["Did", "Do", "Does", "Were"], a: 0 },
      { q: "What did you do on Sunday? I ___ my photos.", o: ["edited", "edit", "editing", "did edit"], a: 0 },
      { q: "Did it get likes? Of course it ___!", o: ["did", "does", "got", "was"], a: 0 },
      { q: "I posted a new photo ___.", o: ["yesterday", "ago", "last", "when"], a: 0 },
      { q: "We went shopping ___ weekend.", o: ["yesterday", "ago", "last", "when"], a: 2 },
      { q: "I met Lily two days ___.", o: ["yesterday", "ago", "last", "when"], a: 1 },
      { q: "Past simple of «eat»", type: "write", a: ["ate"] },
      { q: "Past simple of «see»", type: "write", a: ["saw"] },
      { q: "Past simple of «try» (check the spelling!)", type: "write", a: ["tried"] }
    ]},
    { id: "c3", lesson: "l3", title: "Lesson 3 · Holidays", questions: [
      { q: "You go to the mountains, ski all day and drink hot chocolate in the evening.", o: ["skiing holiday", "cruise holiday", "camping holiday", "package holiday"], a: 0 },
      { q: "A travel agency books everything for you: flights, hotel and food. You just relax by the pool.", o: ["backpacking holiday", "package holiday", "sightseeing holiday", "hitchhiking holiday"], a: 1 },
      { q: "You sleep in a tent near a lake, watch the stars and cook marshmallows.", o: ["cruise holiday", "skiing holiday", "camping holiday", "package holiday"], a: 2 },
      { q: "You travel on a big ship and visit a new port every day.", o: ["cruise holiday", "backpacking holiday", "sightseeing holiday", "camping holiday"], a: 0 },
      { q: "You stand by the road and ask drivers to take you for free.", o: ["sightseeing holiday", "hitchhiking holiday", "package holiday", "skiing holiday"], a: 1 },
      { q: "You carry everything in a big bag on your back and stay in cheap hostels.", o: ["backpacking holiday", "cruise holiday", "package holiday", "camping holiday"], a: 0 },
      { q: "You visit famous places like the Eiffel Tower and take lots of photos.", o: ["hitchhiking holiday", "camping holiday", "sightseeing holiday", "skiing holiday"], a: 2 },
      { q: "How do we say the end of «skiing» and «shopping»?", o: ["one sound /ŋ/, like in «sing»", "with a hard /g/ at the end", "/n/, like in «sin»"], a: 0 },
      { q: "Write the word: «валіза»", type: "write", a: ["suitcase", "a suitcase"] },
      { q: "Past simple flashback: «go» →", type: "write", a: ["went"] }
    ]}
  ],

  feedback: [
    // { date: "2026-12-02", lesson: "l3", good: "…", work: "…", next: "…" }
  ]
};

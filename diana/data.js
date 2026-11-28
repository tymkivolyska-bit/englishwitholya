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
    { id: "l1", title: "Nice to meet you!", topic: "Why English opens doors · reading" },
    { id: "l2", title: "My last weekend", topic: "Past simple" },
    { id: "l3", title: "My bucket list", topic: "Holidays and travel dreams" },
    { id: "l4", title: "At the airport", topic: "Airport words and check-in phrases" },
    { id: "l5", title: "Revision trip", topic: "Revision of lessons 1 to 4" },
    { id: "l6", title: "Check into a hotel", topic: "Hotel rooms and check-in phrases" },
    { id: "l7", title: "Check in, speak up", topic: "Hotel problems and polite requests" },
    { id: "l8", title: "At the cafe", topic: "Ordering food and drinks" },
    { id: "l9", title: "My perfect breakfast", topic: "Breakfast words and Present Simple" }
  ],

  // Homework. Put new tasks at the TOP. done: true = already done (shown as done on her page).
  // Example of a new task:
  // { id: "h10", lesson: "l9", due: "2026-12-02", text: "…", answer: true },
  homework: [
    { id: "h9", lesson: "l9", done: true, text: "Take a photo of your breakfast and write 5 sentences about it in the Present Simple (use at least 3 new words). Add 1 sentence about someone in your family: My mum usually…" },
    { id: "h8", lesson: "l7", done: true, text: "Option A or B: write 6 to 8 sentences about a hotel stay (your first stay, or your last one). Use at least 5 hotel phrases from the lesson. Revise the words with the Quizlet set." },
    { id: "h7", lesson: "l6", done: true, text: "Writing: my dream holiday. Write a dialogue with a receptionist (10 to 12 lines) and use at least 6 phrases from the lesson. Revise the hotel rooms and check-in phrases." },
    { id: "h6", lesson: "l5", done: true, text: "Writing: my crazy trip. Write your story as an Instagram-style post (80 to 100 words) with at least 8 past simple verbs and 4 travel words." },
    { id: "h5", lesson: "l4", done: true, text: "Imagine you're flying to your dream city. Write a dialogue at the check-in counter (8 to 10 lines) with as many phrases from the lesson as you can." },
    { id: "h4", lesson: "l3", done: true, text: "Writing: my favourite holiday (60 to 80 words). What type of holiday do you like? Where do you go and what do you do there? Use at least 6 words from the lesson." },
    { id: "h3", lesson: "l3", done: true, text: "Learn the new words and finish your bucket list: add a photo for every dream." },
    { id: "h2", lesson: "l2", done: true, text: "Writing: my best day. Write an Instagram-style post (60 to 80 words) about the most memorable day you spent with a friend. Use at least 8 verbs in the past simple." },
    { id: "h1", lesson: "l2", done: true, text: "Do the online exercises for Lesson 2 (past simple)." }
  ],

  // Files for Diana (PDFs etc.). Put the file in diana/files/ and add a line here, newest first:
  // { title: "Lesson 9 worksheet", file: "files/lesson9.pdf", lesson: "l9", note: "" }
  materials: [
  ],

  // Mistakes from our lessons (shown in the Report as "Remember").
  mistakes: [
    { wrong: "I went to the Paris.", right: "I went to Paris.", note: "No 'the' before cities and most countries (but the UK, the USA)." },
    { wrong: "the girl on the picture", right: "the girl in the picture" },
    { wrong: "I'm afraid of walk alone.", right: "I'm afraid of walking alone at night.", note: "be afraid of + -ing" },
    { wrong: "I have had a great time in Venice last week.", right: "I had a great time in Venice last week.", note: "last week = past simple" },
    { wrong: "We goed to the cinema.", right: "We went to the cinema." },
    { wrong: "Did you bought a lip gloss?", right: "Did you buy a lip gloss?", note: "did + V1" },
    { wrong: "My dad make breakfast.", right: "My dad makes breakfast.", note: "he / she / it + -s" },
    { wrong: "café /kæf/", right: "café /ˈkæfeɪ/ · Venice /ˈvenɪs/ · aisle /aɪl/" }
  ],

  sets: [
    { id: "l1", title: "Lesson 1 · Nice to meet you!", cards: [
      { w: "native speaker", t: "носій мови", ex: "Only around 380 million people are native speakers of English." },
      { w: "abroad", t: "за кордоном", ex: "Everyone else learned it at school, online or while living abroad." },
      { w: "go abroad", t: "поїхати за кордон", ex: "I want to go abroad and study in Europe." },
      { w: "subtitles", t: "субтитри", ex: "Would you rather watch series with subtitles or without subtitles?" },
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
      { w: "make a mistake", t: "зробити помилку", ex: "Even native speakers make mistakes all the time." },
      { w: "goal", t: "ціль", ex: "My goal is to improve my vocabulary and grammar." },
      { w: "career", t: "кар'єра", ex: "English is good for your career." }
    ]},
    { id: "l2", title: "Lesson 2 · My last weekend", cards: [
      { w: "wake up → woke up", t: "прокидатися → прокинулася", ex: "Last Saturday I woke up at 7 a.m." },
      { w: "go → went", t: "іти, їхати → пішла, поїхала", ex: "We went to a café after the shoot." },
      { w: "do → did", t: "робити → зробила", ex: "A make-up artist did our make-up." },
      { w: "have → had", t: "мати → мала", ex: "I had a great weekend." },
      { w: "feel → felt", t: "відчувати → відчувала", ex: "At first I felt nervous." },
      { w: "see → saw", t: "бачити → побачила", ex: "I saw my friends on Saturday." },
      { w: "eat → ate", t: "їсти → їла", ex: "The models ate sushi after the fashion show." },
      { w: "drink → drank", t: "пити → пила", ex: "We drank bubble tea." },
      { w: "write → wrote", t: "писати → написала", ex: "I wrote a long message to my best friend." },
      { w: "try on → tried on", t: "приміряти → приміряла", ex: "We tried on five different outfits." },
      { w: "stop → stopped", t: "зупинятися → зупинилася", ex: "Double the consonant: stop, stopped." },
      { w: "study → studied", t: "вчити → вчила", ex: "Consonant + y: remove the y, add -ied." },
      { w: "photoshoot", t: "фотосесія", ex: "Lily's mum invited us to a real photoshoot." },
      { w: "make-up artist", t: "візажист", ex: "A make-up artist styled our hair." },
      { w: "outfit", t: "образ, вбрання", ex: "My favourite outfit was a black dress." },
      { w: "earrings", t: "сережки", ex: "She wore big silver earrings." },
      { w: "lip gloss", t: "блиск для губ", ex: "I loved my pink lip gloss!" },
      { w: "pose", t: "позувати", ex: "The photographer showed us how to pose." },
      { w: "nervous", t: "знервована, хвилююся", ex: "I felt nervous, but then I relaxed." },
      { w: "ago", t: "тому (про час)", ex: "She started modelling lessons two months ago." },
      { w: "rarely", t: "рідко", ex: "I rarely wear make-up to school." },
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
      { w: "bucket list", t: "список мрій (що зробити в житті)", ex: "Visiting Japan is on my bucket list." },
      { w: "go sunbathing", t: "засмагати", ex: "On a beach holiday I go sunbathing all day." },
      { w: "try local cuisine", t: "куштувати місцеву кухню", ex: "We love to try local cuisine." },
      { w: "walk around the city", t: "гуляти містом", ex: "I love to walk around the city and look at cute shops." },
      { w: "have a spa day", t: "влаштувати спа-день", ex: "Let's have a spa day at the hotel!" },
      { w: "watch the sunset", t: "дивитися на захід сонця", ex: "We watched the sunset on the beach." },
      { w: "take photos", t: "фотографувати", ex: "I always take a lot of photos for my Instagram." },
      { w: "suitcase", t: "валіза", ex: "Who does each suitcase belong to?" },
      { w: "travel agency", t: "туристична агенція", ex: "We booked our holiday with a travel agency." },
      { w: "tent", t: "намет", ex: "We slept in a tent near the lake." },
      { w: "hostel", t: "хостел", ex: "Backpackers often stay in cheap hostels." },
      { w: "I dream of + -ing", t: "я мрію + дія", ex: "I dream of going to Disneyland." }
    ]},
    { id: "l4", title: "Lesson 4 · At the airport", cards: [
      { w: "check-in counter", t: "стійка реєстрації", ex: "Excuse me, where is the check-in counter for Milan?" },
      { w: "check in your suitcase", t: "здати валізу", ex: "Where can I check in my pink suitcase?" },
      { w: "departures board", t: "табло вильотів", ex: "Let's check the departures board. Is our flight on time?" },
      { w: "go through security", t: "пройти контроль безпеки", ex: "We need to go through security, so no big perfume in your bag!" },
      { w: "boarding pass", t: "посадковий талон", ex: "Here is your boarding pass. Have a nice flight!" },
      { w: "carry-on luggage", t: "ручна поклажа", ex: "My carry-on luggage is a tote bag." },
      { w: "baggage claim", t: "видача багажу", ex: "Let's meet at the baggage claim." },
      { w: "the plane takes off", t: "літак злітає", ex: "I always take a video when the plane takes off." },
      { w: "the plane lands", t: "літак приземляється", ex: "I text my mum when the plane lands." },
      { w: "gate", t: "вихід на посадку", ex: "Which gate is it? It's gate 8." },
      { w: "delay", t: "затримка", ex: "The flight has a two-hour delay." },
      { w: "boarding", t: "посадка", ex: "Boarding is at 10:15." },
      { w: "final call", t: "останній виклик (на посадку)", ex: "This is the final call for flight BA 245." },
      { w: "aisle seat", t: "місце біля проходу", ex: "I'd like an aisle seat. I want to walk around." },
      { w: "window seat", t: "місце біля вікна", ex: "A window seat, please. I want to see the clouds!" },
      { w: "over the limit", t: "понад норму", ex: "Your suitcase is 2 kilos over the limit." },
      { w: "charger", t: "зарядний пристрій", ex: "Don't forget your phone charger!" },
      { w: "toiletries", t: "засоби гігієни", ex: "My toiletries are in my cosmetic bag." },
      { w: "liquids", t: "рідини", ex: "You can't take big liquids through security." },
      { w: "Would you like…?", t: "Бажаєте…?", ex: "Would you like a window or an aisle seat?" }
    ]},
    { id: "l5", title: "Lesson 5 · Revision trip", cards: [
      { w: "fly → flew", t: "летіти → полетіла", ex: "Last summer Sofia flew to Milan." },
      { w: "wear → wore", t: "носити, вдягати → вдягла", ex: "She took out her hoodie and wore it." },
      { w: "take → took", t: "брати → взяла", ex: "The staff took her big perfume." },
      { w: "send → sent", t: "надсилати → надіслала", ex: "The airline sent her suitcase to the hotel." },
      { w: "buy → bought", t: "купувати → купила", ex: "I bought a new lip gloss." },
      { w: "lose → lost", t: "губити → загубила", ex: "I lost my passport!" },
      { w: "show → showed", t: "показувати → показала", ex: "They showed their passports." },
      { w: "arrive", t: "прибувати", ex: "My suitcase didn't arrive." },
      { w: "pack", t: "пакувати (речі)", ex: "What did you pack?" },
      { w: "lost suitcase", t: "загублена валіза", ex: "Excuse me, can you help me? My suitcase didn't arrive." },
      { w: "in the picture", t: "на картинці", ex: "Look at the girl in the picture." },
      { w: "I'm afraid of + -ing", t: "я боюся + дія", ex: "I'm afraid of walking alone at night." }
    ]},
    { id: "l6", title: "Lesson 6 · Check into a hotel", cards: [
      { w: "a single room", t: "одномісний номер", ex: "I have a reservation for a single room for three nights." },
      { w: "a double room", t: "двомісний номер (одне велике ліжко)", ex: "Would you prefer a single room or a double room?" },
      { w: "a twin room", t: "номер з двома ліжками", ex: "A twin room has two beds." },
      { w: "a suite", t: "люкс (номер)", ex: "I'd like a suite with a balcony, please!" },
      { w: "a resort", t: "курорт", ex: "I love this resort!" },
      { w: "a vacation rental", t: "житло в оренду на відпочинок", ex: "A vacation rental is a house or flat, not a hotel." },
      { w: "reception", t: "рецепція", ex: "Sofia is at the reception." },
      { w: "receptionist", t: "адміністратор (на рецепції)", ex: "The receptionist gives you the room key." },
      { w: "lobby", t: "вестибюль", ex: "Let's meet in the lobby." },
      { w: "luggage trolley", t: "візок для багажу", ex: "Put your suitcase on the luggage trolley." },
      { w: "reservation", t: "бронювання", ex: "I have a reservation under the name of Sofia Rossi." },
      { w: "registration form", t: "реєстраційна форма", ex: "Could you fill out this registration form?" },
      { w: "fill out", t: "заповнити (форму)", ex: "Could you just fill out this form?" },
      { w: "room key", t: "ключ від номера", ex: "This is your room key." },
      { w: "available", t: "вільний, доступний", ex: "Do you have any rooms available?" },
      { w: "included in the price", t: "включено у вартість", ex: "Is breakfast included in the price?" },
      { w: "check-out", t: "виїзд (з готелю)", ex: "What time is check-out?" },
      { w: "a balcony with a view", t: "балкон з краєвидом", ex: "My dream room has a balcony with a view." },
      { w: "a walk-in wardrobe", t: "гардеробна", ex: "I need a walk-in wardrobe for all my clothes!" },
      { w: "I'd like to…", t: "я б хотіла…", ex: "I'd like to book a room, please." }
    ]},
    { id: "l7", title: "Lesson 7 · Check in, speak up", cards: [
      { w: "amenity", t: "зручність, послуга (в готелі)", ex: "A pool and a gym are hotel amenities." },
      { w: "airport transfer", t: "трансфер з аеропорту", ex: "Can you arrange an airport transfer?" },
      { w: "luggage", t: "багаж", ex: "Can I leave my luggage here?" },
      { w: "bill", t: "рахунок", ex: "Pay your bill at the end of your stay." },
      { w: "safe", t: "сейф", ex: "Keep your passport in the safe." },
      { w: "lift", t: "ліфт", ex: "Excuse me, I'm afraid the lift doesn't work." },
      { w: "is broken", t: "зламаний", ex: "The lift is broken." },
      { w: "doesn't work", t: "не працює", ex: "The Wi-Fi doesn't work." },
      { w: "room service", t: "обслуговування номерів", ex: "I ordered room service 40 minutes ago." },
      { w: "air conditioning", t: "кондиціонер", ex: "The air conditioning doesn't work." },
      { w: "late check-out", t: "пізній виїзд", ex: "Is it possible to have a late check-out?" },
      { w: "noisy", t: "галасливий", ex: "My room is very noisy. I can't sleep." },
      { w: "I'm afraid…", t: "на жаль… (ввічливо)", ex: "I'm afraid there's a problem with the safe." },
      { w: "inconvenience", t: "незручність", ex: "I'm terribly sorry for the inconvenience." },
      { w: "apologise", t: "вибачатися", ex: "I do apologise." },
      { w: "I'll sort that out for you.", t: "я вирішу це питання", ex: "Of course. I'll sort that out for you." },
      { w: "Is it possible to…?", t: "Чи можна…?", ex: "Is it possible to check out late tomorrow?" }
    ]},
    { id: "l8", title: "Lesson 8 · At the cafe", cards: [
      { w: "waiter", t: "офіціант", ex: "Can you see a waiter?" },
      { w: "waitress", t: "офіціантка", ex: "I'll be your waitress today." },
      { w: "menu", t: "меню", ex: "Could we see the menu, please?" },
      { w: "bill", t: "рахунок", ex: "Could we have the bill, please?" },
      { w: "tip", t: "чайові", ex: "Shall we leave a tip?" },
      { w: "dessert", t: "десерт", ex: "Would you like a dessert?" },
      { w: "eat in or takeaway", t: "тут чи з собою", ex: "Is that eat in or takeaway?" },
      { w: "still water", t: "негазована вода", ex: "Could I just have a glass of still water?" },
      { w: "sparkling water", t: "газована вода", ex: "A sparkling water, please." },
      { w: "What can I get you?", t: "Що вам принести?", ex: "Afternoon. What can I get you?" },
      { w: "Are you ready to order?", t: "Ви готові замовити?", ex: "Are you ready to order? Yes, we're ready to order." },
      { w: "Have you booked?", t: "Ви бронювали?", ex: "Good evening. Have you booked?" },
      { w: "Does it contain…?", t: "Чи містить це…?", ex: "Does it contain any nuts?" },
      { w: "Have you got any…?", t: "У вас є…?", ex: "Excuse me, have you got any vegan desserts?" },
      { w: "How much is that?", t: "Скільки це коштує?", ex: "How much is that?" },
      { w: "seafood", t: "морепродукти", ex: "I love seafood." },
      { w: "vegetarian", t: "вегетаріанський", ex: "Is there a vegetarian dish?" },
      { w: "dumplings", t: "вареники", ex: "Dumplings are traditional Ukrainian food." },
      { w: "beetroot soup", t: "борщ (буряковий суп)", ex: "Borsch is a beetroot soup." }
    ]},
    { id: "l9", title: "Lesson 9 · My perfect breakfast", cards: [
      { w: "toast", t: "тост; підсмажувати хліб", ex: "Toast your bread just before you eat." },
      { w: "soggy", t: "розмоклий", ex: "I don't like this toast. It's cold and soggy." },
      { w: "crunchy", t: "хрусткий", ex: "I love crunchy toast." },
      { w: "pastry", t: "випічка", ex: "A croissant is my favourite French pastry." },
      { w: "grate", t: "терти (на тертці)", ex: "Can you grate some cheese on my pasta?" },
      { w: "juicer", t: "соковижималка", ex: "My mum has a juicer: she makes fresh orange juice." },
      { w: "herbs", t: "зелень, трави", ex: "I put herbs like dill and parsley in my eggs." },
      { w: "scrambled eggs", t: "яєчня-бовтанка (скрембл)", ex: "I usually have scrambled eggs." },
      { w: "poached egg", t: "яйце пашот", ex: "A poached egg is cooked in hot water without its shell." },
      { w: "soft-boiled egg", t: "яйце некруто", ex: "The yolk of a soft-boiled egg is runny." },
      { w: "omelette", t: "омлет", ex: "My dad makes a great cheese omelette on Sundays." },
      { w: "brunch", t: "бранч (сніданок + обід)", ex: "We sometimes have brunch on Sundays." },
      { w: "grab a quick bite", t: "швидко перекусити", ex: "I grab a quick bite before school." },
      { w: "skip breakfast", t: "пропустити сніданок", ex: "Don't skip breakfast!" },
      { w: "a full English breakfast", t: "повний англійський сніданок", ex: "Eggs, bacon, sausages, beans, toast, tomatoes, mushrooms." },
      { w: "a continental breakfast", t: "континентальний сніданок", ex: "A light breakfast: bread, croissants, jam, coffee." },
      { w: "faint", t: "втрачати свідомість", ex: "Some people faint when they skip breakfast." }
    ]}
  ],

  checks: [
    { id: "c1", lesson: "l1", title: "Lesson 1 · Why English opens doors", questions: [
      {"q": "True, false or not given? Most English speakers in the world learned English as their first language.", "o": ["True", "False", "Not given"], "a": 1, "why": "Only around 380 million of 1.5 billion are native speakers."},
      {"q": "True, false or not given? About 50% of all websites are in English.", "o": ["True", "False", "Not given"], "a": 0},
      {"q": "True, false or not given? All universities in Europe teach their courses in English.", "o": ["True", "False", "Not given"], "a": 1, "why": "Many universities teach some of their courses in English."},
      {"q": "True, false or not given? Gamers from Brazil prefer to chat in English.", "o": ["True", "False", "Not given"], "a": 2},
      {"q": "True, false or not given? The writer thinks the world becomes more interesting when you speak English.", "o": ["True", "False", "Not given"], "a": 0},
      {"q": "True, false or not given? Native speakers make more mistakes than English learners.", "o": ["True", "False", "Not given"], "a": 2, "why": "The text says native speakers make mistakes too, but it doesn't compare."},
      {"q": "Which heading is the extra one you don't need?", "o": ["English is the easiest language to learn", "More doors for your future", "The internet speaks English"], "a": 0},
      {"q": "able to speak a language easily and well", "o": ["fluent", "confident", "native"], "a": 0},
      {"q": "feeling sure about yourself and what you can do", "o": ["afraid", "confident", "abroad"], "a": 1},
      {"q": "Write the word: «можливості» (chances to do something good)", "type": "write", "a": ["opportunities", "opportunity"]},
      {"q": "Write the word: to share ideas and information with other people", "type": "write", "a": ["communicate"]}
    ]},
    { id: "c2", lesson: "l2", title: "Lesson 2 · Past simple", questions: [
      {"q": "Last Saturday I ___ up at 7 a.m.", "o": ["woke", "waked", "wake", "woken"], "a": 0},
      {"q": "I ___ want to get up.", "o": ["didn't", "don't", "wasn't", "not"], "a": 0},
      {"q": "We ___ to school on Saturday.", "o": ["didn't go", "didn't went", "not went", "don't went"], "a": 0, "why": "didn't + V1: didn't go."},
      {"q": "What did you do on Sunday? I ___ my photos.", "o": ["edited", "edit", "editing", "did edit"], "a": 0},
      {"q": "She started modelling lessons two months ___.", "o": ["yesterday", "ago", "last", "when"], "a": 1},
      {"q": "I didn't wear make-up ___ I was ten.", "o": ["yesterday", "ago", "last", "when"], "a": 3},
      {"q": "How does -ed sound in «posted»?", "o": ["/ɪd/", "/t/", "/d/"], "a": 0, "why": "After t and d we say /ɪd/."},
      {"q": "How does -ed sound in «laughed»?", "o": ["/t/", "/d/", "/ɪd/"], "a": 0, "why": "After f, k, p, s, ch, sh we say /t/."},
      {"q": "Past simple of «shop» (check the spelling!)", "type": "write", "a": ["shopped"]},
      {"q": "Past simple of «study»", "type": "write", "a": ["studied"]},
      {"q": "Make a question: where / you / go / last weekend?", "type": "write", "a": ["where did you go last weekend"]}
    ]},
    { id: "c3", lesson: "l3", title: "Lesson 3 · Holidays", questions: [
      {"q": "You go to the mountains, ski all day and drink hot chocolate in the evening.", "o": ["skiing holiday", "cruise holiday", "camping holiday", "package holiday"], "a": 0},
      {"q": "A travel agency books everything for you: flights, hotel and food.", "o": ["backpacking holiday", "package holiday", "sightseeing holiday", "hitchhiking holiday"], "a": 1},
      {"q": "You stand by the road and ask drivers to take you for free.", "o": ["sightseeing holiday", "hitchhiking holiday", "package holiday", "skiing holiday"], "a": 1},
      {"q": "You carry everything in a big bag on your back and stay in cheap hostels.", "o": ["backpacking holiday", "cruise holiday", "package holiday", "camping holiday"], "a": 0},
      {"q": "Every time we travel, we love to try local ___.", "o": ["cuisine", "sunset", "spa"], "a": 0},
      {"q": "I don't like museums, but I love to ___ around the city.", "o": ["walk", "go", "have"], "a": 0},
      {"q": "On a beach holiday I ___ all day.", "o": ["sunbathe", "ski", "sightsee"], "a": 0},
      {"q": "How do we say «walk»?", "o": ["/wɔːk/ (the l is silent)", "/wɔːlk/"], "a": 0},
      {"q": "How do we say the end of «skiing» and «shopping»?", "o": ["one sound /ŋ/, like in «sing»", "with a hard /g/ at the end"], "a": 0},
      {"q": "Complete: I dream of ___ (go) to Japan.", "type": "write", "a": ["going"]}
    ]},
    { id: "c4", lesson: "l4", title: "Lesson 4 · At the airport", questions: [
      {"q": "I need to ___ my suitcase. It's full of clothes!", "o": ["check in", "go through", "land"], "a": 0},
      {"q": "We ___ security and then buy an iced latte.", "o": ["go through", "check in", "take off"], "a": 0},
      {"q": "I text my mum when the plane ___.", "o": ["lands", "takes", "goes"], "a": 0},
      {"q": "«Good morning! Can I see your passport, please?» Best answer:", "o": ["Sure, here it is.", "Thank you, you too!", "It's gate 8."], "a": 0},
      {"q": "«Your suitcase is 2 kilos over the limit.» Best answer:", "o": ["Oh no! What do I need to do?", "A window seat, please.", "On holiday!"], "a": 0},
      {"q": "Who says: «Here is your boarding pass. Have a nice flight!»", "o": ["airport staff", "passenger"], "a": 0},
      {"q": "Who says: «Which gate is it?»", "o": ["airport staff", "passenger"], "a": 1},
      {"q": "«Can I see your passport, please?» The voice goes…", "o": ["up (rising)", "down (falling)"], "a": 0, "why": "Yes/no questions usually go up."},
      {"q": "«Which gate is it?» The voice goes…", "o": ["up (rising)", "down (falling)"], "a": 1, "why": "Wh- questions usually go down."},
      {"q": "Write it in English: «ручна поклажа»", "type": "write", "a": ["carry-on luggage", "carry-on bag", "carry on luggage"]},
      {"q": "Write it in English: «посадковий талон»", "type": "write", "a": ["boarding pass"]}
    ]},
    { id: "c5", lesson: "l5", title: "Lesson 5 · Revision trip", questions: [
      {"q": "Which sentence is correct?", "o": ["I went to Paris last summer.", "I went to the Paris last summer."], "a": 0, "why": "No 'the' before cities."},
      {"q": "Look at the girl ___ the picture.", "o": ["in", "on", "at"], "a": 0},
      {"q": "I'm afraid of ___ alone at night.", "o": ["walking", "walk", "to walk"], "a": 0},
      {"q": "Did you ___ a new lip gloss?", "o": ["buy", "bought", "buyed"], "a": 0},
      {"q": "I ___ a great time in Venice last week.", "o": ["had", "have had", "have"], "a": 0},
      {"q": "Her suitcase didn't ___.", "o": ["arrive", "arrived", "arriving"], "a": 0},
      {"q": "Which letter is silent in «aisle»?", "o": ["s", "a", "e"], "a": 0},
      {"q": "How does -ed sound in «waited»?", "o": ["/ɪd/", "/t/", "/d/"], "a": 0},
      {"q": "Past simple of «fly»", "type": "write", "a": ["flew"]},
      {"q": "Past simple of «wear»", "type": "write", "a": ["wore"]},
      {"q": "Past simple of «send»", "type": "write", "a": ["sent"]}
    ]},
    { id: "c6", lesson: "l6", title: "Lesson 6 · Check into a hotel", questions: [
      {"q": "A twin room has…", "o": ["two beds", "one big bed", "more than one room"], "a": 0},
      {"q": "«A suite» sounds like…", "o": ["sweet", "suit"], "a": 0},
      {"q": "I'd like ___ a double room.", "o": ["to book", "book", "booking"], "a": 0, "why": "I'd like + to + verb."},
      {"q": "Is breakfast ___ in the price?", "o": ["included", "include", "including"], "a": 0},
      {"q": "Could you ___ this registration form?", "o": ["fill out", "filling out", "to fill out"], "a": 0},
      {"q": "Can I ___ a room with a view?", "o": ["request", "requesting", "to request"], "a": 0},
      {"q": "«Do you have any rooms available?» The voice goes…", "o": ["up", "down"], "a": 0, "why": "Yes/no questions go up."},
      {"q": "«What time is check-out?» The voice goes…", "o": ["up", "down"], "a": 1, "why": "Wh- questions go down."},
      {"q": "Who says: «This is your room key.»", "o": ["receptionist", "guest"], "a": 0},
      {"q": "Write it in English: «одномісний номер»", "type": "write", "a": ["a single room", "single room"]}
    ]},
    { id: "c7", lesson: "l7", title: "Lesson 7 · Hotel problems", questions: [
      {"q": "a box in your room where you keep valuables", "o": ["safe", "bill", "amenity"], "a": 0},
      {"q": "the money you pay at the end of your stay", "o": ["bill", "tip", "safe"], "a": 0},
      {"q": "something useful a hotel offers, like a pool or a gym", "o": ["amenity", "luggage", "transfer"], "a": 0},
      {"q": "a car or bus that takes you from the airport to a hotel", "o": ["airport transfer", "room service", "lift"], "a": 0},
      {"q": "I'm terribly sorry for the ___.", "o": ["inconvenience", "problem", "apologise"], "a": 0},
      {"q": "Excuse me, I ordered room service 40 minutes ___.", "o": ["ago", "last", "before"], "a": 0},
      {"q": "I'm afraid there's a problem ___ the Wi-Fi.", "o": ["with", "of", "in"], "a": 0},
      {"q": "I'll ___ that out for you.", "o": ["sort", "make", "take"], "a": 0},
      {"q": "«Is it possible to check out late tomorrow?» Polite «no»:", "o": ["I'm afraid that's not possible.", "No. Go away.", "I do apologise."], "a": 0},
      {"q": "Write it in English: «ліфт»", "type": "write", "a": ["lift", "elevator"]}
    ]},
    { id: "c8", lesson: "l8", title: "Lesson 8 · At the cafe", questions: [
      {"q": "Choose the correct phrase.", "o": ["Would you like something to drink?", "Do you like something to drink?", "Would you something to drink?"], "a": 0},
      {"q": "Choose the correct phrase.", "o": ["Do you ready to order?", "Are you ready to order?", "Would you ready to order?"], "a": 1},
      {"q": "Choose the correct phrase.", "o": ["Have you booked?", "Have you book?", "Can you booked?"], "a": 0},
      {"q": "Choose the correct phrase.", "o": ["What would I get you?", "What can I get you?", "What do I get you?"], "a": 1},
      {"q": "Choose the correct phrase.", "o": ["Would I just have a coffee, please?", "Could I just had a coffee, please?", "Could I just have a coffee, please?"], "a": 2},
      {"q": "Choose the correct phrase.", "o": ["Does it contains any meat?", "Does it contain any meat?", "Do it contain any meat?"], "a": 1},
      {"q": "Choose the correct phrase.", "o": ["Excuse me, have you got any salt?", "Excuse me, do you got any salt?", "Excuse me, have you any salt?"], "a": 0},
      {"q": "Choose the correct phrase.", "o": ["How much is that?", "How many is that?", "How mach is that?"], "a": 0},
      {"q": "money you leave for the waiter", "o": ["tip", "bill", "menu"], "a": 0},
      {"q": "Write it in English: «десерт»", "type": "write", "a": ["dessert"]}
    ]},
    { id: "c9", lesson: "l9", title: "Lesson 9 · Breakfast and Present Simple", questions: [
      {"q": "My sister ___ cereal every morning.", "o": ["eats", "eat"], "a": 0},
      {"q": "I ___ drink coffee.", "o": ["don't", "doesn't"], "a": 0},
      {"q": "___ your mum make pancakes?", "o": ["Does", "Do"], "a": 0},
      {"q": "Rocky ___ new food every week.", "o": ["tries", "try", "trys"], "a": 0},
      {"q": "My dad doesn't ___ sweet pastries.", "o": ["eat", "eats"], "a": 0, "why": "does / doesn't + base verb."},
      {"q": "We sometimes ___ brunch on Sundays.", "o": ["have", "has"], "a": 0},
      {"q": "I don't like this toast. It's cold and ___.", "o": ["soggy", "crunchy", "fresh"], "a": 0},
      {"q": "Odd one out: scrambled, poached, juicer, soft-boiled", "o": ["juicer", "poached", "scrambled"], "a": 0, "why": "A juicer is not a way to cook eggs."},
      {"q": "True or false? With a big breakfast, Rocky drinks a big cappuccino.", "o": ["True", "False"], "a": 1, "why": "He drinks a small coffee."},
      {"q": "Write it in English: «випічка»", "type": "write", "a": ["pastry"]},
      {"q": "Write it in English: «терти (на тертці)»", "type": "write", "a": ["grate"]}
    ]}
  ],

  feedback: [
    // { date: "2026-12-02", lesson: "l3", good: "…", work: "…", next: "…" }
  ]
};

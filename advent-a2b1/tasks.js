// Advent calendar A2-B1: settings and the 24 daily tasks.
//
// Item types:
//   choice: { type:"choice", q:"...", options:["right", "wrong", ...], answer:0 }  (answer = index of the right option)
//   gap:    { type:"gap", q:"Text with ___ gap.", answer:["word", "other accepted word"] }
//   match:  { type:"match", q:"Instruction", pairs:[["left","right"], ...] }
//   order:  { type:"order", q:"Instruction", answer:"The sentence in the right order" }
//   wordsearch: { type:"wordsearch", q:"...", grid:["ROW1", ...], words:["WORD", ...] }
//   write:  { type:"write", q:"Open question" }   (free answer, saved but not marked)
//   heading: { type:"heading", text:"Task 1. ...", sub:"optional note", bank:["optional", "word bank"], deco:"optional picture" }
// A day may have "bonus": ["img/..."] — extra stickers given when the day is passed (shown under the sticker book).
//   reading: { type:"reading", text:"A text shown between tasks" }
//   video:  { type:"video", youtube:"VIDEO_ID", title:"..." }   (embedded YouTube clip)
//   picture: { type:"picture", src:"img/...", alt:"...", caption:"..." }
//   script: { type:"script", title:"...", legend:[["/","short pause"],...], lines:[{ who:"Ron", text:"...", guide:"sound guide" }, ...] }
//   match with images:true uses picture paths on the left.
//   notebook: { type:"notebook", title:"...", by:"...", numbered:true, paras:["...", ...] }  (story on the green notebook, with page turning)
//   checklist: { type:"checklist", title:"...", items:["...", ...] }  (tick boxes for self-check, not marked)
//   script may have roles:["Della","Jim"] for the "Practise as" buttons.
// A day may have "cover": { src, alt } (a book cover next to the intro) and "levels": [{ id, label, tag, intro, glossary, items }]
//   (students choose a level; each level has its own tasks and saved answers).
// A day may also have "text" (a short reading shown above the questions) and "glossary" (word lists shown in a fold-out).

window.ADVENT = {
  settings: {
    year: 2026,
    unlockByDate: true,   // day N opens on N December (on the student's device clock)
    teacherPin: "2512",   // typed into "Teacher preview" at the bottom to open every day
    passPercent: 50       // score needed to earn the day's sticker
  },

  presents: [
    { at: 6,  name: "Word Collector badge", gift: "A winter idiom for you: “to break the ice” means to start a friendly conversation with someone new. Try it at your next party!" },
    { at: 12, name: "Halfway Hero badge", gift: "A Christmas joke: What do snowmen eat for breakfast? Snowflakes! ❄" },
    { at: 18, name: "Snow Star badge", gift: "Did you know? The word “December” comes from the Latin “decem”, which means ten. It was the tenth month of the old Roman calendar." },
    { at: 24, name: "Advent Champion certificate", gift: "certificate" }
  ],

  days: [
    { day: 1, title: "The Grinch", skill: "Film workbook · Vocabulary, reading, grammar",
      bonus: ["img/grinch/g-cheeky.png", "img/grinch/g-arms.png", "img/grinch/g-grumpy.png", "img/grinch/g-plotting.png", "img/grinch/g-sulky.png", "img/grinch/heart.png"],
      intro: "Watch The Grinch (2018) and do the tasks. Your answers are saved as you go, so you can stop and come back.",
      glossary: [
        { title: "Vocabulary", rows: [
          ["a cave", "печера"], ["a cellar", "підвал, погріб"], ["a feast", "бенкет"], ["a size", "розмір"], ["a sleigh", "сани"],
          ["a trick", "трюк, фокус, хитрість, жарт"], ["antlers", "оленячі роги"], ["be surprised", "бути здивованим"], ["beast", "звір"],
          ["bell", "дзвіночок"], ["below", "внизу"], ["bow", "бантик"], ["can't stand / can't bear", "терпіти не можу"], ["care", "турбота"],
          ["catch, caught, caught", "зловити"], ["chef", "кухар"], ["chimney", "труба, димохід"], ["Christmas Eve", "Святвечір"],
          ["Christmas season", "Різдвяний сезон"], ["close", "близький"], ["collar", "нашийник"], ["come up with", "придумати"],
          ["complain", "скаржитися"], ["crowd", "натовп; товпитися"], ["different", "різний"], ["early", "рано"], ["empty", "порожній"],
          ["fair", "справедливий"], ["fake", "фальшивий"], ["find, found, found", "знаходити"], ["fireplace", "камін"], ["frown", "хмуритися"],
          ["get stuck (in)", "застрягти"], ["grow, grew, grown", "рости"], ["hang, hung, hung", "вішати"], ["horn", "ріг"],
          ["How's business?", "Як справи?"], ["I will not put up with it anymore", "Більше не хочу це терпіти"], ["icebox", "холодильник"],
          ["instead of", "замість"], ["It's rude to stare", "Витріщатися нечемно"], ["lie", "брехати"], ["light", "світло, лампочка"],
          ["load", "вантажити"], ["look for", "шукати"], ["merry", "веселий"], ["mistletoe", "омела"], ["noise", "шум"], ["Oh my!", "Боже мій!"],
          ["perhaps", "можливо"], ["pleasant", "приємний"], ["present", "подарунок"], ["puzzle", "спантеличувати"], ["ramshackle", "старий, хиткий"],
          ["reason", "причина"], ["reindeer", "північний олень"], ["ring, rang, rung", "дзвонити"], ["roast", "смажити"], ["rush", "мчати, поспішати"],
          ["rush hour", "година пік"], ["same", "однаковий"], ["scarce / rare", "рідкісний"], ["screwdriver", "викрутка"], ["smoke", "дим"],
          ["snarl", "гарчати"], ["sneer", "насміхатися"], ["snooze", "дрімати"], ["stare (at)", "пильно дивитися, витріщатися"],
          ["steal", "вкрасти"], ["stocking", "панчоха для подарунків"], ["tag", "етикетка"], ["target", "мішень"], ["thief, thieves", "злодій, злодії"],
          ["This is a tricky question", "Це складне питання"], ["thread", "нитка"], ["tie", "зав'язувати"], ["tight", "тісний"], ["tinsel", "мішура"],
          ["together", "разом"], ["toward", "у напрямку до"], ["trimming", "прикраса, оздоблення"], ["unpleasant", "неприємний"], ["unwrap", "розпаковувати"],
          ["wake up, woke, woken", "прокидатися"], ["whole", "цілий"], ["workshop", "майстерня"], ["wrap", "загортати"], ["wrapping", "упаковка"],
          ["wreath", "вінок"], ["to be sour", "бути кислим"], ["to chuckle", "хихикати"], ["to grin", "посміхатися"], ["to look around", "озирнутися"],
          ["to make noise", "шуміти"], ["to put up with sth", "терпіти"], ["to wake sb up", "будити когось"]
        ] },
        { title: "Useful phrases", rows: [
          ["That is known far and wide", "це відомо всім і всюди"], ["Hit its stride", "досягти успіху"], ["I'm venting", "я випускаю пар, виговорююсь"],
          ["I need to get into character", "я маю ввійти в образ"], ["The task at hand", "завдання, яке треба зробити зараз"], ["mother lode", "золота жила"],
          ["Brace yourselves!", "Готуйтеся!"], ["make sth up", "вигадувати"], ["make an appointment", "призначити зустріч"], ["don't come with", "не мати нічого спільного"]
        ] },
        { title: "Christmas phrasal verbs", rows: [
          ["look forward to", "чекати з нетерпінням"], ["put up", "поставити щось на видному місці"], ["dress up", "вдягнутися святково"],
          ["come down", "спускатися"], ["wrap up", "запаковувати"]
        ] }
      ],
      items: [
        { type: "heading", deco: "img/grinch/g-cheeky.png", text: "Task 1. Match the synonyms" },
        { type: "match", q: "Choose a word with the same meaning.", pairs: [["cave", "pothole"], ["icebox", "fridge"], ["beast", "creature"], ["present", "gift"], ["wreath", "garland"], ["snarl", "growl"]] },

        { type: "heading", deco: "img/grinch/g-arms.png", text: "Task 2. Match the opposites" },
        { type: "match", q: "Choose the opposite.", pairs: [["early", "late"], ["empty", "full"], ["fair", "unfair"], ["fake", "real"], ["close", "distant"], ["merry", "sad"]] },

        { type: "heading", deco: "img/grinch/g-grumpy.png", text: "Task 3. Translate into English" },
        { type: "match", q: "Choose the English phrase.", pairs: [["Готуйтесь!", "Brace yourselves!"], ["Золота жила", "mother lode"], ["Не мати нічого спільного", "don't come with"], ["Вигадувати", "make something up"], ["Це відомо всім і всюди", "That is known far and wide"], ["Боже мій!", "Oh my!"], ["Як справи?", "How's business?"], ["Це складне питання", "This is a tricky question"], ["Більше не хочу це терпіти!", "I will not put up with it anymore!"], ["Досягти успіху", "hit its stride"]] },

        { type: "heading", deco: "img/grinch/heart.png", text: "Task 4. Fill in the gaps with the missing phrasal verb", bank: ["put up", "dressed up", "looking forward to", "wrapping up", "comes down"] },
        { type: "gap", q: "When do you usually ___ your Christmas tree?", answer: ["put up"] },
        { type: "gap", q: "Last Christmas we ___ our baby son in a Buddy the Elf costume.", answer: ["dressed up"] },
        { type: "gap", q: "Are you ___ the holiday season or are you feeling a little grinch-like?", answer: ["looking forward to"] },
        { type: "gap", q: "Many people love ___ Christmas presents in a pretty way.", answer: ["wrapping up"] },
        { type: "gap", q: "Father Christmas doesn't go through the door, he ___ the chimney on Christmas Eve.", answer: ["comes down"] },

        { type: "heading", deco: "img/grinch/g-plotting.png", text: "Task 5. Storyline: read the text" },
        { type: "reading", text: "Whoville is a wondrous little town where the residents, the human-like Whos, celebrate and keep the joy of Christmas close to their hearts all year round. But at Christmas time, the Whos pronounce their joy for the season loud and proud. However, not far from Whoville lives a creature who despises everything about Christmas. The creature, known as the Grinch, is a green-furred outcast whose only company in his lonely cave is his loyal dog Max. The Grinch wishes he could stop Christmas from coming, but he has not quite found a way how." },

        { type: "heading", deco: "img/grinch/g-sulky.png", text: "Task 6. True or false?" },
        { type: "choice", q: "Whoville is a large village.", options: ["True", "False"], answer: 1 },
        { type: "choice", q: "The Whos never celebrate Christmas.", options: ["True", "False"], answer: 1 },
        { type: "choice", q: "The Grinch's favourite holiday is Christmas.", options: ["True", "False"], answer: 1 },
        { type: "choice", q: "The Whos like to decorate their houses with lights.", options: ["True", "False"], answer: 0 },
        { type: "choice", q: "The Grinch has green fur.", options: ["True", "False"], answer: 0 },
        { type: "choice", q: "The Grinch lives in a big house.", options: ["True", "False"], answer: 1 },
        { type: "choice", q: "Max is a cat.", options: ["True", "False"], answer: 1 },
        { type: "choice", q: "The Grinch wishes he could stop Christmas from coming.", options: ["True", "False"], answer: 0 },

        { type: "heading", deco: "img/grinch/g-cheeky.png", text: "Task 7. Label the pictures" },
        { type: "match", images: true, q: "Choose the word for each picture.", pairs: [["img/grinch/pic1.jpg", "present"], ["img/grinch/pic2.jpg", "sleigh"], ["img/grinch/pic3.jpg", "fireplace"], ["img/grinch/pic4.jpg", "wreath"], ["img/grinch/pic5.jpg", "tinsel"], ["img/grinch/pic6.jpg", "target"]] },

        { type: "heading", deco: "img/grinch/g-arms.png", text: "Task 8. Word search" },
        { type: "wordsearch", q: "Find the 18 hidden words. Tap the first letter, then the last letter. Words go across or down.",
          grid: ["NAKQQDRPRESENTSSEB", "SAHFEASTVIUQQMFLOG", "TCHRISTMASAVZIDEEW", "OVLUORNAMENTSSLISI", "CDJDCSMERRYYHTIGIV", "KFBLHOAGRINCHLGHNS", "IKCYIKIKVHCMREHNGT", "NAIFMHTRICKGWTTLIU", "GREINDEERRLZTOSMNN", "SVUFEFAWFULMVEGXGK", "NQJFYYMYDWHOVILLEF", "RAPGIFTZTVTSNRSYCG"],
          words: ["AWFUL", "CHIMNEY", "CHRISTMAS", "FEAST", "GIFT", "GRINCH", "LIGHTS", "MERRY", "MISTLETOE", "ORNAMENTS", "PRESENTS", "REINDEER", "SINGING", "SLEIGH", "STOCKINGS", "STUNK", "TRICK", "WHOVILLE"] },

        { type: "heading", deco: "img/grinch/g-grumpy.png", text: "Task 9. Read the descriptions. Who is it?" },
        { type: "choice", q: "He was an orphan and he was really sad that he had no one to celebrate Christmas with. He didn't fit in with the people of Whoville, so he left and lived on Mount Crumpit for 53 years.", options: ["the Grinch", "Max"], answer: 0 },
        { type: "choice", q: "He is very loving and loyal to his owner. He is smart and acts almost like the house's butler. He doesn't like it when his master is mean to Cindy-Lou Who, but he knows his master has a good heart.", options: ["the Grinch", "Max"], answer: 1 },

        { type: "heading", deco: "img/grinch/heart.png", text: "Task 10. Fill in the gaps with the correct verb", bank: ["says", "attack", "remember", "have", "are"] },
        { type: "reading", text: "GRINCH: Now, ___ (1), Max, this is the time of year when the Whos ___ (2) at their most deceptive. You ___ (3) my full permission to ___ (4) anyone who so much as ___ (5) one kind word to us." },
        { type: "gap", q: "Gap 1: Now, ___, Max…", answer: ["remember"] },
        { type: "gap", q: "Gap 2: …when the Whos ___ at their most deceptive.", answer: ["are"] },
        { type: "gap", q: "Gap 3: You ___ my full permission…", answer: ["have"] },
        { type: "gap", q: "Gap 4: …to ___ anyone…", answer: ["attack"] },
        { type: "gap", q: "Gap 5: …who so much as ___ one kind word to us.", answer: ["says"] },

        { type: "heading", deco: "img/grinch/g-plotting.png", text: "Task 11. Put the verbs into the past simple" },
        { type: "reading", text: "From the edge of his ledge, way up in the sky,\nthe Grinch (feel) upset, though he (not be) sure why.\nIt could've been Christmas, all that joy and the such,\nor some thoughts from his past that he just (not can) quite touch.\nBut whatever it (be), it (make) his heart moan." },
        { type: "gap", q: "the Grinch ___ (feel) upset", answer: ["felt"] },
        { type: "gap", q: "though he ___ (not be) sure why", answer: ["wasn't", "was not"] },
        { type: "gap", q: "some thoughts from his past that he just ___ (not can) quite touch", answer: ["couldn't", "could not"] },
        { type: "gap", q: "But whatever it ___ (be)", answer: ["was"] },
        { type: "gap", q: "it ___ (make) his heart moan", answer: ["made"] },

        { type: "heading", deco: "img/grinch/g-sulky.png", text: "Task 12. Describe the characters", sub: "Use adjectives from the list: evil, kind, smart, cruel, selfish, uncaring, deceitful, soft-hearted, loyal, cunning, aggressive, big-hearted, unselfish, thoughtful, helpful, mischievous, optimistic, nice, kind-hearted, energetic, feisty, adventurous, humble, empathetic, open-minded, naive, emotional, sensitive, greedy." },
        { type: "write", q: "The Grinch is…" },
        { type: "write", q: "Cindy-Lou is…" },
        { type: "write", q: "Describe your favourite scene from the film." },

        { type: "heading", deco: "img/grinch/g-cheeky.png", text: "Task 13. Answer the questions about the film", sub: "Write short answers. Your teacher will check them with you." },
        { type: "write", q: "Why was the Grinch out of food?" },
        { type: "write", q: "How many sizes did the Grinch's heart grow?" },
        { type: "write", q: "What's the name of the Grinch's dog?" },
        { type: "write", q: "What colour is the Grinch?" },
        { type: "write", q: "How many brothers does Cindy-Lou have?" },
        { type: "write", q: "How many reindeer does the Grinch have?" },
        { type: "write", q: "What did the Grinch spit out?" },
        { type: "write", q: "Who did Max make friends with?" },
        { type: "write", q: "What does the Grinch use as an instrument?" },
        { type: "write", q: "Why does the Grinch steal Christmas?" },
        { type: "write", q: "What present did the Grinch give Max?" },
        { type: "write", q: "Who scared all of the reindeer away?" }
      ] },

    { day: 2, title: "Harry meets Ron and Hermione", skill: "Film scene · Listening, vocabulary and shadowing",
      bonus: ["img/hp/harry.png", "img/hp/ron.png", "img/hp/hermione.png", "img/hp/owl.png", "img/hp/platform.png", "img/hp/snitch.png", "img/hp/hat.png", "img/hp/glasses.png"],
      intro: "Watch the Hogwarts Express scene from Harry Potter and the Philosopher's Stone. Listen, fill in the missing words, then copy how the characters speak. Your answers are saved as you go.",
      items: [
        { type: "picture", src: "img/hp/harry-ron.jpg", alt: "Harry and Ron in their Hogwarts uniforms", caption: "Harry and Ron. Today you'll see how they meet." },
        { type: "heading", deco: "img/hp/ticket.png", text: "1. Before you watch", sub: "Think about starting somewhere new where you know nobody." },
        { type: "write", q: "Have you ever started somewhere new where you knew nobody? What happened?" },
        { type: "write", q: "How do you start a conversation with a stranger on a train? Write two opening lines." },

        { type: "heading", deco: "img/hp/books.png", text: "2. Words from the scene" },
        { type: "match", q: "Match the words with their meanings.", pairs: [["compartment", "a small room in a train"], ["trolley", "a small cart that sells food on a train"], ["wand", "a magic stick"], ["spell", "magic words that make something happen"], ["scar", "a mark on your skin from an old injury"], ["toad", "an animal like a big frog"], ["robes", "long loose clothes that wizards wear"], ["flavour", "the taste of a food"]] },
        { type: "match", q: "Match the informal British phrases with their meanings.", pairs: [["Wicked!", "Brilliant! Really cool!"], ["the lot", "everything"], ["I'm all set.", "I've got everything I need."], ["rotten luck", "very bad luck"], ["pathetic", "weak and silly"], ["by the way", "used to add new information"]] },
        { type: "choice", q: "Is a compartment the whole train or a small room in it?", options: ["a small room in it", "the whole train"], answer: 0 },

        { type: "heading", deco: "img/hp/castle.png", text: "3. Watch for the main idea", sub: "Watch the whole clip with subtitles off." },
        { type: "video", youtube: "R9U5qEp_7eE", title: "Harry meets Ron and Hermione on the Hogwarts Express" },
        { type: "match", q: "Put the events in order.", pairs: [["Ron asks to sit with Harry.", "1st"], ["Ron sees Harry's scar.", "2nd"], ["Harry buys sweets from the trolley.", "3rd"], ["A chocolate frog jumps out of the window.", "4th"], ["Ron tries a spell on his rat.", "5th"], ["Hermione mends Harry's glasses.", "6th"]] },
        { type: "write", q: "Write one adjective for your first impression of each person (for example: shy, friendly, confident, bossy). Ron is… Hermione is…" },

        { type: "heading", deco: "img/hp/harry.png", text: "4. Who says it?", sub: "Watch again and choose the speaker." },
        { type: "choice", q: "“Excuse me, do you mind? Everywhere else is full.”", options: ["Ron", "Harry", "Hermione"], answer: 0 },
        { type: "choice", q: "“Anything off the trolley, dears?”", options: ["the trolley lady", "Ron", "Hermione"], answer: 0 },
        { type: "choice", q: "“We'll take the lot!”", options: ["Harry", "Ron", "Hermione"], answer: 0 },
        { type: "choice", q: "“These aren't real frogs, are they?”", options: ["Harry", "Ron", "Hermione"], answer: 0 },
        { type: "choice", q: "“Has anyone seen a toad?”", options: ["Hermione", "Ron", "Harry"], answer: 0 },
        { type: "choice", q: "“You've got dirt on your nose, by the way.”", options: ["Hermione", "Harry", "Ron"], answer: 0 },

        { type: "heading", deco: "img/hp/letter.png", text: "5. Listen and fill in the gaps", sub: "Write one word in each gap. Watch again if you need to." },
        { type: "gap", q: "Ron: Excuse me, do you mind? Everywhere else is ___.", answer: ["full"] },
        { type: "gap", q: "Ron: I'm Ron, by the ___. Ron Weasley.", answer: ["way"] },
        { type: "gap", q: "Ron: So it's true? Do you really have the… the ___?", answer: ["scar"] },
        { type: "gap", q: "Ron: No, thanks. I'm all ___.", answer: ["set"] },
        { type: "gap", q: "Ron: They mean every ___.", answer: ["flavour", "flavor"] },
        { type: "gap", q: "Ron: Each pack's got a famous witch or ___.", answer: ["wizard"] },
        { type: "gap", q: "Ron: This is Scabbers, by the way. ___, isn't he?", answer: ["pathetic"] },
        { type: "gap", q: "Hermione: Has anyone seen a ___? A boy named Neville's lost one.", answer: ["toad"] },
        { type: "gap", q: "Hermione: You two better change into your ___.", answer: ["robes"] },

        { type: "heading", deco: "img/hp/glasses.png", text: "6. Watch for details" },
        { type: "choice", q: "Why does Ron sit with Harry?", options: ["Everywhere else is full.", "They are old friends.", "Harry asks him to."], answer: 0 },
        { type: "choice", q: "Why is Ron so surprised when he hears Harry's name?", options: ["Harry is famous.", "Harry is his cousin.", "Harry has a funny name."], answer: 0 },
        { type: "choice", q: "Which is NOT a flavour of Bertie Bott's beans that Ron names?", options: ["strawberry", "spinach", "peppermint"], answer: 0 },
        { type: "choice", q: "What does Ron want to do to his rat?", options: ["turn him yellow", "make him fly", "make him bigger"], answer: 0 },
        { type: "choice", q: "What happens when Ron tries the spell?", options: ["Nothing happens.", "The rat turns yellow.", "The rat disappears."], answer: 0 },
        { type: "choice", q: "What does Hermione fix with her spell?", options: ["Harry's glasses", "Ron's wand", "the window"], answer: 0 },

        { type: "heading", deco: "img/hp/snitch.png", text: "7. Listen to the music of English" },
        { type: "choice", q: "“Do you mind?” is a yes/no question. At the end, the voice usually goes…", options: ["up ↗", "down ↘"], answer: 0 },
        { type: "choice", q: "“And you are…?” Hermione's voice goes up because…", options: ["she is waiting for Ron to say his name", "she is angry", "she is finishing the conversation"], answer: 0 },
        { type: "choice", q: "Which words get the stress in “Everywhere else is full”?", options: ["EVERYwhere, ELSE, FULL", "is, else", "every word the same"], answer: 0 },
        { type: "choice", q: "In “I'm all set”, the words join together: “I'm-all-set”. This is called…", options: ["linking", "spelling", "stress"], answer: 0 },
        { type: "choice", q: "Who speaks faster, with very clear consonants?", options: ["Hermione", "Ron"], answer: 0 },

        { type: "heading", deco: "img/hp/wand.png", text: "8. Shadowing", sub: "Read the script, then copy the actors. Start with a short part (for example from “Excuse me” to “Wicked!”) and add more each day." },
        { type: "reading", text: "1. Silent mouthing: subtitles off, move your lips with the actors, no sound.\n2. Read along: say the words quietly at the same time as the actors. Use 0.75 speed if it's too fast.\n3. Pause and repeat: pause after every line and say it straight away, copying the stress and the tune.\n4. Full speed: shadow at normal speed, then try without the words.\n5. Character roles: be Harry or Ron and say only their lines. Then swap.\nRecord your last try on your phone." },
        { type: "script", title: "The train scene", legend: [["/", "short pause"], ["//", "longer pause"], ["‿", "join the words (linking)"], ["CAPS", "stressed syllable"], ["ə", "weak sound “uh” (schwa)"], ["↗", "voice goes up"], ["↘", "voice goes down"]],
          lines: [
            { who: "Ron", text: "Excuse me, do you mind? Everywhere else is full.", guide: "ex-CUSE me / d'yə MIND? ↗ // EV-ry-where ELSE‿iz FULL ↘" },
            { who: "Harry", text: "Not at all.", guide: "NO-tə-TALL ↘" },
            { who: "Ron", text: "I'm Ron, by the way. Ron Weasley.", guide: "I'm RON / by thə WAY ↘ // ron WEEZ-lee ↘" },
            { who: "Harry", text: "I'm Harry. Harry Potter.", guide: "I'm HA-rry ↘ // ha-rry POT-tə ↘" },
            { who: "Ron", text: "So… so it's true? I mean, do you really have the… the…", guide: "so… // so‿its TRUE? ↗ // I MEAN / d'yə REAL-ly HAVE thə… thə…" },
            { who: "Harry", text: "The what?", guide: "thə WHAT? ↗" },
            { who: "Ron", text: "The scar?", guide: "thə SCAR? ↗ (almost a whisper)" },
            { who: "Harry", text: "Oh. Yeah.", guide: "OH ↘ / YEAH ↘" },
            { who: "Ron", text: "Wicked!", guide: "WI-ckid! ↘ (big and excited)" },
            { who: "Trolley lady", text: "Anything off the trolley, dears?", guide: "AN-y-thing‿off thə TROL-ley / DEARS? ↗" },
            { who: "Ron", text: "No, thanks. I'm all set.", guide: "NO thanks ↘ / I'm‿all SET ↘" },
            { who: "Harry", text: "We'll take the lot!", guide: "we'll TAKE thə LOT! ↘" },
            { who: "Ron", text: "Wow! Bertie Bott's Every Flavour Beans!", guide: "WOW! ↘ // BER-tie BOTTS / EV-ry FLA-və BEANS! ↘" },
            { who: "Ron", text: "They mean every flavour.", guide: "they MEAN / EV-ry FLA-və ↘" },
            { who: "Ron", text: "There's chocolate and peppermint, and there's also spinach, liver and tripe.", guide: "there's CHOC-lət‿ən PEP-pə-mint ↗ / ən there's‿AL-so SPIN-ach ↗ / LIV-ə ↗ / ən TRIPE ↘" },
            { who: "Ron", text: "George swears he got a bogey-flavoured one once.", guide: "GEORGE SWEARS / he GOT‿ə BO-gey FLA-vəd‿one ONCE ↘" },
            { who: "Harry", text: "These aren't real frogs, are they?", guide: "these‿AREN'T REAL FROGS / ARE they? ↗" },
            { who: "Ron", text: "It's just a spell. Besides, it's the card you want.", guide: "its JUST‿ə SPELL ↘ // be-SIDES / its thə CARD yə WANT ↘" },
            { who: "Ron", text: "Each pack's got a famous witch or wizard. I've got about 500 myself.", guide: "EACH PACK'S got‿ə FA-məs WITCH‿ə WIZ-əd ↘ // I've GOT‿ə-bout FIVE HUN-drəd my-SELF ↘" },
            { who: "Ron", text: "Watch it! That's rotten luck. They've only got one good jump in them to begin with.", guide: "WATCH‿it! ↘ // that's ROT-tən LUCK ↘ // they've ON-ly got ONE GOOD JUMP‿in thəm / tə be-GIN with ↘" },
            { who: "Harry", text: "I've got Dumbledore!", guide: "I've got DUM-bəl-dore! ↘" },
            { who: "Ron", text: "I've got about six of him.", guide: "I've got‿ə-bout SIX‿əv‿im ↘" },
            { who: "Harry", text: "Hey, he's gone!", guide: "HEY / he's GONE! ↘" },
            { who: "Ron", text: "Well, you can't expect him to hang around all day, can you?", guide: "well / yə CAN'T ex-PECT‿im tə HANG‿ə-round‿all DAY ↘ / CAN you? ↘" },
            { who: "Ron", text: "This is Scabbers, by the way. Pathetic, isn't he?", guide: "this‿iz SCAB-bəz / by thə WAY ↘ // pə-THET-ic ↘ / IS-n't he? ↘" },
            { who: "Harry", text: "Just a little bit.", guide: "JUST‿ə LIT-tle BIT ↘" },
            { who: "Ron", text: "Fred gave me a spell to turn him yellow. Want to see?", guide: "FRED GAVE me‿ə SPELL / tə TURN‿im YEL-low ↘ // WAN-nə SEE? ↗" },
            { who: "Hermione", text: "Has anyone seen a toad? A boy named Neville's lost one.", guide: "has‿AN-y-one SEEN‿ə TOAD? ↗ // ə BOY named NEV-ille's LOST‿one ↘" },
            { who: "Ron", text: "No.", guide: "NO ↘" },
            { who: "Hermione", text: "Oh, are you doing magic? Let's see, then.", guide: "OH / are yə DO-ing MA-gic? ↗ // let's SEE then ↘" },
            { who: "Ron", text: "Sunshine, daisies, butter mellow, turn this stupid, fat rat yellow!", guide: "SUN-shine / DAI-sies / BUT-tə MEL-low // TURN this STU-pid / FAT RAT YEL-low! ↘ (say it like a little poem)" },
            { who: "Hermione", text: "Are you sure that's a real spell? Well, it's not very good, is it?", guide: "are yə SURE that's‿ə REAL SPELL? ↗ // well / its NOT ve-ry GOOD ↘ / IS‿it? ↘" },
            { who: "Hermione", text: "Of course, I've only tried a few simple ones myself, but they've all worked for me. For example… Oculus Reparo!", guide: "of COURSE / I've ON-ly TRIED‿ə few SIM-ple ones my-SELF / but they've ALL WORKED fə ME ↘ // fər‿ex-AM-ple… // OC-u-lus re-PA-ro! ↘" },
            { who: "Hermione", text: "That's better, isn't it?", guide: "that's BET-tə ↘ / IS-n't‿it? ↘" },
            { who: "Hermione", text: "Holy cricket! You're Harry Potter!", guide: "HO-ly CRICK-et! ↘ // you're HA-rry POT-tə! ↘" },
            { who: "Hermione", text: "I'm Hermione Granger. And you are…?", guide: "I'm her-MY-ə-nee GRAN-jə ↘ // ənd YOU are…? ↗" },
            { who: "Ron", text: "I'm Ron Weasley.", guide: "I'm ron WEEZ-lee ↘" },
            { who: "Hermione", text: "Pleasure. You two better change into your robes. I expect we'll be arriving soon.", guide: "PLEA-sure ↘ // you TWO bet-tə CHANGE‿in-tə yə ROBES ↘ / I ex-PECT we'll be‿ə-RRI-ving SOON ↘" },
            { who: "Hermione", text: "You've got dirt on your nose, by the way. Did you know? Just there.", guide: "you've got DIRT‿on yə NOSE / by thə WAY ↘ // DID‿jə KNOW? ↗ // JUST THERE ↘" }
          ] },
        { type: "write", q: "Which line feels most natural now? Which line is still hard?" },

        { type: "heading", deco: "img/hp/ron.png", text: "9. Meeting someone new" },
        { type: "match", q: "Match what you want to do with a phrase from the scene.", pairs: [["ask to sit down", "Do you mind?"], ["introduce yourself", "I'm Ron, by the way."], ["say no politely", "No, thanks. I'm all set."], ["show you're impressed", "Wicked!"], ["ask someone's name", "And you are…?"], ["meet someone politely", "Pleasure."]] },
        { type: "write", q: "Role-play: it's your first day at a new school or course. You sit with a stranger on the train. Write a short conversation (6–8 lines) using at least three phrases from above." },

        { type: "heading", deco: "img/hp/hat.png", text: "Homework: 5-day shadowing challenge", sub: "Shadow the same part of the scene for 5 minutes a day. Record yourself on day 1 and day 5 and send both recordings to your teacher. After each recording, check: I linked words smoothly · I stressed the key words · my questions went up or down correctly · I kept up with the speaker." }
      ] },

    { day: 3, title: "Let's talk about Christmas", skill: "Speaking and writing · Christmas questions",
      bonus: ["img/xmas/santa.png", "img/xmas/penguin.png", "img/xmas/reindeer.png", "img/xmas/tree.png", "img/xmas/snowman.png", "img/xmas/present.png", "img/xmas/cocoa.png", "img/xmas/stocking.png", "img/xmas/gingerbread.png", "img/xmas/candle.png", "img/xmas/mittens.png", "img/xmas/wreath.png"],
      intro: "Nine questions to talk about with your teacher or a friend. For each one, do the short language task, then write your own answer. Then say it out loud!",
      items: [
        { type: "heading", deco: "img/xmas/santa.png", text: "1. How do you usually celebrate Christmas?", bank: ["We usually…", "We always…", "On Christmas Eve we…", "My family…"] },
        { type: "picture", src: "img/xmas/photo-cocoa.jpg", alt: "Friends with hot chocolate by the Christmas tree", caption: "Hot chocolate with friends by the tree. What do you usually do?" },
        { type: "choice", q: "Which sentence is correct?", options: ["We usually celebrate with my grandparents.", "We celebrate usually with my grandparents.", "Usually we celebrating with my grandparents."], answer: 0 },
        { type: "gap", q: "On Christmas Eve we ___ (have) a big dinner together.", answer: ["have"] },
        { type: "write", q: "Your answer: how do you usually celebrate Christmas?" },

        { type: "heading", deco: "img/xmas/present.png", text: "2. What is your favourite Christmas memory?", bank: ["I remember when…", "When I was…, I…", "It was the best Christmas because…"] },
        { type: "gap", q: "When I was seven, I ___ (get) a red bike for Christmas.", answer: ["got"] },
        { type: "gap", q: "We ___ (go) skating with my cousins.", answer: ["went"] },
        { type: "gap", q: "It ___ (be) so much fun!", answer: ["was"] },
        { type: "write", q: "Your answer: what is your favourite Christmas memory?" },

        { type: "heading", deco: "img/xmas/candle.png", text: "3. What does Christmas mean to you?", bank: ["For me, Christmas means…", "It's a time for…", "The most important thing is…"] },
        { type: "choice", q: "For me, Christmas means ___ time with my family.", options: ["spending", "spend", "to spending"], answer: 0 },
        { type: "choice", q: "It's a time ___ being kind to other people.", options: ["for", "to", "at"], answer: 0 },
        { type: "write", q: "Your answer: what does Christmas mean to you?" },

        { type: "heading", deco: "img/xmas/tree.png", text: "4. How do you decorate your home for Christmas?", bank: ["We put up…", "We hang…", "We decorate the tree with…"] },
        { type: "match", q: "Match the decorations with their descriptions.", pairs: [["fairy lights", "small electric lights"], ["tinsel", "shiny strips of decoration"], ["wreath", "a ring of leaves on the door"], ["baubles", "round balls for the tree"], ["star", "it goes on the top of the tree"]] },
        { type: "gap", q: "Every year we ___ up the Christmas tree in the living room.", answer: ["put"] },
        { type: "write", q: "Your answer: how do you decorate your home?" },

        { type: "heading", deco: "img/xmas/wreath.png", text: "5. What are some typical Christmas traditions in your country?", bank: ["In Ukraine, people…", "It's traditional to…", "On Christmas Eve, families…"] },
        { type: "match", q: "Match the Ukrainian traditions with their descriptions.", pairs: [["kutia", "a sweet dish of wheat, honey and poppy seeds"], ["koliadky", "Christmas carols"], ["Sviata Vecheria", "Holy Supper with twelve dishes"], ["didukh", "a decoration made of wheat"]] },
        { type: "choice", q: "It's traditional ___ carols on Christmas Eve.", options: ["to sing", "singing to", "sing"], answer: 0 },
        { type: "write", q: "Your answer: what are the Christmas traditions in your country?" },

        { type: "heading", deco: "img/xmas/reindeer.png", text: "6. What do you know about Christmas traditions in other countries?", bank: ["In the UK, people…", "I know that in… they…", "I find it interesting that…"] },
        { type: "picture", src: "img/xmas/photo-market.jpg", alt: "A big Christmas tree at a night Christmas market", caption: "A Christmas market. Which countries are famous for them?" },
        { type: "match", q: "Match the countries with their traditions.", pairs: [["the UK", "pulling Christmas crackers at dinner"], ["Germany", "visiting Christmas markets"], ["Australia", "Christmas lunch on the beach"], ["Mexico", "breaking a piñata"], ["Japan", "eating fried chicken for Christmas dinner"]] },
        { type: "write", q: "Your answer: which tradition from another country do you like most and why?" },

        { type: "heading", deco: "img/xmas/snowman.png", text: "7. What is your opinion about Christmas movies? Do you have a favourite one?", bank: ["In my opinion…", "I think they're…", "My favourite one is… because…"] },
        { type: "picture", src: "img/xmas/photo-movie-night.jpg", alt: "A cosy outdoor movie night with Home Alone on the screen", caption: "A cosy movie night. Would you like to watch a film like this?" },
        { type: "choice", q: "In my opinion, Christmas movies ___ a bit predictable, but I love them.", options: ["are", "is", "be"], answer: 0 },
        { type: "choice", q: "My favourite Christmas movie is Home Alone ___ it's really funny.", options: ["because", "so", "but"], answer: 0 },
        { type: "write", q: "Your answer: what do you think about Christmas movies? What's your favourite?" },

        { type: "heading", deco: "img/xmas/stocking.png", text: "8. Do you enjoy Christmas shopping, or do you find it stressful? Why?", bank: ["I enjoy… because…", "I find it…", "The worst thing is…"] },
        { type: "gap", q: "I find Christmas shopping quite ___ (stress).", answer: ["stressful"] },
        { type: "gap", q: "I really enjoy ___ (choose) presents for my friends.", answer: ["choosing"] },
        { type: "choice", q: "The shops are always so ___ in December.", options: ["crowded", "crowding", "crowd"], answer: 0 },
        { type: "write", q: "Your answer: do you enjoy Christmas shopping? Why or why not?" },

        { type: "heading", deco: "img/xmas/penguin.png", text: "9. If you could travel anywhere for Christmas, where would you go?", bank: ["If I could…, I would…", "I'd love to…", "because…"] },
        { type: "gap", q: "If I could travel anywhere, I ___ go to Lapland to meet Santa.", answer: ["would", "'d"] },
        { type: "gap", q: "If I ___ (have) more money, I would visit New York at Christmas.", answer: ["had"] },
        { type: "order", q: "Put the words in order.", answer: "I would go to a Christmas market in Vienna" },
        { type: "write", q: "Your answer: if you could travel anywhere for Christmas, where would you go and why?" }
      ] },

    { day: 4, title: "The Gift of the Magi", skill: "Classic Christmas story · Reading and reading aloud",
      cover: { src: "img/magi/cover.jpg", alt: "Book cover: The Gift of the Magi by O. Henry. A young woman holds a present and a man holds a comb, next to a Christmas tree." },
      intro: "A famous Christmas story by O. Henry (1905). Choose your level: the easier version is a short adapted story, the harder version is O. Henry's original text. You can change your level at any time.",
      levels: [
        { id: "easy", label: "Easier", tag: "A2 · short story, about 430 words",
          intro: "Read the short version of the story in the notebook, then do the tasks. Turn the pages with the arrows.",
          glossary: [
            { title: "Story words", rows: [
              ["flat /flæt/", "квартира"], ["mirror /ˈmɪrə/", "дзеркало"], ["sell – sold /səʊld/", "продавати – продав"], ["watch /wɒtʃ/", "годинник (наручний, кишеньковий)"],
              ["chain /tʃeɪn/", "ланцюжок"], ["comb /kəʊm/", "гребінь (для волосся)"], ["package /ˈpækɪdʒ/", "пакунок"], ["grow /ɡrəʊ/", "рости"],
              ["leather strap", "шкіряний ремінець"], ["curls", "кучері"], ["earn", "заробляти"], ["scream", "кричати"]
            ] }
          ],
          items: [
            { type: "heading", text: "Task 1. Story words", sub: "Match the words with their meanings." },
            { type: "match", q: "Match.", pairs: [["flat", "an apartment"], ["mirror", "you look at yourself in it"], ["sell", "give something and get money"], ["watch", "a small clock you wear"], ["chain", "metal rings joined together"], ["comb", "you put it in your hair"], ["package", "a present in paper"], ["grow", "get longer or bigger"]] },
            { type: "heading", text: "Task 2. Before you read", sub: "Look at the book cover at the top. What is in the man's hand? What is the woman holding?" },
            { type: "write", q: "What do you think happens in the story? Write one or two sentences." },

            { type: "heading", text: "Read the story", sub: "Read quickly the first time. You don't need every word." },
            { type: "notebook", title: "The Gift", by: "a story by O. Henry (easy version)", paras: ["Della counted her money three times. She had only one dollar and eighty-seven cents. Tomorrow was Christmas. She wanted to buy a present for her husband, Jim, but she did not have enough money. She sat on the old sofa and cried.", "Della and Jim lived in a small, cheap flat. They were not rich. Jim earned only twenty dollars a week. He needed a new coat, and he had no gloves. But Della and Jim loved each other very much.", "They had two special things. Jim had a beautiful gold watch. It was his father's and his grandfather's watch. Della had beautiful long brown hair. It was very, very long — it came down below her knees.", "Della stood in front of the mirror and looked at her hair. Then she had an idea. She put on her old brown coat and her old brown hat and walked quickly to the shops.", "She stopped at a shop with the sign “Madame Sofronie. Hair of All Kinds.”", "“Will you buy my hair?” Della asked.", "“Take off your hat. Let's look at it,” said Madame. She touched the hair. “Twenty dollars.”", "“Give it to me quickly,” said Della.", "For two hours Della looked in all the shops for a present for Jim. At last she found it: a beautiful chain for his watch. Jim's watch had only an old leather strap. The chain cost twenty-one dollars.", "At home, Della looked in the mirror. Her hair was very short now, with small curls. “Please, God, make him think I am still pretty,” she said quietly.", "At seven o'clock Jim came home. He looked at Della and did not speak. His face was very strange.", "“Jim, darling, don't look at me like that,” said Della. “I sold my hair because I wanted to buy you a present. It will grow again. Say ‘Merry Christmas!’ and let's be happy.”", "Jim took a small package from his coat and put it on the table. “I love you with short hair or long hair, Dell,” he said. “But open the package.”", "Della opened it and screamed with happiness — then she started to cry. Inside were beautiful combs for long hair. She wanted these combs for a long time. But now her long hair was gone.", "She smiled and said, “My hair grows very fast, Jim!” Then she gave Jim his present. “Isn't it beautiful? Give me your watch. I want to see the chain on it.”", "Jim sat down on the sofa and smiled. “Dell,” he said, “let's put our presents away for now. I sold my watch to buy your combs.”", "Their presents were not useful now. But Della and Jim gave the most important present of all: love."] },

            { type: "heading", text: "Task 3. The main idea" },
            { type: "choice", q: "What did Della sell?", options: ["her hair", "her watch", "her coat"], answer: 0 },
            { type: "choice", q: "What did Della buy for Jim?", options: ["a chain for his watch", "a new coat", "some gloves"], answer: 0 },
            { type: "choice", q: "What did Jim sell?", options: ["his watch", "his coat", "his chain"], answer: 0 },
            { type: "choice", q: "What did Jim buy for Della?", options: ["combs for her hair", "a mirror", "a brown hat"], answer: 0 },

            { type: "heading", text: "Task 4. True or false?", sub: "Read the story again. Then say the false sentences correctly." },
            { type: "choice", q: "Della had a lot of money.", options: ["True", "False"], answer: 1 },
            { type: "choice", q: "Jim and Della lived in a big house.", options: ["True", "False"], answer: 1 },
            { type: "choice", q: "Jim's watch was his grandfather's.", options: ["True", "False"], answer: 0 },
            { type: "choice", q: "Madame paid twenty dollars for Della's hair.", options: ["True", "False"], answer: 0 },
            { type: "choice", q: "The chain cost twenty dollars.", options: ["True", "False"], answer: 1 },
            { type: "choice", q: "Jim was angry about Della's hair.", options: ["True", "False"], answer: 1 },
            { type: "choice", q: "Della cried when she saw the combs.", options: ["True", "False"], answer: 0 },
            { type: "choice", q: "Jim sold his watch.", options: ["True", "False"], answer: 0 },

            { type: "heading", text: "Task 5. How do we say -ed?", sub: "/t/ after sounds like k, s, sh, ch · /d/ after most other sounds · /ɪd/ (an extra syllable) only after t or d.", bank: ["/t/ looked", "/d/ lived", "/ɪd/ wanted"] },
            { type: "match", q: "Choose the sound of -ed for each verb. Say each verb out loud.", pairs: [["walked", "/t/"], ["asked", "/t/"], ["touched", "/t/"], ["cried", "/d/"], ["earned", "/d/"], ["smiled", "/d/"], ["counted", "/ɪd/"], ["needed", "/ɪd/"], ["started", "/ɪd/"]] },

            { type: "heading", text: "Task 6. Tricky words", sub: "Some letters are silent: we write them, but we don't say them." },
            { type: "choice", q: "comb /kəʊm/ – which letter is silent?", options: ["b", "c", "m"], answer: 0 },
            { type: "choice", q: "Christmas /ˈkrɪsməs/ – which letter is silent?", options: ["t", "h", "s"], answer: 0 },
            { type: "choice", q: "knees /niːz/ – which letter is silent?", options: ["k", "n", "s"], answer: 0 },
            { type: "choice", q: "bought /bɔːt/ – which letters are silent?", options: ["gh", "ou", "b"], answer: 0 },
            { type: "choice", q: "How many syllables are in beautiful /ˈbjuːtɪfl/?", options: ["3", "2", "4"], answer: 0 },
            { type: "choice", q: "Where is the stress in happiness?", options: ["HAPpiness", "hapPIness", "happiNESS"], answer: 0 },

            { type: "heading", text: "Task 7. Read aloud like a storyteller", sub: "Listen to your teacher, then read each line. Pause at /, say the CAPITAL words strongly, and let your voice go up ↗ or down ↘." },
            { type: "script", title: "Read these lines aloud", roles: ["Della", "Jim"],
              legend: [["/", "pause"], ["CAPITALS", "stress"], ["↗", "voice goes up"], ["↘", "voice goes down"]],
              lines: [
                { who: "Narrator", text: "She had only one dollar and eighty-seven cents.", guide: "She had ONly / one DOLLar / and EIGHty-SEVen CENTS. ↘" },
                { who: "Della", text: "“Will you buy my hair?” Della asked.", guide: "“Will you BUY my HAIR?” ↗ / DELla ASKED." },
                { who: "Della", text: "“Give it to me quickly,” said Della.", guide: "“GIVE it to me QUICKly,” ↘ / said DELla." },
                { who: "Della", text: "“My hair grows very fast, Jim!”", guide: "“My HAIR grows VERy FAST, / JIM!” ↘" },
                { who: "Jim", text: "“I sold my watch to buy your combs.”", guide: "“I SOLD my WATCH / to BUY your COMBS.” ↘" }
              ] },
            { type: "checklist", title: "Now read the whole story aloud. Record yourself and listen. Tick what you did well:", items: ["-ed endings are correct (/t/, /d/, /ɪd/)", "I paused in the right places", "I said the important words strongly", "My voice went up ↗ in questions and down ↘ in statements", "Silent letters were silent (comb, Christmas, knees)"] },

            { type: "heading", text: "Task 8. What do you think?" },
            { type: "write", q: "Would you sell something you love to buy a present for someone? Why or why not?" },

            { type: "heading", text: "Homework", sub: "Watch the video. Then record yourself reading the story and send it to your teacher." },
            { type: "video", youtube: "CUATJU_CQfE", title: "Homework video" }
          ] },

        { id: "hard", label: "Harder", tag: "B1+ · O. Henry's original text, about 2,000 words",
          intro: "Read O. Henry's original story in the notebook. It is difficult, and that's OK: you don't need every word. The numbers in the margin are paragraph numbers. Open the word list if you get stuck.",
          glossary: [
            { title: "Key words", rows: [
              ["flat /flæt/", "an apartment"], ["pier-glass /ˈpɪə ɡlɑːs/", "a tall, narrow mirror on the wall"], ["fob chain /fɒb tʃeɪn/", "a chain for a pocket watch"], ["combs /kəʊmz/", "decorations you put in long hair (silent b)"],
              ["tortoise shell /ˈtɔːtəs ʃel/", "the hard shell of a tortoise, used for jewellery"], ["to ransack /ˈrænsæk/", "to search a place quickly and completely"], ["to sacrifice /ˈsækrɪfaɪs/", "to give up something important for someone else"], ["the magi /ˈmeɪdʒaɪ/", "the three wise men who brought gifts to baby Jesus"]
            ] },
            { title: "Difficult words in the text (no need to learn)", rows: [
              ["parsimony", "being too careful with money"], ["mendicancy", "begging"], ["vestibule", "entrance hall"], ["depreciate", "make less valuable"], ["meretricious", "cheap-looking"],
              ["chaste", "simple, pure"], ["prudence", "being careful"], ["truant", "a child who skips school"], ["setter", "a hunting dog"], ["quail", "a small bird"]
            ] }
          ],
          items: [
            { type: "heading", text: "Task A. Key words", sub: "Match the words with their meanings. Then say each word: check the stress in the word list." },
            { type: "match", q: "Match.", pairs: [["flat", "an apartment"], ["pier-glass", "a tall, narrow mirror on the wall"], ["fob chain", "a chain for a pocket watch"], ["combs", "decorations you put in long hair"], ["tortoise shell", "a hard shell used for jewellery"], ["to ransack", "to search a place quickly and completely"], ["to sacrifice", "to give up something important for someone else"], ["the magi", "the three wise men who brought gifts to baby Jesus"]] },
            { type: "heading", text: "Before you read", sub: "Look at the book cover at the top: a gold watch, a comb, a present." },
            { type: "write", q: "What is the most valuable thing you own? Would you sell it to buy a present for someone you love?" },
            { type: "write", q: "Predict: what do you think happens in the story?" },

            { type: "heading", text: "Read the story", sub: "First read for the main idea (Task B). Don't stop at every new word." },
            { type: "notebook", title: "The Gift of the Magi", by: "O. Henry, 1905 (original text)", numbered: true, paras: ["One dollar and eighty-seven cents. That was all. And sixty cents of it was in pennies. Pennies saved one and two at a time by bulldozing the grocer and the vegetable man and the butcher until one's cheeks burned with the silent imputation of parsimony that such close dealing implied. Three times Della counted it. One dollar and eighty-seven cents. And the next day would be Christmas.", "There was clearly nothing to do but flop down on the shabby little couch and howl. So Della did it. Which instigates the moral reflection that life is made up of sobs, sniffles, and smiles, with sniffles predominating.", "While the mistress of the home is gradually subsiding from the first stage to the second, take a look at the home. A furnished flat at $8 per week. It did not exactly beggar description, but it certainly had that word on the lookout for the mendicancy squad.", "In the vestibule below was a letter-box into which no letter would go, and an electric button from which no mortal finger could coax a ring. Also appertaining thereunto was a card bearing the name “Mr. James Dillingham Young.” The “Dillingham” had been flung to the breeze during a former period of prosperity when its possessor was being paid $30 per week. Now, when the income was shrunk to $20, the letters of “Dillingham” looked blurred, as though they were thinking seriously of contracting to a modest and unassuming D. But whenever Mr. James Dillingham Young came home and reached his flat above he was called “Jim” and greatly hugged by Mrs. James Dillingham Young, already introduced to you as Della. Which is all very good.", "Della finished her cry and attended to her cheeks with the powder rag. She stood by the window and looked out dully at a grey cat walking a grey fence in a grey backyard. Tomorrow would be Christmas Day, and she had only $1.87 with which to buy Jim a present. She had been saving every penny she could for months, with this result. Twenty dollars a week doesn't go far. Expenses had been greater than she had calculated. They always are. Only $1.87 to buy a present for Jim. Her Jim. Many a happy hour she had spent planning for something nice for him. Something fine and rare and sterling—something just a little bit near to being worthy of the honor of being owned by Jim.", "There was a pier-glass between the windows of the room. Perhaps you have seen a pier-glass in an $8 flat. A very thin and very agile person may, by observing his reflection in a rapid sequence of longitudinal strips, obtain a fairly accurate conception of his looks. Della, being slender, had mastered the art.", "Suddenly she whirled from the window and stood before the glass. Her eyes were shining brilliantly, but her face had lost its color within twenty seconds. Rapidly she pulled down her hair and let it fall to its full length.", "Now, there were two possessions of the James Dillingham Youngs in which they both took a mighty pride. One was Jim's gold watch that had been his father's and his grandfather's. The other was Della's hair. Had the Queen of Sheba lived in the flat across the airshaft, Della would have let her hair hang out the window some day to dry just to depreciate Her Majesty's jewels and gifts. Had King Solomon been the janitor, with all his treasures piled up in the basement, Jim would have pulled out his watch every time he passed, just to see him pluck at his beard from envy.", "So now Della's beautiful hair fell about her, rippling and shining like a cascade of brown waters. It reached below her knee and made itself almost a garment for her. And then she did it up again nervously and quickly. Once she faltered for a minute and stood still while a tear or two splashed on the worn red carpet.", "On went her old brown jacket; on went her old brown hat. With a whirl of skirts and with the brilliant sparkle still in her eyes, she fluttered out the door and down the stairs to the street.", "Where she stopped the sign read: “Mme. Sofronie. Hair Goods of All Kinds.” One flight up Della ran, and collected herself, panting. Madame, large, too white, chilly, hardly looked the “Sofronie.”", "“Will you buy my hair?” asked Della.", "“I buy hair,” said Madame. “Take yer hat off and let's have a sight at the looks of it.”", "Down rippled the brown cascade. “Twenty dollars,” said Madame, lifting the mass with a practised hand.", "“Give it to me quick,” said Della.", "Oh, and the next two hours tripped by on rosy wings. Forget the hashed metaphor. She was ransacking the stores for Jim's present.", "She found it at last. It surely had been made for Jim and no one else. There was no other like it in any of the stores, and she had turned all of them inside out. It was a platinum fob chain simple and chaste in design, properly proclaiming its value by substance alone and not by meretricious ornamentation—as all good things should do. It was even worthy of The Watch. As soon as she saw it she knew that it must be Jim's. It was like him. Quietness and value—the description applied to both. Twenty-one dollars they took from her for it, and she hurried home with the 87 cents. With that chain on his watch Jim might be properly anxious about the time in any company. Grand as the watch was, he sometimes looked at it on the sly on account of the old leather strap that he used in place of a chain.", "When Della reached home her intoxication gave way a little to prudence and reason. She got out her curling irons and lighted the gas and went to work repairing the ravages made by generosity added to love. Which is always a tremendous task, dear friends—a mammoth task.", "Within forty minutes her head was covered with tiny, close-lying curls that made her look wonderfully like a truant schoolboy. She looked at her reflection in the mirror long, carefully, and critically.", "“If Jim doesn't kill me,” she said to herself, “before he takes a second look at me, he'll say I look like a Coney Island chorus girl. But what could I do—oh! what could I do with a dollar and eighty-seven cents?”", "At 7 o'clock the coffee was made and the frying-pan was on the back of the stove hot and ready to cook the chops.", "Jim was never late. Della doubled the fob chain in her hand and sat on the corner of the table near the door that he always entered. Then she heard his step on the stair away down on the first flight, and she turned white for just a moment. She had a habit for saying little silent prayers about the simplest everyday things, and now she whispered: “Please God, make him think I am still pretty.”", "The door opened and Jim stepped in and closed it. He looked thin and very serious. Poor fellow, he was only twenty-two—and to be burdened with a family! He needed a new overcoat and he was without gloves.", "Jim stopped inside the door, as immovable as a setter at the scent of quail. His eyes were fixed upon Della, and there was an expression in them that she could not read, and it terrified her. It was not anger, nor surprise, nor disapproval, nor horror, nor any of the sentiments that she had been prepared for. He simply stared at her fixedly with that peculiar expression on his face.", "Della wriggled off the table and went for him.", "“Jim, darling,” she cried, “don't look at me that way. I had my hair cut off and sold it because I couldn't have lived through Christmas without giving you a present. It'll grow out again—you won't mind, will you? I just had to do it. My hair grows awfully fast. Say ‘Merry Christmas!’ Jim, and let's be happy. You don't know what a nice—what a beautiful, nice gift I've got for you.”", "“You've cut off your hair?” asked Jim, laboriously, as if he had not arrived at that patent fact yet even after the hardest mental labor.", "“Cut it off and sold it,” said Della. “Don't you like me just as well, anyhow? I'm me without my hair, ain't I?”", "Jim looked about the room curiously.", "“You say your hair is gone?” he said, with an air almost of idiocy.", "“You needn't look for it,” said Della. “It's sold, I tell you—sold and gone, too. It's Christmas Eve, boy. Be good to me, for it went for you. Maybe the hairs of my head were numbered,” she went on with sudden serious sweetness, “but nobody could ever count my love for you. Shall I put the chops on, Jim?”", "Out of his trance Jim seemed quickly to wake. He enfolded his Della. For ten seconds let us regard with discreet scrutiny some inconsequential object in the other direction. Eight dollars a week or a million a year—what is the difference? A mathematician or a wit would give you the wrong answer. The magi brought valuable gifts, but that was not among them. This dark assertion will be illuminated later on.", "Jim drew a package from his overcoat pocket and threw it upon the table.", "“Don't make any mistake, Dell,” he said, “about me. I don't think there's anything in the way of a haircut or a shave or a shampoo that could make me like my girl any less. But if you'll unwrap that package you may see why you had me going a while at first.”", "White fingers and nimble tore at the string and paper. And then an ecstatic scream of joy; and then, alas! a quick feminine change to hysterical tears and wails, necessitating the immediate employment of all the comforting powers of the lord of the flat.", "For there lay The Combs—the set of combs, side and back, that Della had worshipped long in a Broadway window. Beautiful combs, pure tortoise shell, with jewelled rims—just the shade to wear in the beautiful vanished hair. They were expensive combs, she knew, and her heart had simply craved and yearned over them without the least hope of possession. And now, they were hers, but the tresses that should have adorned the coveted adornments were gone.", "But she hugged them to her bosom, and at length she was able to look up with dim eyes and a smile and say: “My hair grows so fast, Jim!”", "And then Della leaped up like a little singed cat and cried, “Oh, oh!”", "Jim had not yet seen his beautiful present. She held it out to him eagerly upon her open palm. The dull precious metal seemed to flash with a reflection of her bright and ardent spirit.", "“Isn't it a dandy, Jim? I hunted all over town to find it. You'll have to look at the time a hundred times a day now. Give me your watch. I want to see how it looks on it.”", "Instead of obeying, Jim tumbled down on the couch and put his hands under the back of his head and smiled.", "“Dell,” said he, “let's put our Christmas presents away and keep ’em a while. They're too nice to use just at present. I sold the watch to get the money to buy your combs. And now suppose you put the chops on.”", "The magi, as you know, were wise men—wonderfully wise men—who brought gifts to the Babe in the manger. They invented the art of giving Christmas presents. Being wise, their gifts were no doubt wise ones, possibly bearing the privilege of exchange in case of duplication. And here I have lamely related to you the uneventful chronicle of two foolish children in a flat who most unwisely sacrificed for each other the greatest treasures of their house. But in a last word to the wise of these days let it be said that of all who give gifts these two were the wisest. Of all who give and receive gifts, such as they are wisest. Everywhere they are wisest. They are the magi."] },

            { type: "heading", text: "Task B. The main idea" },
            { type: "choice", q: "What did Della sell, and what did she buy?", options: ["Her hair; a platinum fob chain for Jim's watch", "Her hair; a new overcoat for Jim", "Her combs; a gold watch for Jim"], answer: 0 },
            { type: "choice", q: "What did Jim sell, and what did he buy?", options: ["His gold watch; tortoise-shell combs for Della", "His overcoat; a mirror for Della", "His gold watch; a brown hat for Della"], answer: 0 },
            { type: "choice", q: "Why are their presents useless now?", options: ["Della has no long hair for the combs, and Jim has no watch for the chain.", "The presents are broken.", "They bought the same present for each other."], answer: 0 },

            { type: "heading", text: "Task C. Details", sub: "Read again. The paragraph number is in brackets." },
            { type: "choice", q: "How much money did Della have at the start? (para 1)", options: ["$1.87", "$8", "87 cents"], answer: 0 },
            { type: "choice", q: "How much does Jim earn now? (para 4)", options: ["$20 a week", "$30 a week", "$8 a week"], answer: 0 },
            { type: "choice", q: "How much did he earn before? (para 4)", options: ["$30 a week", "$20 a week", "$21 a week"], answer: 0 },
            { type: "choice", q: "What were the couple's two most valuable possessions? (para 8)", options: ["Jim's gold watch and Della's hair", "Jim's overcoat and Della's combs", "Their flat and their couch"], answer: 0 },
            { type: "choice", q: "How much did Madame Sofronie pay for the hair? (para 14)", options: ["$20", "$21", "$1.87"], answer: 0 },
            { type: "choice", q: "How much did the chain cost? (para 17)", options: ["$21", "$20", "$87"], answer: 0 },
            { type: "choice", q: "What did Della do to her hair when she got home? (paras 18–19)", options: ["She curled it with curling irons.", "She coloured it.", "She hid it under a hat."], answer: 0 },
            { type: "choice", q: "What did Della pray before Jim came in? (para 22)", options: ["“Please God, make him think I am still pretty.”", "“Please God, give us more money.”", "“Please God, make my hair grow fast.”"], answer: 0 },
            { type: "choice", q: "What does Jim suggest at the end? (para 42)", options: ["To put the presents away for a while and cook the chops", "To sell the combs and buy the watch back", "To go out for dinner"], answer: 0 },

            { type: "heading", text: "Task D. Word stress and tricky sounds", sub: "Choose the stressed syllable. Then say the word out loud." },
            { type: "choice", q: "tortoise /ˈtɔːtəs/ (not “tor-TOYS”)", options: ["TOR-toise", "tor-TOISE"], answer: 0 },
            { type: "choice", q: "platinum /ˈplætɪnəm/", options: ["PLAT-i-num", "pla-TI-num", "pla-ti-NUM"], answer: 0 },
            { type: "choice", q: "possessions /pəˈzeʃənz/", options: ["po-SSESS-ions", "POS-sess-ions", "pos-sess-IONS"], answer: 0 },
            { type: "choice", q: "ecstatic /ɪkˈstætɪk/", options: ["ec-STAT-ic", "EC-stat-ic", "ec-stat-IC"], answer: 0 },
            { type: "choice", q: "hysterical /hɪˈsterɪkl/", options: ["hys-TER-i-cal", "HYS-ter-i-cal", "hys-ter-I-cal"], answer: 0 },
            { type: "choice", q: "laboriously /ləˈbɔːriəsli/", options: ["la-BOR-i-ous-ly", "LA-bor-i-ous-ly", "la-bor-i-OUS-ly"], answer: 0 },
            { type: "choice", q: "Which letter is silent in Christmas /ˈkrɪsməs/?", options: ["t", "h", "s"], answer: 0 },
            { type: "choice", q: "How many syllables are in jewelled /ˈdʒuːəld/?", options: ["2", "3", "1"], answer: 0 },
            { type: "match", q: "How do we say -ed in these verbs from the story?", pairs: [["worshipped", "/t/"], ["looked", "/t/"], ["hugged", "/d/"], ["whispered", "/d/"], ["counted", "/ɪd/"], ["needed", "/ɪd/"]] },

            { type: "heading", text: "Task E. Read aloud: chunks, stress, weak forms, intonation", sub: "Listen to your teacher read first. Then read each line: pause at /, stress the CAPITALS, make small words weak (ə) and link words with ‿." },
            { type: "script", title: "Extracts to practise", roles: ["Della", "Madame"],
              legend: [["/", "short pause"], ["//", "long pause"], ["CAPITALS", "stressed syllable"], ["(ə)", "weak form"], ["‿", "link the words"], ["↗", "voice goes up"], ["↘", "voice goes down"]],
              lines: [
                { who: "Narrator", text: "One dollar and eighty-seven cents. That was all.", guide: "ONE DOLLar / ən(d) EIGHty-SEVen CENTS. // That w(ə)z ALL. //" },
                { who: "Narrator", text: "And sixty cents of it was in pennies.", guide: "ən(d) SIXty CENTS‿of it / w(ə)z‿in PENnies. //" },
                { who: "Narrator", text: "Pennies saved one and two at a time.", guide: "PENnies SAVED / ONE ən(d) TWO‿at ə TIME" },
                { who: "Narrator", text: "Three times Della counted it. One dollar and eighty-seven cents.", guide: "THREE times / DELla COUNTed‿it. // ONE DOLLar ən(d) EIGHty-SEVen CENTS. //" },
                { who: "Narrator", text: "And the next day would be Christmas.", guide: "ən(d) the NEXT DAY / w(ə)d be CHRISTmas. ↘ (slow down)" },
                { who: "Della", text: "“Will you buy my hair?” asked Della.", guide: "“Will you BUY my HAIR?” ↗ asked DELla. (nervous, fast)" },
                { who: "Madame", text: "“I buy hair,” said Madame. “Take yer hat off and let's have a sight at the looks of it.”", guide: "“I BUY HAIR,” ↘ said MADame. / “Take y(ə)r HAT‿off / ən(d) let's HAVE ə SIGHT / ət the LOOKS‿of it.” (cold, slow)" },
                { who: "Madame", text: "“Twenty dollars,” said Madame.", guide: "“TWENty DOLLars,” ↘ said MADame." },
                { who: "Della", text: "“Give it to me quick,” said Della.", guide: "“GIVE‿it t(ə) me QUICK,” ↘ said DELla." }
              ] },
            { type: "heading", text: "Challenge: paragraph 26", sub: "Della speaks quickly and emotionally. Read paragraph 26 in the notebook, mark your own pauses on paper, then read it aloud." },
            { type: "checklist", title: "Record yourself reading paragraphs 23–42 (Narrator, Della and Jim). Listen and tick:", items: ["Pauses in the right places (thought groups)", "Key words stressed, small words weak", "Words linked smoothly", "Questions and statements have the right intonation", "Tricky words pronounced correctly (Christmas, tortoise, combs…)", "My voice shows the character's feelings"] },

            { type: "heading", text: "Task G. Think deeper" },
            { type: "choice", q: "Why does Jim stare at Della “with that peculiar expression”?", options: ["He has already sold his watch to buy combs she can't use now.", "He is angry that she cut her hair.", "He doesn't recognise her."], answer: 0 },
            { type: "choice", q: "Why does the narrator call them “foolish children” and then “the wisest”?", options: ["Their gifts are useless, but they show perfect, unselfish love.", "They are young, but they are very good with money.", "They made mistakes, but they got their things back."], answer: 0 },
            { type: "write", q: "Was their sacrifice wise or foolish? What would you do?" },

            { type: "heading", text: "Homework", sub: "Watch the video. Then record yourself reading paragraphs 5–6, using the same marking, and send it to your teacher." },
            { type: "video", youtube: "CUATJU_CQfE", title: "Homework video" }
          ] }
      ] },

    { day: 5, title: "When is it?", skill: "Grammar · in, on, at",
      intro: "Write in, on or at.",
      items: [
        { type: "gap", q: "Christmas Day is ___ 25 December.", answer: ["on"] },
        { type: "gap", q: "We have a big dinner ___ Christmas Eve.", answer: ["on"] },
        { type: "gap", q: "Many people open presents ___ the morning.", answer: ["in"] },
        { type: "gap", q: "The fireworks start ___ midnight.", answer: ["at"] },
        { type: "gap", q: "It often snows ___ January.", answer: ["in"] },
        { type: "gap", q: "What do you do ___ the weekend?", answer: ["at", "on"] }
      ] },

    { day: 6, title: "A letter to Santa", skill: "Reading",
      intro: "Read Mia's letter and answer the questions.",
      text: "Dear Santa,\nMy name is Mia and I am nine. This year I helped my mum every weekend and I learned to ride a bike. For Christmas I would like a pair of ice skates because my friends go skating every Saturday. I would also like a book about space. Please bring some warm socks for my grandpa, too. His feet are always cold!\nLove,\nMia",
      items: [
        { type: "choice", q: "Mia is nine years old.", options: ["True", "False"], answer: 0 },
        { type: "choice", q: "Mia learned to swim this year.", options: ["True", "False"], answer: 1 },
        { type: "choice", q: "Mia's friends go skating on Saturdays.", options: ["True", "False"], answer: 0 },
        { type: "choice", q: "Mia wants a book about animals.", options: ["True", "False"], answer: 1 },
        { type: "choice", q: "Who are the warm socks for?", options: ["her grandpa", "her mum", "her friend"], answer: 0 },
        { type: "choice", q: "Why does Mia want ice skates?", options: ["Her friends go skating.", "Her old skates are small.", "Her mum likes skating."], answer: 0 }
      ] },

    { day: 7, title: "Little deer", skill: "Grammar · Present simple or continuous",
      intro: "Choose or write the right form.",
      items: [
        { type: "choice", q: "Deer ___ grass and leaves.", options: ["eat", "are eating"], answer: 0 },
        { type: "choice", q: "Look! A little deer ___ in the snow.", options: ["is sleeping", "sleeps"], answer: 0 },
        { type: "choice", q: "In winter, many animals ___ less.", options: ["move", "are moving"], answer: 0 },
        { type: "gap", q: "Shh! The baby deer ___ (sleep) right now.", answer: ["is sleeping", "'s sleeping"] },
        { type: "gap", q: "Reindeer ___ (live) in cold countries.", answer: ["live"] },
        { type: "choice", q: "What ___ you doing at the moment?", options: ["are", "do", "is"], answer: 0 }
      ] },

    { day: 8, title: "Last night by candlelight", skill: "Grammar · Past simple",
      intro: "Match the verbs and write the past forms.",
      items: [
        { type: "match", q: "Match each verb with its past form.", pairs: [["buy", "bought"], ["make", "made"], ["give", "gave"], ["eat", "ate"]] },
        { type: "gap", q: "Last night we ___ (light) a candle and read stories.", answer: ["lit", "lighted"] },
        { type: "gap", q: "My grandma ___ (make) a cake for us yesterday.", answer: ["made"] },
        { type: "gap", q: "We ___ (not go) out because it was cold.", answer: ["didn't go", "did not go"] },
        { type: "choice", q: "___ you buy any presents last weekend?", options: ["Did", "Do", "Were"], answer: 0 },
        { type: "order", q: "Put the words in order.", answer: "I bought a new candle" }
      ] },

    { day: 9, title: "Wrap up warm", skill: "Vocabulary · Winter clothes",
      intro: "Match and choose.",
      items: [
        { type: "match", q: "Where do you wear it?", pairs: [["hat", "on your head"], ["gloves", "on your hands"], ["scarf", "around your neck"], ["boots", "on your feet"]] },
        { type: "choice", q: "It's freezing! ___ your coat.", options: ["Put on", "Take off", "Turn on"], answer: 0 },
        { type: "choice", q: "Gloves without separate fingers are called ___.", options: ["mittens", "socks", "sleeves"], answer: 0 },
        { type: "gap", q: "A warm knitted top with long sleeves is a ___.", answer: ["jumper", "sweater", "pullover"] },
        { type: "choice", q: "This hat is too small. Can I ___ a bigger one?", options: ["try on", "put off", "get in"], answer: 0 }
      ] },

    { day: 10, title: "Traditions around the world", skill: "Reading",
      intro: "Read the text and answer the questions.",
      text: "Christmas traditions are different around the world. In the UK, people hang mistletoe above doors and send Christmas cards. Children leave a mince pie for Father Christmas. In Ukraine, families make kutia, a sweet dish of wheat, honey and poppy seeds, for Holy Supper on Christmas Eve. There are twelve dishes on the table, and people sing carols called koliadky. In the USA, many families put lights on their houses, and children hang stockings by the fireplace.",
      items: [
        { type: "choice", q: "Where do people in the UK hang mistletoe?", options: ["above doors", "on trees", "in the kitchen"], answer: 0 },
        { type: "choice", q: "What is kutia made from?", options: ["wheat, honey and poppy seeds", "rice and milk", "apples and cinnamon"], answer: 0 },
        { type: "choice", q: "How many dishes are on the Holy Supper table?", options: ["12", "7", "24"], answer: 0 },
        { type: "gap", q: "In Ukraine, people sing carols called ___.", answer: ["koliadky", "kolyadky"] },
        { type: "choice", q: "In the UK, children leave a mince pie for Father Christmas.", options: ["True", "False"], answer: 0 },
        { type: "choice", q: "Where do children in the USA hang stockings?", options: ["by the fireplace", "on the door", "under the tree"], answer: 0 }
      ] },

    { day: 11, title: "Cheer up!", skill: "Vocabulary · Phrasal verbs",
      intro: "Match the phrasal verbs and use them.",
      items: [
        { type: "match", q: "Match the phrasal verbs with their meanings.", pairs: [["warm up", "become warmer"], ["cheer up", "become happier"], ["wrap up", "put on warm clothes"], ["go out", "leave home to have fun"]] },
        { type: "gap", q: "I can't wait for the holidays! I'm looking forward ___ them.", answer: ["to"] },
        { type: "choice", q: "You look sad. This cocoa will ___.", options: ["cheer you up", "cheer up you", "look you up"], answer: 0 },
        { type: "choice", q: "It's snowing. ___ warm before you go outside!", options: ["Wrap up", "Turn up", "Give up"], answer: 0 }
      ] },

    { day: 12, title: "The gingerbread house", skill: "Grammar · There is, there are",
      intro: "Describe the gingerbread house.",
      items: [
        { type: "gap", q: "___ a small door at the front of the house.", answer: ["there is", "there's"] },
        { type: "gap", q: "___ two windows next to the door.", answer: ["there are"] },
        { type: "choice", q: "___ there any sweets on the roof?", options: ["Are", "Is", "Do"], answer: 0 },
        { type: "choice", q: "There ___ much snow this year.", options: ["isn't", "aren't", "not"], answer: 0 },
        { type: "match", q: "Match the parts of the house.", pairs: [["roof", "the top of a house"], ["chimney", "smoke goes up here"], ["door", "you open it to go in"], ["window", "you look out of it"]] }
      ] },

    { day: 13, title: "The brightest star", skill: "Grammar · Superlatives",
      intro: "Write the superlative form or choose the right answer.",
      items: [
        { type: "gap", q: "This is the ___ (big) star on the tree.", answer: ["biggest"] },
        { type: "gap", q: "December is the ___ (busy) month of the year.", answer: ["busiest"] },
        { type: "gap", q: "That was the ___ (good) Christmas ever!", answer: ["best"] },
        { type: "gap", q: "This is the ___ (beautiful) decoration in the shop.", answer: ["most beautiful"] },
        { type: "choice", q: "21 December is the ___ day of the year.", options: ["shortest", "most short", "shorter"], answer: 0 },
        { type: "choice", q: "Who is the ___ person in your family?", options: ["funniest", "most funny", "funnyest"], answer: 0 }
      ] },

    { day: 14, title: "It smells delicious", skill: "Grammar · Sense verbs",
      intro: "Choose the right word.",
      items: [
        { type: "choice", q: "Mmm! This cake smells ___.", options: ["delicious", "deliciously"], answer: 0 },
        { type: "choice", q: "You look ___ in that red jumper!", options: ["great", "greatly"], answer: 0 },
        { type: "choice", q: "This scarf feels ___.", options: ["soft", "softly"], answer: 0 },
        { type: "gap", q: "This music ___ (sound) beautiful.", answer: ["sounds"] },
        { type: "match", q: "Match the food words.", pairs: [["cinnamon", "a sweet brown spice"], ["ginger", "a hot spice in cookies"], ["honey", "sweet, made by bees"], ["lemon", "sour and yellow"]] }
      ] },

    { day: 15, title: "Holiday plans", skill: "Grammar · going to",
      intro: "Talk about plans.",
      items: [
        { type: "gap", q: "I'm ___ (visit) my grandparents on Christmas Day.", answer: ["going to visit"] },
        { type: "gap", q: "We ___ (not travel) this year.", answer: ["aren't going to travel", "are not going to travel", "'re not going to travel"] },
        { type: "choice", q: "___ you going to decorate the tree tonight?", options: ["Are", "Do", "Will"], answer: 0 },
        { type: "choice", q: "Look at those clouds! It's ___ snow.", options: ["going to", "going", "go to"], answer: 0 },
        { type: "choice", q: "What are you going to ___ on New Year's Eve?", options: ["do", "doing", "did"], answer: 0 },
        { type: "order", q: "Put the words in order.", answer: "I'm going to wrap my presents" }
      ] },

    { day: 16, title: "Snowman weather", skill: "Grammar · will · Weather",
      intro: "Make predictions and talk about the weather.",
      items: [
        { type: "choice", q: "I think it ___ snow tomorrow.", options: ["will", "is", "does"], answer: 0 },
        { type: "choice", q: "Don't worry, I ___ help you build the snowman.", options: ["'ll", "am", "do"], answer: 0 },
        { type: "gap", q: "I'm sure you ___ (love) your present.", answer: ["will love", "'ll love"] },
        { type: "match", q: "Match the weather words.", pairs: [["snowy", "there is a lot of snow"], ["foggy", "you can't see far"], ["icy", "the road is slippery"], ["windy", "the trees move a lot"]] },
        { type: "choice", q: "It's very cold, so the snowman ___ melt today.", options: ["won't", "will not to", "isn't"], answer: 0 }
      ] },

    { day: 17, title: "Stay healthy", skill: "Grammar · should, shouldn't",
      intro: "Give good advice.",
      items: [
        { type: "choice", q: "You have a cold. You ___ drink warm tea.", options: ["should", "shouldn't"], answer: 0 },
        { type: "choice", q: "You ___ eat ten cookies before dinner!", options: ["shouldn't", "should"], answer: 0 },
        { type: "gap", q: "It's late. You ___ go to bed.", answer: ["should"] },
        { type: "choice", q: "What ___ I buy for my sister?", options: ["should", "do", "am"], answer: 0 },
        { type: "choice", q: "Oranges have a lot of vitamin ___.", options: ["C", "Z", "X"], answer: 0 },
        { type: "order", q: "Put the words in order.", answer: "You should wear a scarf" }
      ] },

    { day: 18, title: "When the ornament fell", skill: "Grammar · Past continuous",
      intro: "Choose the past simple or past continuous.",
      items: [
        { type: "choice", q: "I ___ the tree when the ornament fell.", options: ["was decorating", "decorated"], answer: 0 },
        { type: "choice", q: "While we were singing, the cat ___ a ball.", options: ["broke", "was breaking"], answer: 0 },
        { type: "gap", q: "What ___ you doing at 8 o'clock last night?", answer: ["were"] },
        { type: "gap", q: "It ___ (snow) when we left the house.", answer: ["was snowing"] },
        { type: "choice", q: "We ___ dinner when Grandpa arrived.", options: ["were having", "had having", "was have"], answer: 0 },
        { type: "order", q: "Put the words in order.", answer: "The children were playing in the snow" }
      ] },

    { day: 19, title: "At the Christmas café", skill: "Speaking · Polite requests",
      intro: "Order in a café.",
      items: [
        { type: "choice", q: "___ I have a hot chocolate, please?", options: ["Could", "Should", "Would"], answer: 0 },
        { type: "choice", q: "Waiter: “What would you like?” You: “___”", options: ["I'd like a gingerbread cookie, please.", "I like cookie.", "Give cookie."], answer: 0 },
        { type: "gap", q: "Would you ___ cream on top?", answer: ["like"] },
        { type: "choice", q: "Waiter: “Anything else?” You: “___”", options: ["No, thank you. That's all.", "Yes, I'm fine.", "Please, no."], answer: 0 },
        { type: "choice", q: "Is it to eat in or to ___?", options: ["take away", "take out of", "go away"], answer: 0 },
        { type: "order", q: "Put the words in order.", answer: "Can I have the bill please" }
      ] },

    { day: 20, title: "The winter library", skill: "Reading · A short story",
      intro: "Read the story and answer the questions.",
      text: "Every December, Anna went to the old library in her town. One snowy evening, she found a small red book on a high shelf. There was no name on the cover. When she opened it, a piece of paper fell out. It said: “Thank you for reading. Please leave a kind message for the next reader.” Anna smiled. She wrote, “I hope this book makes your winter warm,” and put the paper back. A week later, she came back. The book was there again, and there was a new note inside: “It did! Merry Christmas, from Tom.”",
      items: [
        { type: "choice", q: "When did Anna go to the library?", options: ["every December", "every summer", "every Monday"], answer: 0 },
        { type: "choice", q: "Where did she find the book?", options: ["on a high shelf", "on the floor", "in her bag"], answer: 0 },
        { type: "choice", q: "There was a name on the cover.", options: ["True", "False"], answer: 1 },
        { type: "choice", q: "What did the paper ask her to do?", options: ["leave a kind message", "buy the book", "read it quickly"], answer: 0 },
        { type: "gap", q: "A week ___, she came back.", answer: ["later"] },
        { type: "choice", q: "Who wrote the second note?", options: ["Tom", "Anna", "the librarian"], answer: 0 }
      ] },

    { day: 21, title: "Have you ever...?", skill: "Grammar · Present perfect",
      intro: "Talk about your experiences.",
      items: [
        { type: "choice", q: "Have you ever ___ a Christmas market?", options: ["visited", "visit", "visiting"], answer: 0 },
        { type: "choice", q: "I have never ___ mulled apple juice.", options: ["tried", "try", "tryed"], answer: 0 },
        { type: "gap", q: "___ you ever made a snow angel?", answer: ["have"] },
        { type: "gap", q: "She has ___ (be) to London twice.", answer: ["been"] },
        { type: "choice", q: "I ___ to Lviv last winter.", options: ["went", "have gone", "have been"], answer: 0 },
        { type: "order", q: "Put the words in order.", answer: "I have never seen a reindeer" }
      ] },

    { day: 22, title: "Inside the snow globe", skill: "Grammar · Prepositions of place",
      intro: "Look at the snow globe and complete the sentences.",
      items: [
        { type: "gap", q: "There is a little house ___ the snow globe.", answer: ["in", "inside"] },
        { type: "gap", q: "The trees are next ___ the house.", answer: ["to"] },
        { type: "gap", q: "The snow globe is ___ the shelf.", answer: ["on"] },
        { type: "choice", q: "The wooden base is ___ the glass.", options: ["under", "above", "between"], answer: 0 },
        { type: "choice", q: "The house is ___ two trees.", options: ["between", "among of", "next"], answer: 0 },
        { type: "choice", q: "The snow is falling ___ the roof.", options: ["onto", "under", "behind of"], answer: 0 }
      ] },

    { day: 23, title: "Kind and excited", skill: "Vocabulary · -ed and -ing adjectives",
      intro: "Choose or write the right adjective.",
      items: [
        { type: "choice", q: "The film was really ___. I fell asleep.", options: ["boring", "bored"], answer: 0 },
        { type: "choice", q: "I was ___ when I got a surprise present.", options: ["surprised", "surprising"], answer: 0 },
        { type: "choice", q: "Waiting for the holidays is so ___!", options: ["exciting", "excited"], answer: 0 },
        { type: "gap", q: "The children were very ___ (excite) on Christmas morning.", answer: ["excited"] },
        { type: "gap", q: "It was an ___ (amaze) gift!", answer: ["amazing"] },
        { type: "choice", q: "Which is a kind thing to do?", options: ["help a neighbour carry bags", "forget a friend's birthday", "eat the last cookie"], answer: 0 }
      ] },

    { day: 24, title: "The big review", skill: "Review",
      intro: "Show what you learned this December!",
      items: [
        { type: "choice", q: "Christmas Day is ___ 25 December.", options: ["on", "in", "at"], answer: 0 },
        { type: "choice", q: "This is the ___ day of the year!", options: ["best", "goodest", "better"], answer: 0 },
        { type: "gap", q: "I ___ (wrap) the presents last night.", answer: ["wrapped"] },
        { type: "choice", q: "Would you like ___ cocoa?", options: ["some", "many", "a"], answer: 0 },
        { type: "gap", q: "Next year I'm going ___ learn more English!", answer: ["to"] },
        { type: "choice", q: "Have you ever ___ a snowman?", options: ["built", "build", "builded"], answer: 0 },
        { type: "order", q: "Put the words in order.", answer: "Merry Christmas and a Happy New Year" }
      ] }
  ]
};

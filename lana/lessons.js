/* Lana's English: all lessons, taken from Olya's Miro board "Unit 1 - Vlog your day!"
   https://miro.com/app/board/uXjVENcX35A=/

   UNIT -> sections -> exercises. Each exercise has:
     n      number on the board
     title  short name (the pink pill on the board)
     intro  the instruction line
     video  optional YouTube id (the audio tracks embedded on the board)
     audio  optional note when the board only has an "AUDIO HERE" placeholder
     text   optional reading text (HTML allowed)
     task   what Lana does (one of the types below)

   Task types
     {type:"choose", items:[{q:"...", options:["a","b"], answer:0}]}
     {type:"fill",   bank:[...optional words], items:[{q:"I get {} at 7.30.", answer:["up"]}]}
                     each {} is a gap; answer is a list (one per gap); a gap answer can be
                     "go|get" to accept either
     {type:"match",  left:[...], right:[...], answer:[index into right for each left]}
     {type:"sort",   words:[...], groups:["/s/","/z/"], answer:{word:groupIndex}}
     {type:"tf",     items:[{q:"...", answer:true}]}
     {type:"write",  fields:["label", ...], rows:3}   free answer, saved, Olya checks
     {type:"speak",  lines:["prompt", ...]}           speaking with a partner; Lana taps Done

   Put answer:null (choose / tf) or omit answers (fill with check:false) for questions
   that need the audio and that Olya checks herself. They are saved but not scored. */

window.UNIT = {
  id: "u1",
  label: "UNIT 1",
  title: "Vlog your day!",
  sub: "Daily routines, present simple, vlogging and managing your time",
  inThisUnit: [
    ["Vocabulary", "Daily routines, Hobbies"],
    ["Grammar", "Present simple: affirmative · negative and yes/no questions"],
    ["Reading", "Teenage stress"],
    ["Listening", "Vlogging"],
    ["Global skills", "Managing your time"],
    ["Speaking", "Likes and dislikes"],
    ["Writing", "A personal profile"],
  ],
  sections: [
  /* ------------------------------------------------------------------ 1.1 */
  {
    id: "1.1", name: "Vocabulary", goal: "Talk about daily routines.", sticker: "cocoa",
    exercises: [
      { n: 1, title: "Think & Share",
        intro: "Look at the photo. Work in pairs. Ask and answer the questions about the photo.",
        task: { type: "write", fields: ["What time of day is it? Why do you think this?", "What is your favourite time of day? Why?"], rows: 2 } },

      { n: 2, title: "Watch or listen", video: "QbUK5XMtDso",
        intro: "Watch or listen. How old are Callum and Zara? What relation are they to each other?",
        task: { type: "fill", items: [
          { q: "Callum: {} years old", answer: ["17|seventeen"] },
          { q: "Zara: {} years old", answer: ["16|sixteen"] },
          { q: "Relation: {}", answer: ["brother and sister|brother & sister|siblings"] },
        ] } },

      { n: 3, title: "Watch or listen again", video: "QbUK5XMtDso",
        intro: "Watch or listen again. Choose the correct alternative.",
        task: { type: "choose", items: [
          { q: "Zara and Callum are from …", options: ["London", "Edinburgh"], answer: null },
          { q: "Their vlog is called Born in …", options: ["Scotland", "the UK"], answer: null },
          { q: "They've got a … vlog.", options: ["daily", "weekly"], answer: null },
          { q: "Callum vlogs up to … minutes every morning.", options: ["15", "50"], answer: null },
          { q: "His lunch is at …", options: ["12.30", "1.30"], answer: null },
          { q: "Callum can play the …", options: ["violin", "guitar"], answer: null },
          { q: "In step 4, Callum makes a video in the …", options: ["afternoon", "evening"], answer: null },
          { q: "He finishes his video at …", options: ["dinnertime", "bedtime"], answer: null },
        ] } },

      { n: 4, title: "Ask and answer",
        intro: "Work in pairs. Ask and answer the questions.",
        example: "I'm from Zagreb in Croatia.",
        task: { type: "write", rows: 1, fields: [
          "Where are you from?",
          "Have you got a vlog? What's its name?",
          "What time is your breakfast / lunch / dinner?",
          "Can you play a musical instrument?",
          "When is your bedtime?",
        ] } },

      { n: 5, title: "Real English",
        intro: "Match the highlighted phrases to their meaning.",
        task: { type: "match",
          left: [
            "Hi <b>guys</b>. I'm Zara!",
            "<b>Why not</b> try something like this?",
            "But <b>don't worry about it</b> - just do what's natural!",
            "So <b>congratulations</b> - you're now a vlogger, like us!",
            "<b>Lots of</b> you want to know how we do it.",
            "And this is our <b>awesome</b> vlog.",
          ],
          right: ["It's a good idea.", "Well done!", "many", "a group of people", "amazing", "It's OK."],
          answer: [3, 0, 5, 1, 2, 4] } },

      { n: 6, title: "Vocabulary",
        intro: "Complete the phrases with the verbs below.",
        task: { type: "fill", bank: ["brush", "do", "get", "go", "have", "relax", "take", "watch"], items: [
          { q: "{} home / to school / to bed", answer: ["go"] },
          { q: "{} my teeth / hair", answer: ["brush"] },
          { q: "{} the bus", answer: ["take"] },
          { q: "{} my homework", answer: ["do"] },
          { q: "{} TV / music videos", answer: ["watch"] },
          { q: "{} with my sister", answer: ["relax"] },
          { q: "{} up / dressed", answer: ["get"] },
          { q: "{} a shower / breakfast / lunch / dinner / guitar lessons", answer: ["have"] },
        ] } },

      { n: 7, title: "Guess the activity",
        intro: "Work in pairs. Take turns to act out the activities in Ex 6. Can you guess which one it is?",
        task: { type: "speak", lines: ["Is it 'go to school'?", "No, it isn't."] } },

      { n: 8, title: "My typical day", video: "mXSCOYwVN9Y",
        intro: "Complete the text. Then listen and check.",
        textTitle: "MY BLOG · New Post today at 5.15 p.m.",
        task: { type: "fill", bank: ["up", "shower", "teeth", "breakfast", "to", "take", "watch", "have", "go", "do"], items: [
          { q: "I get {} at 7.30 a.m.", answer: ["up"] },
          { q: "Then I have a {} and brush my hair and my {}.", answer: ["shower", "teeth"] },
          { q: "My family and I have {} together in the kitchen - I eat toast.", answer: ["breakfast"] },
          { q: "Then my brother and I go {} school.", answer: ["to"] },
          { q: "We {} the bus because our school is fifteen kilometres away.", answer: ["take|get"] },
          { q: "On the bus, in the mornings, we relax and {} videos on our phones.", answer: ["watch"] },
          { q: "At school, we {} lessons until 3.30 p.m.", answer: ["have"] },
          { q: "and then we {} home at 3.45 p.m.", answer: ["go|get"] },
          { q: "My school friends and I often {} our homework on the bus before we get home.", answer: ["do"] },
        ] } },

      { n: 9, title: "My day",
        intro: "Tick the activities in Ex 6 that you do every day. Then use them to complete the table.",
        task: { type: "write", rows: 3, fields: ["In the morning", "In the afternoon and evening", "At night"] } },

      { n: 10, title: "My routine",
        intro: "Number the activities in the order that you do them. Then tell your partner about your daily routine.",
        example: "I get up at 7 a.m. Then I brush my teeth ...",
        task: { type: "write", rows: 5, fields: ["My daily routine"] } },
    ],
  },

  /* ------------------------------------------------------------------ 1.2 */
  {
    id: "1.2", name: "Grammar", goal: "Use the present simple affirmative to talk about my school day.", sticker: "latte",
    exercises: [
      { n: 1, title: "Daily activities",
        intro: "Do you remember how to vlog your day? How do you say these daily activities?",
        task: { type: "write", rows: 3, fields: ["Write the daily activities you remember"] } },

      { n: 2, title: "Born in Scotland",
        intro: "Read the comments. Who is similar to Callum: Anita, Maya or Jamal?",
        text:
          "<p class='who'>Jamal · 36 minutes ago</p><p>Hi guys! Callum, you get up very early! 😱 I'm a daily vlogger, but I hate mornings. I make my videos in the afternoon. Then I do my homework and I have a shower in the evening before I go to bed ... Please subscribe to my channel - it's called <i>My Life</i>!</p>" +
          "<p class='who'>Anita · one hour ago</p><p>Hello Callum and Zara! Congratulations! I love your videos!!! 😍 I watch them every day after I have dinner. I'm not a vlogger, but my big sister Maya is. She gets up at 6 a.m. and she vlogs before she goes to school. After school, she studies in the library. She's got lots of homework, but she relaxes with me in the evening. See you.</p>",
        task: { type: "choose", items: [
          { q: "Who is similar to Callum? (Callum gets up early and vlogs every morning.)", options: ["Anita", "Maya", "Jamal"], answer: 1 },
        ] } },

      { n: 3, title: "Grammar rules", booster: "GRAMMAR BOOSTER P132",
        intro: "Underline all the examples of the present simple in the comments in Ex 2. Then complete the rules.",
        rules: [
          "<b>Present simple: affirmative</b>",
          "<b>A</b> We use the present simple to talk about regular activities, daily routines and facts.",
          "<b>B</b> We form the present simple affirmative with the infinitive without <i>to</i> for <i>I / you / we / they</i>.",
          "<b>C</b> We add <i>-s</i> or <i>-es</i> to the end of the verb for third-person singular, <i>he / she / it</i>.",
          "<b>D</b> We add <i>-es</i> when a verb ends with: <i>-o, -ss, -x, -ch, -sh</i>.",
          "<b>E</b> The consonant + <i>-y</i> changes to <i>-ies</i>.",
          "<b>F</b> The verb <i>have</i> is irregular. <i>He has dinner.</i>",
        ],
        task: { type: "fill", items: [
          { q: "(D) She vlogs before she {} to school.", answer: ["goes"] },
          { q: "(D) She {} with me in the evening.", answer: ["relaxes"] },
          { q: "(E) She {} in the library.", answer: ["studies"] },
        ] } },

      { n: 4, title: "Choose the verb",
        intro: "Choose the correct alternative.",
        task: { type: "choose", items: [
          { q: "You and Alona … the train to school.", options: ["takes", "take"], answer: 1 },
          { q: "His sister … to the same school as me.", options: ["goes", "go"], answer: 0 },
          { q: "My friends … dressed in the morning.", options: ["gets", "get"], answer: 1 },
          { q: "I … my homework after school.", options: ["does", "do"], answer: 1 },
          { q: "My cousin and I … music lessons together.", options: ["has", "have"], answer: 1 },
          { q: "Paulo … TV every evening.", options: ["watches", "watch"], answer: 0 },
        ] } },

      { n: 5, title: "Eun-a's day",
        intro: "Complete the blog entry with the present simple affirmative form of the verbs in brackets.",
        textTitle: "A typical school day in South Korea · Posted 4 hours ago",
        task: { type: "fill", items: [
          { q: "Hi guys. I {} (want) to tell you about my cousin Eun-a.", answer: ["want"] },
          { q: "She's from South Korea and she {} (go) to a high school in Seoul.", answer: ["goes"] },
          { q: "Every day, she {} (get up) at 6.30 a.m.,", answer: ["gets up"] },
          { q: "then she {} (take) the bus to school at 7.30.", answer: ["takes"] },
          { q: "Her school {} (start) at 8.00.", answer: ["starts"] },
          { q: "In her lunch break, she {} (relax) and {} (watch) anime,", answer: ["relaxes", "watches"] },
          { q: "but lots of students {} (sleep) at their desks because they are very tired.", answer: ["sleep"] },
          { q: "Eun-a's school {} (finish) at 4.30 p.m., but it isn't time to go home.", answer: ["finishes"] },
          { q: "She and her classmates {} (clean) the classroom floor, then they {} (have) dinner.", answer: ["clean", "have"] },
          { q: "Eun-a {} (do) her homework and {} (study) at school together with her classmates until 11 p.m.", answer: ["does", "studies"] },
          { q: "She and her friends {} (go) to bed after 1 a.m. every night! Zzzzzzzzzz!", answer: ["go"] },
        ] } },

      { n: 6, title: "Pronunciation",
        intro: "How do you pronounce the -s in the third person singular verbs below? Put each verb in the right group.",
        task: { type: "sort", groups: ["/s/  takes", "/z/  has", "/ɪz/  uses"],
          words: ["brushes", "cooks", "does", "eats", "finishes", "gets", "goes", "likes", "lives", "relaxes", "studies", "watches"],
          answer: { brushes: 2, cooks: 0, does: 1, eats: 0, finishes: 2, gets: 0, goes: 1, likes: 0, lives: 1, relaxes: 2, studies: 1, watches: 2 } } },

      { n: 7, title: "Listen and repeat", video: "8w4MyGkkmfE",
        intro: "Listen and check your answers to Ex 6. Then listen again and repeat.",
        task: { type: "speak", lines: ["takes · cooks · eats · gets · likes", "has · does · goes · lives · studies", "uses · brushes · finishes · relaxes · watches"] } },

      { n: 8, title: "Compare",
        intro: "Work in pairs. Compare your school day to Eun-a's.",
        example: "She goes to school in Seoul, but we go to school in Hanoi.",
        task: { type: "write", rows: 4, fields: ["My school day and Eun-a's day"] } },

      { n: 9, title: "Plan a vlog",
        intro: "Work in small groups. You want to make a 30-second vlog about your daily routines. Write a plan. Use these ideas to help you.",
        tips: ["Start your vlog - say hello.", "Talk about your daily activities.", "Finish your video - say goodbye.", "Give it a title."],
        task: { type: "write", rows: 2, fields: ["Title", "Hello!", "My daily activities", "Goodbye!"] } },

      { n: 10, title: "Share",
        intro: "Share your group's ideas with the class.",
        example: "Lars gets up at half past six because he takes the train to school.",
        task: { type: "speak", lines: ["Tell the class about your vlog plan."] } },
    ],
  },

  /* ------------------------------------------------------------------ 1.3 */
  {
    id: "1.3", name: "Listening", goal: "Predict before you listen.", sticker: "headphones",
    exercises: [
      { n: 1, title: "Think & Share",
        intro: "Work in pairs. Discuss the questions. Use the ideas below or your own ideas.",
        tips: ["art", "beauty products", "fashion", "language", "music and dance", "sport", "video games"],
        task: { type: "write", rows: 2, fields: ["Who are your favourite vloggers?", "What type of vloggers are they?"] } },

      { n: 2, title: "Predict",
        intro: "Read the strategy. You are going to listen to some vloggers.",
        strategy: "<b>STRATEGY: Predicting before you listen</b><br>Before you listen, read the title and look at the photos of people, objects and activities. Guess what words you think you will hear. This helps you understand better.",
        task: { type: "write", rows: 2, fields: [
          "Look at the title (Vlogging - good or bad?) and try to guess what it's about.",
          "Write 6-8 words that you think you will hear.",
          "Write down what you know about the typical day of a vlogger.",
        ] } },

      { n: 3, title: "Listen and match", audio: "Audio 1.06 (Olya plays it in the lesson)",
        intro: "Listen to four people talk about vlogging. Match photos A-D to speakers 1-4. What words or phrases in the listening helped you?",
        task: { type: "choose", items: [
          { q: "Speaker 1 = photo …", options: ["A", "B", "C", "D"], answer: null },
          { q: "Speaker 2 = photo …", options: ["A", "B", "C", "D"], answer: null },
          { q: "Speaker 3 = photo …", options: ["A", "B", "C", "D"], answer: null },
          { q: "Speaker 4 = photo …", options: ["A", "B", "C", "D"], answer: null },
        ] } },

      { n: 4, title: "True or false?", audio: "Audio 1.06 (Olya plays it in the lesson)",
        intro: "Listen again. Are the sentences true (T) or false (F)?",
        task: { type: "tf", items: [
          { q: "Sam makes videos about money.", answer: null },
          { q: "He goes to school at 11 a.m.", answer: null },
          { q: "Lukas and Hanna make videos every day.", answer: null },
          { q: "They relax at the weekend.", answer: null },
          { q: "Lots of people like Demi's vlog.", answer: null },
          { q: "Nobody knows her in the town where she lives.", answer: null },
          { q: "Megan plays the piano in her videos.", answer: null },
          { q: "She hates vlogging now.", answer: null },
        ] } },

      { n: 5, title: "Mediation",
        intro: "Larisa's friend Ruben wants to start his own vlog. Complete Larisa's email to Ruben with information from the podcast. Write one or two words in each gap.",
        textTitle: "RE: Some pros and cons of vlogging",
        task: { type: "fill", check: false, items: [
          { q: "Sam's a fashion vlogger. He buys lots of amazing clothes for his job, but he can only make {} a week.", answer: [""] },
          { q: "Lukas and Hanna have got a daily vlog. They have fun because they play video games every day, but Lukas {} and wants more time with his friends.", answer: [""] },
          { q: "Demi's a beauty vlogger. The good thing is she uses great products and makes lots of money, but she can't relax because everyone {} of her all the time.", answer: [""] },
          { q: "Megan's a music vlogger. She only works in the afternoon. The problem is some people write {} comments about her.", answer: [""] },
        ] } },

      { n: 6, title: "Pros and cons",
        intro: "Work in pairs. Make a list of all the pros (good things) and cons (bad things) about vlogging. Can you think of any more?",
        task: { type: "write", rows: 4, fields: ["Pros +", "Cons -"] } },

      { n: 7, title: "Your opinion",
        intro: "Work in pairs. Compare your ideas. Do you want to be a vlogger? Why? / Why not?",
        task: { type: "write", rows: 4, fields: ["Do I want to be a vlogger?"] } },
    ],
  },

  /* ------------------------------------------------------------------ 1.4 */
  {
    id: "1.4", name: "Global Skills", goal: "Understand how to manage your time.", sticker: "planner",
    exercises: [
      { n: 1, title: "My time",
        intro: "How much time do you spend doing these activities? Complete the sentences, then compare with a partner.",
        example: "I go to school for about five hours and 30 minutes a day. And you?",
        task: { type: "write", rows: 1, fields: [
          "I go to school for … a day.",
          "I do my homework for … a day.",
          "I relax for … a day.",
          "I watch TV or videos, look at my phone or play video games for … a day.",
          "I spend time with friends for … a day.",
          "I have a shower, brush my teeth and get dressed for … a day.",
          "I help at home for … a day.",
          "I eat for … a day.",
        ] } },

      { n: 2, title: "Listen", audio: "Audio 1.07 (Olya plays it in the lesson)",
        intro: "Listen to a conversation between students. Count the students. What are their names?",
        task: { type: "write", rows: 1, fields: ["Number of students", "Names"] } },

      { n: 3, title: "How to manage your time", audio: "Audio 1.07 (Olya plays it in the lesson)",
        intro: "Listen again and complete the tips on how to manage your time with the words below.",
        note: "<b>break</b> (v) - separate into smaller pieces · <b>a break</b> (n) - a short rest or stop",
        task: { type: "fill", bank: ["daily", "homework", "minutes", "notes", "routine", "tasks", "week"], items: [
          { q: "Every Sunday, plan your {}.", answer: ["week"] },
          { q: "Make a list of the important tasks you need to do, e.g. your {}.", answer: ["homework"] },
          { q: "Find out how much time you spend on each {} activity.", answer: ["daily"] },
          { q: "Make {} on your phone or in a diary.", answer: ["notes"] },
          { q: "Break your big projects into small {}.", answer: ["tasks"] },
          { q: "Plan study breaks: every two hours, relax for fifteen {}.", answer: ["minutes"] },
          { q: "Have the same {} every day.", answer: ["routine"] },
        ] } },

      { n: 4, title: "Prepositions of time", booster: "GRAMMAR BOOSTER P132",
        intro: "Look at the examples. Complete the box with at, on or in.",
        task: { type: "fill", bank: ["at", "on", "in"], items: [
          { q: "{}: parts of the day, months, seasons, years. <i>I go back to school in September.</i>", answer: ["in"] },
          { q: "{}: dates, days, parts of a day of the week. <i>We have art classes on Mondays.</i>", answer: ["on"] },
          { q: "{}: times, night, weekend, special occasions lasting more than a day. <i>I relax at the weekend.</i>", answer: ["at"] },
        ] } },

      { n: 5, title: "At, on, in",
        intro: "Put the examples in the right group. Can you think of any others?",
        note: "<b>Note:</b> <i>in the night</i> means 'during one night', <i>at night</i> means 'during any night'.",
        task: { type: "sort", groups: ["AT  hours", "ON  days", "IN  parts of the day / year, weeks, months, years"],
          words: ["2 a.m.", "January", "midnight", "Monday", "the afternoon", "the summer", "23rd August", "2018"],
          answer: { "2 a.m.": 0, "midnight": 0, "Monday": 1, "23rd August": 1, "January": 2, "the afternoon": 2, "the summer": 2, "2018": 2 } } },

      { n: 6, title: "Prepositions", audio: "Audio 1.08 (Olya plays it in the lesson)",
        intro: "Complete the sentences with prepositions of time. Then listen and check.",
        task: { type: "fill", bank: ["at", "on", "in"], items: [
          { q: "The music school party is {} the 14th of October.", answer: ["on"] },
          { q: "I go home {} half past five.", answer: ["at"] },
          { q: "{} Sunday evenings, you make a list of the things you need to do {} the week.", answer: ["on", "in|during"] },
          { q: "I have extra classes {} Tuesdays.", answer: ["on"] },
          { q: "Write down all the things you do {} the morning.", answer: ["in"] },
          { q: "I have a hot shower {} night.", answer: ["at"] },
          { q: "You can study and relax {} school days.", answer: ["on"] },
        ] } },

      { n: 7, title: "About me",
        intro: "Write two true sentences about you for each preposition of time.",
        example: "I do my homework in the afternoon.",
        task: { type: "write", rows: 2, fields: ["AT", "ON", "IN"] } },

      { n: 8, title: "Think & Share",
        intro: "Work in pairs. Read your answers in Ex 1 and the tips in Ex 3 again. Decide how many hours to spend on your daily routines. Discuss how you can improve your day / week.",
        task: { type: "write", rows: 4, fields: ["How I can improve my day / week"] } },

      { n: 9, title: "My week plan",
        intro: "Write a plan for your week.",
        task: { type: "write", rows: 2, fields: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"] } },

      { n: 10, title: "Share",
        intro: "Share your plans as a class.",
        task: { type: "speak", lines: ["Tell the class about your week plan."] } },

      { n: 11, title: "Reflect",
        intro: "Answer the questions.",
        task: { type: "write", rows: 3, fields: ["Are you happy with how you manage your time?", "Do you think it's useful to manage your time? Why? / Why not?"] } },
    ],
  },
  ],
};

/* Flashcards: one deck per section. front = English, back = meaning + example. */
window.DECKS = [
  { id: "routines", section: "1.1", name: "Daily routines", sticker: "cocoa", cards: [
    ["get up", "⏰ leave your bed in the morning", "I get up at 7.30 a.m."],
    ["get dressed", "👗 put on your clothes", "I get dressed after breakfast."],
    ["have a shower", "🚿 wash your body under water", "I have a shower in the morning."],
    ["brush my teeth", "🪥 clean your teeth", "I brush my teeth twice a day."],
    ["brush my hair", "💇‍♀️ make your hair tidy", "I brush my hair before school."],
    ["have breakfast", "🥐 eat in the morning", "We have breakfast together in the kitchen."],
    ["go to school", "🏫 travel to school", "My brother and I go to school."],
    ["take the bus", "🚌 travel by bus", "We take the bus because our school is far."],
    ["have lunch", "🥪 eat in the middle of the day", "His lunch is at 12.30."],
    ["do my homework", "📚 do school work at home", "I do my homework after school."],
    ["go home", "🏠 return to your house", "We go home at 3.45 p.m."],
    ["watch TV / music videos", "📺 look at TV or videos", "I watch music videos on my phone."],
    ["relax with my sister", "🛋️ rest, do nothing stressful", "I relax with my sister in the evening."],
    ["have dinner", "🍝 eat in the evening", "We have dinner at 7 p.m."],
    ["have guitar lessons", "🎸 learn the guitar with a teacher", "I have guitar lessons on Fridays."],
    ["go to bed", "🛏️ go to sleep", "I go to bed at 10 p.m."],
  ] },
  { id: "realenglish", section: "1.1", name: "Real English", sticker: "bow", cards: [
    ["guys", "👯 a group of people", "Hi guys. I'm Zara!"],
    ["Why not …?", "💡 It's a good idea.", "Why not try something like this?"],
    ["Don't worry about it.", "🙂 It's OK.", "Don't worry about it - just do what's natural!"],
    ["Congratulations!", "🎉 Well done!", "Congratulations - you're now a vlogger!"],
    ["lots of", "➕ many", "Lots of you want to know how we do it."],
    ["awesome", "🤩 amazing", "This is our awesome vlog."],
  ] },
  { id: "presentsimple", section: "1.2", name: "Present simple", sticker: "latte", cards: [
    ["I take → he …", "takes  (+s)", "He takes the bus."],
    ["I go → she …", "goes  (-o → +es)", "She goes to school in Seoul."],
    ["I watch → he …", "watches  (-ch → +es)", "Paulo watches TV every evening."],
    ["I relax → she …", "relaxes  (-x → +es)", "She relaxes with me in the evening."],
    ["I brush → he …", "brushes  (-sh → +es)", "He brushes his teeth."],
    ["I study → she …", "studies  (consonant + y → ies)", "She studies in the library."],
    ["I have → he …", "has  (irregular)", "He has dinner."],
    ["I do → she …", "does  (-o → +es)", "Eun-a does her homework."],
    ["I finish → it …", "finishes  (-sh → +es)", "Her school finishes at 4.30 p.m."],
    ["When do we use the present simple?", "🔁 regular activities, daily routines and facts", "I get up at 7 a.m. every day."],
  ] },
  { id: "vlogging", section: "1.3", name: "Vlogging", sticker: "headphones", cards: [
    ["vlog", "🎥 a video blog", "Their vlog is called Born in Scotland."],
    ["vlogger", "🤳 a person who makes a vlog", "I'm a daily vlogger."],
    ["subscribe", "🔔 follow a channel to see new videos", "Please subscribe to my channel!"],
    ["channel", "📺 the page where a vlogger puts videos", "My channel is called My Life."],
    ["comment", "💬 what people write under a video", "Some people write bad comments."],
    ["pros", "👍 good things", "One of the pros is you have fun."],
    ["cons", "👎 bad things", "One of the cons is you can't relax."],
    ["beauty vlogger", "💄 makes videos about beauty products", "Demi's a beauty vlogger."],
    ["fashion vlogger", "👠 makes videos about clothes", "Sam's a fashion vlogger."],
    ["predict", "🔮 guess before you listen or read", "Predict the words you will hear."],
  ] },
  { id: "time", section: "1.4", name: "Managing time", sticker: "planner", cards: [
    ["manage your time", "🗓️ plan how you use your hours", "It's useful to manage your time."],
    ["routine", "🔁 the things you do every day, in the same order", "Have the same routine every day."],
    ["task", "✅ a piece of work you need to do", "Break big projects into small tasks."],
    ["make notes", "📝 write short reminders", "Make notes on your phone or in a diary."],
    ["break (verb)", "✂️ separate into smaller pieces", "Break your project into small tasks."],
    ["a break (noun)", "☕ a short rest or stop", "Plan study breaks."],
    ["at + …", "⏰ times, night, the weekend", "at 2 a.m. · at midnight · at night"],
    ["on + …", "📅 days and dates", "on Monday · on 23rd August · on my birthday"],
    ["in + …", "🌸 parts of the day, months, seasons, years", "in the afternoon · in January · in 2018"],
    ["in the night / at night", "🌙 during one night / during any night", "I have a hot shower at night."],
  ] },
];

/* Progress check: a mixed quiz over the whole unit. 10 random questions each time. */
window.QUIZ = [
  { q: "She … to school by bus.", options: ["go", "goes", "gos"], answer: 1 },
  { q: "My friends … dressed in the morning.", options: ["get", "gets", "geting"], answer: 0 },
  { q: "He … in the library after school.", options: ["studys", "studies", "study"], answer: 1 },
  { q: "Paulo … TV every evening.", options: ["watchs", "watch", "watches"], answer: 2 },
  { q: "He … dinner at 7 p.m.", options: ["haves", "has", "have"], answer: 1 },
  { q: "I … my homework after school.", options: ["do", "does", "make"], answer: 0 },
  { q: "… my teeth", options: ["take", "brush", "do"], answer: 1 },
  { q: "… the bus", options: ["take", "go", "have"], answer: 0 },
  { q: "… a shower", options: ["make", "do", "have"], answer: 2 },
  { q: "get … / dressed", options: ["up", "on", "in"], answer: 0 },
  { q: "I go home … half past five.", options: ["in", "on", "at"], answer: 2 },
  { q: "We have art classes … Mondays.", options: ["on", "in", "at"], answer: 0 },
  { q: "I go back to school … September.", options: ["at", "in", "on"], answer: 1 },
  { q: "I relax … the weekend.", options: ["in", "at", "on"], answer: 1 },
  { q: "My birthday is … 8th June.", options: ["on", "in", "at"], answer: 0 },
  { q: "'awesome' means …", options: ["boring", "amazing", "tired"], answer: 1 },
  { q: "'lots of' means …", options: ["many", "a few", "no"], answer: 0 },
  { q: "'Congratulations!' means …", options: ["Sorry!", "Well done!", "Goodbye!"], answer: 1 },
  { q: "'a break' (noun) is …", options: ["a short rest", "a big project", "a list"], answer: 0 },
  { q: "How do you say the -s in 'watches'?", options: ["/s/", "/z/", "/ɪz/"], answer: 2 },
  { q: "How do you say the -s in 'gets'?", options: ["/s/", "/z/", "/ɪz/"], answer: 0 },
  { q: "How do you say the -s in 'lives'?", options: ["/s/", "/z/", "/ɪz/"], answer: 1 },
  { q: "'cons' are …", options: ["good things", "bad things", "videos"], answer: 1 },
  { q: "Every Sunday, plan your …", options: ["week", "minutes", "teeth"], answer: 0 },
];

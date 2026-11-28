// Advent calendar A2-B1: settings and the 24 daily tasks.
//
// Item types:
//   choice: { type:"choice", q:"...", options:["right", "wrong", ...], answer:0 }  (answer = index of the right option)
//   gap:    { type:"gap", q:"Text with ___ gap.", answer:["word", "other accepted word"] }
//   match:  { type:"match", q:"Instruction", pairs:[["left","right"], ...] }
//   order:  { type:"order", q:"Instruction", answer:"The sentence in the right order" }
// A day may also have "text" (a short reading shown above the questions).

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
    { day: 1, title: "Talking about presents", skill: "Vocabulary",
      intro: "Choose or write the right word.",
      items: [
        { type: "choice", q: "We put the presents under the ___.", options: ["tree", "sky", "fridge"], answer: 0 },
        { type: "choice", q: "I always ___ my presents in colourful paper.", options: ["wrap", "write", "wear"], answer: 0 },
        { type: "choice", q: "A small card on a present with a name on it is a ___.", options: ["tag", "ticket", "map"], answer: 0 },
        { type: "gap", q: "Thank you ___ the lovely present!", answer: ["for"] },
        { type: "choice", q: "What ___ you like for Christmas?", options: ["would", "do", "are"], answer: 0 },
        { type: "order", q: "Put the words in order.", answer: "I would like a new book" }
      ] },

    { day: 2, title: "Gingerbread recipe", skill: "Reading · Imperatives",
      intro: "Read the recipe and answer the questions.",
      text: "Mix the flour, sugar, ginger and butter. Add an egg and some honey. Roll out the dough and cut out the shapes. Bake the cookies for 10 minutes. Let them cool, then decorate them with white icing.",
      items: [
        { type: "choice", q: "What do you do first?", options: ["Mix the ingredients", "Bake the cookies", "Decorate the cookies"], answer: 0 },
        { type: "gap", q: "___ the cookies for 10 minutes.", answer: ["bake"] },
        { type: "choice", q: "How long do the cookies bake?", options: ["10 minutes", "1 hour", "2 minutes"], answer: 0 },
        { type: "match", q: "Match the words with their meanings.", pairs: [["flour", "white powder for baking"], ["oven", "a hot box for baking"], ["icing", "sweet white decoration"], ["dough", "a soft mix before baking"]] },
        { type: "order", q: "Put the words in order.", answer: "Let them cool" }
      ] },

    { day: 3, title: "Sweeter than sugar", skill: "Grammar · Comparatives",
      intro: "Write the comparative form or choose the right answer.",
      items: [
        { type: "gap", q: "A candy cane is ___ (sweet) than a lemon.", answer: ["sweeter"] },
        { type: "gap", q: "December is ___ (cold) than September.", answer: ["colder"] },
        { type: "gap", q: "This candy cane is ___ (long) than that one.", answer: ["longer"] },
        { type: "gap", q: "Holidays are ___ (exciting) than school days.", answer: ["more exciting"] },
        { type: "choice", q: "My cocoa is ___ than yours.", options: ["hotter", "more hot", "hoter"], answer: 0 },
        { type: "choice", q: "This year's tree is ___ than last year's.", options: ["bigger", "more big", "biger"], answer: 0 }
      ] },

    { day: 4, title: "A cup of cocoa", skill: "Grammar · some, any, much, many",
      intro: "Choose or write the right word.",
      items: [
        { type: "choice", q: "Would you like ___ hot chocolate?", options: ["some", "a", "many"], answer: 0 },
        { type: "choice", q: "There isn't ___ milk in the fridge.", options: ["any", "some", "a"], answer: 0 },
        { type: "choice", q: "How ___ marshmallows do you want?", options: ["many", "much", "any"], answer: 0 },
        { type: "choice", q: "How ___ sugar do you put in your cocoa?", options: ["much", "many", "a"], answer: 0 },
        { type: "gap", q: "I'd like ___ cup of cocoa, please.", answer: ["a"] },
        { type: "choice", q: "Which word is uncountable?", options: ["cream", "cup", "marshmallow"], answer: 0 }
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

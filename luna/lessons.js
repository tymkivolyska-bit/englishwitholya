/* Luna's lessons.
   To add a lesson, copy one block below and change the text. Each lesson has:
     id       a short unique id, e.g. "l7" (progress is saved by this id, so don't rename old ones)
     title    English title;  ua  Ukrainian subtitle
     words    new words: [english, ukrainian]
     tasks    a list of tasks. Task types:
       choose  { type:"choose", title, items:[{ q:"Sentence with ___", options:[...], answer:"..." }] }
       fill    { type:"fill", title, bank:[optional word hints], items:[{ q:"Sentence with ___", answer:"word" or ["word","other ok answer"] or "*" (any answer is fine) }] }
       match   { type:"match", title, pairs:[[left,right], ...] }
       order   { type:"order", title, items:["Full correct sentence.", ...] }   (the words are mixed up for her)
     Every task can also have  ua:"instruction in Ukrainian",  intro:"<p>html shown above the task</p>",  say:"text read aloud by the Listen button".
     choose and fill items can have  img:"img/panda.webp";  a match pair can use a picture path instead of a word.
     A lesson can have  rule:[[english, ukrainian], ...]  shown as a "Remember" card (title from ruleTitle).
*/
window.LESSONS = [
  {
    id: "there",
    title: "There is a panda on the bus!",
    ua: "There is / there are · Хто їде в рожевому автобусі?",
    words: [["panda", "панда"], ["wolf", "вовк"], ["giraffe", "жирафа"], ["bus", "автобус"], ["car", "машина"], ["balloon", "повітряна кулька"], ["cloud", "хмара"],
            ["tall", "високий"], ["short", "низький"], ["big", "великий"], ["small", "маленький"], ["cute", "милий"], ["scary", "страшний"]],
    ruleTitle: "There is · There are",
    rule: [
      ["There is a panda.", "є одна панда (1)"],
      ["There are four balloons.", "є чотири кульки (2, 3, 4…)"],
      ["There isn't a car.", "немає машини (1)"],
      ["There aren't any cats.", "немає котів (багато)"],
      ["Is there a wolf? — Yes, there is. / No, there isn't.", "питання про одного"],
      ["Are there any balloons? — Yes, there are. / No, there aren't.", "питання про багатьох"]
    ],
    tasks: [
      {
        type: "match", title: "Warm-up: Who is who?", ua: "Розминка: з'єднай картинку зі словом",
        pairs: [["img/panda.webp", "panda"], ["img/wolf.webp", "wolf"], ["img/bus.webp", "bus"], ["img/giraffe.webp", "giraffe"]]
      },
      {
        type: "fill", title: "Oops! The wolf mixed up the letters", ua: "Ой! Вовк переплутав літери. Напиши слово правильно",
        intro: '<p class="speech">Hee-hee! I like mixing letters! 🐺</p>',
        bank: ["tall", "cute", "big", "short", "small", "scary"],
        items: [
          { q: "tlla → ___", answer: "tall" },
          { q: "teuc → ___", answer: "cute" },
          { q: "gib → ___", answer: "big" },
          { q: "sothr → ___", answer: "short" },
          { q: "lslma → ___", answer: "small" },
          { q: "yrcas → ___", answer: "scary" }
        ]
      },
      {
        type: "choose", title: "What is it like?", ua: "Яке воно? Обери прикметник",
        items: [
          { img: "img/bus.webp", q: "It's a ___ pink bus.", options: ["big", "small", "short"], answer: "big" },
          { img: "img/panda.webp", q: "It's a ___ panda with balloons.", options: ["scary", "cute", "tall"], answer: "cute" },
          { img: "img/giraffe.webp", q: "Giraffes are very ___!", options: ["short", "small", "tall"], answer: "tall" },
          { img: "img/wolf.webp", q: "The wolf wants to be scary… but he is ___! 😄", options: ["cute", "big", "tall"], answer: "cute" }
        ]
      },
      {
        type: "choose", title: "Help the wolf! Which sentence is correct?", ua: "Вовк наробив помилок. Яке речення правильне?",
        items: [
          { q: "1)", options: ["Is a bus big.", "It's a big bus."], answer: "It's a big bus." },
          { q: "2)", options: ["What its is?", "What is it?"], answer: "What is it?" },
          { q: "3)", options: ["It's a small car.", "It's a smol car."], answer: "It's a small car." },
          { q: "4)", options: ["It qut cat.", "It's a cute cat."], answer: "It's a cute cat." }
        ]
      },
      {
        type: "choose", title: "All aboard the pink bus!", ua: "Подивись на картинку і обери is або are",
        intro:
          '<div class="scene" role="img" aria-label="A pink bus. A panda with four balloons is on the roof. A giraffe sits on a cloud. A little wolf sits next to the bus.">' +
            '<img class="s-giraffe" src="img/giraffe.webp" alt="">' +
            '<img class="s-bus" src="img/bus.webp" alt="">' +
            '<img class="s-panda" src="img/panda.webp" alt="">' +
            '<img class="s-wolf" src="img/wolf.webp" alt="">' +
          '</div>' +
          '<p>Look! <b>There is</b> a pink bus. <b>There is</b> a panda on the bus. <b>There are</b> four balloons. ' +
          '<b>There is</b> a giraffe on a cloud and <b>there is</b> a little wolf next to the bus. But wait… <b>there isn\'t</b> a driver! Who is driving the bus?! 😱</p>',
        say: "Look! There is a pink bus. There is a panda on the bus. There are four balloons. There is a giraffe on a cloud, and there is a little wolf next to the bus. But wait... there isn't a driver! Who is driving the bus?",
        items: [
          { q: "There ___ a pink bus.", options: ["is", "are"], answer: "is" },
          { q: "There ___ four balloons.", options: ["is", "are"], answer: "are" },
          { q: "There ___ a giraffe on a cloud.", options: ["is", "are"], answer: "is" },
          { q: "There ___ any cats on the bus. (No cats!)", options: ["is", "are", "aren't"], answer: "aren't" },
          { q: "There ___ a driver. Oh no!", options: ["isn't", "aren't"], answer: "isn't" }
        ]
      },
      {
        type: "choose", title: "True or silly?", ua: "Правда чи нісенітниця? Подивись на картинку вище",
        items: [
          { q: "There is a panda on the bus.", options: ["True ✓", "Silly ✗"], answer: "True ✓" },
          { q: "There are ten wolves on the bus.", options: ["True ✓", "Silly ✗"], answer: "Silly ✗" },
          { q: "There are four pink balloons.", options: ["True ✓", "Silly ✗"], answer: "True ✓" },
          { q: "There is a giraffe in the car.", options: ["True ✓", "Silly ✗"], answer: "Silly ✗" },
          { q: "There isn't a driver.", options: ["True ✓", "Silly ✗"], answer: "True ✓" }
        ]
      },
      {
        type: "fill", title: "Write is, are, isn't or aren't", ua: "Впиши is, are, isn't або aren't (✗ = немає)",
        bank: ["is", "are", "isn't", "aren't"],
        items: [
          { img: "img/panda.webp", q: "There ___ four balloons.", answer: "are" },
          { img: "img/giraffe.webp", q: "There ___ a pink bow on the giraffe.", answer: "is" },
          { img: "img/wolf.webp", q: "✗ There ___ a hat on the wolf.", answer: ["isn't", "is not"] },
          { img: "img/bus.webp", q: "✗ There ___ any people on the bus.", answer: ["aren't", "are not"] },
          { img: "img/bus.webp", q: "There ___ lots of pink seats on the bus.", answer: "are" }
        ]
      },
      {
        type: "choose", title: "Questions: Is there…? Are there…?", ua: "Обери правильну відповідь",
        items: [
          { img: "img/giraffe.webp", q: "Is there a giraffe on the cloud?", options: ["Yes, there is.", "Yes, there are."], answer: "Yes, there is." },
          { img: "img/panda.webp", q: "Are there any balloons?", options: ["Yes, there are.", "No, there isn't."], answer: "Yes, there are." },
          { img: "img/wolf.webp", q: "Is there a scary wolf?", options: ["No, there isn't. He is cute!", "No, there aren't."], answer: "No, there isn't. He is cute!" },
          { img: "img/bus.webp", q: "Are there any cars on the bus?", options: ["No, there aren't.", "No, there isn't."], answer: "No, there aren't." }
        ]
      },
      {
        type: "order", title: "Make the sentences", ua: "Склади речення",
        items: ["There is a cute panda on the bus.", "There are four pink balloons.", "There isn't a driver on the bus.", "Is there a giraffe on the cloud?"]
      },
      {
        type: "fill", title: "Your turn! Make the bus funny", ua: "Твоя черга! Придумай, хто ще їде в автобусі (будь-яке слово англійською)",
        intro: '<p>Write any animal or thing. Be silly! 🦄🍕🐸 · <span class="ua">Напиши будь-яку тварину чи річ — чим смішніше, тим краще!</span></p>',
        free: true,
        items: [
          { q: "There is a ___ on the bus.", answer: "*" },
          { q: "There are three ___ on the roof.", answer: "*" },
          { q: "There isn't a ___ next to the bus.", answer: "*" }
        ]
      }
    ]
  },
  {
    id: "kitchen",
    title: "What's in the kitchen?",
    ua: "На кухні · Is there…? Are there…?",
    words: [["kitchen", "кухня"], ["oven", "духовка"], ["refrigerator (fridge)", "холодильник"], ["microwave", "мікрохвильовка"], ["plate", "тарілка"], ["bowl", "миска"],
            ["cup", "чашка"], ["mug", "кухоль, горнятко"], ["knife (two knives)", "ніж (ножі)"], ["fork", "виделка"], ["spoon", "ложка"], ["chopsticks", "палички для їжі"]],
    ruleTitle: "Is there…? Are there…?",
    rule: [
      ["one = singular: a fork, a cup, an oven", "однина (одна річ)"],
      ["more than one = plural: forks, cups, knives", "множина (багато)"],
      ["Is there a fork? — Yes, there is a fork.", "так, є"],
      ["Is there a fork? — No, there isn't a fork.", "ні, немає"],
      ["Are there any spoons? — Yes, there are some spoons.", "так, є (some)"],
      ["Are there any spoons? — No, there aren't any spoons.", "ні, немає (any)"]
    ],
    tasks: [
      {
        type: "plate", title: "Warm-up: What is on your plate today?", ua: "Розминка: що сьогодні на твоїй тарілці? Натискай на їжу, щоб покласти її на тарілку. Натисни на їжу на тарілці, щоб її забрати.",
        intro: '<p class="speech">Hmm… I am SO hungry! What is on your plate today, Luna? 🐼</p>',
        foods: [
          { e: "🍕", one: "a pizza", many: "pizzas" },
          { e: "🍎", one: "an apple", many: "apples" },
          { e: "🍌", one: "a banana", many: "bananas" },
          { e: "🍓", one: "a strawberry", many: "strawberries" },
          { e: "🥚", one: "an egg", many: "eggs" },
          { e: "🥕", one: "a carrot", many: "carrots" },
          { e: "🍅", one: "a tomato", many: "tomatoes" },
          { e: "🥪", one: "a sandwich", many: "sandwiches" },
          { e: "🍪", one: "a cookie", many: "cookies" },
          { e: "🧁", one: "a cupcake", many: "cupcakes" },
          { e: "🍩", one: "a doughnut", many: "doughnuts" },
          { e: "🧦", one: "a sock", many: "socks", name: "sock?! 😄" }
        ]
      },
      {
        type: "match", title: "Kitchen things", ua: "З'єднай картинку зі словом",
        pairs: [["img/oven.webp", "oven"], ["img/knife.webp", "knife"], ["img/fork.webp", "fork"], ["img/cups.webp", "cups"], ["img/bowl.webp", "bowl"], ["img/mug.webp", "mug"], ["img/plate.webp", "plate"]]
      },
      {
        type: "choose", title: "One or more than one?", ua: "Однина (одна річ) чи множина (багато)?",
        items: [
          { q: "plates", options: ["one", "more than one"], answer: "more than one" },
          { q: "knife", options: ["one", "more than one"], answer: "one" },
          { q: "spoons", options: ["one", "more than one"], answer: "more than one" },
          { q: "chopsticks", options: ["one", "more than one"], answer: "more than one" },
          { q: "mug", options: ["one", "more than one"], answer: "one" },
          { q: "bowl", options: ["one", "more than one"], answer: "one" },
          { q: "cups", options: ["one", "more than one"], answer: "more than one" },
          { q: "refrigerator", options: ["one", "more than one"], answer: "one" },
          { q: "forks", options: ["one", "more than one"], answer: "more than one" },
          { q: "oven", options: ["one", "more than one"], answer: "one" }
        ]
      },
      {
        type: "choose", title: "Riddles: What am I?", ua: "Загадки: хто я? Прочитай підказки",
        items: [
          { q: "You use me to cut things. I am sharp. What am I?", options: ["a knife", "a fork"], answer: "a knife" },
          { q: "I am big. I keep your food cold. What am I?", options: ["a microwave", "a refrigerator"], answer: "a refrigerator" },
          { q: "I come in a pair. You use me to eat. What am I?", options: ["chopsticks", "spoons"], answer: "chopsticks" },
          { q: "I am small. You use me for tea. What am I?", options: ["a bowl", "a cup"], answer: "a cup" },
          { q: "I am pink and hot. I cook pizza. What am I?", options: ["an oven", "a plate"], answer: "an oven" },
          { q: "I have little teddy bears on me. You drink cocoa from me. What am I?", options: ["a mug", "a knife"], answer: "a mug" }
        ]
      },
      {
        type: "choose", title: "Luna's pink kitchen", ua: "Подивись на кухню і дай відповідь",
        intro:
          '<div class="scene kitchen" role="img" aria-label="A pink kitchen: a pink oven with a striped bowl on it, a teddy-bear mug, three cups, a plate with a fork and a knife, and a panda with balloons.">' +
            '<img class="k-oven" src="img/oven.webp" alt="">' +
            '<img class="k-bowl" src="img/bowl.webp" alt="">' +
            '<img class="k-mug" src="img/mug.webp" alt="">' +
            '<img class="k-cups" src="img/cups.webp" alt="">' +
            '<img class="k-plate" src="img/plate.webp" alt="">' +
            '<img class="k-fork" src="img/fork.webp" alt="">' +
            '<img class="k-knife" src="img/knife.webp" alt="">' +
            '<img class="k-panda" src="img/panda.webp" alt="">' +
          '</div>' +
          '<p>Welcome to the pink kitchen! <b>There is</b> a pink oven. <b>There is</b> a bowl on the oven. <b>There are</b> three cups: blue, yellow and pink. ' +
          '<b>There is</b> a mug with little teddy bears. <b>There is</b> a plate, a fork and a knife. And look… the panda from the bus is here! He is hungry, but <b>there isn\'t</b> any food on the plate! 🐼</p>',
        say: "Welcome to the pink kitchen! There is a pink oven. There is a bowl on the oven. There are three cups: blue, yellow and pink. There is a mug with little teddy bears. There is a plate, a fork and a knife. And look, the panda from the bus is here! He is hungry, but there isn't any food on the plate!",
        items: [
          { q: "Is there an oven?", options: ["Yes, there is.", "No, there isn't."], answer: "Yes, there is." },
          { q: "Are there any cups?", options: ["Yes, there are some cups.", "No, there aren't any cups."], answer: "Yes, there are some cups." },
          { q: "Is there a spoon?", options: ["Yes, there is a spoon.", "No, there isn't a spoon."], answer: "No, there isn't a spoon." },
          { q: "Is there a refrigerator?", options: ["Yes, there is a refrigerator.", "No, there isn't a refrigerator."], answer: "No, there isn't a refrigerator." },
          { q: "Are there any chopsticks?", options: ["Yes, there are some chopsticks.", "No, there aren't any chopsticks."], answer: "No, there aren't any chopsticks." },
          { q: "Is there a panda in the kitchen? 😄", options: ["Yes, there is!", "No, there isn't."], answer: "Yes, there is!" }
        ]
      },
      {
        type: "choose", title: "Look at the picture", ua: "Обери речення, яке підходить до картинки (🚫 = немає)",
        items: [
          { img: "img/bowl.webp", q: "", options: ["There is a bowl.", "There isn't a bowl."], answer: "There is a bowl." },
          { img: "img/knife.webp", no: true, q: "", options: ["There is a knife.", "There isn't a knife."], answer: "There isn't a knife." },
          { img: "img/cups.webp", q: "", options: ["There are some cups.", "There aren't any cups."], answer: "There are some cups." },
          { img: "img/plate.webp", no: true, q: "", options: ["There are some plates.", "There aren't any plates."], answer: "There aren't any plates." },
          { img: ["img/fork.webp", "img/fork.webp"], q: "", options: ["There is a fork.", "There are some forks."], answer: "There are some forks." },
          { img: "img/oven.webp", no: true, q: "", options: ["There is an oven.", "There isn't an oven."], answer: "There isn't an oven." }
        ]
      },
      {
        type: "fill", title: "Answer the questions", ua: "Впиши is, are, isn't або aren't",
        bank: ["is", "are", "isn't", "aren't"],
        items: [
          { img: "img/mug.webp", q: "Is there a mug? Yes, there ___ a mug.", answer: "is" },
          { img: "img/oven.webp", no: true, q: "Is there an oven? No, there ___ an oven.", answer: ["isn't", "is not"] },
          { img: "img/cups.webp", q: "Are there any cups? Yes, there ___ some cups.", answer: "are" },
          { img: "img/plate.webp", no: true, q: "Are there any plates? No, there ___ any plates.", answer: ["aren't", "are not"] },
          { img: "img/knife.webp", q: "Is there a knife? Yes, there ___ a knife.", answer: "is" },
          { img: ["img/bowl.webp", "img/bowl.webp"], q: "Are there any bowls? Yes, there ___ some bowls.", answer: "are" }
        ]
      },
      {
        type: "choose", title: "The panda made mistakes! Which is correct?", ua: "Панда помилилася! Обери правильне речення",
        items: [
          { q: "1)", options: ["Yes, there isn't a mug.", "Yes, there is a mug."], answer: "Yes, there is a mug." },
          { q: "2)", options: ["Yes, there are some chopsticks.", "No, there are some chopsticks."], answer: "Yes, there are some chopsticks." },
          { q: "3)", options: ["Yes, there is a spoons.", "Yes, there are some spoons."], answer: "Yes, there are some spoons." },
          { q: "4)", options: ["No, there aren't any cups.", "No, there are cups."], answer: "No, there aren't any cups." },
          { q: "5)", options: ["Yes, there are a microwave.", "Yes, there is a microwave."], answer: "Yes, there is a microwave." },
          { q: "6)", options: ["Yes, there is an oven.", "Yes, there isn't a oven."], answer: "Yes, there is an oven." },
          { q: "7)", options: ["No, there aren't any knife.", "No, there aren't any knives."], answer: "No, there aren't any knives." },
          { q: "8)", options: ["No, there isn't a bowls.", "No, there isn't a bowl."], answer: "No, there isn't a bowl." }
        ]
      },
      {
        type: "order", title: "Make the sentences", ua: "Склади речення",
        items: ["Yes, there are some chopsticks.", "No, there isn't a fork.", "No, there aren't any spoons.", "Yes, there is a microwave.", "Is there a mug in the kitchen?"]
      },
      {
        type: "fill", title: "Your turn! What is in YOUR kitchen?", ua: "Твоя черга! Що є на твоїй кухні? Напиши будь-які слова англійською",
        free: true,
        items: [
          { q: "In my kitchen there is a ___.", answer: "*" },
          { q: "In my kitchen there are some ___.", answer: "*" },
          { q: "In my kitchen there isn't a ___.", answer: "*" }
        ]
      }
    ]
  }
];

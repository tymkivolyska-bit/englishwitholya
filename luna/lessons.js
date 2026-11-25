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
    id: "l1",
    title: "Hello! My name is Luna",
    ua: "Привітання і знайомство",
    words: [["hello", "привіт"], ["goodbye", "до побачення"], ["name", "ім'я"], ["friend", "друг, подруга"], ["How are you?", "Як справи?"], ["I'm fine, thank you.", "Добре, дякую."]],
    tasks: [
      {
        type: "choose", title: "Choose the right word", ua: "Обери правильне слово",
        items: [
          { q: "___ name is Luna.", options: ["My", "I", "Me"], answer: "My" },
          { q: "I ___ ten years old.", options: ["is", "am", "are"], answer: "am" },
          { q: "How ___ you?", options: ["is", "am", "are"], answer: "are" },
          { q: "___ is my friend Tom.", options: ["This", "He", "I"], answer: "This" },
          { q: "Nice to ___ you!", options: ["meet", "see", "name"], answer: "meet" }
        ]
      },
      {
        type: "match", title: "Match the words", ua: "З'єднай слова з перекладом",
        pairs: [["hello", "привіт"], ["goodbye", "до побачення"], ["name", "ім'я"], ["friend", "друг"], ["thank you", "дякую"]]
      },
      {
        type: "fill", title: "Write the missing word", ua: "Впиши слово, якого не вистачає", bank: ["name", "fine", "Hello", "you"],
        items: [
          { q: "___! I'm Luna.", answer: "Hello" },
          { q: "What's your ___?", answer: "name" },
          { q: "I'm ___, thank you.", answer: "fine" },
          { q: "Nice to meet ___!", answer: "you" }
        ]
      },
      {
        type: "order", title: "Put the words in order", ua: "Склади речення",
        items: ["My name is Luna.", "How are you?", "Nice to meet you."]
      }
    ]
  },
  {
    id: "l2",
    title: "Colours and numbers",
    ua: "Кольори і числа",
    words: [["red", "червоний"], ["blue", "синій"], ["green", "зелений"], ["yellow", "жовтий"], ["pink", "рожевий"], ["black", "чорний"], ["white", "білий"], ["one, two, three", "один, два, три"]],
    tasks: [
      {
        type: "match", title: "Match the colours", ua: "З'єднай кольори",
        pairs: [["red", "червоний"], ["blue", "синій"], ["green", "зелений"], ["yellow", "жовтий"], ["pink", "рожевий"], ["white", "білий"]]
      },
      {
        type: "choose", title: "What number is it?", ua: "Яке це число?",
        items: [
          { q: "3 = ___", options: ["three", "thirteen", "thirty"], answer: "three" },
          { q: "7 = ___", options: ["six", "seven", "eleven"], answer: "seven" },
          { q: "10 = ___", options: ["ten", "two", "twelve"], answer: "ten" },
          { q: "12 = ___", options: ["twenty", "twelve", "two"], answer: "twelve" },
          { q: "20 = ___", options: ["twelve", "twenty", "two"], answer: "twenty" }
        ]
      },
      {
        type: "fill", title: "Finish the sentences", ua: "Закінчи речення", bank: ["yellow", "green", "white", "blue"],
        items: [
          { q: "The sun is ___.", answer: "yellow" },
          { q: "Grass is ___.", answer: "green" },
          { q: "Snow is ___.", answer: "white" },
          { q: "The sky is ___.", answer: "blue" }
        ]
      },
      {
        type: "fill", title: "Write the number in words", ua: "Напиши число словами",
        items: [
          { q: "2 + 2 = ___", answer: "four" },
          { q: "5 + 1 = ___", answer: "six" },
          { q: "4 + 4 = ___", answer: "eight" },
          { q: "10 - 1 = ___", answer: "nine" }
        ]
      },
      {
        type: "order", title: "Put the words in order", ua: "Склади речення",
        items: ["My favourite colour is pink.", "I have got two cats.", "The bag is black."]
      }
    ]
  },
  {
    id: "l3",
    title: "My family",
    ua: "Моя сім'я",
    words: [["mother (mum)", "мама"], ["father (dad)", "тато"], ["sister", "сестра"], ["brother", "брат"], ["grandmother (granny)", "бабуся"], ["grandfather (grandad)", "дідусь"], ["has got", "має"]],
    tasks: [
      {
        type: "match", title: "Who is who?", ua: "З'єднай слова з перекладом",
        pairs: [["mother", "мама"], ["father", "тато"], ["sister", "сестра"], ["brother", "брат"], ["grandmother", "бабуся"], ["grandfather", "дідусь"]]
      },
      {
        type: "choose", title: "Choose the right word", ua: "Обери правильне слово",
        items: [
          { q: "This is ___ mum. Her name is Anna.", options: ["my", "I", "me"], answer: "my" },
          { q: "My brother ___ got a bike.", options: ["have", "has", "is"], answer: "has" },
          { q: "I ___ got a sister.", options: ["has", "have", "am"], answer: "have" },
          { q: "My dad is tall. ___ is nice.", options: ["She", "He", "It"], answer: "He" },
          { q: "My granny is kind. ___ likes cats.", options: ["She", "He", "They"], answer: "She" }
        ]
      },
      {
        type: "fill", title: "Write he or she", ua: "Впиши he (він) або she (вона)", bank: ["he", "she"],
        items: [
          { q: "This is my sister. ___ is seven.", answer: "She" },
          { q: "This is my brother. ___ is twelve.", answer: "He" },
          { q: "My grandad is funny. ___ is sixty.", answer: "He" },
          { q: "My mum is a teacher. ___ is clever.", answer: "She" }
        ]
      },
      {
        type: "order", title: "Put the words in order", ua: "Склади речення",
        items: ["I have got a brother.", "This is my mum.", "My sister is seven."]
      }
    ]
  },
  {
    id: "l4",
    title: "Food I like",
    ua: "Їжа, яку я люблю",
    words: [["apple", "яблуко"], ["banana", "банан"], ["bread", "хліб"], ["milk", "молоко"], ["cheese", "сир"], ["ice cream", "морозиво"], ["I like", "я люблю / мені подобається"], ["I don't like", "я не люблю"]],
    tasks: [
      {
        type: "match", title: "Match the food", ua: "З'єднай слова з перекладом",
        pairs: [["apple", "яблуко"], ["banana", "банан"], ["bread", "хліб"], ["milk", "молоко"], ["cheese", "сир"], ["ice cream", "морозиво"]]
      },
      {
        type: "choose", title: "Choose the right word", ua: "Обери правильне слово",
        items: [
          { q: "I ___ ice cream. It's yummy!", options: ["like", "likes", "don't"], answer: "like" },
          { q: "She ___ milk.", options: ["like", "likes", "liking"], answer: "likes" },
          { q: "I ___ like fish.", options: ["doesn't", "don't", "not"], answer: "don't" },
          { q: "Do you like apples? Yes, I ___.", options: ["do", "like", "am"], answer: "do" },
          { q: "I want ___ apple.", options: ["a", "an", "two"], answer: "an" }
        ]
      },
      {
        type: "fill", title: "a or an?", ua: "Впиши a або an (an — перед голосним звуком)", bank: ["a", "an"],
        items: [
          { q: "___ banana", answer: "a" },
          { q: "___ apple", answer: "an" },
          { q: "___ orange", answer: "an" },
          { q: "___ sandwich", answer: "a" },
          { q: "___ egg", answer: "an" }
        ]
      },
      {
        type: "order", title: "Put the words in order", ua: "Склади речення",
        items: ["I like bananas.", "I don't like cheese.", "Do you like milk?"]
      }
    ]
  },
  {
    id: "l5",
    title: "My day",
    ua: "Мій день",
    words: [["get up", "вставати"], ["have breakfast", "снідати"], ["go to school", "йти до школи"], ["do homework", "робити домашнє завдання"], ["go to bed", "лягати спати"], ["in the morning", "вранці"], ["in the evening", "ввечері"]],
    tasks: [
      {
        type: "match", title: "Match the phrases", ua: "З'єднай фрази з перекладом",
        pairs: [["get up", "вставати"], ["have breakfast", "снідати"], ["go to school", "йти до школи"], ["do homework", "робити домашнє"], ["go to bed", "лягати спати"]]
      },
      {
        type: "choose", title: "Choose the right word", ua: "Обери правильне слово",
        items: [
          { q: "I get up ___ seven o'clock.", options: ["in", "at", "on"], answer: "at" },
          { q: "I have breakfast in the ___.", options: ["morning", "night", "bed"], answer: "morning" },
          { q: "She ___ to school at eight.", options: ["go", "goes", "going"], answer: "goes" },
          { q: "I ___ my homework after school.", options: ["do", "make", "does"], answer: "do" },
          { q: "I go to bed in the ___.", options: ["morning", "evening", "school"], answer: "evening" }
        ]
      },
      {
        type: "fill", title: "Write the missing word", ua: "Впиши слово", bank: ["up", "breakfast", "bed", "school"],
        items: [
          { q: "I get ___ at 7.", answer: "up" },
          { q: "I have ___ at half past 7.", answer: "breakfast" },
          { q: "I go to ___ at 8.", answer: "school" },
          { q: "I go to ___ at 9 in the evening.", answer: "bed" }
        ]
      },
      {
        type: "order", title: "Put the words in order", ua: "Склади речення",
        items: ["I get up at seven.", "I go to school by bus.", "She does her homework."]
      }
    ]
  },
  {
    id: "l6",
    title: "I can swim!",
    ua: "Що я вмію робити (can)",
    words: [["can", "вміти, могти"], ["can't", "не вміти"], ["swim", "плавати"], ["dance", "танцювати"], ["sing", "співати"], ["ride a bike", "їздити на велосипеді"], ["draw", "малювати"]],
    tasks: [
      {
        type: "match", title: "Match the verbs", ua: "З'єднай дії з перекладом",
        pairs: [["swim", "плавати"], ["dance", "танцювати"], ["sing", "співати"], ["draw", "малювати"], ["run", "бігати"], ["read", "читати"]]
      },
      {
        type: "choose", title: "Choose the right word", ua: "Обери правильне слово",
        items: [
          { q: "I ___ swim. I love the sea!", options: ["can", "cans", "am"], answer: "can" },
          { q: "A fish can't ___.", options: ["swim", "walk", "swims"], answer: "walk" },
          { q: "___ you dance? Yes, I can.", options: ["Do", "Can", "Are"], answer: "Can" },
          { q: "She can ___ very well.", options: ["sings", "sing", "singing"], answer: "sing" },
          { q: "Can a bird fly? Yes, it ___.", options: ["can", "can't", "does"], answer: "can" }
        ]
      },
      {
        type: "fill", title: "can or can't?", ua: "Впиши can або can't", bank: ["can", "can't"],
        items: [
          { q: "A cat ___ climb a tree.", answer: "can" },
          { q: "A dog ___ fly.", answer: ["can't", "cannot"] },
          { q: "A bird ___ sing.", answer: "can" },
          { q: "A fish ___ ride a bike.", answer: ["can't", "cannot"] }
        ]
      },
      {
        type: "order", title: "Put the words in order", ua: "Склади речення",
        items: ["I can ride a bike.", "Can you swim?", "My brother can't dance."]
      }
    ]
  }
];

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
  }
];

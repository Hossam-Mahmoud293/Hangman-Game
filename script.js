const wordList = [
  {
    word: "جيتار",
    hint: "آله موسيقيه تحتوي على أوتار.",
  },
  {
    word: "أكسجين",
    hint: "غاز عديم اللون والرائحه ضروري للحياه.",
  },
  {
    word: "جبل",
    hint: "ارتفاع طبيعي كبير على سطح الأرض.",
  },
  {
    word: "رسم",
    hint: "فن يستخدم الألوان على سطح لخلق صور أو التعبير.",
  },
  {
    word: "فلك",
    hint: "الدراسه العلميه للأجسام السماويه والظواهر.",
  },
  {
    word: "كره القدم",
    hint: "رياضه شعبيه تلعب بكره كرويه.",
  },
  {
    word: "شوكولاته",
    hint: "حلوى مصنوعه من حبوب الكاكاو.",
  },
  {
    word: "فراشه",
    hint: "حشره ذات أجنحه ملونه وجسم نحيف.",
  },
  {
    word: "تاريخ",
    hint: "دراسه الأحداث السابقه وحضاره الإنسان.",
  },
  {
    word: "بيتزا",
    hint: "طبق لذيذ يتكون من قاع دائري ومكونات متنوعه.",
  },
  {
    word: "جاز",
    hint: "نوع من الموسيقى يتميز بالتجانس والتناغم.",
  },
  {
    word: "كاميرا",
    hint: "جهاز يستخدم لالتقاط وتسجيل الصور أو مقاطع الفيديو.",
  },
  {
    word: "ماس",
    hint: "حجر كريم ثمين معروف ببريقه وصلابته.",
  },
  {
    word: "مغامره",
    hint: "تجربه مثيره أو جريئه.",
  },
  {
    word: "علم",
    hint: "الدراسه النظاميه لبنيه وسلوك العالم الطبيعي والفيزيائي.",
  },
  {
    word: "دراجه",
    hint: "مركبه تعمل بالطاقه البشريه مع عجلتين.",
  },
  {
    word: "غروب الشمس",
    hint: "اختفاء الشمس يوميًا تحت الأفق.",
  },
  {
    word: "قهوه",
    hint: "مشروب محبوب يصنع من حبوب القهوه المحمصه.",
  },
  {
    word: "رقص",
    hint: "حركه إيقاعيه للجسم يتم أداؤها غالبًا على الموسيقى.",
  },
  {
    word: "مجره",
    hint: "نظام واسع من النجوم والغاز والغبار متماسكه بفعل الجاذبيه.",
  },
  {
    word: "أوركسترا",
    hint: "تجمع كبير من الموسيقيين يعزفون على آلات متنوعه.",
  },
  {
    word: "بركان",
    hint: "جبل أو هضبه يحتوي على فتحه يتدفق منها الحمم والغازات.",
  },
  {
    word: "روايه",
    hint: "عمل طويل من الخيال، غالبًا ما يتضمن حبكه معقده وشخصيات.",
  },
  {
    word: "نحت",
    hint: "فن ثلاثي الأبعاد يتم إنشاؤه عن طريق تشكيل أو دمج المواد.",
  },
  {
    word: "سيمفونيه",
    hint: "قطعه موسيقيه طويله لأوركسترا كامله، غالبًا ما تحتوي على حركات متعدده.",
  },
  {
    word: "هندسه معماريه",
    hint: "فن وعلم تصميم وبناء المباني.",
  },
  {
    word: "باليه",
    hint: "شكل راقص كلاسيكي يتميز بالحركات الدقيقه والأنيقه.",
  },
  {
    word: "رائد الفضاء",
    hint: "شخص تم تدريبه للسفر والعمل في الفضاء.",
  },
  {
    word: "شلال",
    hint: "تدفق مائي يسقط من ارتفاع.",
  },
  {
    word: "تكنولوجيا",
    hint: "تطبيق المعرفه العلميه لأغراض عمليه.",
  },
  {
    word: "قوس قزح",
    hint: "ظاهره جويه تحدث بسبب انعكاس وانكسار وتشتيت الضوء.",
  },
  {
    word: "كون",
    hint: "كل الماده الموجوده، والمكان، والزمان ككل.",
  },
  {
    word: "بيانو",
    hint: "آله موسيقيه يتم العزف عليها عن طريق الضغط على المفاتيح.",
  },
  {
    word: "عطله",
    hint: "فتره من الوقت مخصصه للمتعه أو الاسترخاء.",
  },
  {
    word: "غابه مطيره",
    hint: "غابه كثيفه تتميز بكميات كبيره من الأمطار والتنوع البيولوجي.",
  },
  {
    word: "مسرح",
    hint: "مبنى أو منطقه خارجيه يتم فيها إقامه عروض مسرحيه أو أفلام.",
  },
  {
    word: "هاتف",
    hint: "جهاز يستخدم لنقل الصوت عبر مسافات طويله.",
  },
  {
    word: "لغه",
    hint: "نظام اتصال يتكون من كلمات وإيماءات وبنيه جمل.",
  },
  {
    word: "صحراء",
    hint: "أرض قاحله أو جافه تتسم بقله الأمطار.",
  },
  {
    word: "عباد الشمس",
    hint: "نبات طويل يحمل رأساً أصفر كبيراً.",
  },
  {
    word: "خيال",
    hint: "نوع من الأدب الخيالي يشمل العناصر السحريه والخارقه.",
  },
  {
    word: "تلسكوب",
    hint: "آله بصريه تستخدم لرؤيه الأجسام البعيده في الفضاء.",
  },
  {
    word: "نسيم",
    hint: "رياح خفيفه.",
  },
  {
    word: "واحه",
    hint: "منطقه غنيه بالمياه في الصحراء.",
  },
  {
    word: "تصوير فوتوغرافي",
    hint: "فن أو عمليه التقاط الصور عن طريق تسجيل الضوء.",
  },
  {
    word: "سفاري",
    hint: "رحله أو رحله، عاده لمشاهده الحياه البريه في موطنها الطبيعي.",
  },
  {
    word: "كوكب",
    hint: "جسم سماوي يدور حول نجم ولا ينتج ضوءه الخاص.",
  },
  {
    word: "نهر",
    hint: "تيار مائي طبيعي كبير يتدفق في قناه.",
  },
  {
    word: "استوائي",
    hint: "ذو علاقه بالمنطقه بين مدار السرطان ومدار الجدي.",
  },
  {
    word: "غامض",
    hint: "صعب أو مستحيل فهمه أو تفسيره أو تحديده.",
  },
  {
    word: "لغز",
    hint: "لعبه أو لغز أو مشكله مصممه لاختبار الدهاء أو المعرفه.",
  },
  {
    word: "همس",
    hint: "التحدث بصوت خافت جدًا أو هادئ، غالبًا ما يكون بطريقه سريه.",
  },
  {
    word: "ظل",
    hint: "منطقه داكنه أو شكل يتم إنتاجه بواسطه جسم يعيق الضوء.",
  },
  {
    word: "سر",
    hint: "شيء مخبأ أو مجهول للآخرين.",
  },
  {
    word: "فضول",
    hint: "رغبه قويه في معرفه أو تعلم شيء ما.",
  },
  {
    word: "غير متوقع",
    hint: "غير قابل للتنبؤ به أو معرفته مسبقًا؛ غير مؤكد.",
  },
  {
    word: "تشويش",
    hint: "لتحير أو إرباك شخص ما؛ جعل شيء غير واضح أو صعب الفهم.",
  },
  {
    word: "كشف",
    hint: "جعل شيء معروفًا أو كشف شيء كان سرًا سابقًا.",
  },
  {
    word: "وهم",
    hint: "إدراك خاطئ أو معتقد يخدع الحواس.",
  },
  {
    word: "ضوء القمر",
    hint: "الضوء الناتج من القمر.",
  },
  {
    word: "نابض بالحياه",
    hint: "مليء بالطاقه والإشراق والحيويه.",
  },
  {
    word: "الحنين",
    hint: "الشوق العاطفي أو الموده الحنينه للماضي.",
  },
  {
    word: "متألق",
    hint: "ذكي بشكل استثنائي أو موهوب أو مثير للإعجاب.",
  },
];

const hangmanImage = document.querySelector(".hangman-box img");
const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".guesses-text b");
const keyboardDiv = document.querySelector(".keyboard");
const gameModal = document.querySelector(".game-modal");
const playAgainBtn = document.querySelector(".play-again");

let currentWord, correctLetters, worngGuessCount;
let maxGuesses = 6;

const resetGame = () => {
  correctLetters = [];
  worngGuessCount = 0;
  hangmanImage.src = `img/hangman-${worngGuessCount}.svg`;
  guessesText.innerText = `${worngGuessCount} / ${maxGuesses}`;
  keyboardDiv
    .querySelectorAll("button")
    .forEach((btn) => (btn.disabled = false));
  wordDisplay.innerHTML = currentWord
    .split("")
    .map(() => `<li class="letter"></li>`)
    .join("");
  gameModal.classList.remove("show");
};

const getRandomWord = () => {
  const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
  currentWord = word;
  document.querySelector(".hint-text b").innerText = hint;
  resetGame();
};

const gameOver = (isVictory) => {
  setTimeout(() => {
    const modalText = isVictory ? `لقد وجدت الكلمه: ` : `الكلمه الصحيحه كانت: `;
    gameModal.querySelector("img").src = `img/${
      isVictory ? "victory" : "lost"
    }.gif`;
    gameModal.querySelector("h4").innerText = `${
      isVictory ? "Congrats!" : "Game Over!"
    }`;
    gameModal.querySelector(
      "p"
    ).innerHTML = `${modalText}<b>${currentWord}</b>`;
    gameModal.classList.add("show");
  }, 300);
};

const initGame = (button, clickedLetter) => {
  if (currentWord.includes(clickedLetter)) {
    [...currentWord].forEach((letter, index) => {
      if (letter == clickedLetter) {
        document.getElementById("success").play();
        correctLetters.push(letter);
        wordDisplay.querySelectorAll("li")[index].innerText = letter;
        wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
      }
    });
  } else {
    document.getElementById("fail").play();
    worngGuessCount++;
    hangmanImage.src = `img/hangman-${worngGuessCount}.svg`;
  }

  button.disabled = true;
  guessesText.innerText = `${worngGuessCount} / ${maxGuesses}`;

  if (worngGuessCount == maxGuesses) {
    document.getElementById("wah").play();
    return gameOver(false);
  }
  // if (correctLetters.length == currentWord.length) return gameOver(true);
  if (correctLetters.length == currentWord.length) {
    document.getElementById("successfly").play();
    return gameOver(true);
  }
};

// قائمه الحروف العربيه
const arabicAlphabet = [
  "ا",
  "ب",
  "ت",
  "ث",
  "ج",
  "ح",
  "خ",
  "د",
  "ذ",
  "ر",
  "ز",
  "س",
  "ش",
  "ص",
  "ض",
  "ط",
  "ظ",
  "ع",
  "غ",
  "ف",
  "ق",
  "ك",
  "ل",
  "م",
  "ن",
  "ه",
  "و",
  "ي",
  " ",
];

// إنشاء أزرار الحروف العربيه
for (let i = 0; i < arabicAlphabet.length; i++) {
  const button = document.createElement("button");
  button.innerHTML = arabicAlphabet[i];
  keyboardDiv.appendChild(button);
  button.addEventListener("click", (e) =>
    initGame(e.target, arabicAlphabet[i])
  );
}

const changeWordBtn = document.querySelector('.change-word-btn');
changeWordBtn.addEventListener('click', () => {
    getRandomWord();
});

let hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "E", "F"];
let colorParts = [];

for (let i = 0; i < 6; i++) {
    colorParts.push(hexArray[Math.floor(Math.random() * hexArray.length)]);
}

let finalColor = `#${colorParts.join("")}`;

document.body.style.backgroundColor = finalColor;

getRandomWord();
playAgainBtn.addEventListener("click", getRandomWord);

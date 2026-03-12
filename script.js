// ===== USER DATA =====
let userData = { name: '', surname: '', phone: '' };

// ===== SCREEN NAVIGATION =====
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const screen = document.getElementById(id);
  screen.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (id === 'screen-test') initTest();
}

// ===== FORM =====
function submitForm() {
  const name = document.getElementById('input-name').value.trim();
  const surname = document.getElementById('input-surname').value.trim();
  const phone = document.getElementById('input-phone').value.trim();
  const err = document.getElementById('form-error');

  if (!name || !surname || !phone) {
    err.style.display = 'block';
    return;
  }
  err.style.display = 'none';
  userData = { name, surname, phone };
  showScreen('screen-module1');
}

// ===== TEST DATA =====
const questions = [
  // МОДУЛЬ 1 — КОМПАНИЯ
  {
    q: "Какова миссия компании Aiplus?",
    options: [
      "Максимальная прибыль от образовательных услуг",
      "«Не бывает глупых детей, просто они не обучались у лучших»",
      "Подготовка только к ЕНТ",
      "Открытие школ по всему Казахстану"
    ],
    correct: 1
  },
  {
    q: "Сколько детей поступили в спецшколы благодаря Aiplus?",
    options: ["1 000+", "3 000+", "5 000+", "10 000+"],
    correct: 2
  },
  {
    q: "Сколько минут длится занятие в Aiplus для 4–11 классов?",
    options: ["45 минут", "60 минут", "90 минут", "120 минут"],
    correct: 1
  },
  {
    q: "С чего начинается каждое занятие в Aiplus?",
    options: [
      "20 минут новой темы",
      "Организационные вопросы",
      "7-минутный QUIZ — мини-тест по прошлой теме",
      "Проверка домашнего задания у доски"
    ],
    correct: 2
  },
  {
    q: "Сколько кандидатов из 10 становятся преподавателями Aiplus?",
    options: ["5 из 10", "4 из 10", "3 из 10", "2 из 10"],
    correct: 3
  },
  {
    q: "В каком году в Aiplus был создан отдел менторства?",
    options: ["2015", "2016", "2018", "2022"],
    correct: 2
  },
  // МОДУЛЬ 2 — ПРОДУКТ И ШКОЛЫ
  {
    q: "Что такое Айбаксы?",
    options: [
      "Название программы по казахскому языку",
      "Внутренняя валюта мотивации учеников",
      "Система онлайн-тестирования",
      "Приложение для родителей"
    ],
    correct: 1
  },
  {
    q: "Какой минимальный балл для поступления в НИШ ФМН Шымкент (2025–2026)?",
    options: ["896", "1091", "1126", "1255"],
    correct: 2
  },
  {
    q: "Сколько государство выделяет в год на ученика НИШ?",
    options: ["1 млн ₸", "2,5 млн ₸", "4,5 млн ₸", "7 млн ₸"],
    correct: 2
  },
  {
    q: "Какая особенность системы оценивания в экзамене БИЛ?",
    options: [
      "Только устный экзамен",
      "Правильный ответ +4 б., неправильный −1 б.",
      "Нет штрафов за ошибки",
      "Максимальный балл — 1500"
    ],
    correct: 1
  },
  {
    q: "В каком месяце проходит вступительный экзамен в НИШ?",
    options: ["Январь", "Март", "Май", "Сентябрь"],
    correct: 1
  },
  {
    q: "Ребёнок из Шымкента хочет в РФМШ. Где он будет учиться?",
    options: [
      "В Шымкенте — там есть школа РФМШ",
      "Экзамен в Шымкенте, учиться в Алматы/Астане/Уральске",
      "Только онлайн",
      "РФМШ недоступна для Шымкента"
    ],
    correct: 1
  },
  {
    q: "Сколько стоит урок в Aiplus по сравнению с репетитором?",
    options: [
      "Дороже — 7 000–8 000 ₸/урок",
      "Одинаково — 5 000 ₸/урок",
      "Дешевле — 2 000–2 500 ₸/урок",
      "Бесплатно для первого месяца"
    ],
    correct: 2
  },
  // МОДУЛЬ 3 — СКРИПТ ЗВОНКА
  {
    q: "Что нужно сделать в конце записи клиента на встречу?",
    options: [
      "Просто попрощаться и положить трубку",
      "Спросить: «Вы точно придёте? Я резервирую за вами это время»",
      "Предложить скидку",
      "Попросить оплатить заранее"
    ],
    correct: 1
  },
  {
    q: "Что такое «программинг» в скрипте звонка?",
    options: [
      "Запись клиента в CRM",
      "Написание скрипта для программистов",
      "Объяснение клиенту, что вы зададите несколько вопросов, и это займёт 3–5 минут",
      "Презентация продукта"
    ],
    correct: 2
  },
  {
    q: "Сколько блоков содержит скрипт первичного звонка?",
    options: ["4", "6", "8", "10"],
    correct: 2
  },
  {
    q: "Какой первый вопрос по квалификации города задаётся клиенту в Шымкенте?",
    options: [
      "«Вы интересуетесь онлайн-обучением?»",
      "«Вы из Шымкента?»",
      "«В каком классе ваш ребёнок?»",
      "«Какой у вас бюджет?»"
    ],
    correct: 1
  },
  // МОДУЛЬ 4 — ВОЗРАЖЕНИЯ
  {
    q: "Клиент говорит «Дорого». Какой самый эффективный ответ?",
    options: [
      "«Хорошо, дадим скидку»",
      "«Сравните: репетитор по 1 предмету — 40–56 тыс ₸/мес, а у нас все предметы»",
      "«Качество стоит денег»",
      "«Вы можете не записываться»"
    ],
    correct: 1
  },
  {
    q: "Клиент говорит «Надо подумать». Что делаем?",
    options: [
      "Прощаемся и ждём звонка",
      "Давим и требуем ответа немедленно",
      "Уточняем причину сомнений и предлагаем зафиксировать место, пока есть свободные слоты",
      "Сразу даём скидку 50%"
    ],
    correct: 2
  },
  {
    q: "Клиент говорит «У нас уже есть репетитор». Что спрашиваем первым?",
    options: [
      "«Сколько вы ему платите?»",
      "«Довольны ли результатами?»",
      "«Почему вы тогда звонили нам?»",
      "«Когда планируете уйти от репетитора?»"
    ],
    correct: 1
  },
  // МОДУЛЬ 5 — AMOCRM И СТАНДАРТЫ
  {
    q: "Сколько содержательных разговоров должен провести стажёр в день?",
    options: ["5–7", "10–15", "20–25", "30+"],
    correct: 1
  },
  {
    q: "Через сколько минут другой менеджер может взять лид, если ответственный не отвечает клиенту?",
    options: ["5 минут", "15 минут", "30 минут", "1 час"],
    correct: 1
  },
  {
    q: "Какое условие перехода из стажёра в интерна?",
    options: [
      "Проработать 1 месяц",
      "Пройти экзамен по продукту",
      "Провести первую состоявшуюся консультацию с клиентом",
      "Набрать 10 000 ₸ в продажах"
    ],
    correct: 2
  }
];

// ===== TEST STATE =====
let currentQuestion = 0;
let answers = new Array(questions.length).fill(null);

function initTest() {
  currentQuestion = 0;
  answers = new Array(questions.length).fill(null);
  renderQuestion();
}

function renderQuestion() {
  const q = questions[currentQuestion];
  const container = document.getElementById('test-container');

  container.innerHTML = `
    <div class="question-card">
      <div class="question-num">Вопрос ${currentQuestion + 1} из ${questions.length}</div>
      <div class="question-text">${q.q}</div>
      <div class="options-list" id="options-list">
        ${q.options.map((opt, i) => `
          <label class="option-item ${answers[currentQuestion] === i ? 'selected' : ''}" onclick="selectAnswer(${i})">
            <input type="radio" name="q${currentQuestion}" value="${i}" ${answers[currentQuestion] === i ? 'checked' : ''} />
            ${opt}
          </label>
        `).join('')}
      </div>
    </div>
  `;

  // Progress
  const pct = ((currentQuestion + 1) / questions.length) * 100;
  document.getElementById('progress-fill').style.width = pct + '%';
  document.getElementById('progress-text').textContent = `Вопрос ${currentQuestion + 1} из ${questions.length}`;

  // Nav buttons
  document.getElementById('btn-prev').style.display = currentQuestion > 0 ? 'inline-flex' : 'none';
  document.getElementById('btn-next').style.display = currentQuestion < questions.length - 1 ? 'inline-flex' : 'none';
  document.getElementById('btn-submit').style.display = currentQuestion === questions.length - 1 ? 'inline-flex' : 'none';
  document.getElementById('test-error').style.display = 'none';
}

function selectAnswer(idx) {
  answers[currentQuestion] = idx;
  document.querySelectorAll('.option-item').forEach((el, i) => {
    el.classList.toggle('selected', i === idx);
    el.querySelector('input').checked = (i === idx);
  });
}

function nextQuestion() {
  if (answers[currentQuestion] === null) {
    document.getElementById('test-error').style.display = 'block';
    return;
  }
  document.getElementById('test-error').style.display = 'none';
  currentQuestion++;
  renderQuestion();
}

function prevQuestion() {
  currentQuestion--;
  renderQuestion();
}

function submitTest() {
  if (answers[currentQuestion] === null) {
    document.getElementById('test-error').style.display = 'block';
    return;
  }

  const score = answers.reduce((acc, ans, i) => acc + (ans === questions[i].correct ? 1 : 0), 0);
  const total = questions.length;
  const pct = Math.round(score / total * 100);
  const passed = pct >= 70;

  showScreen('screen-result');

  document.getElementById('result-icon').textContent = passed ? '🎉' : '📚';
  document.getElementById('result-title').textContent = passed ? 'Аттестация пройдена!' : 'Нужно повторить материал';
  document.getElementById('result-score').textContent = `${score} / ${total}`;
  document.getElementById('result-text').textContent = passed
    ? `Отличный результат! Вы набрали ${pct}% и успешно прошли аттестацию.`
    : `Вы набрали ${pct}%. Для прохождения аттестации необходимо набрать минимум 70%. Рекомендуем повторить модули и попробовать снова.`;

  document.getElementById('result-details').innerHTML = `
    <strong>${userData.surname} ${userData.name}</strong><br>
    📱 ${userData.phone}<br>
    ✅ Правильных ответов: ${score} из ${total}<br>
    📊 Результат: ${pct}%<br>
    🏆 Статус: <strong>${passed ? 'ПРОЙДЕНО' : 'НЕ ПРОЙДЕНО'}</strong>
  `;

  saveResults(score, total, pct, passed);
}

// ===== SAVE TO GOOGLE SHEETS =====
// Замени SCRIPT_URL на URL твоего Google Apps Script
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzUY9F3eKaLfdOz5YEipD_sUt1OiF75hYjdDbTnQo1u17ww99Ml-MTCK5dA0lY58v7unQ/exec';

async function saveResults(score, total, pct, passed) {
  const statusEl = document.getElementById('saving-status');

  if (SCRIPT_URL === 'YOUR_GOOGLE_APPS_SCRIPT_URL') {
    statusEl.textContent = '⚠️ Google Sheets не подключён (нужно настроить)';
    return;
  }

  const payload = {
    name: userData.name,
    surname: userData.surname,
    phone: userData.phone,
    score: score,
    total: total,
    percent: pct,
    passed: passed ? 'Да' : 'Нет',
    date: new Date().toLocaleString('ru-RU', { timeZone: 'Asia/Almaty' })
  };

  try {
    await fetch(SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    statusEl.textContent = '✅ Результаты сохранены';
    statusEl.className = 'saving-status saved';
  } catch (e) {
    statusEl.textContent = '❌ Ошибка сохранения. Сообщите администратору.';
    statusEl.className = 'saving-status error';
  }
}

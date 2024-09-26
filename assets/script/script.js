const info = [
    {
      name: 'Хаяо Миядзаки',
      career: 'Сценарист, Режиссер, Продюсер, Монтажер, Актер, Художник',
      films: 'https://www.kinopoisk.ru/name/47753/',
      top_rated_film: 'Унесённые призраками'
    },
    {
      name: 'Масааки Юаса',
      career: 'Режиссер, Сценарист, Продюсер, Художник',
      films: 'https://www.kinopoisk.ru/name/722674/',
      top_rated_film: 'На твоей волне'
    },
    {
      name: 'Сатоси Кон',
      career: 'Режиссер, Сценарист, Актер, Художник',
      films: 'https://www.kinopoisk.ru/name/54611/',
      top_rated_film: 'Паприка'
    },
    {
      name: 'Исао Такахата',
      career: 'Режиссер, Сценарист, Продюсер',
      films: 'https://www.kinopoisk.ru/name/141264/',
      top_rated_film: 'Сказание о принцессе Кагуя'
    },
    {
      name: 'Мамору Хосода',
      career: 'Режиссер, Сценарист',
      films: 'https://www.kinopoisk.ru/name/6365/',
      top_rated_film: 'Ученик чудовища'
    },
    {
      name: 'Макото Синкай',
      career: 'Режиссер, Сценарист, Оператор, Монтажер, Продюсер, Художник, Актер',
      films: 'https://www.kinopoisk.ru/name/237173/',
      top_rated_film: 'Твоё имя'
    },
    {
      name: 'Мари Окада',
      career: 'Сценарист, Режиссер',
      films: 'https://www.kinopoisk.ru/name/1571614/',
      top_rated_film: 'Укрась прощальное утро цветами обещания'
    },
  ];
//Вызовите метод forEach у массива.
info.forEach()
//В функцию обработчик добавьте код, который относится к работе с DOM
//В найденные элементы на странице добавьте информацию из каждого элемента массива.

//Создайте новый массив topFilmsList, в нём должны быть лучшие фильмы режиссёров (они хранятся в полях top_rated_film).
const topFilmsList = info.map(function(el) {
    return el.top_rated_film;
});

const top_film = document.querySelector('.top_film');
top_film.textContent = topFilmsList.join(', ')
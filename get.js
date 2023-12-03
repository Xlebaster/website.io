// Определяем URL API
const url = "https://jsonplaceholder.typicode.com/posts";

// Создаем переменную для хранения элемента списка постов
const postList = $("#post-list");

// Создаем переменную для хранения элемента кнопки получения поста
const getPost = $("#get-post");

// Создаем функцию для получения случайного поста с помощью GET запроса
function getRandomPost() {
  // Генерируем случайный id поста от 1 до 100
  let postId = Math.floor(Math.random() * 100) + 1;
  // Используем jQuery для отправки AJAX запроса
  $.ajax({
    // Указываем метод GET
    method: "GET",
    // Указываем URL API с параметром postId
    url: url + "/" + postId,
    // Указываем тип данных JSON
    dataType: "json",
    // Если запрос успешен, то выполняем следующую функцию
    success: function (data) {
      // Очищаем список постов
      postList.empty();
      // Получаем текущий пост
      let post = data;
      // Создаем элемент li для поста
      let li = $("<li></li>");
      // Добавляем класс list-group-item для стилизации
      li.addClass("list-group-item");
      // Создаем элемент h5 для заголовка поста
      let h5 = $("<h5></h5>");
      // Добавляем текст заголовка поста
      h5.text(post.title);
      // Создаем элемент p для текста поста
      let p = $("<p></p>");
      // Добавляем текст текста поста
      p.text(post.body);
      // Добавляем элементы h5 и p в элемент li
      li.append(h5, p);
      // Добавляем элемент li в список постов
      postList.append(li);
    },
    // Если запрос неуспешен, то выводим ошибку в консоль
    error: function (error) {
      console.error(error);
    },
  });
}

// Добавляем обработчик события click на кнопку получения поста
getPost.on("click", function () {
  // Вызываем функцию для получения случайного поста
  getRandomPost();
});

// Определяем URL API
const url = "https://jsonplaceholder.typicode.com/posts";

// Создаем функцию для получения постов с помощью GET запроса
function getPosts() {
  // Используем jQuery для отправки AJAX запроса
  $.ajax({
    // Указываем метод GET
    method: "GET",
    // Указываем URL API
    url: url,
    // Указываем тип данных JSON
    dataType: "json",
    // Если запрос успешен, то выполняем следующую функцию
    success: function (data) {
      // Перебираем массив данных, полученных от API
      $.each(data, function (index, post) {
        // Создаем элемент li для каждого поста
        let li = $("<li></li>");
        // Добавляем класс list-group-item для стилизации
        li.addClass("list-group-item");
        // Создаем элемент h5 для заголовка поста
        let h5 = $("<h5></h5>");
        // Добавляем класс post-title для стилизации
        h5.addClass("post-title");
        // Добавляем текст заголовка поста
        h5.text(post.title);
        // Создаем элемент p для текста поста
        let p = $("<p></p>");
        // Добавляем класс post-body для стилизации
        p.addClass("post-body");
        // Добавляем текст текста поста
        p.text(post.body);
        // Добавляем элементы h5 и p в элемент li
        li.append(h5, p);
        // Добавляем элемент li в список постов
        $("#post-list").append(li);
      });
    },
    // Если запрос неуспешен, то выводим ошибку в консоль
    error: function (error) {
      console.error(error);
    },
  });
}

// Создаем функцию для создания поста с помощью POST запроса
function createPost() {
  // Получаем значения полей формы
  let userId = $("#user-id").val();
  let title = $("#post-title").val();
  let body = $("#post-body").val();
  // Создаем объект с данными для отправки
  let data = {
    userId: userId,
    title: title,
    body: body,
  };
  // Используем jQuery для отправки AJAX запроса
  $.ajax({
    // Указываем метод POST
    method: "POST",
    // Указываем URL API
    url: url,
    // Сериализуем данные в JSON
    data: JSON.stringify(data),
    // Указываем тип данных JSON
    dataType: "json",
    // Если запрос успешен, то выполняем следующую функцию
    success: function (data) {
      // Создаем элемент li для нового поста
      let li = $("<li></li>");
      // Добавляем класс list-group-item для стилизации
      li.addClass("list-group-item");
      // Создаем элемент h5 для заголовка поста
      let h5 = $("<h5></h5>");
      // Добавляем класс post-title для стилизации
      h5.addClass("post-title");
      // Добавляем текст заголовка поста
      h5.text(data.title);
      // Создаем элемент p для текста поста
      let p = $("<p></p>");
      // Добавляем класс post-body для стилизации
      p.addClass("post-body");
      // Добавляем текст текста поста
      p.text(data.body);
      // Добавляем элементы h5 и p в элемент li
      li.append(h5, p);
      // Добавляем элемент li в список постов
      $("#post-list").prepend(li);
      // Очищаем поля формы
      $("#user-id").val("");
      $("#post-title").val("");
      $("#post-body").val("");
    },
    // Если запрос неуспешен, то выводим ошибку в консоль
    error: function (error) {
      console.error(error);
    },
  });
}

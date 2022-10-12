// const isArrSubj = ["mathematics", "physics", "science", "mathematics", "physics", "biology", "physics"];

// // console.log(isArrSubj);
// // console.log(isArrSubj.indexOf("science"));

// //создаём новый массив без повторяющихся элементов
// const newMath = [];

// isArrSubj.map((obj, inx, arr) => {
//     // console.log(obj);
//     // console.log(inx);
//     // console.log(arr.indexOf(obj));

//     if (arr.indexOf(obj) === inx) newMath.push(obj);
// });
// console.log(newMath);

// ==========================================
// Задача 20/48


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Разглаживаем все массивы в один массив
// const allGenres = books.flatMap(book => book.genres);
// console.log(allGenres);
// // Создаём массив без повторений
// const uniqueGenres = allGenres.filter((book, index, arr) => (arr.indexOf(book) === index));
// console.log(uniqueGenres);

//======================================================================================================
//Задача 21/48


const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];

const MIN_RATING = 8;
const AUTHOR = "Bernard Cornwell";

// метод filter возвращает новый массив с книгами, рейтинг которых больше чем 8. Деструктуризация объекта
const topRatedBooks = books.filter(({ rating }) => rating <= MIN_RATING);
console.log(topRatedBooks);
// здесь новый массив с книгами Bernard Cornwell. Деструктуризация объекта
const booksByAuthor = books.filter(({ author }) => author === AUTHOR);
console.log(booksByAuthor);


 
import Book from "./Book";
const books = [
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
    title: "I Love You to the Moon and Back",
    author: "Amelia Hepworth",
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/91g%2BaK0nCnL._AC_UL200_SR200,200_.jpg",
    title: "The Four Winds: A Novel",
    author: "Kristin Hannah",
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/71OCIRNGvmL._AC_UL200_SR200,200_.jpg",
    title: "Out of Many, One: Portraits of America's Immigrants",
    author: "George W. Bush",
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL._AC_UL200_SR200,200_.jpg",
    title:
      "Rich Dad Poor Dad: What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not",
    author: "Robert T. Kiyosaki",
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/9131FGgieMS._AC_UL200_SR200,200_.jpg",
    title: "Killing the Mob: The Fight Against Organized Crime in America",
    author: "Bill O'Reilly",
  },
  {
    img: "https://images-na.ssl-images-amazon.com/images/I/813QkLg2LaL._AC_UL200_SR200,200_.jpg",
    title: "People We Meet on Vacation",
    author: "Emily Henry",
  },
];
function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book book={book} />;
      })}
    </section>
  );
}
export default BookList;

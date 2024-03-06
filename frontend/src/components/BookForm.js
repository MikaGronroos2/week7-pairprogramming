import { useField } from "../hooks/useField";
import { useBooks } from "../hooks/useBooks";

const BookForm = ({ setBooks }) => {
  const titleInput = useField("text");
  const title = titleInput.value;
  const authorInput = useField("text");
  const author = authorInput.value;
  const genreInput = useField("text");
  const genre = genreInput.value;
  const { handleBooks } = useBooks({ title, author, genre, setBooks });

  return (
    <form className="create" onSubmit={handleBooks}>
      <h3>Add a New Book</h3>

      <label>Title:</label>
      <input {...titleInput} />
      <label>Author:</label>
      <input {...authorInput} />
      <label>Genre:</label>
      <input {...genreInput} />
      <button>Add Book</button>
    </form>
  );
};

export default BookForm;

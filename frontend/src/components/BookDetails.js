const BookDetails = ({ _id, title, author, genre, createdAt, handleDelete }) => {

  const handleDel = () => {
    handleDelete(_id);
  }

  return (
    <div className="book-details">
      <h4>{title}</h4>
      <p>Author: {author}<br />
      Genre: {genre}
      </p>
      <span className="material-symbols-outlined" onClick={handleDel}>delete</span>
    </div>
  );
};

export default BookDetails;

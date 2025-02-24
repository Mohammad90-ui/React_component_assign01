// write the book component code here
const BookCard = ({ image, name, genre, author }) => {
    return (
      <div className="border rounded-lg shadow-lg p-4 max-w-xs">
        <img src={image} alt={name} className="w-full h-48 object-cover rounded-md" />
        <h2 className="text-xl font-bold mt-2">{name}</h2>
        <p className="text-gray-700">Genre: {genre}</p>
        <p className="text-gray-600">Author: {author}</p>
      </div>
    );
  };
  
  export default BookCard;
  

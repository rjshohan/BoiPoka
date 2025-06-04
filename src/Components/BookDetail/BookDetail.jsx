import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList } from "../../Utility/addToDb";
import { addToStoredWishList } from "../../Utility/addToWishList";

const BookDetail = () => {
  const { bookId } = useParams();

  const id = parseInt(bookId);

  const data = useLoaderData();

  const book = data.find((book) => book.bookId === id);

  const { bookId: currentBookId, image, author, tags } = book;

  const handleMarkAsRead = (id)=>{
    addToStoredReadList(id)
  }

  const handleMarkAsWishList = (id)=>{
    addToStoredWishList(id)
  }

  return (
    <div>
      <div className="hero  min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="bg-base-200 m-24">
            <img
              src={image}
              className="max-w-sm rounded-lg shadow-2xl bg-base-200"
            />
          </div>
          <div>
            <h1 className="text-5xl font-bold py-4">The Catcher in the Rye</h1>
            <h5 className="text-xl text-gray-700 ">By : {author} </h5>
            <div className="divider"></div>
            <p>{tags} </p>
            <div className="divider"></div>
            <p className="py-6">
              <span className="font-bold ">Review : </span>
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Debitis praesentium perspiciatis ratione natus sed error
              mollitia atque corrupti voluptate consequuntur.
            </p>
          <div className="divider"></div>
            <br />
            <button onClick={()=>handleMarkAsRead(bookId)} className="btn btn-accent btn-outline mr-4">Mark as Read</button>
            <button onClick={()=>handleMarkAsWishList(bookId)} className="btn btn-accent">Add to Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;

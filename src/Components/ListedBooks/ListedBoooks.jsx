import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadList } from "../../Utility/addToDb";
import { all } from "axios";
import Book from "../Book/Book";

const ListedBoooks = () => {

    const [readList,setReadList] = useState([]);

    const allBooks = useLoaderData();

    useEffect(()=>{
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id=>parseInt(id));
        console.log(storedReadList,allBooks,storedReadListInt);
        const readBookList = allBooks.filter(book=>storedReadListInt.includes(book.bookId));

        setReadList(readBookList)

    },[])

  return (
    <div>
      <h3 className="text-3xl my-8">Listed Books</h3>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box">
        <input
          type="radio"
          name="my_tabs_6"
          className="tab"
          aria-label="Read-List"
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6 ">
         <h2 className="text-2xl"> Books I read : {readList.length}</h2>
         {
            readList.map(book=><Book key={book.bookId} book={book}></Book>)
         }
        </div>

        <input
          type="radio"
          name="my_tabs_6"
          className="tab"
          aria-label="Wish-List"
          
        />
        <div className="tab-content bg-base-100 border-base-300 p-6 ">
         <h2 className="text-2xl"> My wish List</h2>
        </div>

      </div>
    </div>
  );
};

export default ListedBoooks;

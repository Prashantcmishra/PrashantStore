import React from 'react'
// import Books from "/Books.jpg"
function Cards({item}) {
  // console.log(item);
  return (
    <>
    <div className='mt-5 my-3 p-3'>
      <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200">
      <figure>
        <img
         src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149330605.jpg?t=st=1728013398~exp=1728016998~hmac=4519fc20c826c97367c7978f336bd03b9af8f5d494b3b3bcd6a673ada06ddcfa&w=740" alt="Image not found" 
         />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {item.name}
          <div className="badge badge-secondary">
            {item.category}
          </div>
        </h2>
        <p>{item.title}</p>
        <div className="card-actions justify-between">
          <div className="badge badge-outline">${item.price}</div>
          <div className=" cursor-pointer badge badge-outline hover:bg-pink-500 duration-300 hover:text-white">Buy Now</div>
        </div>
      </div>

      </div>
    </div>
    
    </>
  )
}

export default Cards

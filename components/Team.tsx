
const Team = () => {
    
    return (
       <div className="w-full flex flex-wrap bg-gray-100 rounded-md justify-center">
           <h2 className="w-full text-center font-bold md:text-5xl text-3xl mt-20 mb-8">Náš tím</h2>
           <div className="md:w-1/2 flex flex-wrap justify-center">
               <img className="max-h-96 rounded-md" src="/images/saska.jpeg" alt="Alexandra Fujeríková" />
               <h3 className="w-full text-center text-2xl font-medium mb-10">Alexandra Fujeríková</h3>
           </div>
           <div className="md:w-1/2 flex flex-wrap justify-center">
               <img className="max-h-96 rounded-md" src="/images/riso.jpg" alt="Richard Kentoš" />
               <h3 className="w-full text-center text-2xl font-medium mb-10">Richard Kentoš</h3>
           </div>
       </div>
    )
}


export default Team
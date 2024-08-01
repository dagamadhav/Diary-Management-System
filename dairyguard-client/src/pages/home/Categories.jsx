import React from 'react'


const categoryItems = [
     {id: 1, title:"Butter", image: "/images/category/img1.png"},
     {id: 2, title:"Paneer", image: "/images/category/img2.png"}, 
     {id: 3, title:"Yogurt", image: "/images/category/img3.jpeg"}, 
     {id: 4, title:"Cheese", image: "/images/category/img4.png"},    
   
]


const Categories = () => {
  return (
    <div className='section-container py-14 bg-gray-100'>
        <div className='text-center'>
            <p className='subtitle'>Featured Products</p>
            <h3 className='title'>Milk Products</h3>
        </div>
        {/* categories */}
        <div className='flex flex-col sm:flex-row flex-wrap gap-3 justify-around items-center mt-12'>
            {
                categoryItems.map((item, i) => (
                    <div key={i} className='shadow-lg rounded-md bg-white hover:bg-green py-8 px-8 w-72 mx-auto text-center cursor-pointer hover:-translate-y-4 transition-all duration-300 z-10'>
                        <div className='w-full mx-auto flex items-center justify-center'><img src={item.image} alt="" className='bg-[#C1F1C6] p-5 rounded-full w-28 h-28' /></div>
                        <div className='mt-5 space-y-1'>
                            <h5 className='text-[#1E1E1E] hover:text-white font-semibold'>{item.title}</h5>
                            <p className='text-secondary text-sm'>{item.despriction}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Categories
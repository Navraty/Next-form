'use client'

import Image from 'next/image'

export default function Home() {
  // commence a ecrire icciii
  // const handlesubmit =(e) ->{

  //   e.prevendefault() 
     
  //
  function handlesumbmit(e){
    e.preventDefault()
    var nom =document.getElementById('nom').value;
    var prenom=document.getElementById('prenom').value;
    var genre=document.getElementById('genre').value;
    var email=document.getElementById('email').value;
    // alert(nom);
    console.log(nom);
    console.log(prenom);
    console.log(genre);
    console.log(email);
    
  }
  
  return (
    <main className=" ">
      <nav className='flex justify-between p-2 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% 
                      lg:flex lg:justify-evenly lg:p-5 md:flex md:justify-evenly md:p-5'>

        <span className='text-2xl text-white italic'>logo</span>

        <ul className='flex gap-6 text-white hidden
                      lg:flex lg:gap-6 lg:text-xl lg:block md:block md:flex md:text-xl'>
          <li><a href='#'>Acceuil</a></li>
          <li><a href='#'>A propos</a></li>
          <li><a href='#'>Blog</a></li>
          <li><a href='#'>Acceuil</a></li>
        </ul>
        <button className='bg-violet-400  hover:bg-violet-600 text-white font-semibold text-sm px-6 py-2 rounded'>Enregistrer</button>
      </nav>
      
      <div className=' bg-gray-100 shadow-md rounded mt-10 ml-[10%] w-[80%] px-4 py-6  text-center
                         lg:px-4 lg:py-10 lg:w-[30%] lg:ml-[30%] md:w-[30%] md:ml-[30%]'>
        <form className="flex flex-col gap-5">
          <span className="px-5 ml-3 font-semibold text-sm">Formulaire de Contact</span>
          <input type='text' className='border-2 hover:bg-gray-300 hover:text-white  border-gray-600 shadow apparence-none border rounded px-2 py-2 text-black' placeholder='Nom' id='nom'/>
          <input type='text' className='border-2 hover:bg-gray-300 hover:text-white border-gray-600 px-2 py-2 text-black border rounded' placeholder='Prenom' id='prenom'/>
          <input type='text' className='border-2 hover:bg-gray-300 hover:text-white duration  border-gray-600 shadow apparence-none border rounded px-2 py-2 text-black' placeholder='votre genre'id='genre'  />
          <input type='email' className='border-2 border-gray-600  hover:bg-gray-300 hover:text-white px-2 py-2 text-black border rounded' placeholder='Email' id='email'/>
          <button onClick={handlesumbmit} type='submit'className=' p-2 px-2 bg-violet-400 hover:bg-violet-600 active:bg-violet-700 text-white w-[40%] rounded  ml-20'>
            Envoyer
           </button>
        </form>
      </div>

      
     
    </main>
  )
}

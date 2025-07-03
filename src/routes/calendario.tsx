import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/calendario')({
  component: RouteComponent,
})

function RouteComponent() {
  return (<div>
    <header className="bg-blue-900 text-white py-4 px-6 flex justify-between items-center">
    <a href="index.html"><img src="./imgs/GLOVElogo.png" alt="logo GLOVE"/></a>
    
    <nav className="flex items-center gap-8">
      <a href="/signin.html" className="hover:underline">Vista Sign In</a>
      <a href="/signup.html" className="hover:underline">Vista Sign Up</a>
      <a href="/horario.html" className="hover:underline">Horario</a>
      <a href="/calendario.html" className="hover:underline">Calendario</a>
      <a href="/perfil.html" className="hover:underline">Nombre usuario</a>
      <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">

        <span className="text-purple-700 font-bold text-lg">🖐️</span>
      </div>
    </nav>
  </header>

  
  <main className="flex px-8 py-6 gap-8">

    
    <section className="flex-1 bg-gray-200 rounded-xl shadow-sm">
      <img src="imgs/preview-calendario.png" alt="preview-calendario"/>
    </section>

     
    <aside className="w-full max-w-md flex flex-col gap-3 pl-1">
  <div className="bg-blue-900 text-white rounded-xl flex items-center gap-4 px-4 py-4">
    
    
    <div className="flex flex-col items-center justify-center">
      <span className="text-xl leading-none">📋</span>
      <span className="text-xs font-semibold">List Courses</span>
    </div>

    
    <input 
      type="text" 
      placeholder="Agregar..." 
      className="flex-grow rounded-full px-6 py-2 text-sm bg-white text-black focus:outline-none"
    />

    <button className="w-10 h-10 border border-white rounded-md flex items-center justify-center text-lg hover:bg-blue-800">+</button>

  </div>
  
  <hr className="border-blue-900 w-full mt-4" />
</aside>


  </main>
  </div>)
}

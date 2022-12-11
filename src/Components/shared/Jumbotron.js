import React from 'react'

const Jumbotron = () => {
  return (
    <div class="flex justify-center mx-4 mb-8">
      <div class="mt-4 md:w-1/2 md:flex  md:bg-white rounded-lg">
        <div>
          <img class="rounded-lg md:w-full"
            src="https://st.depositphotos.com/1915171/5078/v/600/depositphotos_50782941-stock-illustration-user-sign-icon-person-symbol.jpg"
            alt=""/>
        </div>
        <div class="relative mx-2 p-2 shadow-lg bg-white md:bg-transparent rounded-lg -mt-2">
          <h2 class="text-2xl tracking-tighter font-semibold uppercase text-gray-900  md:text-lg">Agente Secreto</h2>
          <p class="text-gray-700 leading-snug">Diseñador de memes, obtiene buenos resultados ya!.</p>
          <div class="text-sm mt-2 font-semibold text-gray-700">USD $15</div>
          <div class="text-xs mt-2 text-yellow-700">&starf;&starf;&starf;&starf;&star; /36 reseñas</div>

        </div>
      </div>
    </div>
  )
}

export default Jumbotron
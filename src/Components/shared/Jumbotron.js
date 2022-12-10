import React from 'react'

const Jumbotron = () => {
  return (
    <div class="flex justify-center bg-gray-400 mx-4 mb-8">
      <div class="mt-4 md:w-1/2 md:flex  md:bg-white rounded-lg">
        <div>
          <img class="rounded-lg md:w-full"
            src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&h=500&q=80"
            alt=""/>
        </div>
        <div class="relative mx-2 p-2 shadow-lg bg-white md:bg-transparent rounded-lg -mt-2">
          <h2 class="text-2xl tracking-tighter font-semibold uppercase text-gray-900  md:text-lg">Hamburguesa con Queso</h2>
          <p class="text-gray-700 leading-snug">Hamburguesa con queso y aderezo chipotle.</p>
          <div class="text-sm mt-2 font-semibold text-gray-700">USD $15</div>
          <div class="text-xs mt-2 text-yellow-700">&starf;&starf;&starf;&starf;&star; /36 reseñas</div>

        </div>
      </div>
    </div>
  )
}

export default Jumbotron
"use client"
import Avvvatars from "avvvatars-react";
import { useState } from "react";

export default function Home() {

  const [name, setName] = useState('');

  const [type, setType] = useState('character');

  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="max-w-3xl mx-auto py-6 space-y-6">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Avatar Generator</h2>
        <div className="flex items-center space-x-12 bg-white p-6 rounded-lg shadow">
          <div className="w-full">
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
            <div className="mt-2">
              <input value={name} onChange={event => setName(event.target.value)} type="email" name="email" id="email" className="block w-full rounded-md border-0 py-1.5 pl-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="you@example.com" />
            </div>
          </div>
          <div>
            <Avvvatars value={name} size={64} style={type === 'character' ? 'character' : 'shape'} />
          </div>
        </div>

        <span className="isolate inline-flex rounded-md shadow-sm">
          <button onClick={() => setType('character')} type="button" className={`relative inline-flex items-center rounded-l-md ${type === 'character' ? 'bg-gray-100' : 'bg-white'} px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10`}>
            Character
          </button>
          <button onClick={() => setType('shape')} type="button" className={`relative -ml-px inline-flex items-center rounded-r-md ${type === 'shape' ? 'bg-gray-100' : 'bg-white'} px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-10`}>
            Shape
          </button>
        </span>

      </div>
    </div>
  );
}

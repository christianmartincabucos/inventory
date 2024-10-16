import React from 'react'

type Props = {}

const SalesCard = (props: Props) => {
  return (
    <div className="max-w-full bg-white rounded-xl drop-shadow-xl">
        <div className="grid grid-cols-2 gap-0">
            <div className="flex items-center justify-center bg-gray-100 p-6 rounded-l-xl">
                <div className="">
                    <h5 className="text-2xl sm:text-xl font-normal tracking-tight text-gray-900 dark:text-white">Invoice</h5>
                    <p>100 <span className="text-lg text-green-400">+5</span></p>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <button type="button" className="text-blue-500 bg-white-100 hover:bg-white-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2">
                    <svg className="w-4 h-4 me-2 -ms-1 text-blue-500" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="ethereum" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"></path></svg>
                    View Orders
                </button>
            </div>
        </div>
    </div>
  )
}

export default SalesCard
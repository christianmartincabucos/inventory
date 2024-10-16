import React from 'react'

type Props = {}

const InvoicePreview = (props: Props) => {
  return (
    <div className="text-3xl font-bold max-w-full p-6 bg-white rounded-xl drop-shadow-xl sm:rounded-lg">
        <div className="flex justify-between">
            <h5 className="text-2xl sm:text-xl font-bold tracking-tight text-gray-900 dark:text-white">Invoice</h5>
            <form className="">
            <select defaultValue={'Year'} id="countries_disabled" className="rounded-full text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option value="Year">Year</option>
            </select>
            </form>
        </div>
        <div className="flex justify-between">
            <div>
                <h6 className="text-lg font-normal">Overdue Invoice</h6>
                <p className='mb-8'>100</p>
            
                <h6 className="text-lg font-normal">Overdue Amount</h6>
                <p>$33, 000</p>
            </div>
            
        </div>
    </div>

  )
}

export default InvoicePreview
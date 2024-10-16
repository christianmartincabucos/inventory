import OverciewCard from "./OverciewCard"
import Orders from "./Orders"
import Summary from "./Summary"
import SalesCard from "./SalesCard"
import InvoicePreview from "./InvoicePreview"
import { FileIcon, CardStackIcon, ClockIcon, ReaderIcon } from '@radix-ui/react-icons'

const Dashboard = () => {
  return (
    <>
      <h6 className="text-3xl font-bold">Dashboard</h6> 
      <div className="w-full bg-white rounded-xl my-5 dark:bg-gray-800 dark:border-gray-700">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-2 mb-4">
            <OverciewCard cardName="Invoice" cardValue={25} icon={<ReaderIcon width={60} height={60} className="text-orange-400"/>} cardClass="bg-orange-50"/>
            <OverciewCard cardName="Delivered" cardValue={12} icon={<CardStackIcon width={60} height={60} className="text-blue-400"/>} cardClass="bg-blue-100"/>
            <OverciewCard cardName="Pending" cardValue={24} icon={<ClockIcon width={60} height={60} className="text-red-400"/>} cardClass="bg-red-50"/>
            <OverciewCard cardName="Sales" cardValue={100} icon={<FileIcon width={60} height={60} className="text-green-400"/>} cardClass="bg-green-50"/>
        </div>
      </div>

        {/* <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="mb-4 rounded">
              <Summary/>
          </div>
        </div> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2 sm:gap-2 mb-4">
          <InvoicePreview />
          <Orders />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2 sm:gap-2 mb-4">
          <SalesCard />
        </div>
    </>
  )
}

export default Dashboard
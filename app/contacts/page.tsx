import { PersonIcon } from "@radix-ui/react-icons"

type Props = {}

const Contacts = (props: Props) => {
  return (
    <div className="p-4 text-3xl font-bold">
        <div className="flex justify-start">
            {/* <PersonIcon className="flex items-baseline mb-0"/> */}
            <h6>Contacts</h6> 
        </div>
    </div>
  )
}

export default Contacts
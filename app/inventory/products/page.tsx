import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"

const getData = (): Promise<Payment[]> =>{
  // Fetch data from your API here.
  return [
    {
      "id": "728ed52f",
      "amount": 100,
      "status": "pending",
      "email": "m@example.com"
    },
    {
      "id": "489e1d42",
      "amount": 125,
      "status": "processing",
      "email": "example@gmail.com"
    },
    {
      "id": "a1b2c3d4",
      "amount": 150,
      "status": "completed",
      "email": "user1@example.com"
    },
    {
      "id": "e5f6g7h8",
      "amount": 200,
      "status": "pending",
      "email": "user2@example.com"
    },
    {
      "id": "i9j0k1l2",
      "amount": 175,
      "status": "processing",
      "email": "user3@example.com"
    },
    {
      "id": "m3n4o5p6",
      "amount": 110,
      "status": "completed",
      "email": "user4@example.com"
    },
    {
      "id": "q7r8s9t0",
      "amount": 130,
      "status": "pending",
      "email": "user5@example.com"
    },
    {
      "id": "u1v2w3x4",
      "amount": 140,
      "status": "processing",
      "email": "user6@example.com"
    },
    {
      "id": "y5z6a7b8",
      "amount": 160,
      "status": "completed",
      "email": "user7@example.com"
    },
    {
      "id": "c9d0e1f2",
      "amount": 180,
      "status": "pending",
      "email": "user8@example.com"
    },
    {
      "id": "g3h4i5j6",
      "amount": 190,
      "status": "processing",
      "email": "user9@example.com"
    },
    {
      "id": "k7l8m9n0",
      "amount": 210,
      "status": "completed",
      "email": "user10@example.com"
    }
  ]
}

const Products = async() => {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
export default Products;
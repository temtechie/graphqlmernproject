import React from 'react'
import { gql, useQuery } from '@apollo/client';
import ClientRow from './ClientRow';
import { GET_ALL_CLIENTS } from '../queries/clientQueries';
import Spinner from './Spinner';

// const GET_ALL_CLIENTS = gql`
//     query getClients {
//         clients {
//             name
//             email
//             phone
//             id
//         }
//     }
// `

export default function Client() {

    const { data, loading, error } = useQuery(GET_ALL_CLIENTS);
    const { clients} = data ?? [];

    if (loading) return <Spinner />
    if (error) return <h4>Error: Failed to query data...</h4>

    console.log("data", clients);


  return (
    <table className='table table-hover mt-3'>
      <thead>
        <tr>
          <th>S/No.</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {clients?.map((client, idx) => (
          // <tr key={idx}>
          //   <td>{idx + 1}</td>
          //   <td>{client.name}</td>
          //   <td>{client.email}</td>
          //   <td>{client.phone}</td>
          // </tr>
          <ClientRow client={client} key={idx} idx={idx}/>
        ))}
      </tbody>
    </table>
  )
}

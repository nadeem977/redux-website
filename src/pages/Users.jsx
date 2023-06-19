import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

const Users = () => {
  const [data, setData] = useState([]);
  const [ids, setIds] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://abubakar.pythonanywhere.com/todoapi/${ids}`);
        const json = await response.json();
        setData(json.todo);
      } catch (error) {
        console.log(error, 'APIs not working properly');
      }
    };

    fetchData();
  }, [ids]);

  const filteredData = data.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );


  const handeluserid=(e)=>{
     let id=e.target.value
     setIds(id)
     console.log(id,'this is ids')
  }

  return (
    <>
      <div className="container mt-5 pt-5 text-center">
        <h1>Add Users</h1>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search..."
        />
        <input type="text" onChange={handeluserid}/>
        {filteredData.map((user) => (
          <Table striped bordered hover key={user.id}>
            <thead>
              <tr>
                <th>{user.name}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{user.status}</td>
              </tr>
            </tbody>
          </Table>
        ))}
      </div>
    </>
  );
};

export default Users;

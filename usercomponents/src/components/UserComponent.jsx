import React from 'react';
import { useFetch } from '../hooks/useFetch';

export const UserComponent = () => {
  const { data, isLoading, errors } = useFetch('https://rickandmortyapi.com/api/character');

  return (
    <>
      <h1>Lista de usuarios</h1>
      <hr />

      {isLoading ? (
        <p>Cargando...</p>
      ) : errors ? (
        <p>Error: {errors}</p>
      ) : (
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Species</th>
              <th scope="col">Gender</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr key={user.id}>
                <th scope="row">{user.id}</th>
                <th>{user.name}</th>
                <th>{user.species}</th>
                <th>{user.gender}</th>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

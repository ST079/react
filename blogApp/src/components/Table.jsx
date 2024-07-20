const Table = ({ header, data }) => {
  return (
    <div>
      <table border={1}>
        <thead>
          {header.map((heads, index) => {
            return (
              <tr key={index}>
                <th>{heads.id}</th>
                <th>{heads.name}</th>
                <th>{heads.email}</th>
                <th>{heads.address}</th>
              </tr>
            );
          })}
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.address}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={4}>Sorry couldnt find any data</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

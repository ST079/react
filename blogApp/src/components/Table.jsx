const Table = ({ header, body }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            {header.map((heads, index) => {
              return <th key={index}>{heads}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {body.length > 0 ? (
            body.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>
                    <img src={user.image} alt="" width={200} height={200} />
                  </td>
                  <td>{user.name}</td>
                  <td>{user.ingredients}</td>
                  <td>{user.instructions}</td>
                  <td>{user.difficulty}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan={header.length}>Sorry couldnt find any data</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

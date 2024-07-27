const Table = ({ header, data }) => {
  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            {header.map((heads, index) => {
              return <th key={index}>{heads}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{user.title}</td>
                  <td>{user.body}</td>
                  <td>{user.tags}</td>
                  <td>{JSON.stringify(user.reactions)}</td>
                  <td>{user.views}</td>
                  <td>{user.userId}</td>
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

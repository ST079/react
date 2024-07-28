const Table = ({ header, body }) => {
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
          {body.length > 0 ? (
            body.map((user, index, header) => {
              return (
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.title}</td>
                  <td>{user.description}</td>
                  <td>{user.category}</td>
                  <td>{user.price}</td>
                  <td>{user.discountPercentage}</td>
                  <td>{user.rating}</td>
                  <td>{user.stock}</td>
                  <td>{user.tags}</td>
                  <td>{user.brand}</td>
                  <td>{user.sku}</td>
                  <td>{user.weight}</td>
                  <td>{JSON.stringify(user.dimensions)}</td>
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

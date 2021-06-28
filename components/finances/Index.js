import Link from "next/link";

const Index = ({ data }) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Category</th>
            <th scope="col">Centralized</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((d) => (
            <tr key={d.name}>
              <td>
                <Link href={d.website_url}>
                  <a>{d.name}</a>
                </Link>
              </td>
              <td>{d.category}</td>
              <td>{d.centralized}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Index;

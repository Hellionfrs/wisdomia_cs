interface Props {
  id: string;
  description: string;
}

export default function SchoolLevel({ data }: { data: Props }) {
  console.log(data);
  return (
    <div>
      <h1>{data.description}</h1>
      <small>{data.id}</small>
    </div>
  );
}

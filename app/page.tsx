import { Card } from "components/Card";

export default function Page() {
  return (
    <div className="flex flex-row gap-3">
      <Card
        url="https://cloud.modyocdn.com/uploads/651e2381-dc33-43fc-8762-58079ffb36d1/original/bird.jpg"
        title="bird"
      />
      <Card
        url="https://cloud.modyocdn.com/uploads/c10dc024-71f4-4a60-a3b7-2c53ffe2522d/original/dog.jpg"
        title="dog"
      />
    </div>
  );
}

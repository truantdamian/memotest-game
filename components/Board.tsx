import { Card } from "./Card";

export const Board = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-2 md:flex-row md:justify-between">
        <div>
          <div>NAME: DAMIAN </div>
          <div className="flex flex-row gap-3 items-center">
            <div>
              HITS:<b>4</b>
            </div>
            <div>
              MISS:<b>5</b>
            </div>
          </div>
        </div>

        <div>
          <button className="border rounded-md py-1 px-6 text-slate-600 bg-white w-full">
            NEW GAME
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 xs:grid-cols-3 md:grid-cols-4 max-w-3xl">
        <Card
          url="https://cloud.modyocdn.com/uploads/651e2381-dc33-43fc-8762-58079ffb36d1/original/bird.jpg"
          title="bird"
        />
        <Card
          url="https://cloud.modyocdn.com/uploads/c10dc024-71f4-4a60-a3b7-2c53ffe2522d/original/dog.jpg"
          title="dog"
        />
        <Card
          url="https://cloud.modyocdn.com/uploads/651e2381-dc33-43fc-8762-58079ffb36d1/original/bird.jpg"
          title="bird"
        />
        <Card
          url="https://cloud.modyocdn.com/uploads/c10dc024-71f4-4a60-a3b7-2c53ffe2522d/original/dog.jpg"
          title="dog"
        />
        <Card
          url="https://cloud.modyocdn.com/uploads/651e2381-dc33-43fc-8762-58079ffb36d1/original/bird.jpg"
          title="bird"
        />
        <Card
          url="https://cloud.modyocdn.com/uploads/c10dc024-71f4-4a60-a3b7-2c53ffe2522d/original/dog.jpg"
          title="dog"
        />
        <Card
          url="https://cloud.modyocdn.com/uploads/651e2381-dc33-43fc-8762-58079ffb36d1/original/bird.jpg"
          title="bird"
        />
        <Card
          url="https://cloud.modyocdn.com/uploads/c10dc024-71f4-4a60-a3b7-2c53ffe2522d/original/dog.jpg"
          title="dog"
        />
        <Card
          url="https://cloud.modyocdn.com/uploads/651e2381-dc33-43fc-8762-58079ffb36d1/original/bird.jpg"
          title="bird"
        />
        <Card
          url="https://cloud.modyocdn.com/uploads/c10dc024-71f4-4a60-a3b7-2c53ffe2522d/original/dog.jpg"
          title="dog"
        />
        <Card
          url="https://cloud.modyocdn.com/uploads/651e2381-dc33-43fc-8762-58079ffb36d1/original/bird.jpg"
          title="bird"
        />
        <Card
          url="https://cloud.modyocdn.com/uploads/c10dc024-71f4-4a60-a3b7-2c53ffe2522d/original/dog.jpg"
          title="dog"
        />
      </div>
    </div>
  );
};

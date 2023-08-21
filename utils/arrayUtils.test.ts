import { duplicate, shuffle } from "./arrayUtils";

const mockArray = [
  {
    uuid: "f0753a4f-87b2-484d-aeb1-a22c3278cb50",
    url: "https://cloud.modyocdn.com/uploads/f0753a4f-87b2-484d-aeb1-a22c3278cb50/original/bear.jpg",
    title: "Bear",
  },
  {
    uuid: "651e2381-dc33-43fc-8762-58079ffb36d1",
    url: "https://cloud.modyocdn.com/uploads/651e2381-dc33-43fc-8762-58079ffb36d1/original/bird.jpg",
    title: "Bird",
  },
  {
    uuid: "bf9df521-88bb-44f5-8853-d7f9a5f4aa60",
    url: "https://cloud.modyocdn.com/uploads/bf9df521-88bb-44f5-8853-d7f9a5f4aa60/original/cat.jpg",
    title: "Cat",
  },
  {
    uuid: "1072dca9-1c9b-4a76-abfb-1d70d7dd861b",
    url: "https://cloud.modyocdn.com/uploads/1072dca9-1c9b-4a76-abfb-1d70d7dd861b/original/deer.jpg",
    title: "Deer",
  },
  {
    uuid: "c10dc024-71f4-4a60-a3b7-2c53ffe2522d",
    url: "https://cloud.modyocdn.com/uploads/c10dc024-71f4-4a60-a3b7-2c53ffe2522d/original/dog.jpg",
    title: "Dog",
  },
];

describe("array utils: duplicate", () => {
  test("expect double length of input array", () => {
    const result = duplicate(mockArray);

    expect(result.length).toBe(mockArray.length * 2);
  });

  test("random element of array must be twice", () => {
    const result = duplicate(mockArray);

    const index = Math.floor(Math.random() * result.length);

    const elementToSearch = result[index];

    const searchResult = result.filter((x) => x.uuid === elementToSearch.uuid);

    expect(searchResult.length).toBe(2);
  });
});

describe("array utils: shuffle", () => {
  test("expect elements of array in differents places", () => {
    const result = shuffle(mockArray);

    let shuffled = false;

    result.every((element, index) => {
      if (element.uuid !== mockArray[index].uuid) {
        shuffled = true;
        return false;
      }
    });

    expect(shuffled).toBe(true);
  });
});

var Data = [];
var sampleData = [
  {
    id: "123",
    name: "Samuel Agbenyo",
    image: require("../assets/images/user.png"),
  },
  {
    id: "456",
    name: "John Teye",
    image: require("../assets/images/user.png"),
  },
  {
    id: "789",
    name: "Bismark Yamoah",
    image: require("../assets/images/user.png"),
  },
];

var i = 0,
  j = 0;
while (i < 6) {
  Data = Data.concat(
    sampleData.map(function (value) {
      value.id = value.id + j;
      j++;
      return value;
    })
  );
  i++;
}

export const data = Data;

const faker = require("faker");

function genrateData(count, fields) {
  const dummyData = [];

  for (let i = 0; i < count; i++) {
    const item = {};
    fields.forEach((field) => {
      switch (field.type) {
        case "string":
          item[field.name] = faker.random.word();
          break;
        case "number":
          item[field.name] = faker.random.number();
          break;
        case "image":
          item[field.name] = faker.image.imageUrl();
          break;
        // Add more types as needed
      }
    });
    dummyData.push(item);
  }

  return dummyData;
}

module.exports = genrateData;

exports.seed = function (knex) {
  return knex("founders")
    .del()
    .then(function () {
      return knex("founders").insert([
        {
          founderFirstName: "Jennifer",
          founderLastName: "Sibley",
          founderTitle: "CEO",
          companyId: 1,
        },
        {
          founderFirstName: "Tara",
          founderLastName: "Fick",
          founderTitle: "CTO",
          companyId: 3,
        },
        {
          founderFirstName: "Alex",
          founderLastName: "Foreman",
          founderTitle: "VP of Product",
          companyId: 1,
        },
        {
          founderFirstName: "Liz",
          founderLastName: "Dilman",
          founderTitle: "CEO",
          companyId: 2,
        },
        {
          founderFirstName: "Kelly",
          founderLastName: "Stoutsman",
          founderTitle: "Marketing Director",
          companyId: 4,
        },
      ]);
    });
};

exports.seed = function (knex) {
  return knex("companies")
    .del()
    .then(function () {
      return knex("companies").insert([
        {
          companyName: "Amazon",
          companyCity: "Seattle",
          companyState: "WA",
          companyDescription:
            "Amazon.com, Inc. is an American multinational technology company based in Seattle, Washington, which focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
          foundedDate: "1996-05-02",
        },
        {
          companyName: "Google",
          companyCity: "Menlo Park",
          companyState: "CA",
          companyDescription:
            "Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware.",
          foundedDate: "1998-09-04",
        },
        {
          companyName: "GitHub",
          companyCity: "Denver",
          companyState: "CO",
          companyDescription:
            "Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.",
          foundedDate: "2016-08-02",
        },
        {
          companyName: "Target",
          companyCity: "Minneapolis",
          companyState: "MN",
          companyDescription:
            "Target Corporation is an American retail corporation. The eighth-largest retailer in the United States, it is a component of the S&P 500 Index. Its largest competitors, Walmart and Amazon.com, are the first and second largest retailers, respectively",
          foundedDate: "1991-06-04",
        },
      ]);
    });
};

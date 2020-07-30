import React from "react";

const sentenceStarters = {
  as: "As",
  want: "I want",
  so: "So that",
  given: "Given",
  when: "When",
  then: "Then"
};

const Output = ({ fields }) => {
  return (
    <>
      <pre>{JSON.stringify(fields, null, 2)}</pre>
      {`<h1>${fields.title}</h1>`}
      <br />
      {`<h2>User Story</h2>`}
      <br />
      {Object.keys(fields.userStory).map((key) => (
        <>
          {`<p><strong>${sentenceStarters[key]}</strong> ${fields.userStory[key]}</p>`}
          <br />
        </>
      ))}
      {`<h2>Scenarios</h2>`}
      <br />
      {Object.keys(fields.scenarios).map((key) => {
        const scenario = fields.scenarios[key];
        return (
          <>
            {Object.keys(scenario).map((key) => {
              if (key === "title") {
                return (
                  <>
                    {`<h3>${scenario.title}</h3>`}
                    <br />
                  </>
                );
              } else {
                return (
                  <>
                    {`<p><strong>${sentenceStarters[key]}</strong> ${scenario[key]}</p>`}
                    <br />
                  </>
                );
              }
            })}
          </>
        );
      })}
    </>
  );
};

export default Output;

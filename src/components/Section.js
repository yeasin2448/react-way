import Content from "./Content";

function Section({ theme }) {
  return (
    <div>
      <h1 className="text-black text-lg font-medium text-center">
        This is a section
      </h1>
      <Content theme={theme} />
    </div>
  );
}

export default Section;

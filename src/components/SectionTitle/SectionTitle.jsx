const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="w-4/12 text-center mx-auto">
      <p className="text-yellow-600 mb-2">--- {subHeading} ---</p>
      <h3 className="text-3xl border-y-4 my-4 uppercase">{heading}</h3>
    </div>
  );
};

export default SectionTitle;

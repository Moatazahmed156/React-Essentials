function ConceptCard({ image, Title, Description }) {
  return (
    <div className="flex flex-col items-center p-4">
      <img src={image} alt="" className="size-48 " />
      <h4 className="text-white text-xl font-bold mb-4">{Title}</h4>
      <p className="text-wrap text-center text-[#8964b0] font-bold max-md:w-[70%]">
        {Description}
      </p>
    </div>
  );
}
export default ConceptCard;

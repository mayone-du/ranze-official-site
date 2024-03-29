const SubPageMainVisual: React.VFC<{
  title: string;
  subText: string;
  bgImgPath?: string;
}> = ({ title, subText, bgImgPath }) => {
  return (
    <>
      <article
        className="bg-gray-100 text-custom-darkgray bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${bgImgPath})` }}
      >
        <section className="md:py-40 py-24 flex flex-col items-center justify-center">
          <h1 className="md:text-6xl text-3xl border-b-4 border-custom-darkgray font-bold">
            {title}
          </h1>
          <p className="md:py-4 py-2">{subText}</p>
        </section>
      </article>
    </>
  );
};

export { SubPageMainVisual };

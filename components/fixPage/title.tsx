interface TitleProps {
  title1: string;
  title2: string;
  title1Styles?: string;
  title2Styles?: string;
  paraStyles?: string;
}

export default function Title({
  title1,
  title2,
  title1Styles,
  title2Styles,
  paraStyles,
}: TitleProps) {
  return (
    <div className={title1Styles}>
      <h2 className={title2Styles}>
        {title1}
        <span className="text-destructive"> {title2}</span>
      </h2>
      <p className={paraStyles}>
        Discover Best Deals on top-quality products, Crafted <br />
        to evaluate your everyday experience.
      </p>
    </div>
  );
}

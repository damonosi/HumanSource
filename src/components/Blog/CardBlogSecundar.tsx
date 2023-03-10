import Image, { StaticImageData } from "next/image";
import Link from "next/link";
interface ICardBlogSecundar {
  src: StaticImageData;
  data: string;
  descriere: string;
  categorie: string;
  slug: string;
}
const CardBlogSecundar = ({
  src,
  data,
  descriere,
  categorie,
  slug,
}: ICardBlogSecundar) => {
  return (
    <Link
      className="cursor-pointer hover:bg-gray-300"
      href={`/bloguri/${slug}`}
    >
      <div className="flex flex-col gap-5" id="container-card-blog-secundar">
        <div className="flex flex-col">
          <Image alt="imagine-blog" src={src} />
        </div>
        <div className="flex flex-col gap-2">
          {" "}
          <span className="text-start text-colors-gri-brand opacity-50">
            {data}
          </span>
          <h4 className="text-start font-bold text-colors-gri-brand">
            {descriere}
          </h4>
          <p className="text-start text-red-600">{categorie}</p>
        </div>
      </div>
    </Link>
  );
};

export default CardBlogSecundar;

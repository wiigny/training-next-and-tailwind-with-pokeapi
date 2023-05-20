import Image from "next/image";

interface IListImageProps {
  sprites: IPokeSprites;
  imageActual: string;
  click: (url: string) => void;
}

export function ListImage({ sprites, imageActual, click }: IListImageProps) {
  const values: Array<string | null> = Object.values(sprites);

  return (
    <ul>
      {values.map((url, index) => {
        return (
          typeof url == "string" &&
          url != imageActual && (
            <li
              key={index}
              onClick={() => click(url)}
              className="cursor-pointer max-w-[100px] max-h-[100px]"
            >
              <figure className="border-2">
                <Image src={url} alt="" width={100} height={100} />
              </figure>
            </li>
          )
        );
      })}
    </ul>
  );
}

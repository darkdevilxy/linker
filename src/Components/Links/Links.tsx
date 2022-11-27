import "./Links.scss";

import { FirebaseStorage, ref } from "firebase/storage";
import { useStorage, useStorageDownloadURL } from "reactfire";

interface Props {
  picture: string;
  link: string;
  title: string;
}

export default function ({ picture, link, title }: Props): JSX.Element {
  const ref_storage = ref(useStorage(), picture && picture);

  const { status, data: image_url } = useStorageDownloadURL(
    ref_storage && ref_storage
  );

  function handle_click(img_url: string) {
    window.open(img_url, "_blank");
  }

  return (
    <div onClick={() => handle_click(link)} className="gradient_container">
      <div className="links_container">
        <img src={image_url && image_url} alt="" className="link_image" />
        <div className="link_text">{title}</div>
      </div>
    </div>
  );
}

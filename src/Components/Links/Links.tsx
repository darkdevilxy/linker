import "./Links.scss";

import { useStorage, useStorageDownloadURL } from "reactfire";
import { ref } from "firebase/storage";

interface Props {
  picture: string;
  link: string;
  title: string;
}

export default function ({ picture, link, title }: Props): JSX.Element {
  const storage = useStorage();
  const ref_storage = ref(storage, picture && picture);

  const { status, data: image_url } = useStorageDownloadURL(
    ref_storage && ref_storage
  );

  function handle_click(img_url: string) {
    window.open(img_url, "_blank");
  }

  return (
    <div onClick={() => handle_click(link)} className="links_container">
      <img src={image_url && image_url} alt="" className="link_image" />
      <div className="link_text">{title}</div>
    </div>
  );
}

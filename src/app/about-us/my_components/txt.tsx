

interface Txt_types {
  have_ancor?: boolean;
  ancor_link?: string;
  txt: string;
  txt_styles: string;
}

export default function Txt({
  have_ancor,
  ancor_link,
  txt,
  txt_styles,
}: Txt_types) {
  return have_ancor ? (
    <a href={ancor_link} className={txt_styles}>
      {txt}
    </a>
  ) : (
    <div className={txt_styles}>{txt}</div>
  );
}

import React from "react";

export default function SingleColor({ list }) {
  const [alert, setAlert] = React.useState(false);
  React.useEffect(() => {
    const warnung = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => {
      clearTimeout(warnung);
    };
  }, [alert]);
  return (
    <section className="grid grid-cols-5 mt-8">
      {list.map((farbe, index) => {
        const { rgb, weight, hex } = farbe;
        const bcg = rgb.join(",");
        const hexValue = `#${hex}`;
        return (
          <article
            key={index}
            onClick={() => {
              console.log(hexValue);
              setAlert(true);
              navigator.clipboard.writeText(hexValue);
              window.alert("In die Zwischenablage kopiert");
            }}
            className={`${
              index > 10
                ? "text-white h-32 cursor-pointer"
                : "cursor-pointer text-black h-32"
            }`}
            style={{ backgroundColor: `rgb(${bcg})` }}
          >
            <p>{weight}%</p>
            <p>{hexValue}</p>
            {/* {alert && (
              <p className="text-gray-500">In die Zwischenablage kopiert</p>
            )} */}
          </article>
        );
      })}
    </section>
  );
}

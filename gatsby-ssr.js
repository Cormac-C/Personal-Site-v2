exports.onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: "en" });
  setHeadComponents([
    <meta
      name="description"
      content="Cormac Cureton's Portfolio Website"
      key="meta-description"
    />
  ]);
};

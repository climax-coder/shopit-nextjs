import showdown from 'showdown';
/**
 * @params md markdown text
 */

function Markdown2Html(md) {
  const converter = new showdown.Converter();
  return { __html: converter.makeHtml(md) };
}

export default Markdown2Html;

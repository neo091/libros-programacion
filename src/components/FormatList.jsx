
export default function FormatList({ formats = [] }) {
  return formats.map((format, index) => <small className="py-1 px-2 bg-slate-500 bg-opacity-50 inline-block m-1 rounded" key={`${format}-${index}`}>{format}</small>)
}

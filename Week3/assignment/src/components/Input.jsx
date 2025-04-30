export default function Input({ placeholder, onChange, onKeyDown }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      onKeyDown={onKeyDown}
      className="w-3/4 p-4 bg-primary/20 border-2 border-primary rounded-2xl text-sm focus:outline-0"
    />
  );
}

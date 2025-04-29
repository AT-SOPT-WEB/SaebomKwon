export default function Input({ placeholder }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="w-3/4 p-4 bg-primary/20 border-2 border-primary rounded-2xl text-sm focus:outline-0"
    />
  );
}

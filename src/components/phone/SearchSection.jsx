export default function SearchSection() {
  return (
    <section className="flex justify-center xs:w-fit">
      <form action="" className="flex items-center">
        <input
          type="text"
          placeholder="Search your favourite phone..."
          className="bg-amber-50 text-black mr-2 px-4 py-2 rounded-sm w-fit lg:w-96"
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </section>
  );
}

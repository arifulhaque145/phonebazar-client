export default function Newsletter() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };

  return (
    <section className="mt-2 text-center bg-slate-800 p-10">
      <h2 className="text-3xl font-bold mb-4">Leave a comment</h2>
      <p className="mb-4">Subscribe to our newsletter for the latest offers.</p>
      <form onSubmit={handleSubmit} action="" className="flex justify-center">
        <input
          type="text"
          placeholder="Write something..."
          name="text"
          className="input input-bordered w-full max-w-xs mb-4 block mr-4"
        />
        <button type="submit" className="btn btn-primary mr-4">
          Submit
        </button>
      </form>
    </section>
  );
}

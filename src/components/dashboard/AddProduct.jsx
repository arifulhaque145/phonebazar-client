import { useForm } from "react-hook-form";
import { usePostSingleProductData } from "../../hooks/useProducts";

export default function AddProduct() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const { mutate: postProduct } = usePostSingleProductData();

  const onSubmit = async (data) => {
    await postProduct(data);
    reset();
  };

  return (
    <div>
      <h1 className="font-thin text-3xl mb-12 text-center">Add a Product</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 bg-white rounded-md p-4 mx-auto max-w-xl"
      >
        <div>
          <input
            {...register("model", { required: true })}
            className="input input-bordered w-full capitalize"
            placeholder="Phone Model"
          />
          {errors.model && (
            <p className="text-red-500 text-sm">Model is required</p>
          )}
        </div>

        <div className="flex">
          <div className="mr-2 flex-1">
            <input
              {...register("brand", { required: true })}
              className="input input-bordered w-full capitalize"
              placeholder="Phone Brand"
            />
            {errors.brand && (
              <p className="text-red-500 text-sm">Brand is required</p>
            )}
          </div>

          <div className="flex-1">
            <input
              type="number"
              step="0.01"
              {...register("price", { required: true, min: 0 })}
              className="input input-bordered w-full"
              placeholder="Phone Price"
            />
            {errors.price && (
              <p className="text-red-500 text-sm">Valid price is required</p>
            )}
          </div>
        </div>

        <div>
          <textarea
            {...register("desc", {
              required: true,
              minLength: {
                value: 20,
                message: "Description must be at least 20 characters",
              },
            })}
            className="textarea textarea-bordered w-full capitalize"
            placeholder="Phone Description"
          />
          {errors.desc && (
            <p className="text-red-500 text-sm">{errors.desc.message}</p>
          )}
        </div>

        <div>
          <input
            type="url"
            {...register("image", { required: true })}
            className="input input-bordered w-full"
            placeholder="Phone Image Url Link"
          />
          {errors.image && (
            <p className="text-red-500 text-sm">Image URL is required</p>
          )}
        </div>

        <div className="flex flex-row-reverse">
          <button type="submit" className="btn btn-info">
            {isSubmitting ? "Loading..." : "Submit Product"}
          </button>
        </div>
      </form>
    </div>
  );
}

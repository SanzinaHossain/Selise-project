import React from "react";
import { useForm } from "react-hook-form";
const AddBookMark = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    clearErrors,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    window.localStorage.setItem(data);
  };
  return (
    <div class="h-5/6 w-3/6 mx-auto my-12 p-10 bg-green-200">
      <h1 class="text-2xl text-black">Add Bookmark</h1>
      <div class="mt-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="form-control w-full max-w-xs">
            <input
              {...register("title", {
                required: {
                  value: true,
                  message: "title is required",
                },
                maxLength: {
                  value: 30,
                  message: "No longer than 30 character",
                },
              })}
              type="text"
              placeholder="Title"
              class="input input-bordered w-full max-w-xs border-secondary"
            />
            <label class="label">
              {errors.title?.type === "required" && (
                <span className="label-text-alt text-red-700">
                  {errors.title.message}
                </span>
              )}
              {errors.title?.type === "maxLength" && (
                <span className="label-text-alt text-red-700 bold">
                  {errors.title.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <input
              type="url"
              placeholder="https://example.com"
              className="input input-bordered border-secondary w-full max-w-xs"
              {...register("url", {
                required: {
                  value: true,
                  message: "Url is Required",
                },
                pattern: {
                  value: "https://.*",
                  message: "Url Format error",
                },
              })}
            />
            <label className="label">
              {errors.url?.type === "required" && (
                <span className="label-text-alt text-red-700 bold">
                  {errors.url.message}
                </span>
              )}
              {errors.url?.type === "url" && (
                <span className="label-text-alt text-red-700 bold">
                  {errors.url.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full max-w-xs flex">
            <input
              type="text"
              placeholder="Catagory"
              className="flex input input-bordered border-secondary w-full max-w-xs"
              {...register("catagory", {
                required: {
                  value: true,
                  message: "Catagory is Required",
                },
              })}
            />
            <label className="label">
              {errors.catagory?.type === "required" && (
                <span className="label-text-alt text-red-700 bold">
                  {errors.catagory.message}
                </span>
              )}
            </label>
          </div>
          <div class="flex">
            <button
              class="btn btn-sm btn-warning"
              onClick={() => {
                clearErrors();
              }}
            >
              Clear
            </button>
            <button class="btn btn-sm btn-success ml-10">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBookMark;

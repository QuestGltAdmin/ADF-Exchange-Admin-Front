import toast from "react-hot-toast";

export const errorHandler = (action) => {
  return async (...params) => {
    try {
      const res = await action(...params);

      return res;
    } catch (error) {
      //   console.log(error);
      toast.error(error.message);
    }
  };
};

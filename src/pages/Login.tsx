import { useLoginFormik } from "@components/LoginForm/useLoginFormik";
import { Icon } from "@components/shared/Icon/Icon";

interface Props {
  onLogin: () => void;
}

export const Login = ({ onLogin }: Props) => {
  const formik = useLoginFormik({
    async onSubmit(values, formikHelpers) {
      event?.preventDefault();
      console.log(values);
      onLogin();
    },
  });
  return (
    <>
      <div className="bg-gradient-to-r from-primary to-secondary flex flex-col justify-center items-center h-screen ">
        <div className="grid justify-items-center ... ">
          <div className="w-36 h-36 bg-[#8EE4BA] rounded-full bg-center"> </div>
          <h1 className="text-center text bg-blend-color ">Welcome Borgoth!</h1>

          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col justify-center items-center"
          >
            <input
              type="password"
              id="password"
              className="rounded-xl bg-grey border-2 border-solid font-semibold border-[#667489] text-[#667489] placeholder-[#667489] px-2.5  h-6"
              placeholder="Password"
              name="password"
              required
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            {formik.errors.password && formik.touched.password && (
              <p className="text-red-600 font-semibold">
                {formik.errors.password}
              </p>
            )}

            <button
              type="submit"
              className="flex items-center justify-between  type=submit bg hover:bg-green-300 text-black font-medium py-2 px-4 rounded"
            >
              Unlock {<Icon className="w-4 mx-2" icon="arrow-right" />}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

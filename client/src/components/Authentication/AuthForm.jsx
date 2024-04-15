import classes from "./AuthForm.module.css";
import { Link, useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function AuthForm({ onSubmit }) {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode");
  const isLogin = mode === "login";
  const isSubmitting = navigation.state === "submitting";

  const navigate = useNavigate();

  // const {data, isPending, isError, error} = useMutation({
  //   mutationFn: auth,
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({queryKey: ['session']});
  //     navigate('/');
  //   }
  // })

  let errorData;

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    errorData = await onSubmit(data, mode);
  }

  return (
    <>
      <form onSubmit={handleSubmit} className={classes.form}>
        <h1>{isLogin ? "Log in" : "Create a new user"}</h1>
        {errorData && errorData.errors && (
          <ul>
            {Object.values(errorData.errors).map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}
        {errorData && errorData.message && <p>{data.message}</p>}
        {!isLogin && (
          <p>
            <label htmlFor="email">Runescape Name (RSN)</label>
            <input id="username" type="text" name="username" required />
          </p>
        )}
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        {isLogin && (
          <button className={classes.submitButton} disabled={isSubmitting} type="submit">
            {isSubmitting ? "Submitting..." : "Login"}
          </button>
        )}
        {!isLogin && (
          <button className={classes.submitButton} disabled={isSubmitting} type="submit">
            {isSubmitting ? "Submitting..." : "Sign Up"}
          </button>
        )}
        <div className={classes.actions}>
          <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
            {isLogin ? "Create new user" : "Login"}
          </Link>
        </div>
      </form>
    </>
  );
}

export default AuthForm;

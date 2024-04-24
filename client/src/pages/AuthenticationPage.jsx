import AuthForm from "../components/Authentication/AuthForm";
import ErrorBlock from "../components/UI/ErrorBlock";
import { useNavigate, useSearchParams } from "react-router-dom";

import { auth } from "../util/auth";
import { queryClient } from "../util/http";
import { useMutation } from "@tanstack/react-query";

export default function AuthenticationPage() {
  const navigate = useNavigate();

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: auth,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['session']});
      navigate("/");
    },
  });

  function handleSubmit(formData, mode) {
    mutate({ authData: formData, mode });
  }
  return (
    <>
      {isError && (
        <ErrorBlock
          title="Failed to login"
          message={error.info?.message || "Failed to login."}
        />
      )}
      <AuthForm onSubmit={handleSubmit} />
    </>
  );
}

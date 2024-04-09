import AuthForm from "../components/Authentication/AuthForm";
import ErrorBlock from "../components/UI/ErrorBlock";
import { useNavigate, useSearchParams } from "react-router-dom";

import { auth } from "../util/auth";
import { queryClient } from "../util/http";
import { useMutation } from "@tanstack/react-query";

export default function Authentication() {
  const navigate = useNavigate();

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: auth,
    onSuccess: () => {
      // queryClient.invalidateQueries({queryKey: ['user']});
      navigate('/');
    },
    // onError: () => {
    //   console.log("there was an error");
    // },
  });

  function handleSubmit(formData, mode) {
    mutate({authData: formData, mode });
  }
  return (
    <>
      <AuthForm onSubmit={handleSubmit} />
      {isError && (
        <ErrorBlock
          title="Failed to create event."
          message={error.info?.message || "Failed to create event"}
        />
      )}
    </>
  );
}

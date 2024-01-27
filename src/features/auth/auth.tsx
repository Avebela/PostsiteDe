import { useCurrentQuery } from "../../services/auth/auth.api";

export const Auth = ({ children }: { children: JSX.Element }) => {
  const { isLoading } = useCurrentQuery();
  if (isLoading) {
    return <span>Загрузка</span>;
  }
  return children;
};

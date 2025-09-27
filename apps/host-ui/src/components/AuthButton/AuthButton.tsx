import { useAuth } from "@booking-app/auth";
import { getButtonVariantNode } from "./AuthButtonHelpers";
import type { Props } from "./AuthButtonTypes";

const AuthButton = ({ variant }: Props) => {
  const { user, loading } = useAuth();
  return getButtonVariantNode(user, variant, loading);
};

export default AuthButton;

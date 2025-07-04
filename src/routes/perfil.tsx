import { createFileRoute } from "@tanstack/react-router";
import UserPanel from "../components/ui/UserPanel";

export const Route = createFileRoute("/perfil")({
  component: RouteComponent,
});

function RouteComponent() {
  return <UserPanel />;
}

import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_guest/auth/register")({
	component: () => <div>Hello /auth/register!</div>,
});

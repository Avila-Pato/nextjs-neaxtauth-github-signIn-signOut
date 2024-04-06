export { default } from "next-auth/middleware";
export const config = { matcher: ["/dashboard:path*"] };

//con el path* todas las rutas que esten dentro de dashboard estaran protegidas
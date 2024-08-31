import { createClient } from "@libsql/client";

function noCacheFetch(
    input: string | URL | globalThis.Request,
    init?: RequestInit,
): Promise<Response> {
    return fetch(input, { ...init, cache: 'no-store' });
}

export const turso = createClient({
    url: process.env.TURSO_DATABASE_URL as string,
    authToken: process.env.TURSO_AUTH_TOKEN,
    fetch: noCacheFetch
})
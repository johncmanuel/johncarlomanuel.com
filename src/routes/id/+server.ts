import { error } from '@sveltejs/kit';
// import Person from '/jsonld/person.jsonld?url';

export const GET = async (event) => {
    const r = await event.fetch("/jsonld/person.jsonld");
    if (!r.ok) {
       error(r.status, r.statusText);
    }
    const person = await r.json();

    return new Response(
        JSON.stringify(person),
        {
            headers: {
                'Content-Type': 'application/ld+json',
            },
        }
    )
}
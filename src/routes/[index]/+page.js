/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  return {
    index: params.index,
  };
}

export const RENDER_TETRO = "RENDER_TETRO";

export function renderTetro () {
  return {
    type: RENDER_TETRO,
    data: console.log('reducer test')
  }
}

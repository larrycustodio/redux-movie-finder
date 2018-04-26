/**
 * Converts movie title in kebab-lowercase form
 * @param {String} movie title 
 * @return {String} title-in-kebab-case
 */
export function setImgAlt(title) {
    return title.toLowerCase().replace('/( )/', '-');
}

/**
 * Returns image URL
 * @param {String} rel img-path provided by API
 * @param {Integer} desired width size
 * @reutn {String} tmdb image URL
 */
export function setImgURL(path, size = 200) {
    return `https://image.tmdb.org/t/p/w${size}${path}`;
}

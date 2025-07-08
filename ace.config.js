// @ts-check 


/** @type {import('@acets-team/ace').AceConfig} */
export const config = {
  apiDir: './src/api',
  appDir: './src/app',
  plugins: {
    solid: true,
    valibot: true,
  }
}


/** 
 * @typedef {Object} JWTPayload
 * @property {boolean} isAdmin
 */


/** 
 * @typedef {Object} JWTResponse
 * @property {boolean} isAdmin
 */
